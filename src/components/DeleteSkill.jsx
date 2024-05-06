import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteSkill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('https://portfolio-adminn.onrender.com/api/getskill');
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://portfolio-adminn.onrender.com/api/deleteskill/${id}`);
      // Remove the skill from the local state after successful deletion
      setSkills(skills.filter(skill => skill._id !== id));
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Delete Skill</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
            <th className="border border-gray-400 px-4 py-2">Skill</th>
            <th className="border border-gray-400 px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={skill._id}>
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{skill.title}</td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                  onClick={() => handleDelete(skill._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteSkill;
