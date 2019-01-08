
console.log('%c PermaFormaT is on', 'color: #4CAF50; font-weight: bolder;')
console.log('%c Your poliformat session will not close itself automatically', 'color: #4CAF50; font-weight: bolder;')

let timeout =100 * 1000; // Every 100.000 seconds (1,7 minutes)

setInterval(()=>{location.href="javascript: keep_session_alive(); void 0";}, timeout)
