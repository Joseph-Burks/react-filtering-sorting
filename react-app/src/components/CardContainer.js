import PlayerCard from './PlayerCard'
import { Card } from 'semantic-ui-react'

const CardContainer = props => {
	return (
		<Card.Group style={{ disply: 'flex', justifyContent: 'center' }}>
			{props.players.map(player => {
				return <PlayerCard key={player.id} player={player} />;
			})}
		</Card.Group>
	);
};

export default CardContainer