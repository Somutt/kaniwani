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
        Schema::create('kanjis', function (Blueprint $table) {
            $table->id();
            $table->char('ideogram', 1)->unique();
            $table->string('onyomi')->nullable();
            $table->string('kunyomi')->nullable();
            $table->string('meaning', 20);
            $table->string('secondary_meanings', 60)->nullable();
            $table->integer('level');
            $table->foreignId('stage_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kanjis');
    }
};
