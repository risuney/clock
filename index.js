const road_date = String(Date.now())
const road_datecut = Number(road_date.slice(0, -3))
const setdate = Number(String(road_datecut + 2) + '00')

const interval = setInterval(function(){
  const now_date = String(Date.now())
  const now_datecut = Number(now_date.slice(0, -1))
  if (now_datecut == setdate) {
    displayClock()
    clearInterval(interval)
  }
}, 10)

function displayClock() {
  setInterval(function(){
    const date = new Date()
    const hh = zeroPad(date.getHours())
    const mm = zeroPad(date.getMinutes())
    const ss = zeroPad(date.getSeconds())
    const time = `${hh}:${mm}:${ss}`
    document.querySelector('#clock').textContent = time
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
