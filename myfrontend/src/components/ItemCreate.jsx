import React, { useState } from 'react';
import axios from 'axios';

const ItemCreate = ({ onItemCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/items/', { name, description })
      .then(res => {
        console.log(res);
        // Llama a la función de devolución de llamada para actualizar la lista de ítems
        onItemCreated();
      })
      .catch(err => {
        console.error(err);
      });
  
      window.location.reload();
  };



  return (
    <>
    <div class="card mt-5" >
  <div class="card-header">
    Tasks
  </div>
  <div class="card-body text-center">

  <form onSubmit={handleSubmit}>
  <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        Name:</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => setName(e.target.value)} />
      
  </div>

  <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">
        Description:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
      
  </div>
    
     
      <button type="submit" class="btn btn-success">Create</button>
    </form>
  </div>
</div>


    
    </>
    
  );
};

export default ItemCreate;
