import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

var AcademyLevels = React.createClass({

  getInitialState() {
    return {
      academyLevels:[]
    };
  },

  componentWillMount : function() {
    axios({
      method: 'get',
      url: 'http://localhost:3200/academylevels'
    }).then((response) => {
      if (!response.error) {
        this.setState({
          academyLevels: response.data
        });
      } else {
      }
    })
  },

  render : function() {
    var academyLevelList = this.state.academyLevels.map(function(eachAcademyLevel, index){
      return <div className="stream" key={eachAcademyLevel.academy_level_id}>
        <Link to={"/academy-level/view/"+eachAcademyLevel.academy_level_id}>{eachAcademyLevel.name}</Link>
        {" "}
        <span>{eachAcademyLevel.description}</span>
      </div>
    });

    return (
      <div className="">
        <Link to="/academy-level/new"><input type="button" value="Add Academy Level"/></Link>
        <div className="stream-list">{academyLevelList}</div>
      </div>
    );
  }
});

export default AcademyLevels;
