import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const PlayerCard = ({ player, addToFavs, favs, removeFromFavs, deletePlayer }) => {

    const handleClick = () => {
        if(!favs.includes(player)){
            addToFavs(player)
        }else{
            removeFromFavs(player)
        }
    }

	return (
		<Card>
			<Image src={player.image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{player.name}</Card.Header>
				<Card.Description>{player.team}</Card.Description>
				<Card.Meta>
					<span>{player.position}</span>
				</Card.Meta>
				<Card.Meta>
					<span>Age: {player.age}</span>
				</Card.Meta>
			</Card.Content>
			<Card.Content>
				<Button primary onClick={handleClick}>
					{favs.includes(player) ? 'Unfav' : 'Favorite'}
				</Button>
				<Button color='red' onClick={() => deletePlayer(player)}>Delete</Button>
			</Card.Content>
		</Card>
	);
};

export default PlayerCard;
