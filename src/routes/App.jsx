import { Carrosel } from '../carrusel/Carrosel'
import { Footer } from '../footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '../navbar/Navbar'
import '../styles/App.css'
import { DarkModeContext } from '../hooks/darkmodo';
import { useContext } from 'react';
import ProyectosMinimal from '../proyectos/minimalProyec';

function App() {
  const { isDarkMode, handleToggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      <Navbar />

      <Carrosel />
      <p>
        Hola espero que al entrar a mi blog puedas ver mis proyectos y un poco de mi persona con lo que actualmente puedo trabajar pero en algun futuro poder trabajar en mas tecnologias y poder actualizar este blog para que puedas ver mas de mi progreso mientras te dejare con unos proyectos y podras visualisar mas en el apartado de proyectos
        podras ver una imagen de mi repositorio de github , algunas de las tecnologias que conosco y algunos de mis gustos en el slider de arriba espero que puedas ver un poco mas de mi persona.     
         </p>
      <ProyectosMinimal/>
      <Footer />
    </div>
  );
}

export default App;
