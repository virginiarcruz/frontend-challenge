const cityTemp = frontEndChallenge.getCity(['3421319,3445709,184745']);
const cityEl = document.getElementById('box');

cityTemp
.then(data => {
  markup = data.list.map(item =>
    `<div class="card">
    <header class="card-header">${item.name}, ${item.sys.country} </header>
    <p class="card-temperature" data-value="${item.main.temp}">${item.main.temp}<span class="card-degree">°</span></p>
    <div class="card-footer">
    <div class="card-footer-item"> <p class="card-footer-title">HUMIDITY</p>${item.main.humidity}<span class="card-footer-unity unity-humidity">%</span> </div>
    <div class="card-footer-item"> <p class="card-footer-title">PRESSURE</p>${item.main.pressure}<span class="card-footer-unity unity-hpa">hPa</span></div>
    <p class="card-footer-txt">Uploaded at 02:48:50 PM</p>
    </div>
    </div>`
  ).join('');
  cityEl.innerHTML = markup;
})


cityTemp
.then(data => {
  const tempItem = document.querySelectorAll('[data-value]');
  temp = data.list.map((item) => {
    for( let i=0; i < tempItem.length; i++ ) {
      let tempValue = tempItem[i].getAttribute('data-value');
      if(tempValue < 5) {
        tempItem[i].classList.add("color-blue");
      }
      else if (tempValue >= 5 && tempValue< 25) {
        tempItem[i].classList.add("color-orange");
      }
      else if (tempValue > 25) {
        tempItem[i].classList.add("color-red");
      }
    }
  });
});


function refresh(time) {
  setInterval(cityTemp, time);
}
refresh(10 * 60 * 1000);
