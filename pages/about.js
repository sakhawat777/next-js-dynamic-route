import React from 'react';
import Menu from './menu';

const about = (props) => {
	about.getInitialProps = async ({ query }) => {
		return { query };
	};
	return (
		<div>
			<Menu />
			<h1>About Page{JSON.stringify(props.query)}</h1>
		</div>
	);
};

export default about;
