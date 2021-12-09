import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';

import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

function App() {
  return (
<>
<Router>
    <Switch>

      <Route exact path='/create' component={Create} />

      <Route exact path='/read' component={Read} />

      <Route path='/update' component={Update} />

    </Switch>
    </Router>
</>
  );
}

export default App;
