import React, { useState, useEffect } from "react";
import * as PropTypes from "prop-types";

import ElementList from "./ElementList.jsx";

import "../../styles/Main.css";

const Panel = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([""]);

	const deleteElement = (index) => {
		console.log(list);
		let temp = list;
		temp.splice(index, 1);
		setList([...list]);
		console.log(list);
		console.log(`Se ha eliminado el elemento ${index} de la lista`);
	};

	var listItems = "";
	// useEffect(() => {
	listItems = list.map((inputValue, index) => (
		<ElementList
			key={index}
			name={inputValue}
			handleClick={() => deleteElement(index)}
		/>
	));
	// }, [list]);

	const addElementListArr = () => {
		setList([...list, inputValue]);
		console.log(list);
	};

	return (
		<>
			<div>
				<div className="row d-flex">
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
					/>
					<button
						onClick={() => {
							addElementListArr();
						}}>
						Insert
					</button>
				</div>
				{listItems}
			</div>
		</>
	);
};

export default Panel;
