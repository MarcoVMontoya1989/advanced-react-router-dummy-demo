import {Route, Switch, Redirect} from 'react-router-dom';

import AllQuotesComponent from "./components/Pages/AllQuotes.component";
import QuoteDetailsComponent from "./components/Pages/QuoteDetails.component";
import NewQuotesComponent from "./components/Pages/NewQuotes.component";

function App() {
  return (
    <div>
      {/*<main>*/}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"/>
          </Route>
          <Route path="/quotes" exact component={AllQuotesComponent}>
          </Route>
          <Route path="/quotes/:quoteId" component={QuoteDetailsComponent}>
          </Route>
          <Route path="/new-quote" component={NewQuotesComponent}>
          </Route>
        </Switch>
      {/*</main>*/}
    </div>
  );
}

export default App;
