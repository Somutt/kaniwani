<?php

use App\Http\Controllers\LevelController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
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

/* Route::prefix('/admin')->group(function () {
    Route::get('/edit', function () { return Inertia::render('Admin/Edit', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        ]);
    })->name('admin.edit');
})->middleware('auth'); */

Route::resource('levels', LevelController::class)
    ->only(['index', 'store', 'destroy']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
