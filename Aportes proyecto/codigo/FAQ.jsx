
import React, { useState } from 'react';

const FAQ = () => {
  const [faqData, setFaqData] = React.useState([]);

  React.useEffect(() => {
    // Realizar la solicitud a la API de Django para obtener las preguntas almacenadas
    fetch('http://localhost:8000/core/v1/faq/')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setFaqData(data);
      })
      .catch(error => console.error(error));
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente

  return (

    <div>

<div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '120%',
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,1) 200%)',
        }}
      />

      <img
        src="https://d2bqn2kyidxvh4.cloudfront.net/wp-content/uploads/2020/05/NP5-808x454.jpeg"
        alt="Imagen de encabezado"
        style={{ width: '1500px', height: '600px' }}
      />

      {/* Texto superpuesto en el centro de la imagen */}
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '5em', marginBottom: '100px', marginTop: '100px' }}>CIDERE</h1>
       </div>

       <h1 style={{ marginBottom: '100px', marginTop:'100px' ,textAlign:'center'}}>Preguntas Frecuentes</h1>

      {/* Mapear sobre los datos y mostrar la información de cada posición del vector */}
      {faqData.map((item, index) => (
        <div  key={index}>
          <h3 style={{ background: '#CCdfff',marginTop:'40px' , marginBottom:'10px' ,marginLeft:'100px' }}>Pregunta: {item.question}</h3>
          <p style={{ marginLeft: '100px' }}>Respuesta: {item.answer}</p>
        </div>
      ))}

    <div style={{marginBottom:'50px'}}></div>

    </div>

    


  );


}



export default FAQ;