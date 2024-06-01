import React from 'react'
import { Container } from 'react-bootstrap'

const Others = () => {
  return (
    <div>
        <Container>
            <div>
            {/* DISPLAY ->show (block, inline), hide(none) */}
            <p className='m-3 p-3 text-bg-primary d-block'>Display</p>
            <p className='m-3 p-3 text-bg-primary d-inline'>Display</p>
            <p className='m-3 p-3 text-bg-primary d-none'>Display</p> {/* this makes the component to hid */}
            </div>
            <br/>

            {/* FLEX default-row wise and inline */}
            <div className='d-flex'>
                <p className='m-2 p-2 text-bg-primary'>flex</p>
                <p className='m-2 p-2 text-bg-primary'>flex</p>
                <p className='m-2 p-2 text-bg-primary'>flex</p>
            </div>
            <div className='d-flex-column'>
                <p className='m-2 p-2 text-bg-primary'>flex</p>
                <p className='m-2 p-2 text-bg-primary'>flex</p>
                <p className='m-2 p-2 text-bg-primary'>flex</p>
            </div>
            <div className='d-flex flex-row-reverse'>
                <p className='m-2 p-2 text-bg-primary'>flex</p>
                <p className='m-2 p-2 text-bg-primary'>flex</p>
                <p className='m-2 p-2 text-bg-primary'>flex</p>
            </div>

            {/* WIDTH->w->predeined value  25,50,75,100 */}
            <div className='d-flex flex-column'>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
            </div>
            
            align-items-start, center, end
            <div className='d-flex flex-column align-items-start'>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
            </div>

            <div className='d-flex flex-column align-items-center'>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
            </div>
            <div className='d-flex flex-column align-items-end'>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
            </div>

            ALIGN-SELF-START
 
            <div className='d-flex flex-column align-items-end'>   {/*  align-self-start is used to allign the single element in the align-items-end */}
                <p className='m-2 p-2 text-bg-primary w-25 align-self-start'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-25'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-25'>flex</p>
            </div>

            as flex is row..it is row wise rendering

            <div className='d-flex '>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-50'>flex</p>
            </div>

            justify-content-center

            <div className='d-flex justify-content-center '>
                <p className='m-2 p-2 text-bg-primary w-25'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-25'>flex</p>
                <p className='m-2 p-2 text-bg-primary w-25'>flex</p>
            </div>




            {/* STACK->IT HAS ALL THE PROPERTIES OF FLEX->ALL THIS IN ABSTRACTION->SO WE CAN DEFINE ONLY..horizontal OR vertical */}
            {/* vertical stack->vstack */}
            <div className='vstack gap-1 allign-items-center '>
                <p className='m-2 p-2 text-bg-secondary w-50'>VStack</p>
                <p className='m-2 p-2 text-bg-secondary w-50'>VStack</p>
                <p className='m-2 p-2 text-bg-secondary w-50'>VStack</p>
            </div>

            <div className='hstack justify-content-center gap'>
                <p className='m-2 p-2 text-bg-secondary w-25'>HStack</p>
                <p className='m-2 p-2 text-bg-secondary w-25'>HStack</p>
                <p className='m-2 p-2 text-bg-secondary w-25'>HStack</p>
            </div>

            {/* shadow */}
            <div className='shadow bg-light m-3 p-3'>Shadow</div>
            <div className='shadow-none bg-light m-3 p-3'>Shadow</div>
            
            




        </Container>
    </div>
  )
}

export default Others