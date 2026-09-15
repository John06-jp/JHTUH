<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Learner dashboard shown after "Student Login".
     */
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        return Inertia::render('pages/Dashboard', [
            'applications' => Application::query()
                ->where(function ($query) use ($user) {
                    $query->where('user_id', $user->id)->orWhere('email', $user->email);
                })
                ->latest()
                ->limit(20)
                ->get(['id', 'course_title', 'status', 'created_at'])
                ->map(fn (Application $application) => [
                    'id' => $application->id,
                    'course_title' => $application->course_title,
                    'status' => $application->status,
                    'submitted_at' => $application->created_at?->toFormattedDateString(),
                ])
                ->all(),
        ]);
    }
}