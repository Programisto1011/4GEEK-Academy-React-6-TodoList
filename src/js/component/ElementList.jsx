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
			<div className="bg-light d-flex">
				<input
					className="align-self-center"
					type="checkbox"
					id="name"
					name="name"
				/>
				<label name="name">{props.name}</label>
			</div>
			<div className="text-center ">
				<button onClick={handleClick} className="btn btn-primary">
					X
				</button>
			</div>
		</div>
	);
};

ElementList.propTypes = {
	name: PropTypes.string,
};

export default ElementList;
