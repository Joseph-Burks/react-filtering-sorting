import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const PlayerCard = props => (
	<Card>
		<Image src={props.player.image} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{props.player.name}</Card.Header>
			<Card.Description>{props.player.team}</Card.Description>
			<Card.Meta>
				<span>{props.player.position}</span>
			</Card.Meta>
			<Card.Meta>
				<span>Age: {props.player.age}</span>
			</Card.Meta>
		</Card.Content>
		<Card.Content>
			<Button primary >Favorite</Button>
			<Button color='red' >Delete</Button>
		</Card.Content>
	</Card>
);

export default PlayerCard;
