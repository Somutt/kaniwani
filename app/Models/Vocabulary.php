<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vocabulary extends Model
{
    use HasFactory;

    protected $fillable = ['ideograms', 'meaning', 'secondary_meanings', 'readings', 'level', 'stage_id'];

    public function stage()
    {
        return $this->hasOne(Stage::class);
    }

    public function kanjis()
    {
        return $this->belongsToMany(Kanji::class);
    }
}
