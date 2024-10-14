<?php

namespace App\Http\Controllers;

use App\Models\Kanji;
use App\Models\Radical;
use App\Models\Stage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RadicalController extends Controller
{
    public function index()
    {
        $levels_used = [];
        
        $stages = Stage::orderBy('stage_number')->get(); // Retrieve all the stages in crescent order
        $radicals = Radical::orderBy('meaning')->get(); // Retrieve all radicals in alphabetical order
        $aux = Radical::all()->groupBy('level')->toArray(); // Retrive all radicals grouped by levels that are used

        // Populate the levels_used array with the level numbers that have radicals in it
        foreach ($aux as $level => $rs) {
            $levels_used[] = $level;
        }

        sort($levels_used);

        return Inertia::render('Radicals/Radicals', [
            'stages' => $stages,
            'radicals' => $radicals,
            'levels_used' => $levels_used
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'ideogram' => 'required|string|min:1|unique:radicals',
            'stage' => 'required|min:1|exists:stages,stage_number',
            'meaning' => 'required|string|min:1'
        ]);

        $stage = Stage::where('stage_number', $request->stage)->first();

        $stage_id = $stage->id;
        $level_number = $stage->level->level_number;
    
        Radical::create([
            'ideogram' => $request->ideogram,
            'meaning' => $request->meaning,
            'level' => $level_number,
            'stage_id' => $stage_id
        ]);

        return redirect(route('radicals.index'));
    }

    public function show(string $meaning)
    {
        $radical = Radical::where('meaning', $meaning)->first();
        $kanjis = Kanji::orderBy('id')->get();

        return Inertia::render('Radicals/RadicalPage', [
            'radical' => $radical,
            'kanjis' => $kanjis
        ]);
    }

    public function update(Request $request, Radical $radical)
    {
        $validated = $request->validate([
            'meaning' => 'required|string|min:1'
        ]);

        $radical->update($validated);

        return redirect(route('radicals.show', $radical->meaning));
    }

    public function destroy(Radical $radical)
    {
        $radical->delete();

        return redirect(route('radicals.index'));
    }
}
