import React from "react";
import * as PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../../styles/ElementList.css";

//create your first component
const ElementList = (props) => {
	const handleClick = (ev) => {
		props.handleClick(ev);
	};

	return (
		<div className="row d-flex">
			{/*Modifica estilo función valor checkbox (tacha el name) */}
			{/*Nombre de la tarea*/}
			<div className="col-11 bg-light d-flex">
				<input
					className="align-self-center"
					type="checkbox"
					id="name"
					name="name"
				/>
				<label name="name">{props.name}</label>
			</div>

			{/*Botón que llama a una función que se introduce desde fuera*/}
			<div className="col-1 text-center ">
				<button onClick={handleClick} className="btn btn-primary">
					X
				</button>
			</div>
		</div>
	);
};

export default ElementList;
