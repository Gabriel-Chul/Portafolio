/*!
 * Chart.js v3.0.0-beta.3
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
 var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['HTML', 'CSS', 'PHP', 'SQL', 'JavaScript'],
        datasets: [{
            label: 'EXPERIENCIA EN LENGUAJES DEL 0 AL 100',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [90, 60, 65, 35, 15]
        }]
    },

    // Configuration options go here
    options: {}
});