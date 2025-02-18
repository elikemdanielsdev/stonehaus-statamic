<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::get('/', [HomeController::class, 'show']);
