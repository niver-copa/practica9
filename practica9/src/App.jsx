import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Card
        imageUrl="URL de la imagen"
        title="Título de la tarjeta"
        description="Descripción de la tarjeta."
      />
      <Footer/>
    </div>
  );
}

export default App;

