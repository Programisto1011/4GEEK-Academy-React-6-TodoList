import React from "react";

//inport components
import Panel from "../component/Panel.jsx";

// include your styles into the webpack bundle
import "../../styles/Main.css";
import ElementList from "../component/ElementList.jsx";

//create your first component
const Main = () => {
	return (
		<>
			<Panel />
			<ElementList />
		</>
	);
};

export default Main;
