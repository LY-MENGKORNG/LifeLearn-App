<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\Users\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index(Request $request)
    {
        // Get the authenticated user
        $user =  Auth::user()->load('roles', 'permissions');

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not authenticated'
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Your information',
            'data' =>  new UserResource($user),
        ]);
    }

    public function register(Request $request)
    {
        $user = User::createOrUpdate($request);
        $user->assignRole('user');
        $user->givePermissionTo('user access');
        $token = $user ? $user->createToken('auth_token')->plainTextToken : null;

        return $token ? response()->json([
            'success' => true,
            'data'          => $user,
            'access_token'  => $token,
            'token_type'    => 'Bearer',
        ], 200) : response()->json([
            'success' => false,
            'message' => 'Something went wrong',
        ], 200);
    }

    public function login(Request $request): JsonResponse
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message'       => 'Login success',
            'access_token'  => $token,
            'token_type'    => 'Bearer'
        ]);
    }
}
