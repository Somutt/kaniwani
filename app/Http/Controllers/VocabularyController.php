<?php

namespace App\Http\Controllers;

use App\Models\Stage;
use App\Models\Vocabulary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VocabularyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $levels_used = [];

        $stages = Stage::orderBy('stage_number')->get();
        $vocabularies = Vocabulary::orderBy('meaning')->get();
        $aux = Vocabulary::all()->groupBy('level')->toArray();

        foreach ($aux as $level => $vs) {
            $levels_used[] = $level;
        }

        sort($levels_used);

        return Inertia::render('Vocabularies/Vocabularies', [
            'stages' => $stages,
            'vocabularies' => $vocabularies,
            'levels_used' => $levels_used
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'ideograms' => 'required|string|min:1|unique:vocabularies',
            'meaning' => 'required|string|min:1',
            'readings' => 'required|string|min:1',
            'stage' => 'required|min:1|exists:stages,stage_number'
        ]);

        $stage = Stage::where('stage_number', $request->stage)->first();

        $stage_id = $stage->id;
        $level_number = $stage->level->level_number;

        Vocabulary::create([
            'ideograms' => $request->ideograms,
            'meaning' => $request->meaning,
            'secondary_meanings' => $request->secondary_meanings,
            'readings' => $request->readings,
            'level' => $level_number,
            'stage_id' => $stage_id
        ]);

        return redirect(route('vocabularies.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $ideograms)
    {
        $vocabulary = Vocabulary::where('ideograms', $ideograms)->with('kanjis:id,ideogram,meaning,onyomi,kunyomi')->first();
        $kanjis = $vocabulary->kanjis;

        return Inertia::render('Vocabularies/VocabularyPage', [
            'vocabulary' => $vocabulary,
            'kanjis' => $kanjis
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vocabulary $vocabulary)
    {
        $request->meaning ?
            $validated = $request->validate([
                'meaning' => 'required|string|min:1',
                'secondary_meanings' => ''
            ])
        :
            $validated = $request->validate([
                'readings' => 'required|string|min:1'
            ]);

        $vocabulary->update($validated);

        return redirect(route('vocabularies.show', $vocabulary->ideograms));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vocabulary $vocabulary)
    {
        $vocabulary->delete();

        return redirect(route('vocabularies.index'));
    }
}
