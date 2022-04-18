import { Doctor } from "../components/Doctor";
import React, { useState } from "react";
import data from "../Data";

function Homepage() {
  console.log("data", data);

  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      const filtered = data.filter((item) => {
        return (
          item.specialist
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.rate.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <section class="bg-white h-screen main-section opacity-80 ">
      <div className="sticky top-0 ">
        <div className="text-2xl font-semibold text-blue-500 p-4 ">
          <h1>List of Doctors</h1>
        </div>

        <div className="flex justify-center items-center">
          <input
            type="search"
            placeholder="Search by Specialist or Rate"
            className="px-12 py-4 mb-4 bg-white border border-gray-200 m-2 rounded-lg shadow-md"
            onChange={handleChange}
          />
        </div>
      </div>
      <div class=" h-full md:h-96 w-full object-contain overflow-auto relative flex justify-center items-start">
        <table class="border border-blue-500 ">
          <thead className="sticky top-0 text-white">
            <tr class="bg-blue-500 text-center ">
              <th class="py-3 px-3">Name</th>
              <th class="py-3 px-3">Specialist</th>
              <th class="py-3 px-3">Experience</th>
              <th class="py-3 px-3">Rate</th>
              <th class="py-3 px-3">Location</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto bg-white  ">
            {filteredData.map((item) => {
              return <Doctor item={item} key={item.id} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Homepage;
