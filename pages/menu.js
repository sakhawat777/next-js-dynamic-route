import React from 'react';
import Link from 'next/link';

const menu = () => {
	return (
		<div>
			{/* File System route Or Server Side Rendering */}
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link
						href={{
							pathname: '/about',
							query: { firstName: 'Sakhawat', lastName: 'Hossain' },
						}}>
						About
					</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default menu;
