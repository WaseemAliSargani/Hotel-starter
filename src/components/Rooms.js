import React, { useContext } from 'react';

// loader
import { SpinnerDotted } from 'spinners-react'

// context
import { RoomContext } from '../context/RoomContext'
// import components
import Room from '../components/Room'

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext)

  return <section className='py-24'>
    {/* overlay & spinner */}
    {loading && <div className='h-screen fixed top-0 bottom-0 bg-black/90 w-full z-20 flex justify-center items-center'> <SpinnerDotted color='white'/>  </div>}
    <div className="container mx-auto lg:px-0 ">
      <div className='text-center'>
        <div className='font-tertiary uppercase text-[15px] tracking-[6px]'>Hotel & Spa Adina</div>
        <h2 className='font-primary text-[45px] mb-4'>Room & Suites</h2>
      </div>
      {/* grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 max-w-sm lg:max-w-none mx-auto gap-[30px]'>
        {rooms.map((room) => {
          return <Room room={room} key={room.id} />
        })}
      </div>

    </div>
  </section>
};

export default Rooms;
