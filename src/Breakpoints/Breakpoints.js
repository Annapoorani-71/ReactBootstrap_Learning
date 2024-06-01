import React from 'react'
import BootStrapImage from "../assests/bootstrap-size.jpg"
import ContainerBreakpoint from "../assests/container-breakpoint.png"
import { Container, Image } from 'react-bootstrap'

const Breakpoints = () => {
  return (
    <div>
        <a href='https://getbootstrap.com/docs/5.0/layout/breakpoints/'>Break point reference in bootstrap 5</a>
        <Image src={BootStrapImage} 
        
        fluid />
       <a href=' https://getbootstrap.com/docs/5.0/layout/containers/'>Container Breakpoint</a>


       <Image src={ContainerBreakpoint}/>

        <>
        <Container>
            <div className=' mt-3 text-bg-primary'>Normal Container</div>
        </Container>
        </>

        <>
        <Container fluid>
            <div className='mt-3 text-bg-secondary' >
                Fluid Container
            </div>
        </Container>
        </>

        <>
        <Container fluid="md">
            <div className='mt-3 text-bg-success' >
                Fluid Container with md
            </div>
        </Container>
        </>

    </div>
  )
}

export default Breakpoints