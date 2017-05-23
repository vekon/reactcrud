import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

var Streams = React.createClass({

  getInitialState: function() {
    return {
      streams:[]
    };
  },

  componentWillMount : function() {
    this.fetchStreams();
  },

  fetchStreams: function() {
    axios({
      method: 'get',
      url: 'http://localhost:3200/streams'
    }).then((response) => {
      if (!response.error) {
        this.setState({streams:response.data});
      } else {
      }
    })
  },

  render : function() {
    var streamList = this.state.streams.map(function(eachStream, index){
      return <div className="stream" key={eachStream.stream_id}>
        <Link to={"/stream/view/"+eachStream.stream_id}>{eachStream.name}</Link>
        {" "}
        <span>{eachStream.description}</span>
      </div>
    });

    return (
      <div className="">
        <Link to="/stream/new"><input className="btn btn-default" type="button" value="Add Stream"/></Link>
        <div className="stream-list">{streamList}</div>
      </div>
    );
  }
});

export default Streams;
