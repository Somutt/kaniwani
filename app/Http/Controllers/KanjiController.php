<?php

namespace App\Http\Controllers;

use App\Models\Kanji;
use App\Models\Level;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class KanjiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $keys = [];
        $kanji = Kanji::where('id', '!=', 0)->orderBy('meaning')->get();
        $kanji_keyed = Kanji::all()->groupBy('level_id')->toArray();

        foreach($kanji_keyed as $key => $item) {
            array_push($keys, Level::where('id', $key)->get()->first()->lesson_level);
        }

        sort($keys);

        return Inertia::render('Kanji/Kanji', [
            'kanji' => $kanji,
            'keys' => $keys,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'ideogram' => 'required|string|min:1|unique:kanjis',
            'level' => 'required|integer|min:1|exists:levels,lesson_level',
            'meaning' => 'required|string|min:1',
            'secondary_meaning' => 'string',
        ]);

        $level_id = Level::where('lesson_level', $request->level)->get()->first()->id;

        Kanji::create([
            'ideogram' => $request->ideogram,
            'level' => $request->level,
            'meaning' => $request->meaning,
            'secondary_meaning' => $request->secondary_meaning,
            'onyomi' => $request->onyomi,
            'kunyomi' => $request->kunyomi,
            'level_id' => $level_id,
        ]);

        return redirect(route('kanji.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Kanji $kanji)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kanji $kanji)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kanji $kanji)
    {
        //
    }
}
