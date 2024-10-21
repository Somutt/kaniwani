<?php

namespace App\Http\Controllers;

use App\Models\Kanji;
use App\Models\Vocabulary;
use Illuminate\Http\Request;

class KanjiVocabularyController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'kanjiId' => 'required|exists:kanjis,id',
            'ideograms' => 'required|exists:vocabularies,ideograms'
        ]);

        $kanji = Kanji::find($request->kanjiId);
        $vocabulary = Vocabulary::where('ideograms', $request->ideograms)->first();

        $kanji->vocabularies()->attach($vocabulary->id);

        return redirect(route('kanji.show', $kanji->ideogram));
    }

    public function destroy(Kanji $kanji, Vocabulary $vocabulary)
    {
        $kanji->vocabularies()->detach($vocabulary->id);

        return redirect(route('kanji.show', $kanji->ideogram));
    }
}