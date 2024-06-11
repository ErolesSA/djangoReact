import React, { useState } from 'react';
import axios from 'axios';

const ItemUpdate = ({ item, onUpdate }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/items/${item.id}/`, { name, description })
      .then(res => {
        console.log(res);
        onUpdate(); // Actualizar lista de ítems
      })
      .catch(err => {
        console.error(err);
      });

      window.location.reload();
  };

  return (
    <>
        <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
    
  


    </>

  );
};

export default ItemUpdate;
