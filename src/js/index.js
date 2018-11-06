import React from 'react';
import ReactDOM from 'react-dom';
import Test from "./test";

ReactDOM.render(
	<Test text={'Hello!'}
		tasks= {[
			{text: 'life is good', completed: false},
			{text: 'life is great', completed: true},
			{text: 'life with snowboard', completed: false},
		]}/>,
	document.getElementById('content')
);
