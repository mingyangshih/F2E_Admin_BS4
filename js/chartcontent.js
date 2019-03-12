//chart content
let ctx = document.getElementById('myChart').getContext('2d');
let revenueData = {
  backgroundColor: 'transparent',
  borderColor: '#7ED321',
  pointBorderColor: '#7ED321',
  pointBackgroundColot: 'transparent',
  borderWidth: 4,
  pointHoverRadius: 10,
  data: [2500, 3000, 2800, 6000, 7500, 5500, 4500, 4800],
}
let costData = {
  backgroundColor: 'transparent',
  borderColor: '#D0021B',
  pointBorderColor: '#D0021B',
  pointBackgroundColot: 'transparent',
  borderWidth: 4,
  pointHoverRadius: 10,
  data: [2500, 1800, 2800, 1500, 800, 2000, 2200, 1000],
}
let incomeData = {
  backgroundColor: 'transparent',
  borderColor: '#4A90E2',
  pointBorderColor: '#4A90E2',
  pointBackgroundColot: 'transparent',
  borderWidth: 4,
  pointHoverRadius: 10,
  data: [6000, 5500, 2000, 4000, 3800, 5000, 6200, 4900],
}

let combineData = {
  labels: ["6 JUN", "7 JUN", "8 JUN", "9 JUN", "10 JUN", "11 JUN", "12 JUN", "13 JUN"],
  datasets: [revenueData, costData, incomeData]
};

let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: combineData,
  //configuration options go here
  options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          stepSize: 2000,
          suggestedMax: 8000,
          fontColor: '#9B9B9B',
          fontSize: 16,
          padding: 28
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: '#9B9B9B',
          fontSize: 16,
          paddingTop: 25
        }
      }]
    }
  }
})