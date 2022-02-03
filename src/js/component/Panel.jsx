import { React, useState } from "react";
import * as PropTypes from "prop-types";

//import components
import ElementList from "./ElementList.jsx";

//include your styles into the webpack bundle
import "../../styles/Main.css";

//create your first component
const Panel = () => {
	const [inputValue, setInputValue] = useState("-");
	const Funcionality = (ev) => {};
	return (
		<>
			<div>
				<input
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
				/>

				<ElementList name={inputValue} handleClick={Funcionality} />
			</div>
		</>
	);
};

export default Panel;
