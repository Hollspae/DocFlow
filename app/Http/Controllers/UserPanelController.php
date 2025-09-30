<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserPanelController extends Controller
{
    public function index()
    {
        return view('user-panel');

    }
    public function incoming()
    {
        return view('user-panel');

    }
     public function outgoing()
    {
        return view('user-panel');

    }
     public function setting()
    {
        return view('user-panel');

    }
}
