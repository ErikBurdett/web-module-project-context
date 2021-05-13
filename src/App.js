import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import {productContext} from './contexts/productContext';
import {cartContext} from './contexts/cartContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
		<cartContext.Provider value = {{cart}}>
			<Navigation/>

			{/* Routes */}
		
			<productContext.Provider value={{products, addItem}}>
			<Route exact path="/">
				<Products/>
			</Route>

			<Route path="/cart">
				<ShoppingCart/>
			</Route>
			</productContext.Provider>
		</cartContext.Provider>
		</div>
	);
}

export default App;
