// import React, { useRef } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { useReactToPrint } from 'react-to-print';

// // const DynamicPieChart = ({ data, labels }) => {
// //   const componentRef = useRef(null);

// //   const handlePrint = useReactToPrint({
// //     content: () => componentRef.current,
// //   });

// //   return (
// //     <div>
// //       <div style={{ width: '400px', height: '400px' }} ref={componentRef}>
// //         <Pie
// //           data={{
// //             labels: labels,
// //             datasets: [
// //               {
// //                 data: data,
// //                 backgroundColor: [
// //                   'rgba(255, 99, 132, 0.7)',
// //                   'rgba(54, 162, 235, 0.7)',
// //                   'rgba(255, 206, 86, 0.7)',
// //                   'rgba(75, 192, 192, 0.7)',
// //                   'rgba(153, 102, 255, 0.7)',
// //                   'rgba(255, 159, 64, 0.7)',
// //                 ],
// //                 borderColor: [
// //                   'rgba(255, 99, 132, 1)',
// //                   'rgba(54, 162, 235, 1)',
// //                   'rgba(255, 206, 86, 1)',
// //                   'rgba(75, 192, 192, 1)',
// //                   'rgba(153, 102, 255, 1)',
// //                   'rgba(255, 159, 64, 1)',
// //                 ],
// //                 borderWidth: 1,
// //               },
// //             ],
// //           }}
// //         />
// //       </div>
// //       <button onClick={handlePrint}>Export to PDF</button>
// //     </div>
// //   );
// // };

// // export default DynamicPieChart;



// src/DynamicPieChart.js
import React, { useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { useReactToPrint } from 'react-to-print';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const DynamicPieChart = ({ data, labels }) => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div style={{ width: '400px', height: '400px' }} ref={componentRef}>
        <Pie
          data={{
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                  'rgba(255, 159, 64, 0.7)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
        <p>HAI HELLO...DOWNLOAD THE PDF MANNER</p>
      </div>
      <button onClick={handlePrint}>Export to PDF</button>
    </div>
  );
};

export default DynamicPieChart;
