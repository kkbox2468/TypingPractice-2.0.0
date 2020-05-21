document.addEventListener("DOMContentLoaded", function() {
  let arti_accuracy = document.getElementById('chart')
  let cur_accuracy = parseFloat(arti_accuracy.dataset['accuracy'])
  let data = [cur_accuracy, 100 - cur_accuracy]
  if(!!arti_accuracy){ //確認有arti_accuracy有這個物件才執行（強制轉型）
    console.log(arti_accuracy)
    arti_accuracy.getContext('2d');
    var chart = new Chart(arti_accuracy, {
      type: 'doughnut',
      data: {
        labels: ["Accuracy", "Error"],
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: [
                '#acffa0',
                '#ffb2bf'
            ],
            borderColor: [
                '#acffa0',
                '#ffb2bf'
            ],
            borderWidth: 0
        }]
      }
    });
  }
})

