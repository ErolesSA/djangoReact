import React from 'react';
import axios from 'axios';

const ItemDelete = ({ itemId, onDelete }) => {
  const handleDelete = () => {
    axios.delete(`/api/items/${itemId}/`)
      .then(res => {
        console.log(res);
        onDelete(); // Actualizar lista de ítems
      })
      .catch(err => {
        console.error(err);
      });

    window.location.reload();
  };

  return (
    <div>
      <button class="btn btn-danger mx-auto" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ItemDelete;
