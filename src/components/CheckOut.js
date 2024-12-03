import React, { useState } from 'react';

// datepicker
import Datepicker from 'react-datepicker'
// datepicker css
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'

// import icons
import { BsCalendar } from 'react-icons/bs'

const CheckOut = () => {
  // date state (end)
  const [endDate, setEndDate] = useState(false)

  return (
    <div className='flex relative items-center justify-end h-full '>
      {/* <div>icons</div> */}
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
      <Datepicker
        className='w-full h-full '
        selected={endDate}
        placeholderText='Check out'
        onChange={(date) => setEndDate(date)}
      />
    </div>
  )
};

export default CheckOut;
