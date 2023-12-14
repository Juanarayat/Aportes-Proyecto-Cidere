import React, { useState, useEffect } from 'react';

const Home = () => {
  

  return (
    <div >
      {/* Encabezado de la página */}
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

      {/* Botones de login y registro */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '22px',
            borderRadius: '15px',
            border: 'none',
            backgroundColor: '#87CEEB', 
            color: 'white', 
           
          }}
        >
          Login
        </button>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '22px',
            borderRadius: '15px',
            border: 'none',
            backgroundColor: '#87CEEB',
            color: 'white', 
          }}
        >
          Registro
        </button>
      </div>

      {/* Imagen de encabezado */}
      <img
        src="https://d2bqn2kyidxvh4.cloudfront.net/wp-content/uploads/2020/05/NP5-808x454.jpeg"
        alt="Imagen de encabezado"
        style={{ width: '1500px', height: '600px' }}
      />

       <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '5em', marginBottom: '100px', marginTop: '100px' }}>CIDERE</h1>
       </div>




      {/* Barra horizontal con 6 botones */}
      <div style={{backgroundColor:'#ADD8E6'}}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#ADD8E6', // Color celeste claro
                    color: 'white', 
                    marginLeft: '50px', 
                    width: '120px',
                }}
                >
                INICIO
                </button>
                <button
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#ADD8E6', // Color celeste claro
                    color: 'white', //
                    marginLeft: '50px', // Espacio entre botones
                    width: '120px',
                }}
                >
                CLIENTES
                </button>
                <button
                style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#ADD8E6', // Color celeste claro
                    color: 'white', //
                    marginLeft: '50px', // Espacio entre botones
                }}
                >
                ACERCA DE MI
                </button>
                <button
                style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#ADD8E6', // Color celeste claro
                    color: 'white', // 
                    marginLeft: '50px', // Espacio entre botones
                }}
                >
                CASOS DE EXITO
                </button>
                <button
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#ADD8E6', // Color celeste claro
                    color: 'white', // 
                    marginLeft: '50px', // Espacio entre botones
                }}
                >
                CONDUCTO
                </button>
                <button
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#ADD8E6', // Color celeste claro
                    color: 'white', // 
                    marginLeft: '50px',
                }}
                >
                NOTICIAS
                </button>
            </div>
        </div>


      {/* Contenido de la página */}
      <div style={{ marginTop: '80px', textAlign: 'center' ,marginBottom:'200px' }}>
        <h1 style={{fontSize:'40px'}}>Bienvenido a CIDERE</h1><br></br>
        <h1>"Conectamos caminos, construimos destinos"</h1>
        {/* Video centrado */}
        <iframe
          width="760"
          height="350"
          src="https://www.youtube.com/embed/luoceoov2w8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ marginTop: '30px' }}
        ></iframe>
        
        <h1 style={{marginTop:"20px"}}>"¿Quienes Somos?"</h1>
        <p style={{marginLeft:"100px",marginRight:"100px",marginTop:"50px"}}>“Espacio Industrial Minero” es un proyecto Bien Público Estratégico y tiene por objetivo: Diseñar e implementar una plataforma única para la gestión estratégica del Ecosistema Industrial Minero de la Región de Coquimbo para disminuir las asimetrías de información que permitan aumentar la productividad de la industria.

            La propuesta de valor de la plataforma es generar un “Espacio de visibilización y match entre la oferta regional y la demanda industrial – minera de la Región de Coquimbo”. Por ende, la iniciativa dispone al ecosistema minero regional una base de datos completa y actualizada de empresas proveedoras prestadoras de bienes y servicios a la minería, permitiendo de este modo conectar, facilitar y gestionar el encuentro entre la oferta y demanda industrial minera de la región.
        </p>

        
      </div>

      {/* Pie de página */}
      <div style={{ bottom: '0', left: '0', width: '100%', backgroundColor: '#fef', padding: '10px', color: 'white', textAlign: 'center' ,marginTop:"150px"}}>
          <div>
            <a href="/terminos">Términos y Condiciones</a>
          </div>
          <div>
            <a href="/politicas">Políticas de Servicio</a>
          </div>
        </div>
    </div>
  );
}

export default Home;






