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
    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto mt-2 p-30">
      <thead >
        <tr>
          <th scope="col" className="border border-gray-400 text-sm font-medium text-gray-900 p-3 text-xl">
            Name
          </th>
          <th scope="col" className="border border-gray-400 text-sm font-medium text-gray-900 p-3 text-xl">
            Email
          </th>
          <th scope="col" className="border border-gray-400 text-sm font-medium text-gray-900 p-3 text-xl">
            Message
          </th>
          <th scope="col" className="border border-gray-400 text-sm font-medium text-gray-900 p-3 text-xl">
            Received At
          </th>
          <th scope="col" className="border border-gray-400 text-sm font-medium text-gray-900 p-3 text-xl">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {contacts.map(contact => (
          <tr key={contact.id} className="border border-gray-400">
            <td className="px-6 py-4 whitespace-nowrap border border-gray-400">{contact.name}</td>
            <td className="px-6 py-4 whitespace-nowrap border border-gray-400">{contact.email}</td>
            <td className="px-6 py-4 whitespace-nowrap border border-gray-400">{contact.message}</td>
            <td className="px-6 py-4 whitespace-nowrap border border-gray-400">{new Date(contact.timestamp).toLocaleString()}</td>
            <td className="px-6 py-4 whitespace-nowrap border border-gray-400">
              <button className="border border-gray-400 bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded" onClick={() => deleteContact(contact._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contact;
