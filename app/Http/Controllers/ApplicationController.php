<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreApplicationRequest;
use App\Models\Application;
use App\Models\Program;
use Illuminate\Http\RedirectResponse;

class ApplicationController extends Controller
{
    /**
     * Store a course application submitted from the program catalog.
     */
    public function store(StoreApplicationRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $program = Program::findByKey($data['program_key'] ?? null);

        Application::create([
            'user_id' => $request->user()?->id,
            'name' => $data['name'],
            'email' => $data['email'],
            'course_title' => $data['course_title'],
            'program_id' => $program?->id,
            'source_page' => $request->headers->has('referer')
                ? (string) parse_url((string) $request->headers->get('referer'), PHP_URL_PATH)
                : null,
            'status' => 'submitted',
        ]);

        return back()->with('success', 'Application submitted! Our team will contact you by email.');
    }
}