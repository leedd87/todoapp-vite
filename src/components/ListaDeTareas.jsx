import React, { useState } from "react";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import "../styles/listaDeTareas.css";

const ListaDeTareas = () => {
	const [tareas, setTareas] = useState([]);

	const agregarTarea = (tarea) => {
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim();
			const tareasActualizadas = [tarea, ...tareas]; //agrega la nueva tarea + agrega las anteriores
			setTareas(tareasActualizadas); //setea y muestra todas las tareas nuevas
		}
	};

	const eliminarTarea = (id) => {
		const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
		setTareas(tareasActualizadas);
	};

	return (
		<>
			<TareaFormulario onSubmit={agregarTarea} />
			<div className="tareas-lista-contenedor">
				{tareas.map((tarea) => (
					<Tarea
						key={tarea.id}
						id={tarea.id}
						texto={tarea.texto}
						completada={tarea.completada}
						eliminarTarea={eliminarTarea}
					/>
				))}
			</div>
		</>
	);
};

export default ListaDeTareas;