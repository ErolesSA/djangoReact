import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemCreate from './components/ItemCreate';

import './App.css';



function App() {
  const [items, setItems] = useState([]);

  // Función para obtener la lista de ítems
  const fetchItems = () => {
    axios.get('/api/items/')
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // Función para actualizar la lista de ítems después de crear uno nuevo
  const handleItemCreated = () => {
    fetchItems();
  };

  // Obtener la lista de ítems cuando se monta el componente
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <h1 class="m-5">CRUD con Django y React</h1>
      <div class="container text-center">
  <div class="row">
    <div class="col">
    {/* Pasa la función handleItemCreated como prop al componente ItemCreate */}
      <ItemCreate onItemCreated={handleItemCreated} />
    </div>
    <div class="col">
     {/* Pasa la lista de ítems al componente ItemList */}
      <ItemList items={items} />
    </div>
  </div>
  </div>
      
      
      
    </div>
  );
}

export default App;
