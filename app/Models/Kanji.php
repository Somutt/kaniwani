<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kanji extends Model
{
    use HasFactory;

    protected $fillable = ['onyomi', 'kunyomi', 'meaning', 'ideogram', 'secondary_meanings', 'level', 'stage_id'];

    public function stage()
    {
        return $this->hasOne(Stage::class);
    }

    public function radicals()
    {
        return $this->belongsToMany(Radical::class);
    }
}
