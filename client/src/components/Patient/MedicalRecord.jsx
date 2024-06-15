const MedicalRecord = ({ data }) => {
  const { visit_date, diagnosis, treatment, notes } = data;

  return (
    <div className="mb-3 shadow-sm bg-white rounded-lg border-2 mx-auto  mt-12 w-[90%] ">
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="mb-3 md:w-1/2">
            <p className="mb-1">
              <strong>Visit Date:</strong> {visit_date}
            </p>
          </div>
          <div className="mb-3 md:w-1/2">
            <p className="mb-1">
              <strong>Diagnosis:</strong> {diagnosis}
            </p>
            <p className="mb-1">
              <strong>Treatment:</strong> {treatment}
            </p>
            <p className="mb-1">
              <strong>Notes:</strong> {notes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;
