import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  render : function() {
    return <div className="container">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">Introduction to ReactJS</a>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li className="active"><Link to="/">Streams</Link></li>
                      <li><Link to="/academy-level">Academy Levels</Link></li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="jumbotron">
                  {this.props.children}
              </div>
          </div>
  }
});

export default App;
