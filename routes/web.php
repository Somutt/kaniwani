<?php

use App\Http\Controllers\LevelController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RadicalController;
use App\Http\Controllers\StageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware('auth')->name('dashboard');

Route::resource('levels', LevelController::class)
    ->only(['index', 'store', 'destroy']);

Route::get('levels/{level_number}', [LevelController::class, 'show'])->name('levels.show');

Route::post('/stage/{level_id}', [StageController::class, 'store'])->name('stage.store');

Route::resource('radicals', RadicalController::class)
    ->only(['index', 'store', 'destroy']);

Route::get('radicals/{meaning}', [RadicalController::class, 'show'])->name('radicals.show');

/* 
Route::post('stages', [StageController::class, 'store'])->name('stage.store');

Route::resource('kanji', KanjiController::class)
    ->only(['index', 'store', 'destroy']);

Route::get('kanji/{meaning}', [KanjiController::class, 'show'])->name('kanji.show');
 */

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
