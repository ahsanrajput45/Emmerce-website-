
import { useSelector } from 'react-redux'
import Fetchitems from '../components/fetchitems'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Loadingspinner from '../components/Loadingspinner'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const fetchstatus=useSelector((store)=>store.fetchstatus)

  
  return (
    <>
     <Header></Header>
     <Fetchitems></Fetchitems>
    {fetchstatus.currentlyfetching?<Loadingspinner></Loadingspinner>: <Outlet ></Outlet>}
    <Footer></Footer>
    </>
  )
}

export default App
