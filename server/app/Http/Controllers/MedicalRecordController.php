<php?

namespace App\Http\Controllers;

use App\Models\MedicalRecord;
use Illuminate\Http\Request;

class MedicalRecordController extends Controller
{
    public function index()
    {
        return MedicalRecord::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'visit_date' => 'required|date',
            'diagnosis' => 'required|string',
            'treatment' => 'required|string',
            'notes' => 'nullable|string',
        ]);

        $medicalRecord = MedicalRecord::create($validated);

        return response()->json($medicalRecord, 201);
    }

    public function show($id)
    {
        return MedicalRecord::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'patient_id' => 'exists:patients,id',
            'doctor_id' => 'exists:doctors,id',
            'visit_date' => 'date',
            'diagnosis' => 'string',
            'treatment' => 'string',
            'notes' => 'nullable|string',
        ]);

        $medicalRecord = MedicalRecord::findOrFail($id);
        $medicalRecord->update($validated);

        return response()->json($medicalRecord, 200);
    }

    public function destroy($id)
    {
        $medicalRecord = MedicalRecord::findOrFail($id);
        $medicalRecord->delete();

        return response()->json(null, 204);
    }
}
