import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	incNumber,
	decNumber,
} from "E:/React_Learn/redux-demo/src/actions/index.js";

const ReduxCounter = () => {
	const myState = useSelector((state) => state.changeNumber);
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(incNumber(5))}>Increment</button>
			<input type="text" value={myState} />
			<button onClick={() => dispatch(decNumber())}>Decrement</button>
		</div>
	);
};

export default ReduxCounter;

