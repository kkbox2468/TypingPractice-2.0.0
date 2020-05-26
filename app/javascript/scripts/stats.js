$(function(){
  if ( $('#stats-index').length > 0 ){
    document.addEventListener("DOMContentLoaded", function() {
      let arti_accuracy = document.getElementById('arti_accuracy')
      let cur_accuracy = parseFloat(arti_accuracy.dataset['accuracy'])
      let accu_data = [cur_accuracy, 100 - cur_accuracy]
      if(!!arti_accuracy){ //確認有arti_accuracy有這個物件才執行（強制轉型）
        // console.log(arti_accuracy)
        arti_accuracy.getContext('2d');
        var chart = new Chart(arti_accuracy, {
          type: 'doughnut',
          data: {
            labels: ["Accuracy", "Inaccuracy"],
            datasets: [{
                label: 'Accuracy',
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
    
    document.addEventListener("DOMContentLoaded", function() {
      let arti_wpm = document.getElementById('arti_wpm')
      let cur_wpm =  parseFloat(arti_wpm.dataset['wpm'])
      let wpm_data = [cur_wpm ]
      if(!!arti_wpm){ 
        // console.log(arti_wpm)
        arti_wpm.getContext('2d');
        var chart = new Chart(arti_wpm, {
          type: 'horizontalBar',
          data: {
            // labels: ["Avg wpm"],
            datasets: [{
                label: 'wpm',
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
    })
  }
})


