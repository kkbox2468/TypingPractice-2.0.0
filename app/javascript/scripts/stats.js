document.addEventListener("DOMContentLoaded", function() {
  var accuracy = document.getElementById('chart')
  if(!!accuracy){
    console.log(accuracy)
    accuracy.getContext('2d');
    var chart = new Chart(accuracy, {
      type: 'doughnut',
      data: {
        labels: ["accuracy", "total"],
        datasets: [{
            label: '# of Votes',
            data: [90, 10],
            backgroundColor: [
                '#75ee70',
                'rgb(70, 70, 70)'
            ],
            borderColor: [
                '#75ee70',
                'rgba(70, 70, 70,1)'
            ],
            borderWidth: 0
        }]
      }
    });
  }
})

