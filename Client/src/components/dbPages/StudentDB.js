import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../zoyridelogo.png"
const StudentDB = () => {
  const [datafound, setDatafound] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = React.useState('');
  const getting = async () => {
    try {
      let res = await axios.get("http://localhost:5000/students");
      console.log(res.data);
      setData(res.data);
      setDatafound(true);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleclick = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const searchdata = (d) => {
    if (d) return d?.name?.includes(search)
  }
  useEffect(() => {
    getting();
  }, []);

  const deleteStudent = async (_id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/student/${_id}`);
      alert(res.data.status);
    } catch (error) {
      console.log("error while deleting student", error);
    }
    getting();
  };

  return (
    <section className="">
      <div className="px-6 mx-auto h-screen pt-6">
        <nav className="flex justify-between">
          <a
            href="/"
            className="text-xl font-bold md:text-2xl  p-2 rounded"
          >
         <img className="h-8" src={logo} alt="" />
                  </a>
          <a
            href="/login"
            onClick={() => {
              window.localStorage.removeItem("isLogged");
            }}
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-black rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          >
            Logout
          </a>
        </nav>
        <div className="flex justify-between mt-10">
          <a
            href="/add_student"
            className="m-3 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-black rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          >
            Add
          </a>
        </div>
        <div class="h-screen w-full flex justify-center items-center bg-gray-100">

	<div class="container mx-auto px-4 sm:px-8 max-w-3xl">
		<div class="py-8">
      	<div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
				<h2 class="text-2xl leading-tight">
					Users
				</h2>
				<div class="text-end">
					<form class="flex w-full max-w-sm space-x-3">
						<div class=" relative ">
							<input type="text" value={search} onChange = {handleclick} id="&quot;form-subscribe-Filter" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Search Here" />
						</div>
						<button onClick={handleclick} class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-black rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow rounded-lg overflow-hidden"></div>
        {datafound ? (
          data.length !== 0 ? (
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
									Name
								</th>
								<th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
									Email
								</th>
								<th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
									Address
								</th>
								<th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
									City
								</th>
								<th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
								Class
                </th>
                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
								Section
                </th>
                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">							
                Delete button
                </th>
                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                Edit button
                </th>
							</tr>
						</thead>
						<tbody>
                {data?.filter((d) => searchdata(d))?.map((el, ind) => {
                  const {
                    _id,
                    type,
                    name,
                    Email,
                    address,
                    city,
                    classs,
                    section,
                  } = el;
                  if (type === "student") {
                    return (
                      <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {Email}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {address}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {city}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {classs}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {section}
                        </p>
                      </td>
                      
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<button onClick={() => deleteStudent(_id)} class="text-black hover:text-indigo-900">
										Delete
									</button>
								</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<a href={`student/edit/${_id}`} class="text-black hover:text-indigo-900">
										Edit
									</a>
								</td>
                    </tr>
                    );
                  }
                })}
              </tbody>
            </table>  ) : (
            <h1 className="text-2xl font-bold text-white text-center mt-20">
              No Student Added
            </h1>
          )
        )
         : (
          <h1 className="text-2xl font-bold text-white text-center mt-20">
            Loading...
          </h1>
        )}
        	</div>
			</div>
		</div>
	</div>
      </div>
    </section>
  );
};

export default StudentDB;
