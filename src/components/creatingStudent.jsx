import React from 'react'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const CreatingStudent = () => {
  const [student, setStudent] = useState({
    id:"",
    name:"",
    place:"",
    phone:""

  })
  const navigate = useNavigate()
  const addStudent = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Fixed space in content-type
      },
      body: JSON.stringify(student) // Fixed typo in JSON.stringify
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      alert("data submitted susscessfully")
      navigate("/")
      // Optionally reset form or redirect
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
  return (
    <div className='mx-auto w-1/2 shadow-lg shadow-grey-200 border-none mt-4'> 
        <h2 className='text-center'>Add New Student</h2>
        <form onSubmit={handleSubmit} className='flex flex-col p-4'>

          <label htmlFor="id">id</label>
          <input className='border focus:outline-none focus:border-blue-600' type="text" id="id" name="id" value={student.id} onChange={addStudent}/>

          <label htmlFor="name">name</label>
          <input className='border' type="text" id="name" value={student.name} name="name" onChange={addStudent}/>

          <label htmlFor="place">place</label>
          <input className='border' type="text" id="place" name="place" value={student.place}  onChange={addStudent}/>

          <label htmlFor="phone">Phonenumber</label>
          <input className='border' type="tel" id="phone" value={student.phone} name="phone" onChange={addStudent}/>
          <div>
            <button type='submit' className='border-none bg-red-400 p-1 mt-1 rounded-md px-2'>save</button>
            <Link to="/" className='border-none bg-sky-500 p-1 mt-1 rounded-md ml-2 px-2'>back</Link>
          </div>

        </form>
    </div> 
  )
}

export default CreatingStudent