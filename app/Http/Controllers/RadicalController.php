<?php

namespace App\Http\Controllers;

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

        redirect(route('radicals.index'));
    }

    public function show(string $meaning)
    {
        dd($meaning);
    }
}
