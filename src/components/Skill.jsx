import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Skill = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const fetchTechs = async () => {
      try {
        const response = await axios.get("https://portfolio-adminn.onrender.com/api/getskill");
        setTechs(response.data);
      } catch (error) {
        console.error("Error fetching techs:", error);
      }
    };

    fetchTechs();
  }, []);

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full md:min-h-screen experience overflow-y-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 mt-20 flex flex-col justify-center w-full  text-white">
        <div>
          <Link to={"/addSkill"} className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Add Skill
          </Link>
        </div>
        <div className="mt-10">
        <Link to={"/deleteSkill"} className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Delete Skill
          </Link>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ _id, imageScr, title, style }) => (
            <div
              key={_id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={imageScr} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
