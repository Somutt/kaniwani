<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Radical extends Model
{
    use HasFactory;

    protected $fillable = ['ideogram', 'level', 'meaning', 'level_id'];

    public function level(): BelongsTo
    {
        return $this->belongsTo(Level::class);
    }
}
