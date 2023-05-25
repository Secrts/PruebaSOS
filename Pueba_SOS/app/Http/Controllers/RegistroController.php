<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registro;

class RegistroController extends Controller
{
    public function registrar(Request $request)
    {
        $registro = new Registro();
        $registro->nombre = $request->input('nombre');
        $registro->apellido = $request->input('apellido');
        $registro->email = $request->input('email');
        $registro->telefono = $request->input('telefono');
        $registro->programa = $request->input('programa');
        $registro->save();

        return response()->json(['message' => 'Registro exitoso'], 200);
    }

    public function obtenerRegistros()
    {
        $registros = Registro::all();
        return response()->json($registros, 200);
    }
}
