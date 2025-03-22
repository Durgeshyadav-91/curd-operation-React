import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Create = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = () => {
    console.log("Form Submited!!");
    axios.post(
      "https://67dcf7a1e00db03c406990fa.mockapi.io/curd-practic",
      { username: username, email: email },
      header
    )
    .then(()=>(navigate("/read")))
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl pb-4">Create</h1>
      <div className="w-full">
        <div className="w-full mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
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
            placeholder="Enter User Email"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )} */}
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="py-2 px-8 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
