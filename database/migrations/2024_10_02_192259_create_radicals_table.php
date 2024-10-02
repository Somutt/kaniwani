<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('radicals', function (Blueprint $table) {
            $table->id();
            $table->char('ideogram', 1)->unique();
            $table->string('meaning', 20)->unique();
            $table->integer('level');
            $table->foreignId('stage_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('radicals');
    }
};
