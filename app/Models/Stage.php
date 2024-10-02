<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stage extends Model
{
    use HasFactory;

    protected $fillable = ['stage_number'];

    public function level()
    {
        return $this->belongsTo(Level::class);
    }

    public function radicals()
    {
        return $this->hasMany(Radical::class);
    }
}
