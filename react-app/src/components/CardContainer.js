import PlayerCard from './PlayerCard';
import { Card } from 'semantic-ui-react';

const CardContainer = props => {
	return (
		<Card.Group style={{ disply: 'flex', justifyContent: 'center' }}>
			{props.players.map(player => {
				return (
					<PlayerCard
						key={player.id}
						player={player}
						addToFavs={props.addToFavs}
						favs={props.favs}
						removeFromFavs={props.removeFromFavs}
                        deletePlayer={props.deletePlayer}
					/>
				);
			})}
		</Card.Group>
	);
};

export default CardContainer;
