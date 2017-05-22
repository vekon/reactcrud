import React from 'react';
import axios from 'axios';
import { browserHistory, hashHistory } from 'react-router';

var AddAcademyLevel = React.createClass({

  getInitialState: function() {
    return {
      name: '',
      desc: '',
      submitValue: 'Save'
    };
  },

  componentDidMount : function() {
    if (this.props.params.id) {
      axios({
        method: 'get',
        url: 'http://localhost:3200/getacademylevel/'+this.props.params.id
      }).then((response) => {
        if (!response.error) {
          this.setState({
            name: response.data.name,
            desc: response.data.description,
            submitValue: 'Update'
          });
        }
      });
    }
  },

  nameChangeHandler: function(e) {
    this.setState({
      name: e.target.value
    });
  },

  descChangeHandler: function(e) {
    this.setState({
      desc: e.target.value
    });
  },

  onSubmit: function(e) {
    e.preventDefault();
    if (!this.state.name || !this.state.desc) {
      return;
    }
    if (this.props.params.id) {
      let values = {id: this.props.params.id, name: this.state.name, desc: this.state.desc};
      axios({
        method: 'put',
        data: values,
        url: 'http://localhost:3200/updateacademylevel'
      }).then((response) => {
        if (!response.error) {
          browserHistory.push('/academy-level');
        }
      });
    } else {
      let values = {name: this.state.name, desc: this.state.desc};
      axios({
        method: 'post',
        data: values,
        url: 'http://localhost:3200/addacademylevel'
      }).then((response) => {
        if (!response.error) {
          browserHistory.push('/academy-level');
        }
      });
    }
  },

  deleteHandler: function() {
    axios({
      method: 'delete',
      url: 'http://localhost:3200/deleteacademylevel/'+this.props.params.id
    }).then((response) => {
      if (!response.error) {
        browserHistory.push('/academy-level');
      }
    })
  },

  render : function() {

    return (
      <form onSubmit={this.onSubmit}>
        Academy Level Name : <input type="text" value={this.state.name} onChange={this.nameChangeHandler}/>
        Description : <input type="text" value={this.state.desc} onChange={this.descChangeHandler}/>

        <input type="submit" value={this.state.submitValue}/>
        { this.props.params.id &&
          <input type="button" value='Delete' onClick={this.deleteHandler}/>
        }
      </form>
    );
  }
})

export default AddAcademyLevel;
