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
        Schema::create('kanji', function (Blueprint $table) {
            $table->id();
            $table->string('ideogram')->unique();
            $table->string('meaning');
            $table->string('secondary_meanings')->nullable();
            $table->string('onyomi')->nullable();
            $table->string('kunyomi')->nullable();
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
        Schema::dropIfExists('kanji');
    }
};
