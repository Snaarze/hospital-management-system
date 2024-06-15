const DoctorAppointment = ({ data }) => {
  const { patient_id, appointment_date, reason, status } = data;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full mb-3 shadow-sm">
      <div className="bg-white rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-3">
            <p className="text-lg font-semibold">
              <strong>Patient ID:</strong> {patient_id}
            </p>
            <p className="text-sm">
              <strong>Appointment Date:</strong> {appointment_date}
            </p>
          </div>
          <div className="mb-3">
            <p className="text-sm">
              <strong>Status:</strong> {status}
            </p>
            <p className="text-sm">
              <strong>Reason:</strong> {reason}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointment;
