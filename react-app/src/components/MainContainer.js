import React from 'react';
import CardContainer from './CardContainer';
import { Form, Segment } from 'semantic-ui-react';

export default class MainContainer extends React.Component {
	state = {
		players: [],
		favorites: [],
	};

	componentDidMount() {
		fetch('http://localhost:3000/players')
			.then(res => res.json())
			.then(players => {
				this.setState({ players });
			});
	}

	//display only guards
	displayGuards = () => {
		let guards = this.state.players.filter(
			player => player.position.toLowerCase() === 'guard'
		);
		return guards;
	};

	//display only forwards & centers
	displayForwardsAndCenters = () => {
		let forwardsAndCenters = this.state.players.filter(
			player => player.position.toLowerCase() !== 'guard'
		);
		return forwardsAndCenters;
	};

	//display only players 30yo or older
	displayOldGuys = () => {
		let oldGuys = this.state.players.filter(player => player.age >= 30);
		return oldGuys;
	};

	//sort by age
	sortByAge = () => {
		let sortedPlayers = this.state.players.sort(
			(playerA, playerB) => playerB.age - playerA.age
		);
		return sortedPlayers;
	};

	//add player to favorites
	addToFavs = player => {
		this.setState({ favorites: [...this.state.favorites, player] });
	};

	//remove player from favorite
	removeFromFavs = player => {
		let favorites = this.state.favorites.filter(fav => fav.id !== player.id);
		this.setState({ favorites });
	};

	//delete player
	deletePlayer = player => {
		let players = this.state.players.filter(p => p.id !== player.id);
		this.setState({ players });

		fetch('http://localhost:3000/players/' + player.id, { method: 'DELETE' });
	};

	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h1>NBA Players Sorting and Filtering</h1>
				<Segment style={{ width: '50%' }}>
					<Form>
						<Form.Field>
							<label>Search</label>
							<input placeholder='First Name' /> 
						</Form.Field>
					</Form>
				</Segment>
				<CardContainer
					players={this.state.players}
					addToFavs={this.addToFavs}
					favs={this.state.favorites}
					removeFromFavs={this.removeFromFavs}
					deletePlayer={this.deletePlayer}
				/>
			</div>
		);
	}
}
