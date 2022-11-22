let analogTime = function () {
     setInterval(clock, 1000);
    let h = document.querySelector('#hour')
    let m = document.querySelector('#min')
    let s = document.querySelector('#sec')

    function clock() {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * 6;
        let ss = day.getSeconds() * 6;
        h.style.transform = `rotate(${hh}deg)`;
        m.style.transform = `rotate(${mm}deg)`;
        s.style.transform = `rotate(${ss}deg)`;
    }
}
analogTime();