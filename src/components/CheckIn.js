import React, { useState } from 'react';

// datepicker
import Datepicker from 'react-datepicker'
// datepicker css
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'

// import icons
import { BsCalendar } from 'react-icons/bs'

const CheckIn = () => {
  // date state (start)
  const [startDate, setStartDate] = useState(false)

  return (
    <div className='flex relative items-center justify-end h-full '>
      {/* <div>icons</div> */}
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base'/>
        </div>
      </div>
      <Datepicker
        className='w-full h-full '
        selected={startDate}
        placeholderText='Check in'
        onChange={(date) => setStartDate(date)}
      />
    </div>
  )
};

export default CheckIn;
