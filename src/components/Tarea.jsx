import React from "react";
import "../styles/tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
	console.log("Hello");
	console.log("Agregar LocalStorage");
	console.log("estudiar");
	return (
		<div
			className={
				completada ? "tarea-contenedor completada" : "tarea-contenedor"
			}
		>
			<div className="tarea-texto" onClick={() => completarTarea(id)}>
				{texto}
			</div>
			<div
				className="tarea-contenedor-iconos"
				onClick={() => eliminarTarea(id)}
			>
				<AiOutlineCloseCircle className="tarea-icono" />
			</div>
		</div>
	);
};

export default Tarea;
