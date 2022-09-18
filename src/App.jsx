import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Tarea from "./components/Tarea";
import TareaFormulario from "./components/TareaFormulario";

function App() {
	return (
		<div className="aplicacion-tareas">
			<div className="freecodecamp-logo-contenedor">
				<img src={reactLogo} alt="freecodecamp-logo" />
			</div>
			<div className="tareas-lista-principal">
				<h1>Mis Tareas</h1>
				<Tarea texto={"Aprender React"} completada={false} />
				<TareaFormulario />
			</div>
		</div>
	);
}

export default App;
