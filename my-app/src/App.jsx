//App.jsx

import './fonts.css/OpenSans-Bold.woff'
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
