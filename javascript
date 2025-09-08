const monthName = document.getElementById("month-name")

const dayName = document.getElementById("day-name")

const dayNum = document.getElementById("day-number");

const year = document.getElementById("year");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/*
const date = new Date();

monthNameE1.innerText = date.toLocaleString("en",
    {month:"long"});

dayNameE1.innerText = date.toLocaleStrings("en",{
    weekday:"long"
});

dayNumE1.innerText = date.getDate()

yearE1.innerText = date.getFullYear()
*/


let currentDate = new Date();

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const days = [
"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function updateCalendar(date){
  monthName.textContent = months[date.getMonth()];
  dayName.textContent = days[date.getDay()];
  dayNum.textContent = date.getDate();
  year.textContent = date.getFullYear();
}

// Initial load
updateCalendar(currentDate);

// Next Day
nextBtn.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1);
  updateCalendar(currentDate);
});

// Previous Day
prevBtn.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1);
  updateCalendar(currentDate);
});

todayBtn.addEventListener("click",()=> {
    currentDate = new Date();
    updateCalendar(currentDate);
});


const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click" ,() => {
    document.body.classList.toggle("dark-mode");

    if  (document.body.classList.contains("dark-mode")) {
         darkModeBtn.textContent = "Light Mode";
    }
    else{
        darkModeBtn.textContent = "Dark Mode"
    }
});

