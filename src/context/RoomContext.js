import React, { createContext, useEffect, useState } from 'react';

// data
import { roomData } from '../data'
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';
// create context
export const RoomContext = createContext()

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData)
  const [adults, setAdults] = useState('1 Adult')
  const [Kids, setKids] = useState('0 Kids')
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(Kids[0]))
  })

  const handleClick = (e) => {
    e.preventDefault()
    setLoading(true)
    // filter rooms based on total (person)
    const newRooms = roomData.filter(room => {
      return total <= room.maxPerson
    })
    setTimeout(() => {
      setRooms(newRooms)
      setLoading(false)
    }, 3000);

  }

  return <RoomContext.Provider value={{ rooms, adults, setAdults, Kids, setKids, handleClick, loading }}>
    {children}
  </RoomContext.Provider>
};

export default RoomProvider;
