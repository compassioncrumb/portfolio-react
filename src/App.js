import React, { Component } from 'react';
import './App.css';
import FilterableProjectsDisplay from './components/projectDisplay.jsx';
import cardinals from './data/data.js';
import HeaderBox from './components/HeaderBox'

// import dennet_300x190 from './data/dennet_300x190.png';

var collectedSkills = [];
cardinals.forEach(function(project) {
	collectedSkills = project.skills.reduce(function (newSkills, skill) {
    if ( newSkills.indexOf(skill) === -1 ) {
		newSkills.push(skill);
	  }
	  return newSkills;
  }, collectedSkills);
} )
collectedSkills = collectedSkills.sort();
collectedSkills.unshift("all");

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBox name={'DERRIK HANSON'} />
        <FilterableProjectsDisplay projects={cardinals} skills={collectedSkills} />
      </div>
    );
  }
}

export default App;
