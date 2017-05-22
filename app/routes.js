import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app.js';
import Streams from './components/Streams.js';
import AddStream from './components/AddStream.js';
import AcademyLevels from './components/AcademyLevels.js';
import AddAcademyLevel from './components/AddAcademyLevel.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Streams}/>
    <Route path="/stream/new" component={AddStream}/>
    <Route path="/stream/view/:id" component={AddStream}/>
    <Route path="/academy-level" component={AcademyLevels}/>
    <Route path="/academy-level/new" component={AddAcademyLevel}/>
    <Route path="/academy-level/view/:id" component={AddAcademyLevel}/>
  </Route>
)
