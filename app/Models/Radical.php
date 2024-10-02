<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Radical extends Model
{
    use HasFactory;

    protected $fillable = ['ideogram', 'meaning', 'level', 'stage_id'];

    public function stages()
    {
        return $this->hasOne(Stage::class);
    }
}
