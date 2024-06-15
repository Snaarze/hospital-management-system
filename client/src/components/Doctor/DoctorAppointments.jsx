import DoctorAppointment from "./DoctorAppointment";

import useFetch from "../../hooks/useFetch";

const DoctorAppointments = () => {
  const { datas, isLoading, error } = useFetch(
    "http://127.0.0.1:8000/api/appointments"
  );

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 "></div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap">
      <div className="flex justify-between mx-auto w-[90%] mt-12">
        <h1 className="text-3xl">Appointment</h1>
      </div>
      {datas.map((data) => (
        <DoctorAppointment key={data.id} data={data} />
      ))}
    </div>
  );
};

export default DoctorAppointments;
