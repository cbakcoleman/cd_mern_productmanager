import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import ProductsViewAll from './components/ProductsViewAll';
import NewProduct from './components/NewProduct';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      {/* Title: {JSON.stringify(title)} | Price: {JSON.stringify(price)} | Description: {JSON.stringify(description)} */}
      <hr/>
        <NewProduct/>
      <hr/>


      <Switch>

        <Route path="/products">
          <ProductsViewAll/>
        </Route>

        <Route path="/">
          <Redirect to="/products" />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
