import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { Paper, Button } from '@material-ui/core';

import panoramic1 from '../assets/panoramic1.jpg';
import panoramic2 from '../assets/panoramic2.jpg';
import panoramic3 from '../assets/panoramic3.jpg';
import panoramic4 from '../assets/panoramic4.jpg';

function Project(props) {
	return (
		<Paper
			className="Project"
			style={{
				backgroundImage: `url(${props.item.image})`,
				backgroundRepeat: 'no-repeat',
				height: '40vh',
				marginTop: '5vw',
				padding: '2rem',
			}}
			elevation={2}
		>
			<h2>{props.item.name}</h2>
			<p>{props.item.description}</p>

			<Button className="CheckButton">Check it out!</Button>
		</Paper>
	);
}

const items = [
	{
		image: panoramic1,
		name: 'Lear Music Reader',
		description: 'A PDF Reader specially designed for musicians.',
	},
	{
		image: panoramic2,
		name: 'Hash Code 2019',
		description:
			'My Solution on the 2019 Hash Code by Google Slideshow problem.',
	},
	{
		image: panoramic3,
		name: 'Terrio',
		description: 'A exciting mobile game game made in the Unity Engine.',
	},
	{
		image: panoramic4,
		name: 'React Carousel',
		description: 'A Generic carousel UI component for React using material ui.',
	},
];

const autoPlay = true;
const timer = 2000;
const animation = 'fade';

function NewsCarousel() {
	return (
		<div>
			<Carousel
				animation={animation}
				autoPlay={autoPlay}
				timer={timer}
				animation={animation}
			>
				{items.map((item, index) => {
					return <Project item={item} key={index} />;
				})}
			</Carousel>
		</div>
	);
}

export default NewsCarousel;
