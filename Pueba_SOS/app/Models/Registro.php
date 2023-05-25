<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    protected $table = 'registros'; // Nombre de la tabla en la base de datos
    
    protected $fillable = [
        'nombre',
        'apellido',
        'email',
        'telefono',
        'programa',
    ];

    // Aquí puedes definir relaciones con otros modelos, si es necesario
    
}
