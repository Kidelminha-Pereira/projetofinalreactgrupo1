/*import React, { Component } from "react";*/
import './componentes/Cardanimais.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Alunos from "./componentes/Alunos";
import Cursos from './componentes/Cursos';
import Cadastro from "./componentes/Cadastro";
import './App.css';
import logo from './logo.svg';

function App() {
  return(
    <Router>
      <div className='centralizar'>
        <ul>
           <header className="App-header">
            <l1><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></l1>
            <p>Instituto Nu </p>                
            <ol className="lidos">
			  
			       <li className="liuno" ><a className="atres"href="#top">Sobre nós</a></li>
			       <li className="liuno"><a className="atres"href="#top">Fale Conosco</a></li>
		        </ol>   
           </header>
          <l1><Link to="/componentes/Alunos"style={{ textDecoration: 'none' }}> Alunos </Link></l1>
          <l1><Link to="/componentes/Cursos"style={{ textDecoration: 'none' }}> Cursos </Link></l1>
          <l1><Link to="/componentes/Cadastro"style={{ textDecoration: 'none' }}> Cadastro </Link></l1 >    
        </ul>
      </div>
    
      <Routes>

        <Route path="/componentes/Alunos"element={<Alunos />}/>

        <Route path="/componentes/Cursos"element={<Cursos />}/>

        <Route path="/componentes/Cadastro"element={<Cadastro />}/>
  
      </Routes>
      
      
    </Router>
    );
  }

export default App;
