import React from 'react'
import CardContainer from'./CardContainer'

export default class MainContainer extends React.Component {
	state = {
		players: [],
		favorites: [],
	};

	componentDidMount() {
		fetch('http://localhost:3000/players')
			.then(res => res.json())
			.then(players => this.setState({ players }));
	}

	//sort by age

	//add player to favorites

	//remove player from favorites

	//delete player

	//display only guards

	//display only forwards & centers

	//display only players 30yo or older

	render() {
		return (
			<div>
                <h1>NBA Players Sorting & Filtering</h1>
				<CardContainer  players={this.state.players} />
			</div>
		);
	}
}