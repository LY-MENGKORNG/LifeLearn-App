<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'user' => [
                    'first_name' => 'Mengkorng',
                    'last_name' => 'Ly',
                    'email' => 'mengkorng@gmail.com',
                    'password' => 'password',
                    'phone' => '023423432',
                    'profile' => 'photo_2024-05-03_20-11-08.jpg'
                ],
                'role' => 'admin',
            ]
        ];

        foreach ($users as $user) {
            User::create($user['user'])->assignRole($user['role']);
        }
    }
}
