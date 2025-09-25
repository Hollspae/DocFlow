<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentController;

Route::apiResource('document', DocumentController::class);
