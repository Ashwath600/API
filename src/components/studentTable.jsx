import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StudentTable = () => {
  const [students, setStudents] = useState([]); // Added state for students
  const [Loading, setLoading] = useState(); // Added state for students

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status); // Fixed error throwing
        }
        return res.json(); // Added parentheses
      })
      .then(data => {
        console.log(data);
        setStudents(data); // Store data in state
      })
      
      .catch(err => {
        console.error(err);
      })
      .finally(
          setLoading(false) 
      )
      
  }, []);
  if  (Loading) <div>"Loading.."</div> 

  return (
    <div className="container bg-orange-100 m-auto p-2">
      <h1 className='text-center text-2xl font-serif text-red-700'>Students Records</h1>
      <div className="table-container mt-2 bottom-2">
        <Link to="/student/create" className="border-2 border-black p-1 rounded-lg bg-red-200">Add New Student</Link>
        <table className="mt-6 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Place</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr className="text-center" >
                <td className="px-4 py-2">{student.id}</td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.place}</td>
                <td className="px-4 py-2">{student.phone}</td>
                <td className="px-4 py-2 flex gap-2 justify-center">
                  <a className="border-2 border-black rounded-md p-1 bg-blue-200" href="">edit</a>
                  <a className="border-2 border-black rounded-md p-1 bg-red-400" href="">delete</a>
                  <a className="border-2 border-black rounded-md p-1 bg-green-200" href="">view</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;