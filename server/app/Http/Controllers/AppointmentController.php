<?php

// app/Http/Controllers/AppointmentController.php
namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index()
    {
        return Appointment::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'appointment_date' => 'required|date',
            'status' => 'required|string',
            'reason' => 'required|string',
        ]);

        $appointment = Appointment::create($validated);

        return response()->json($appointment, 201);
    }

    public function show($id)
    {
        return Appointment::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'patient_id' => 'exists:patients,id',
            'doctor_id' => 'exists:doctors,id',
            'appointment_date' => 'date',
            'status' => 'string',
            'reason' => 'string',
        ]);

        $appointment = Appointment::findOrFail($id);
        $appointment->update($validated);

        return response()->json($appointment, 200);
    }

    public function destroy($id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->delete();

        return response()->json(null, 204);
    }
}