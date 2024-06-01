import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Grid = () => {
  return (
    <div>
        <Container fluid="md">
            {/* Basic Grid */}
            <a href='https://react-bootstrap.netlify.app/docs/layout/grid/'>Refer the grid component on click here</a>
            <Row>
                <Col className="text-bg-primary border">
                    Grid
                </Col>
                <Col className="text-bg-primary border">
                    Grid
                </Col>
            </Row>
            <Row>
            <Col className="text-bg-success border">
                    Grid
                </Col>
                <Col className="text-bg-success border">
                    Grid
                </Col>
            </Row>

            {/* Auto Layout Columns ->equally spaced grids*/}

            {/* Width Determination of grid ->total size12*/}

            <Row>
                <Col className="text-bg-primary border" xs={6}>
                    Grid with column6 (column 6 is the default too)
                </Col>
                <Col className="text-bg-primary border" xs={5}>
                    Grid with column5 for whole browser
                </Col>
            </Row>

            <br/><br/><br/><br/>

            {/* Setting one column width */}

            in below code..the total screen width is 12...i set the first one is 6, so (12-6)=7..the 7 would split up into two sectors(the case may differ), so each falls on 3.5 and 3.5

            <Row>
                <Col className="text-bg-primary border" xs={6}>
                    Grid with column6 (column 6 is the default too)
                </Col>
                <Col className="text-bg-primary border" >
                    Grid with column6 (column 6 is the default too)
                </Col>
                <Col className="text-bg-primary border" >
                    Grid with column5 for whole browser
                </Col>
            </Row>


            <br/>
            <br/> <br/> <br/> <br/> <br/>
            when u fix md here...the grid layout..it would took 100% for xs and from the md onwards the 12-6=6, then 6/2=3 calculation may apply
            <Row>
                <Col className="text-bg-primary border" md={6}>
                    Grid with column6 (column 6 is the default too)
                </Col>
                <Col className="text-bg-primary border" >
                    Grid with column6 (column 6 is the default too)
                </Col>
                <Col className="text-bg-primary border" >
                    Grid with column5 for whole browser
                </Col>
            </Row>

           <br/><br/><br/><br/>


           <Row className="justify-content-md-center">
              <Col xs lg="2" className='text-bg-secondary border'>
                1 of 3
              </Col>
              <Col md="auto" className='text-bg-secondary border'>
                Variable width content
              </Col>
              <Col xs lg="2" className='text-bg-secondary border'>
                3 of 3
              </Col>
            </Row>
            <Row>
              <Col className='text-bg-secondary border'>
                1 of 3
              </Col>
              <Col md="auto" className='text-bg-secondary border'>
                Variable width content
              </Col>
              <Col xs lg="2" className='text-bg-secondary border'>
                3 of 3
              </Col>
           </Row>

        </Container>
    </div>
  )
}

export default Grid