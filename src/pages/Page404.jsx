import React from 'react';
import ufo from 'assets/images/ufo.png';

const Page404 = () => {
	return (
		<>
			<div className='page404'>
				<img
					className='page404__image'
					src={ufo}
					alt='i want to belive'
				/>

				<h1 className='page404__title'>
					There is no such page here,
					<br /> only 404 ;(
				</h1>
			</div>
		</>
	);
};

export default Page404;
