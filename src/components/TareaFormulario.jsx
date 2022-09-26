import React, { useState } from "react";
import "../styles/tareaFormulario.css";
import { v4 as uuidv4 } from "uuid"; //npm de ids unicos

const TareaFormulario = ({ onSubmit }) => {
	const [input, setInput] = useState("");
	// const [tareas, setTareas] = useState([]);

	const manejarCambio = (e) => {
		setInput(e.target.value);
	};

	const manejarEnvio = (e) => {
		e.preventDefault();
		console.log("Enviando formulario");

		const tareaNueva = {
			id: uuidv4(),
			texto: input,
			completada: false,
		};

		onSubmit(tareaNueva);
		console.log(tareaNueva);

		const tareaNuevaJSON = JSON.stringify(tareaNueva);
		console.log(tareaNuevaJSON);

		localStorage.setItem("tarea", tareaNuevaJSON);

		setInput("");
	};

	return (
		<form className="tarea-formulario" onSubmit={manejarEnvio}>
			<input
				className="tarea-input"
				type="text"
				placeholder="Escribe una Tarea"
				name="texto"
				onChange={manejarCambio}
				value={input}
			/>
			<button className="tarea-boton">Agregar Tarea</button>
		</form>
	);
};

export default TareaFormulario;
