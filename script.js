const lineChart = document.getElementById('myLineChart');
const bubbleChart = document.getElementById('myBubbleChart');
const donutChart = document.getElementById('myDonutChart');
const bar = document.getElementById('myBarChart');
const ctx = document.getElementById("ctx");



import { bubbleChartConfig } from "./configs/bubbleChart.js";
import { lineChartConfig } from "./configs/lineChart.js";
import { donutChartConfig } from "./configs/donutChart.js";
import { barConfig } from "./configs/barChart.js";
import { data } from "./configs/data.js";


new Chart(lineChart, lineChartConfig);
new Chart(bubbleChart, bubbleChartConfig);
new Chart(donutChart, donutChartConfig);
new Chart(bar, barConfig);

const labels = data.map(employee => employee.employee_name);
const salaries = data.map(employee => employee.employee_salary);
const ages = data.map(employee => employee.employee_age);


const config = {
    type: 'bar',
    data: {
        datasets: [
            {
                label: "Employee salaries",
                data:salaries 
                
            },
            {
                label: "Employee ages",
                data:ages
            }
        ],
        labels: labels
    },
    options:{}
}

new Chart(ctx, config);

