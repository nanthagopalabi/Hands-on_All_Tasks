import { useState } from 'react'
import './App.css'
import { CartContextProvider } from './CartContext'
import Iphone9 from './Iphone9'
import IphoneX from './IphoneX'
import SamsungUniverse9 from './SamsungUniverse9'
import OppoF19 from './OppoF19'


function App() {
 const [count, setCount] = useState(0)

return (
    <CartContextProvider>
      <div id="major">
        <h1>Cart Products</h1>
         <Iphone9/>
         <IphoneX/>
         <SamsungUniverse9/>
         <OppoF19/>
      </div>
    </CartContextProvider>
  )
}

export default App
