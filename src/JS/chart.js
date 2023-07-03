import Chart from 'chart.js/auto'


function createChart(obj, resizeInput){
  appendCanvas()
  const capitalizedTitle = capitalizeFirstLetter(resizeInput); // capitalize first letter

  new Chart(
      document.getElementById('acquisitions'),
      {
        type: 'doughnut',
        data: {
          labels: obj.map(row => row.name),  //mapping object for labels
          datasets: [
            {
              labels: obj.map(row => row.name),  //mapping object for labels
              data: obj.map(row => row.score_out_of_10),  //mapping object for score
              backgroundColor: obj.map(row => row.color),  //mapping object for color
              hoverOffset: 40,
              borderColor: "black"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              bottom: 40,
              top: 40
            }
          },
          plugins: {
            title: {
              display: true,
              text: capitalizedTitle,
              color: "White",
              font:{
                size: 30
              }
            },
            legend:{
              labels: {
                color: 'white',
                boxWidth: 20,
                boxHeight: 30
              },
            }
          }
        }
      }
    );
}

function appendCanvas() {
  let selector = document.querySelector("#canvas");
  const canvas = document.createElement("canvas");
  Object.assign(canvas, {
      id: 'acquisitions'
  });
  selector.appendChild(canvas);
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export {createChart}