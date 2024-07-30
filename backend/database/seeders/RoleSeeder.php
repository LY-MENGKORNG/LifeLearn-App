<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['role' =>  ['name' => 'admin'], 'permission' =>  ['admin access']],
            ['role' =>  ['name' => 'user'], 'permission' =>  'user access'],
            ['role' =>  ['name' => 'principal'], 'permission' =>  'user access'],
            ['role' =>  ['name' => 'teacher'], 'permission' =>  'user access'],
            ['role' =>  ['name' => 'student'], 'permission' =>  'user access'],
        ];
        foreach ($roles as $role) {
            Role::create($role['role'])->syncPermissions($role['permission']);
        }
    }
}
