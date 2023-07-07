export const bubbleChartConfig = {
    type: "bubble",
    data: {
        datasets: [
            {
                label: "My bubble dataset",
                data: [ 
                    {x:5, y:15, r:6},
                    {x:10, y:8 , r:7},
                    {x:20 , y:12 , r:5},
                    {x:17 , y:4 , r:9},
                    {x:25 , y:8 , r:7}
                ],
                backgroundColor: ["red", "green", "blue", "pink", "purple"],
                borderWidth: 2,
                borderColor: ["blue", "pink", "purple", "green","red"]
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
};