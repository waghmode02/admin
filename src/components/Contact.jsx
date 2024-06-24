import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://portfolio-adminn.onrender.com/api/getallcontact');
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const deleteContact = async (userId) => {
    try {
      const response = await axios.delete(`https://portfolio-adminn.onrender.com/api/delete/${userId}`);
      if (response.status === 200) {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== userId));
        toast.success('Data deleted successfully');
        window.location.reload(); 
      } else {
        throw new Error('Failed to delete contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-900">
              Email
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-900">
              Message
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-900">
              Received At
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map(contact => (
            <tr key={contact.id} className="border border-gray-300">
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">{contact.name}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">{contact.email}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">{contact.message}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">{new Date(contact.timestamp).toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">
                <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded" onClick={() => deleteContact(contact._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
