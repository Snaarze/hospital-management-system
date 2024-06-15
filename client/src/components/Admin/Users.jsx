import { Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

import User from "./User";

const Users = () => {
  const { datas, isLoading, error } = useFetch(
    "http://127.0.0.1:8000/api/users"
  );

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 "></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between mx-auto w-[90%] mt-12">
        <h1 className="text-3xl">USERS</h1>
        <Link
          to="manage/users/add"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add User
        </Link>
      </div>
      <table className="w-full mt-12">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <User key={data.id} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
