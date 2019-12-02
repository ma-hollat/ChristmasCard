const countdown = document.querySelector('.countdown');
const launchData = new Date('Dec 24, 2019 00:00:01').getTime();

const interval = setInterval(()=>{
    const now = new Date().getTime();
    const distance = launchData - now;
    console.log(distance);

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/1000);
    console.log(days, "days");
    console.log(hours, "hours");
    console.log(minutes, "minutes");
    console.log(seconds, "secunds");

    countdown.innerHTML = `
    <div><span>${days} päeva</span></div>
    <div><span>${hours} tundi</span></div>
    <div><span>${minutes} minutit</span></div>
    <div><span>${seconds} sekundit</span></div>
    `;

    if(distance<0){
        clearInterval(interval);
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = "Häid Jõule";
    }
}, 1000);