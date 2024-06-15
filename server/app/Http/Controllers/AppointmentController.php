<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller {

    public function getAppointments() {
        $appointments = Appointment::all();
        return response()->json($appointments);
    }

    public function getAppointment($id) {
        $appointment = Appointment::find($id);
        return response()->json($appointment);
    }

    public function registerAppointment(Request $request) {
        $validatedData = $request->validate([
            'patient_id' => 'required|integer',
            'doctor_id' => 'required|integer',
            'appointment_date' => 'required|date',
            'status' => 'required|string',
            'reason' => 'required|string',
        ]);

        $appointment = Appointment::create($validatedData);
        return response()->json(['appointment' => $appointment], 201);
    }

    public function updateAppointment(Request $request, $id) {
        $validatedData = $request->validate([
            'patient_id' => 'required|integer',
            'doctor_id' => 'required|integer',
            'appointment_date' => 'required|date',
            'status' => 'required|string',
            'reason' => 'required|string',
        ]);

        $patient = Appointment::find($id);
        $patient->update($validatedData);

        return response()->json($patient, 200);
    }

    public function deleteAppointment($id) {
        $appointment = Appointment::find($id);
        $appointment->delete();

        return response()->json($appointment, 200);
    }
}