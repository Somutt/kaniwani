<?php

use App\Http\Controllers\KanjiController;
use App\Http\Controllers\KanjiRadicalController;
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

//levels routes
Route::resource('levels', LevelController::class)
    ->only(['index', 'store', 'destroy']);

Route::get('levels/{level_number}', [LevelController::class, 'show'])->name('levels.show');

//stages routes
Route::post('/stage/{level_id}', [StageController::class, 'store'])->name('stage.store');

//radicals routes
Route::resource('radicals', RadicalController::class)
    ->only(['index', 'store', 'destroy', 'update']);

Route::get('radicals/{meaning}', [RadicalController::class, 'show'])->name('radicals.show');

//kanji routes
Route::resource('kanji', KanjiController::class)
    ->only(['index', 'store', 'destroy', 'update']);

Route::get('kanji/{ideogram}', [KanjiController::class, 'show'])->name('kanji.show');

//kanji-radical routes
Route::post('/kanji_radical', [KanjiRadicalController::class, 'store'])->name('kanji_radical.store');

Route::delete('/kanji_radical/{kanji}/{radical}', [KanjiRadicalController::class, 'destroy'])->name('kanji_radical.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
