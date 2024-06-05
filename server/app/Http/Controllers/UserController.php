<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller {

    public function registerUser(Request $request) {
        $validatedUser = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required'],
            'role' => ['required']
        ]);

        User::create([
            'name' => $validatedUser['name'],
            'email' => $validatedUser['email'],
            'password' => Hash::make($validatedUser['password']),
            'role' => $validatedUser['role']
        ]);

        return response()->json([
            'status' => true,
            'message' => 'User has been registered',
        ], 200);
    }

    public function loginUser(Request $request) {
        $validatedUser = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = User::where('email', $validatedUser['email'])->first();

        if (!($user && password_verify($validatedUser['password'], $user->password))) {
            return response()->json([
                'status' => false,
                'message' => 'email or password did not match'
            ], 401);
        }

        return response()->json([
            'status' => true,
            'message' => 'User Logged In Successfully',
            'user' => $user
        ]);
    }
}
