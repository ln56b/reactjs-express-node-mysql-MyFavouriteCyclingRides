import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

import allos from '../assets/allos.jpeg';
import bonnette from '../assets/bonnette.jpeg';
import glandon from '../assets/glandon.jpeg';
import izoard from '../assets/izoard.jpeg';
require('default-passive-events');

const ITEMS = [
	{
		image: bonnette,
		name: 'Col de la Bonnette',
		description: 'The climb is ranked 323 in the world.',
	},
	{
		image: glandon,
		name: 'Col du Glandon',
		description:
			'The Col du Glandon is a varied climb with a range of slopes, a ‘must do’ ride in Bourg D’Oisans.',
	},
	{
		image: izoard,
		name: "Col de l'Izoard",
		description:
			'The southern route begins in Guillestre and is a long climb by French Alps standards at 29 km. ',
	},
	{
		image: allos,
		name: "Col d'Allos",
		description:
			"Barcelonnette is the starting point of the northern ascent of the Col d'Allos.",
	},
];

function Content(props) {
	return (
		<Paper
			style={{
				backgroundImage: `url(${props.item.image})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				height: '70vh',
				padding: '2rem',
				color: 'white',
			}}
			elevation={2}
		>
			<h2>{props.item.name}</h2>
			<p>{props.item.description}</p>
		</Paper>
	);
}

const autoPlay = true;
const timer = 2100;
const animation = 'fade';

function NewsCarousel() {
	return (
		<div className="news-carousel">
			<Carousel animation={animation} autoPlay={autoPlay} timer={timer}>
				{ITEMS.map((item, index) => {
					return <Content item={item} key={index} />;
				})}
			</Carousel>
		</div>
	);
}

export default NewsCarousel;
