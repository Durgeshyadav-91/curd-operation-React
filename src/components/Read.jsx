import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://67dcf7a1e00db03c406990fa.mockapi.io/curd-practic")
      .then((res) => {
        setData(res.data);
      });
  }

  const setToLocalStroage = (id, username, email) => {
    localStorage.setItem("id", id)
    localStorage.setItem("username", username)
    localStorage.setItem("email", email)
  }
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://67dcf7a1e00db03c406990fa.mockapi.io/curd-practic/${id}`)
      .then(() => getData());
  };

  return (
    <div className="p-6">
      <div className="flex justify-between py-4">
      <h1 className="text-2xl font-semibold text-white">Read Operation</h1>
      <a
        href="/"
        className="flex justify-center items-center px-6 py-2 bg-blue-500 text-white rounded-md"
      >
        Create
      </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-300 px-6 py-3 text-left">Id</th>
              <th className="border border-gray-300 px-6 py-3 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          {data.map((item, idx) => (
            <tbody key={idx}>
              <tr className="bg-gray-900 text-white">
                <td className="border border-gray-300 px-6 py-3">{item.id}</td>
                <td className="border border-gray-300 px-6 py-3">
                  {item.username}
                </td>
                <td className="border border-gray-300 px-6 py-3">
                  {item.email}
                </td>
                <td className="border border-gray-300 px-6 py-3 text-center">
                  <Link to={"/update"}>
                    <button onClick={()=>setToLocalStroage(item.id, item.username, item.email)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-4">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
