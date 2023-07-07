const lineChart = document.getElementById('myLineChart');
const bubbleChart = document.getElementById('myBubbleChart');
const donutChart = document.getElementById('myDonutChart');
const bar = document.getElementById('myBarChart');


import { bubbleChartConfig } from "./configs/bubbleChart.js";
import { lineChartConfig } from "./configs/lineChart.js";
import { donutChartConfig } from "./configs/donutChart.js";
import { barConfig } from "./configs/barChart.js";


new Chart(lineChart, lineChartConfig);
new Chart(bubbleChart, bubbleChartConfig);
new Chart(donutChart, donutChartConfig);
new Chart(bar, barConfig);

