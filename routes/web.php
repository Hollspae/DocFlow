<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserPanelController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/user-panel', [UserPanelController::class, 'index'])->name('user-panel');



// Route::get('/{any}', function () {
//     return view('welcome');
// })->where('any', '.*');
