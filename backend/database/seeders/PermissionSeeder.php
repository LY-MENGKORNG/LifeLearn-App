<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            ['name' => 'user access'],
            ['name' => 'admin access']
        ];
        foreach ($permissions as $permission) {
            Permission::create($permission );
        }
    }
}
