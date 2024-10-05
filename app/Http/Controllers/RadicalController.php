<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RadicalController extends Controller
{
    public function index()
    {
        return Inertia::render('Radicals/Radicals');
    }
}
