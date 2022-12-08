import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './containers/ItemListConteiner/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
let saludo = "saludo"


  return (
    <BrowserRouter>
    <NavBar />

    <Routes >
      <Route path='/' element={ <ItemListContainer saludo={saludo} />} />
      <Route path='/category/:id' element={ <ItemListContainer saludo={saludo} />} />
      <Route path='/detail/:productId' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<CartContainer />} />
      <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
