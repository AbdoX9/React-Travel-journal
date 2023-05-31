import './App.css'
import { Header } from './components/Header.jsx'
import { data } from './Object'
import {Spot} from "./components/Spot.jsx"


function App() {
  console.log(data[0].name)
  

 return <div>
   <Header />
   <div className='Center'>

   {data.map((e) => {
    return <Spot image={e.image} country={e.country} googlemap={e.maplink} spotname={e.name} date={e.date} desc={e.desc} key={e.id} />
   })}
   </div>
 </div>
 
}

export default App
