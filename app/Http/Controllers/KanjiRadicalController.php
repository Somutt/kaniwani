<?php

namespace App\Http\Controllers;

use App\Models\Kanji;
use App\Models\Radical;
use Illuminate\Http\Request;

class KanjiRadicalController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'kanjiId' => 'required|exists:kanjis,id',
            'ideogram' => 'required|exists:radicals,ideogram'
        ]);

        $kanji = Kanji::find($request->kanjiId);
        $radical = Radical::where('ideogram', $request->ideogram)->first();

        $kanji->radicals()->attach($radical->id);

        return redirect(route('kanji.show', $kanji->ideogram));
    }

    public function destroy(Kanji $kanji, Radical $radical)
    {
        $kanji->radicals()->detach($radical->id);

        return redirect(route('kanji.show', $kanji->ideogram));
    }
}
