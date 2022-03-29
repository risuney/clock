const road_date = String(Date.now()) //文字のDate
const road_date_num = Number(road_date) //上をナンバーに変換
const road_datecut = Number(road_date.slice(0, -3)) //msをsに変換（1000 -> 1.000  小数点以下切り捨て）
const setdate = Number(String(road_datecut + 1) + '000') //road_datecutに1秒足してmsに変換

const time_difference = setdate - road_date_num //目標値(setdate)までのmsを算出

console.log([road_date, road_date_num, road_datecut, setdate, time_difference])

setTimeout(() => {
  displayClock()
}, time_difference)

function displayClock() {
  setInterval(function(){
    const date = new Date()
    const hh = zeroPad(date.getHours())
    const mm = zeroPad(date.getMinutes())
    const ss = zeroPad(date.getSeconds())
    const time = `${hh}:${mm}:${ss}`
    document.querySelector('#clock').textContent = time
    const mmss = Number(mm + ss)
    if (mmss % 500 == 0) {
      location.reload() //5分毎にリロード
    }
  },1000)
}

function zeroPad(num) {
  const str = String(num)
  const pad = str.padStart(2, 0)
  return pad
}

let timer
window.addEventListener('mousemove', function() {
  document.body.classList.remove('hide-cursor')
  clearTimeout(timer)
  timer = setTimeout(function() {
    document.body.classList.add('hide-cursor')
  }, 3000)
})
