//正確率圓餅圖

document.addEventListener("DOMContentLoaded", function() {
  let arti_accuracy = document.getElementById('arti_accuracy')
  let cur_accuracy = parseFloat(arti_accuracy.dataset['accuracy'])
  let accu_data = [cur_accuracy, 100 - cur_accuracy]
  if(!!arti_accuracy){ //確認有arti_accuracy有這個物件才執行（強制轉型）
    arti_accuracy.getContext('2d');
    var chart = new Chart(arti_accuracy, {
      type: 'doughnut',
      data: {
        labels: ["Accuracy", "Inaccuracy"],
        datasets: [{
            label: 'Totle Accuracy',
            data: accu_data,
            backgroundColor: [
                '#3cce68',
                '#ff7091'
            ],
            borderColor: [
                '#3cce68',
                '#ff7091'
            ],
            borderWidth: 0
        }]
      }
    });
  }
});


//wpm圖表

document.addEventListener("DOMContentLoaded", function() {
  let arti_wpm = document.getElementById('arti_wpm')
  let cur_wpm =  parseInt(arti_wpm.dataset['wpm'])
  let wpm_data = [cur_wpm ]
  if(!!arti_wpm){ 
    arti_wpm.getContext('2d');
    var chart = new Chart(arti_wpm, {
      type: 'horizontalBar',
      data: {
        labels: ["Average wpm"],
        datasets: [{
            label: 'Speed(wpm)',
            data: wpm_data,
            backgroundColor: [
                '#6ac6ce'
            ],
            borderColor: [
                '#6ac6ce'
            ],
            borderWidth: 0
        }]
      }
    });
  }
});


//正確率日成長線圖

document.addEventListener("DOMContentLoaded", function() {
  let arti_accu_line = document.getElementById('arti_accu_line')
  let arti_day = JSON.parse(arti_accu_line.dataset['accday'])
  if(!!arti_accu_line){ 
    arti_accu_line.getContext('2d');
    var chart = new Chart(arti_accu_line, {
      type: 'line',
      data: {
        labels: Object.keys(arti_day),
        datasets: [{
            label: 'Accuracy%',
            data: Object.values(arti_day),
            backgroundColor: [
                '#ffc44c'
            ],
            borderColor: [
                '#6ac6ce'
            ],
            borderWidth: 0
        }]
      }
    });
  }
});

