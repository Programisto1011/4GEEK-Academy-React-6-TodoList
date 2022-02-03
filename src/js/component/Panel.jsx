import React from "react";
import * as PropTypes from "prop-types";

//import components
import ElementList from "./ElementList.jsx";

//include your styles into the webpack bundle
import "../../styles/Main.css";

//create your first component
const Panel = () => {
	return (
		<div>
			<ElementList />
			<h1 className="text-center mt-5">Hello Rigo!</h1>

			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Panel;
