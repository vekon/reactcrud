import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  render : function() {
    return <div className="">
      <div className="header bg-primary">Header</div>
      <div className="row">
        <div className="col-md-1 left-nav bg-info">
          <div className="nav-item"><Link to="/">Streams</Link></div>
          <div className="nav-item"><Link to="/academy-level">Academy Levels</Link></div>
        </div>
        <div className="col-md-11 feature-container bg-success">
          {this.props.children}
        </div>
      </div>
    </div>
  }	
});

export default App;