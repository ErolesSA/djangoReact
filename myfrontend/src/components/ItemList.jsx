import React, { useState } from 'react';
import axios from 'axios';
import ItemDelete from './ItemDelete';
import ItemUpdate from './ItemUpdate';

const ItemList = ({ items, onDelete }) => {
  const [updatingItemId, setUpdatingItemId] = useState(null);

  const handleUpdate = (itemId) => {
    setUpdatingItemId(itemId);
  };

  const handleCloseModal = () => {
    setUpdatingItemId(null);
  };

  return (
    <div>
    <h1>Items</h1>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>
              <button  class="btn btn-primary m-1" onClick={() => handleUpdate(item.id)}>Update</button>
              <ItemDelete itemId={item.id} onDelete={onDelete} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  
    {/* Modal for the update form */}
    {updatingItemId !== null && (
      <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Item</h5>
              <button type="button" className="close" onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <ItemUpdate 
                item={items.find(item => item.id === updatingItemId)} 
                onUpdate={handleCloseModal} // Close the modal after updating
              />
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default ItemList;
