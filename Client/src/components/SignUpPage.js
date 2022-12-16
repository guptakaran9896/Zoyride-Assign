import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./zoyridelogo.png"
const SignUpPage = () => {
  const navigate = useNavigate();
  const [userdetails, setUserdetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserdetails({
      ...userdetails,
      [name]: value,
    });
  };

  const registerHandle = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = userdetails;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      setUserdetails({ ...userdetails, password: "", confirmPassword: "" });
    } else {
      if (name && email && password && password === confirmPassword) {
        axios
          .post("http://localhost:5000/register", userdetails)
          .then((res) => {
            alert(res.data.status);
            navigate("/login");
          });
      }
    }
  };
  return (
    <>
      <div class="w-full flex flex-wrap">
        <div class="w-full md:w-1/2 flex flex-col">
          <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
            <a
              href="#"
              class=" text-white font-bold text-xl p-2"
              alt="Logo"
            >
              <img className="h-10" src={logo} alt="" />
            </a>
          </div>

          <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p class="text-center text-3xl">Join Us.</p>
            <form
              class="flex flex-col pt-3 md:pt-8"
              onsubmit="event.preventDefault();"
            >
              <div class="flex flex-col pt-4">
                <label for="name" class="text-lg">
                  Name
                </label>
                <input
            type="text"
            name="name"
            id="name"
            value={userdetails.name}
            onChange={changeHandler}
            className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-300 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Karan Gupta"
            required
                />
              </div>

              <div class="flex flex-col pt-4">
                <label for="email" class="text-lg">
                  Email
                </label>
                <input
                 type="email"
                 name="email"
                 id="email"
                 value={userdetails.email}
                 onChange={changeHandler}
                 className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-300 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                 placeholder="karan@zoyride.com"
                 required
                />
              </div>

              <div class="flex flex-col pt-4">
                <label for="password" class="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userdetails.password}
                  onChange={changeHandler}
                  placeholder="••••••••"
                  className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-300 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div class="flex flex-col pt-4">
                <label for="confirm-password" class="text-lg">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  value={userdetails.confirmPassword}
                  onChange={changeHandler}
                  placeholder="••••••••"
                  className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-300 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <input
               type="submit"
               onClick={registerHandle}
               className="mt-6 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800"
              />
            </form>
            <div class="text-center pt-12 pb-12">
              <p>
                Already have an account?{" "}
                <a href="/login" class="underline font-semibold">
                  Log in here.
                </a>
              </p>
            </div>
          </div>
        </div>
     
      </div>
    </>
  );
};

export default SignUpPage;
