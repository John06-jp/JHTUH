<?php

namespace Tests\Feature;

use App\Models\Application;
use App\Models\User;
use Database\Seeders\ContentSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

/**
 * Covers the Inertia pages and the two public form submissions after the
 * content moved from JavaScript modules into the database.
 */
class ContentPagesTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->seed(ContentSeeder::class);
    }

    public function test_home_page_renders_database_backed_content(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('pages/Home')
                ->has('journeys', 52)
                ->has('categories', 8)
                ->has('catalog', 27)
            );
    }

    public function test_program_page_uses_the_requested_program_key(): void
    {
        $this->get('/program?p=civil')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('pages/ProgramPage')
                ->where('programKey', 'civil')
                ->where('program.name', 'Civil Engineering')
                ->has('program.courses')
            );
    }

    public function test_unknown_program_key_falls_back_to_the_default_program(): void
    {
        $this->get('/program?p=does-not-exist')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->where('programKey', 'aiml'));
    }

    public function test_cse_courses_page_renders_the_cse_program(): void
    {
        $this->get('/cse-courses')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('pages/CseCourses')
                ->where('program.name', 'Computer Science Engineering')
                ->has('journeys', 52)
            );
    }

    public function test_catalog_page_honours_the_category_query_parameter(): void
    {
        $this->get('/skillsoft-catalog?cat=AI')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('pages/SkillsoftCatalog')
                ->where('cat', 'AI')
                ->has('tracks', 27)
                ->has('domains', 38)
            );

        $this->get('/skillsoft-catalog?cat=NotACategory')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->where('cat', 'All'));
    }

    public function test_application_is_stored_against_the_program(): void
    {
        $this->post('/applications', [
            'name' => 'Test Learner',
            'email' => 'learner@area51.ph',
            'course_title' => 'Machine Learning',
            'program_key' => 'aiml',
        ])
            ->assertRedirect()
            ->assertSessionHas('success');

        $application = Application::query()->firstOrFail();

        $this->assertSame('Machine Learning', $application->course_title);
        $this->assertSame('aiml', $application->program->key);
        $this->assertSame('submitted', $application->status);
    }

    public function test_application_requires_name_email_and_course(): void
    {
        $this->post('/applications', ['email' => 'not-an-email'])
            ->assertSessionHasErrors(['name', 'email', 'course_title']);

        $this->assertSame(0, Application::query()->count());
    }

    public function test_dashboard_requires_authentication(): void
    {
        $this->get('/dashboard')->assertRedirect('/login');
    }

    public function test_authenticated_learner_sees_their_applications(): void
    {
        $user = User::factory()->create([
            'email' => 'learner@area51.ph',
            'role' => 'student',
        ]);

        Application::create([
            'user_id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'course_title' => 'DevOps',
            'status' => 'submitted',
        ]);

        $this->actingAs($user)
            ->get('/dashboard')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('pages/Dashboard')
                ->has('applications', 1)
                ->where('applications.0.course_title', 'DevOps')
            );
    }

    public function test_learner_can_log_in_and_is_sent_to_the_dashboard(): void
    {
        $user = User::factory()->create([
            'email' => 'learner@area51.ph',
            'password' => 'password',
        ]);

        $this->post('/login', [
            'email' => 'learner@area51.ph',
            'password' => 'password',
        ])->assertRedirect('/dashboard');

        $this->assertAuthenticatedAs($user);
    }

    public function test_registration_creates_a_learner_with_a_role(): void
    {
        $this->post('/register', [
            'name' => 'New Learner',
            'email' => 'new@area51.ph',
            'role' => 'faculty',
            'password' => 'password',
            'password_confirmation' => 'password',
        ])->assertRedirect();

        $user = User::query()->where('email', 'new@area51.ph')->firstOrFail();

        $this->assertSame('faculty', $user->role);
        $this->assertAuthenticatedAs($user);
    }
}