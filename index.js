let hour = document.querySelector("#hr");
let minute = document.querySelector("#mn");
let second = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
    // second.style.transform = `rotateZ(${ss}deg)`;
});

