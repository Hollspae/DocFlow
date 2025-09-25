<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\AuthController;
Route::apiResource('document', DocumentController::class);
Route::apiResource('auth', AuthController::class);
