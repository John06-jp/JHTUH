<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Skillsoft partner content (programs, catalog tracks, journeys, domains).
        $this->call(ContentSeeder::class);

        // Demo learner account so the login flow can be tried immediately.
        User::query()->updateOrCreate(
            ['email' => 'student@area51.ph'],
            [
                'name' => 'Area 51 Student',
                'password' => 'password',
                'role' => 'student',
                'student_roll_no' => 'A51-DEMO-001',
            ]
        );
    }
}
