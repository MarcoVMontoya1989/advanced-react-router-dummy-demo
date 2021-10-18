import {Route, Switch, Redirect} from 'react-router-dom';

import AllQuotesComponent from "./components/Pages/AllQuotes.component";
import QuoteDetailsComponent from "./components/Pages/QuoteDetails.component";
import NewQuotesComponent from "./components/Pages/NewQuotes.component";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/quotes"/>
      </Route>
      <Route path="/quotes" component={AllQuotesComponent}>
      </Route>
      <Route path="/quotes/:quoteId" component={QuoteDetailsComponent}>
      </Route>
      <Route path="/new-quote" component={NewQuotesComponent}>
      </Route>
    </Switch>
  );
}

export default App;
