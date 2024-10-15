<?php

namespace App\Http\Controllers;

use App\Models\Kanji;
use App\Models\Radical;
use App\Models\Stage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KanjiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $levels_used = [];
        
        $stages = Stage::orderBy('stage_number')->get(); // Retrieve all the stages in crescent order
        $kanjis = Kanji::orderBy('meaning')->get(); // Retrieve all kanjis in alphabetical order
        $aux = Kanji::all()->groupBy('level')->toArray(); // Retrive all kanjis grouped by levels that are used

        // Populate the levels_used array with the level numbers that have kanjis in it
        foreach ($aux as $level => $ks) {
            $levels_used[] = $level;
        }

        sort($levels_used);

        return Inertia::render('Kanji/Kanji', [
            'stages' => $stages,
            'kanjis' => $kanjis,
            'levels_used' => $levels_used
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'ideogram' => 'required|string|min:1|unique:kanjis',
            'meaning' => 'required|string|min:1',
            'stage' => 'required|min:1|exists:stages,stage_number',
        ]);

        $stage = Stage::where('stage_number', $request->stage)->first();

        $stage_id = $stage->id;
        $level_number = $stage->level->level_number;

        Kanji::create([
            'ideogram' => $request->ideogram,
            'onyomi' => $request->onyomi,
            'kunyomi' => $request->kunyomi,
            'meaning' => $request->meaning,
            'secondary_meanings' => $request->secondary_meanings,
            'level' => $level_number,
            'stage_id' => $stage_id
        ]);

        return redirect(route('kanji.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $ideogram)
    {
        $kanji = Kanji::where('ideogram', $ideogram)->with('radicals:id,ideogram,meaning')->first();
        $radicals = Radical::orderBy('level')->get();
        
        $kanji_radicals = $kanji->radicals;

        return Inertia::render('Kanji/KanjiPage', [
            'kanji' => $kanji,
            'radicals' => $radicals,
            'kanjiRadicals' => $kanji_radicals,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kanji $kanji)
    {
        dd($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kanji $kanji)
    {
        $kanji->delete();

        return redirect(route('kanji.index'));
    }
}
