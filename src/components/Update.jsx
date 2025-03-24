import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const navigate = useNavigate();
  const [id, setId] = useState(0)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"))
    setUsername(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = () => {
    axios.put(`https://67dcf7a1e00db03c406990fa.mockapi.io/curd-practic/${id}`,
      {
        username: username,
        email: email,
      }
    ).then(()=>{
      navigate("/read")
    })
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl pb-4">Update</h1>
      <div className="w-full">
        <div className="w-full mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Enter User Name"
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username}</p>
        )} */}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter User Email"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )} */}
        </div>

        <div className="flex gap-4">
        <button
          type="submit"
          onClick={handleUpdate}
          className="py-2 px-8 bg-blue-500 text-white font-semibold rounded-md"
        >
          Update
        </button>
        <a href={"/read"}
          className="py-2 px-8 bg-red-500 text-white font-semibold rounded-md"
        >
          Cancel
        </a> 
        </div>
      </div>
    </div>
  );
}
