export const lineChartConfig = {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", 'June', "July"],
        datasets: [
            {
                label: "My credit score",
                borderColor: "red",
                data: [10, 35, 20,25,40,15,30]
            },
            {
                label: "My credit score2",
                borderColor: "green",
                data: [20, 30, 35,15,20,10, 25]
            }
        ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
}  