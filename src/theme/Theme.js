import React from 'react'

const Theme = () => {
  return (
    <div>
        
        <a href='https://getbootstrap.com/docs/5.0/customize/color/#theme-colors'>Study theme by click here :)</a>

        {/*Background color and text color->primary, secondary sucess, info, warning, danger, light and dark */}
        <p>guru the gang leader</p>    {/* normal */}
        <p className='text-bg-primary'>guru the gang leader</p>


        <p>Swetha the cutie pie</p>
        <p className='text-secondary'>Swetha the cutie pie</p>

        {/* light, dark, muted */}
        <p>Praveen the intelligent</p>
        <p className='text-bg-light'>Praveen the intelligent</p>   {/*the most used in common website */}

        {/* OPACITY- 25,50,75,100 (predefined values)*/}
        <p className=' text-black-50'>HAHAHAA</p>

        {/* BOX MODEL */}
        {/* PADDING 0-to remove 1...5 auto   defaultly p refers to padding */}
        <p className='text-bg-warning p-5'>Hello world</p>
        <p className='text-bg-warning p-3'>Hello world</p>

        to refer about:::https://getbootstrap.com/docs/5.0/utilities/spacing/

        {/* t-top, b-bottom, s-start(left), e-end(right), auto  x-horizontal, y-vertical */}
        <p className='text-bg-warning pt-3'>Hello world</p>
        <p className='text-bg-warning px-3'>Hello world</p>
        <p className='text-bg-warning py-3'>Hello world</p>


        {/* to remove particular side here..all side p3 is applied and only remove padding top  */}
        <p className='text-bg-warning p-3 pt-0'>Hello world</p>


        {/* MARGIN */}
        {/* 0-tp remove 1...5 auto same as  padding */}
        <p className='text-bg-info m-3'>Hello world</p>
        <p className='text-bg-info mt-3'>Hello world</p>
        <p className='text-bg-info m-3 mb-0'>Hello world</p>

        {/* BORDER  for this border class is the static..that would be there to apply any border-danger*/}

        <p className='text-bg-info p-3 mt-5 border'>Border</p>
        <p className='text-bg-info p-3 mt-5 border border-3 border-danger'>Border</p>
        <p className='text-bg-info p-3 mt-5 border border-3 border-danger border-bottom-0'>Border</p>

        <p className='text-bg-info p-3 mt-5 border rounded'>Border</p>
        <p className='text-bg-info p-3 mt-5 border rounded-circle'>Border</p>
        <p className='text-bg-info p-3 mt-5 border rounded-pill'>Border</p>







    </div>
  )
}

export default Theme