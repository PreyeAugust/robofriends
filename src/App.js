import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
              <h2 className='f1'>RoboFriends</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
              <CardList robots={filterRobots} /> 
              </Scroll>
            </div>
        );
    }
}

export default App;