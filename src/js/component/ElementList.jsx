import React from "react";
import * as PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../../styles/ElementList.css";

//create your first component
const ElementList = () => {
	return (
		<div className="">
			<h1 className="text-center mt-5">Hacer la colada</h1>
			<input type="checkbox" />
			<button> X </button>
		</div>
	);
};

export default ElementList;
