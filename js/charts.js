
//CHART
var lineChart = document.getElementById("lineChart-daily");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["1","2", "3", "4", "5", "6", "7", "8"],
        datasets: [{
            label: 'Traffic',
            lineTension: 0.2,
            backgroundColor: 'rgba(96, 96, 205, 0.2)',
            borderCapStyle: 'square',
            borderColor: "#6E75DA",
            pointBorderColor: '#545475',
            pointBackgroundColor: '#F6F7FF',
            pointBorderWidth: 1,
            pointRadius: 4,
            pointHoverRadius: 6,
            data: [132, 103, 396, 51, 47, 350, 31, 68]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



//BAR CHART

var barChart = document.getElementById("barChart");
var myChart2 = new Chart(barChart, {
    type: "bar",
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: 'Visited',
                data: [89, 173, 102, 98, 278, 219, 59],
                backgroundColor: "rgba(96, 96, 205, 0.6)",
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

//PIE CHART

var doughnutChart = document.getElementById("pieChart");
var myChart3 = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: [
            "Phones",
            "Tablets",
            "Desktop",
        ],
        datasets: [{
            data: [69, 23, 12],
            backgroundColor: [
                "rgb(65, 72, 169)",
                "rgb(51, 201, 51)",
                "rgb(96, 96, 205)"
            ]
        }]
    }
});
