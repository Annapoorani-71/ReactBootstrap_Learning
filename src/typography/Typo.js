import React from 'react'
import {Container} from "react-bootstrap"

const Typo = () => {
  return (
    <div>

      <h1>THIS SECTION IS ABOUT TYPOGRAPHY AND TEXT</h1>
      <a href='https://getbootstrap.com/docs/5.0/content/typography/'> Refer Typography here:</a>
      <br/>
      <a href='https://getbootstrap.com/docs/5.0/utilities/text/'>Refer Text here:</a>

       <Container> {/*    container tag is used to centeralized or put as a container for all these text */}

      {/* CLASSNAME-h1-h5 */}
      <div>
         <h1>Hello world</h1>                      {/*  normal h1 tag */}
        <p className='h1'>Hello world</p>         {/*  para tag converted as h1 using bs*/}
        <h2>Hello world</h2>
        <p className='h2'>Hello world</p>
      </div>

      {/* DISPLAY HEADINGS - display-1 to display5*/}
      <div>
        <p className='display-1'>Hello world</p>
        <p className='display-2'>Hello world</p>
        <p className='display-3'>Hello world</p>
        <p className='display-4'>Hello world</p>
        <p className='display-5'>Hello world</p>
      </div>

      {/* LEADED AND MUTED CLASS */}
      <div>
      <p>Free, high quality, open source icon library with over 2,000 icons. Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project. </p>
      <p className='lead'>Free, high quality, open source icon library with over 2,000 icons. Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project.</p>
      <p className='lead text-muted'>Free, high quality, open source icon library with over 2,000 icons. Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project. </p>
      </div>
      {/* compare to lead, lead text-muted has little bit greyish colour */}


      {/* TEXT ALLIGNMENT */}
      <div>
        <p className='display-5 text-start'>Hello</p>
        <p className='display-5 text-center'>Hello</p>
        <p className='display-5 text-end'>Hello</p>
      </div>

      {/* CAPTILAZATION */}
      <div>
        <p className='text-capitalize'>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>
        <p className='text-uppercase'>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>
        <p className='text-lowercase'>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>
      </div>


      {/* FONT SIZE -fs1-fs6*/}
      <p className='fs-1'>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>


      {/* FONT WEIGHT AND SIZE */}
      <p className='fw-bold'>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>
      <p className='fw-bolder'>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>
      <p className='fw-semibold'>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>


      <p className='fst-italic'>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>


      {/* TEXT DECORATION */}
      <p className='text-decoration-underline'>Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.</p>


      <a href='#'>Anchor tag</a>
      <br/><br/><br/>
      <a href='#' className='text-decoration-none'>Anchor tag</a>


      </Container>
        

    </div>
  )
}

export default Typo