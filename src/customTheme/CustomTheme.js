import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
const CustomTheme = () => {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  return (
    <div>
        <p className='text-bg-primary'>Primary colour</p>
        refer this vedio:<a href='https://www.youtube.com/watch?v=NC5tbjXBErg&list=PLQeZxRj52I-G4YQ0AprLZWid4HuZH_d1w&index=7'>Click here</a>
        <br/>
        {/* <Button variant='primary'>Primary</Button> */}

        PopOver: 
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
    </div>
  )
}

export default CustomTheme