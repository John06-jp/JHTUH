<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AspireJourney extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'category',
        'description',
        'image',
        'track_id',
        'sort',
    ];

    public function track(): BelongsTo
    {
        return $this->belongsTo(SkillsoftTrack::class, 'track_id');
    }
}