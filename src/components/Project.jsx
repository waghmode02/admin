import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://portfolio-adminn.onrender.com/api/getproject");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  const deleteProject = async (id) => {
    try {
      const response = await fetch(`https://portfolio-adminn.onrender.com/api/deleteproject/${id}`, {
        method: "DELETE"
      });
      const data = await response.json();
      setProjects(data.updatedProjects);
      window.location.reload(); 
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };
  
  return (
    <div
      name="project"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full md:min-h-screen portfolio overflow-y-auto"
    >
      <div className="max-w-screen-lg mt-20 p-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            <Link className="hover:text-orange-600" to={"/add"}>ADD Project</Link>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(project => (
            <div key={project._id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="text-xl ml-1 p-2">
                {project.title}
              </p>
              <img
                src={project.imagePath}
                alt={project.title}
                className="rounded-md duration-200 hover:scale-105 w-full h-auto p-2"
              />
              <p className="text-xl ml-1 p-2">
                {project.description}
              </p>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-green-500"
                  onClick={() => window.open(project.demoPath, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-green-800"
                  onClick={() => window.open(project.githubPath, "_blank")}
                >
                  GitHub
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-red-500"
                  onClick={() => deleteProject(project._id)} 
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
