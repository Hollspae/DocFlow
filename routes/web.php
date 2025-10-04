<?php

use App\Http\Controllers\AdminPanelController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserPanelController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');


Route::prefix('user-panel')->group(function () {
    Route::get('/', [UserPanelController::class, 'index'])->name('user-panel');
    Route::get('/incoming', [UserPanelController::class, 'incoming'])->name('incoming');
    Route::get('/outgoing', [UserPanelController::class, 'outgoing'])->name('outgoing');
    Route::get('/setting', [UserPanelController::class, 'setting'])->name('setting');

});
Route::prefix('admin-panel')->group(function () {
    Route::get('/', [AdminPanelController::class, 'index'])->name('admin-panel');


});

Route::get('/{any}', [UserPanelController::class, 'index'])->where('any', '.*');





