<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Kanji extends Model
{
    protected $fillable = [
        'ideogram', 'meaning', 'secondary_meaning',
        'onyomi', 'kunyomi', 'level', 'level_id'
    ];

    public function level(): BelongsTo
    {
        return $this->belongsTo(Level::class);
    }
}
