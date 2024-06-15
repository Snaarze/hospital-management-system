import { Link } from "react-router-dom";

import edit from "../../assets/edit.png";

const ReceptionistPatient = ({ data }) => {
  const {
    id,
    first_name,
    last_name,
    date_of_birth,
    gender,
    phone,
    emergency_contact,
    medical_history,
  } = data;

  return (
    <>
      <tr>
        <td className="p-4 text-center">{first_name}</td>
        <td className="p-4 text-center">{last_name}</td>
        <td className="p-4 text-center">{date_of_birth}</td>
        <td className="p-4 text-center">{gender}</td>
        <td className="p-4 text-center">{phone}</td>
        <td className="p-4 text-center">{emergency_contact}</td>
        <td className="p-4 text-center">{medical_history}</td>
        <td className="flex gap-4 justify-center p-4">
          <Link to={`manage/patients/edit/${id}`}>
            <img src={edit} alt="Edit" className="w-6" />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ReceptionistPatient;
