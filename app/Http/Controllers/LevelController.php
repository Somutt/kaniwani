<?php

namespace App\Http\Controllers;

use App\Models\Level;
use App\Models\Stage;
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
        $levels = Level::orderBy('level_number')->with('stages')->get();

        return Inertia::render('Levels/Levels', [
            'levels' => $levels
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'level_number' => 'required|min:1|integer|unique:levels',
        ]);

        Level::create([
            'level_number' => (int) $request->level_number,
        ]);

        return redirect(route('levels.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(int $level_number): Response
    {
        $level = Level::where('level_number', $level_number)->get()->first();

        //$radicals = $level->radicals()->orderBy('meaning')->get()->toArray();

        return Inertia::render('Levels/LevelPage', [
            'level_number' => $level_number,
            //'radicals' => $radicals,
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
