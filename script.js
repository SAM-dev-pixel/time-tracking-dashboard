fetch('data.json').then(response => response.json()).then(data => {
  let box = '';
  data.forEach(data => box += activityBox(data));
  document.querySelector('.activities-container').innerHTML = box;
});

function activityBox(data) {
  return `<div class="activity-box ${data.title.toLowerCase()}">
          <div class="activity-head">
            <img src="img/icon-${data.title.toLowerCase()}.svg" alt="" class="activity-icon">
          </div>
          <div class="activity-body">
            <h3 class="activity-title">${data.title}</h3>
            <img src="img/icon-ellipsis.svg" alt="" class="dots-btn">
            <h4 class="hour-txt">${data.timeframes.weekly.current}hrs</h4>
            <p class="prev-hour-txt">Last Week - ${data.timeframes.weekly.previous}hrs</p>
          </div>
        </div>`
}
document.querySelectorAll('.period h2')[1].classList.add('active');

