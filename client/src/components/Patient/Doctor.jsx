import { Link } from "react-router-dom";

const Doctor = ({ data }) => {
  const { id, first_name, last_name, specialization, licensed_number, phone } =
    data;

  return (
    <div className="w-1/2 mb-3 shadow-sm bg-white rounded-lg">
      <div className="p-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center md:w-1/4">
            <div className="text-center">
              <h5 className="mb-1">
                {first_name} {last_name}
              </h5>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="mb-3">
              <p className="mb-1">
                <strong>Specialization:</strong> {specialization}
              </p>
              <p className="mb-1">
                <strong>License Number:</strong> {licensed_number}
              </p>
              <p className="mb-1">
                <strong>Phone:</strong> {phone}
              </p>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-end gap-2 mt-3">
          <Link
            to={`book-appointment`}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
