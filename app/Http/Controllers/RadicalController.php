<?php

namespace App\Http\Controllers;

use App\Models\Level;
use App\Models\Radical;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RadicalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $keys = [];
        $radicals = Radical::all()->groupBy('level_id')->toArray();

        foreach($radicals as $key => $item) {
            array_push($keys, Level::where('id', $key)->get()->first()->lesson_level);
        }

        sort($keys);
        //$new_radicals = array_combine($keys, $radicals);

        return Inertia::render('Radicals/Radicals', [
            'radicals' => Radical::all(),
            'keys' => $keys,
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'ideogram' => 'required|string|min:1|unique:radicals',
            'level' => 'required|integer|min:1|exists:levels,lesson_level',
            'meaning' => 'required|string|min:1',
        ]);

        $level_id = Level::where('lesson_level', $request->level)->get()->first()->id;

        Radical::create([
            'ideogram' => $request->ideogram,
            'level' => $request->level,
            'meaning' => $request->meaning,
            'level_id' => $level_id,
        ]);

        return redirect(route('radicals.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Radical $radical)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Radical $radical)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Radical $radical)
    {
        //
    }
}
