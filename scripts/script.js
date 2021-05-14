

document.addEventListener("DOMContentLoaded", () => {
    
});

let is_started = false;
let time_counter = 60;
let cookie_counter = 0;

let cookie_count = document.querySelector("#cookie-count");
let game_time = document.querySelector("#game-time");
let final_res = document.querySelector("#final-res");

function OnCookieClick(){
    if (is_started){
        cookie_counter++;
        cookie_count.innerHTML = cookie_counter + ' печенек';
    }
}

function OnStartClick(){
    if (!is_started){
        is_started = true;
        timer_id = setInterval(() => {
            time_counter--;
            game_time.innerHTML = 'Время: ' + time_counter + ' с';
            if (time_counter == 0){ 
                clearInterval(timer_id);
                is_started = false;
                time_counter = 60;
                final_res.innerHTML = cookie_counter;
                cookie_counter = 0;
            }
          }, 1000);
    }
    
}