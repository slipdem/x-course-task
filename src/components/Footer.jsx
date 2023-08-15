import React from 'react';

const Footer = () => {
	const actualYear = new Date().getFullYear();
	return (
		<footer className='footer'>
			<div className='footer__content'>
				<span>© Prometeus, {actualYear}</span>
			</div>
		</footer>
	);
};

export default Footer;
