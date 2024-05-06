import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    githubPath: '',
    demoPath: '',
    file: null
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append('title', formData.title);
      form.append('description', formData.description);
      form.append('githubPath', formData.githubPath);
      form.append('demoPath', formData.demoPath);
      form.append('file', formData.file);

      const response = await axios.post('https://portfolio-adminn.onrender.com/api/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data); 

      toast.success('Data sent successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setFormData({
        title: '',
        description: '',
        githubPath: '',
        demoPath: '',
        file: null
      });
      window.location.reload(); 

    } catch (error) {
      console.error(error);
  
    } finally {
      setLoading(false); 
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
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="mt-1 p-2 border border-gray-300 rounded w-full" required></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="githubPath" className="block text-gray-700">GitHub Path</label>
          <input type="text" id="githubPath" name="githubPath" value={formData.githubPath} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="demoPath" className="block text-gray-700">Demo Path</label>
          <input type="text" id="demoPath" name="demoPath" value={formData.demoPath} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700">Image</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required />
        </div>
        <button type="submit" className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded`} >Upload</button>

      </form>
    </div>
  );
};

export default AddProject;
