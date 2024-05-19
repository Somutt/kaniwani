<?php

namespace App\Http\Controllers;

use App\Models\Level;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Levels/Levels', [
            'levels' => Level::orderBy('lesson_level')->where('lesson_level', '>', 0)->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'lesson_level' => 'required|min:1|integer|unique:levels',
        ]);

        Level::create([
            'lesson_level' => (int) $request->lesson_level,
        ]);

        return redirect(route('levels.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(int $lesson_level): Response
    {
        $level = Level::where('lesson_level', $lesson_level)->get()->first();

        $radicals = $level->radicals()->get();

        return Inertia::render('Levels/LevelPage', [
            'lesson_level' => $lesson_level,
            'radicals' => $radicals,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Level $level)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Level $level): RedirectResponse
    {
        $level->delete();

        return redirect(route('levels.index'));
    }
}
