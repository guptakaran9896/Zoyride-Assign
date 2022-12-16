import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../zoyridelogo.png"
const EditStudent = () => {
  const navigate = useNavigate();
  const [dt, setDT] = useState({});
  const { id } = useParams();

  const loadDetails = async () => {
    try {
      const user = await axios.get(`http://localhost:5000/student/edit/${id}`);
      setDT(user.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    loadDetails();
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setDT({
      ...dt,
      [name]: value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/student/edit/${id}`,
        dt
      );
      alert(res.data.status);
    } catch (error) {
      console.log("error while editing student", error);
    }
    navigate("/students");
  };

  return (
    <section className="">
      <div className="px-6 mx-auto h-screen pt-6">
        <nav className="flex justify-between">
          <a
            href="/"
            className="text-xl font-bold md:text-2xl p-2 rounded"
          >
            <img className="h-10" src={logo} alt="" />
          </a>
          <a
            href="/login"
            onClick={() => {
              window.localStorage.removeItem("isLogged");
            }}
            className="m-3 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-black rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          >
            Logout
          </a>
        </nav>
        <div className="flex flex-col items-center justify-center mx-auto pt-6">
          <h1 className="text-3xl font-bold pb-6 text-black">Edit Student</h1>
          <div className="w-full rounded-lg shadow border max-w-md bg-blue-200 border-blue-100">
            <div className="p-6 space-y-6">
              <form className="space-y-6" action="post">
                <div className="flex justify-between">
                  <div className="w-full mr-4">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Student's Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={dt.name}
                      onChange={changeHandler}
                      id="name"
                      className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="w-full ml-4">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      value={dt.fname}
                      onChange={changeHandler}
                      id="email"
                      className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      required=""
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-full mr-4">
                    <label
                      for="address"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={dt.roll}
                      onChange={changeHandler}
                      id="text"
                      className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 border-gray-600  text-black focus:ring-blue-500 focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="w-full ml-4">
                    <label
                      for="city"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={dt.classs}
                      onChange={changeHandler}
                      id="city"
                      className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="classs"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Class
                  </label>
                  <input
                    type="number"
                    name="classs"
                    id="classs"
                    value={dt.phnum}
                    onChange={changeHandler}
                    className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="section"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Section
                  </label>
                  <input
                    type="text"
                    name="section"
                    id="section"
                    value={dt.addresss}
                    onChange={changeHandler}
                    className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handleSave}
                    type="submit"
                    className="m-3 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-black rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  >
                    Save
                  </button>
                  <a
                    href="/students"
                    className="m-3 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-black rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  >
                    Go back
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditStudent;
