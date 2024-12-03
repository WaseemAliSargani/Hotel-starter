import React, { useContext } from 'react';

// import components
import AdultsDropdown from '../components/AdultsDropdown'
import KidsDropdown from '../components/KidsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import { RoomContext } from '../context/RoomContext';

const BookForm = () => {

  const { handleClick } = useContext(RoomContext)

  return <form className='h-[300px] w-full lg:h-[70px]'>
    <div className='flex flex-col lg:flex-row w-full h-full '>

      {/* compoent 1 */}
      <div className='flex-1 border-r'>
        <CheckIn />
      </div>
      {/* compoent 2 */}

      <div className='flex-1 border-r'>
        <CheckOut />
      </div>

      {/* compoent 3 */}
      <div className='flex-1 border-r'>
        <AdultsDropdown />
      </div>

      {/* compoent 4 */}
      <div className='flex-1 border-r'>
        <KidsDropdown />
      </div>

      {/* btn for check  */}
      <button
        onClick={(e) => handleClick(e)}
        type='submit'
        className='btn btn-primary'>
        Check now
      </button>

    </div>
  </form>
};

export default BookForm;
