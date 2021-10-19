import {Route, Switch, Redirect} from 'react-router-dom';

import AllQuotesComponent from "./components/Pages/AllQuotes.component";
import QuoteDetailsComponent from "./components/Pages/QuoteDetails.component";
import NewQuotesComponent from "./components/Pages/NewQuotes.component";
import LayoutComponent from "./components/layout/Layout.component";
import NotFoundComponent from "./components/Pages/NotFound.component";

function App() {
  return (
    <LayoutComponent>
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
        <Route path={'*'} component={NotFoundComponent}>
        </Route>
      </Switch>
    </LayoutComponent>
  );
}

export default App;
