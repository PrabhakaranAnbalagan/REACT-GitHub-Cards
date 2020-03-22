import React from 'react';
import Cards from './components/Cards'
import './App.css';
import ProfileSearch from './components/ProfileSearch'

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <ProfileSearch onSubmit={this.addNewProfile} />
        <Cards profiles={this.state.profiles} />
    	</div>
    );
  }	
}

export default App;
