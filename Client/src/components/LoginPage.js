import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [logged, setLogged] = useState(true);
  const navigate = useNavigate();

  const [userdetails, setUserdetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserdetails({
      ...userdetails,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", userdetails).then((res) => {
      alert(res.data.status);
      const { status } = res.data;
      if (status === "login successful") {
        navigate("/students");
      }
      if (status === "user not found") {
        navigate("/register");
      }
      if (status == "incorrect password") {
        setUserdetails({ ...userdetails, password: "" });
      }
    });
  };

  const handleCheck = () => {
    setLogged(!logged);
    window.localStorage.setItem("isLogged", logged);
  };

  return (
    <>
      <section class="flex flex-col md:flex-row h-screen items-center">
        <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://zoyride.com/assets/img/5.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div class="w-full h-100">
            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form class="mt-6" action="#" method="POST">
              <div>
                <label class="block text-gray-700">Email Address</label>
                <input
                     type="email"
                     name="email"
                     id="email"
                     value={userdetails.email}
                     onChange={changeHandler}
                     className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5  placeholder-gray-400 text-white bg-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email here"
                     required
                />
              </div>

              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
               type="password"
               name="password"
               id="password"
               value={userdetails.password}
               onChange={changeHandler}
               placeholder="••••••••"
               className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-300  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
               required
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                
                />
              </div>

              <div class="text-right mt-2">
                <a
                  href="#"
                  class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                onClick={handleLogin}
                class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr class="my-6 border-gray-300 w-full" />
            <p class="mt-8">
              Need an account?
              <a
               href="/register"
                class="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
