// import { useState } from "react";

// export default function form() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     let isValid = true;

//     if (!formData.username) {
//       newErrors.username = "Username is required";
//       isValid = false;
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is not valid";
//       isValid = false;
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//       isValid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//       isValid = false;
//     }
//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form submitted successfully!", formData);
//       alert("Form submitted successfully!")
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-500">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-black text-center mb-6">Checking Validation</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Enter User Name"
//               value={formData.username}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.username && (
//               <p className="text-red-500 text-sm mt-1">{errors.username}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter User Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter User Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-500"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

