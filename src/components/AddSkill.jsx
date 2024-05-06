import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSkill = () => {
  const [formData, setFormData] = useState({
    title: '',
    style: '',
    file: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('style', formData.style);
      formDataToSend.append('file', formData.file);

      await axios.post('https://portfolio-adminn.onrender.com/api/addskill', formDataToSend);

      toast.success('Skill added successfully');

      setFormData({
        title: '',
        style: '',
        file: null
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000); 
    } catch (error) {
      console.error('Error adding skill:', error);
      toast.error('Failed to add skill');
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="style" className="block text-gray-700">Style</label>
          <input type="text" id="style" name="style" value={formData.style} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700">Image</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Upload</button>
      </form>
    </div>
  );
};

export default AddSkill;
