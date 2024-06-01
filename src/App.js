// import 'bootstrap/dist/css/bootstrap.min.css';
// import Typo from "./typography/Typo"
// import ImageComponent from './image/Image';
// import Theme from './theme/Theme';
// import Others from './others/Others';
// import Breakpoints from './Breakpoints/Breakpoints';
// import Grid from './Grid/Grid';
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/main.min.css";
// import CustomTheme from './customTheme/CustomTheme';
// import DynamicPieChart from './Chart';
// function App() {
//   return (
//    <div>
//     <p className='display-5'>Bootstrap</p>
//     {/* <Typo/>
//     <ImageComponent/> 
//     <Theme/>
//     <Others/>
//     <Breakpoints/> 
//     <Grid/>*/}
//     <CustomTheme/>
//     <DynamicPieChart/>
//    </div>
//   );
// }


// export default App;







// // src/App.js
// import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';

// const ComponentToPrint = React.forwardRef((props, ref) => (
//   <div ref={ref}>
//     <h1>Hello World</h1>
//     <p>This page prints as pdf</p>
//   </div>
// ));

// const App = () => {
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   return (
//     <div>
//       <ComponentToPrint ref={componentRef} />
//       <button onClick={handlePrint}>Print this out!</button>
//     </div>
//   );
// };

// export default App;




// src/App.js
// import React from 'react';
// import DynamicPieChart from './Chart';

// const App = () => {
//   const data = [10, 20, 30, 40, 50, 60];
//   const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

//   return (
//     <div>
//       <h1>Printable Pie Chart</h1>
//       <DynamicPieChart data={data} labels={labels} />
//     </div>
//   );
// };

// export default App;




import React from 'react'
import AppBar from './components/AppBar';


const App = () => {
  return (
    <div>
      <AppBar/>
    </div>
  )
}

export default App
