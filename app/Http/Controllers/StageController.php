<?php

namespace App\Http\Controllers;

use App\Models\Level;
use App\Models\Stage;
use Illuminate\Http\Request;

class StageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(int $level_id)
    {
        $stage_limit = 6; // Max number of stages per level is 7
        $level = Level::where('id', $level_id)->first(); // Level where the stage will be stored
        $level_stages = $level->stages->count(); // Retrieve the number os stages of the level

        if ($level_stages <= $stage_limit) {
            Stage::create([
                'stage_number' => $level_stages + ($level->level_number * 10 + 1), // The result is level_number and stage concatenated (11, 21, 22, etc.)
                'level_id' => $level->id
            ]);
        }

        redirect(route('levels.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stage $stage)
    {

    }
}
