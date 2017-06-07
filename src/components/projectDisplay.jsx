import React, { Component } from 'react';

class ProjectImage extends React.Component {
  render() {
    //var imageSrc = this.props.project.screenshot;
    return (
        <img className="ProjectImage" src="http://danmark.visitsweden.com/fileadmin/_processed_/csm_h%C3%A5kan_vargas_s-coffebreak_in_the_wild_524x350_f12c93fdbf.jpg" alt="project screenshot"></img>
    );
  }
}

class ProjectTitle extends React.Component {
  render() {
    return (
      <h2 className="ProjectTitle">{this.props.project.title.toUpperCase()}</h2>
    );
  }
}

class ProjectSummary extends React.Component {
  render() {
    return (
      <p className="ProjectSummary">{this.props.project.summary}</p>
    );
  }
}

class ProjectSkills extends React.Component {
  render() {
    var skills = [];
    this.props.project.skills.sort().forEach(function(skill) {
      skills.push(<li>- {skill} -</li>);
    });
    return (
      <div className="ProjectSkills">
        <ul>{skills}</ul>
      </div>
    )
  }
}

class ProjectCard extends React.Component {
  render() {
    var project = this.props.project;
    return (
      <div className="cardsContainer">
        <ProjectImage project={project} />
          <div className="infoSection">
            <ProjectTitle project={project} />
            <div className="detailsContainer">
              <ProjectSummary project={project} />
              <ProjectSkills project={project} />
            </div>
        </div>
      </div>
    );
  }
}

class ProjectsDisplay extends React.Component {
  render() {
    var cards = [];
    var filter = this.props.filterValue;
    this.props.projects.forEach(function(project) {
       if (project.skills.indexOf(filter) !== -1 || (filter === 'all') ) {
         cards.push(<ProjectCard project={project}  key={project.title} />);
      }
    });
    return (
    <div>
      <div>{cards}</div>
    </div>
    );
  }
}

class FilterSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {

    var skillItems = [];
    this.props.skills.forEach(function(skill) {
      skillItems.push(<option value={skill}>{skill}</option>)
    })
    return (
      <form className="FilterSelect">
        <label>
          display work with:
          <select value={this.props.filterValue} onChange={this.handleFilterChange}>
            {skillItems}
          </select>
        </label>
      </form>
    );
  }
}

class FilterableProjectsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: 'all'
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(filterValue) {
    this.setState({
      filterValue: filterValue
    })
  }

  render() {
    return (
      <div>
        <FilterSelect
          filterValue={this.state.filterValue}
          skills={this.props.skills}
          onChange={this.handleFilterChange}
        />
      {/*<p>Only showing {this.state.filterValue.toUpperCase()} projects</p>*/}
        <ProjectsDisplay
          projects={this.props.projects}
          filterValue={this.state.filterValue}
        />
      </div>
    );
  }
}

// ReactDOM.render(
//   <FilterableProjectsDisplay projects={cardinals} skills={collectedSkills}/>,
//   document.getElementById('root')
// );

export default FilterableProjectsDisplay;
