import React from 'react'
import Navbar from './components/Navbar.jsx'
import { useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import AllRooms from './pages/AllRooms.jsx';
import RoomDetails from './pages/RoomDetails.jsx';
import MyBookings from './pages/MyBookings.jsx';
import HotelReg from './components/HotelReg.jsx';
import Layout from './pages/hotelOwner/Layout.jsx';
import Dashboard from './pages/hotelOwner/Dashboard.jsx';
import ListRoom from './pages/hotelOwner/ListRoom.jsx';
import AddRoom from './pages/hotelOwner/AddRoom.jsx';

const App = () => {

  const isOwnerPath=useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar></Navbar>}
      {false && <HotelReg></HotelReg>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/rooms' element={<AllRooms/>}></Route>
          <Route path='/rooms/:id' element={<RoomDetails></RoomDetails>}></Route>
          <Route path='/my-bookings' element={<MyBookings></MyBookings>}></Route>
          <Route path='/owner' element={<Layout></Layout>}>
            <Route index element={<Dashboard></Dashboard>}></Route>
            <Route path="add-room" element={<AddRoom></AddRoom>}></Route>
            <Route path="list-room" element={<ListRoom></ListRoom>}></Route>

          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App