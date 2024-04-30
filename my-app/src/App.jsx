//App.jsx

import './App.css'
import Store from './components/Store';
import products from './data.js';

function App() {

  return (
    <>

      <Store products={products} />
    </>
  )
}

export default App
