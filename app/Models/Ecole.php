<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ecole extends Model
{
    use HasFactory;
    protected $fillable = [
        "nom_fr",
        "nom_ar",
        "adresse_fr",
        "adresse_ar",
        "telephone",
        "province_id",
        "region_id",
        
    ];
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('Y-m-d H:i:s');
    }

    public function region()
    {
        return $this->belongsTo(Region::class);
    }
}
