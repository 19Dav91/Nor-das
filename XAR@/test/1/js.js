document.addEventListener("DOMContentLoaded", function () {
  let calendar = document.getElementById("calendar");
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  function generateCalendar(year, month) {
    let date = new Date(year, month);
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let daysInMonth = lastDay.getDate();
    let startingDay = firstDay.getDay();
    let monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let calendarHTML = "<h2>" + monthNames[month] + " " + year + "</h2>";
    calendarHTML += "<div class='calendar-nav'>";
    calendarHTML += "<button id='prev-btn'>&lt;</button>";
    calendarHTML += "<button id='next-btn'>&gt;</button>";
    calendarHTML += "</div>";
    calendarHTML += "<table>";
    calendarHTML += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

    let day = 1;
    for (let i = 0; i < 6; i++) {
      calendarHTML += "<tr>";

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startingDay) || day > daysInMonth) {
          calendarHTML += "<td></td>";
        } else {
          let className = "";
          if (year === currentYear && month === currentMonth && day === currentDay) {
            className = "current-day";
          }
          calendarHTML += "<td class='" + className + "'>" + day + "</td>";
          day++;
        }
      }

      calendarHTML += "</tr>";

      if (day > daysInMonth) {
        break;
      }
    }

    calendarHTML += "</table>";
    calendar.innerHTML = calendarHTML;

    let prevBtn = document.getElementById("prev-btn");
    let nextBtn = document.getElementById("next-btn");

    prevBtn.addEventListener("click", function () {
      month--;
      if (month < 0) {
        year--;
        month = 11;
      }
      generateCalendar(year, month);
    });

    nextBtn.addEventListener("click", function () {
      month++;
      if (month > 11) {
        year++;
        month = 0;
      }
      generateCalendar(year, month);
    });
  }

  generateCalendar(currentYear, currentMonth);
});

