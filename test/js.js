document.addEventListener("DOMContentLoaded", function() {
    var calendar = document.getElementById("calendar");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
  
    function generateCalendar(year, month) {
      var date = new Date(year, month);
      var firstDay = new Date(year, month, 1);
      var lastDay = new Date(year, month + 1, 0);
      var daysInMonth = lastDay.getDate();
      var startingDay = firstDay.getDay();
      var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      var calendarHTML = "<h2>" + monthNames[month] + " " + year + "</h2>";
      calendarHTML += "<div class='calendar-nav'>";
      calendarHTML += "<button id='prev-btn'>&lt;</button>";
      calendarHTML += "<button id='next-btn'>&gt;</button>";
      calendarHTML += "</div>";
      calendarHTML += "<table>";
      calendarHTML += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
      
      var day = 1;
      for (var i = 0; i < 6; i++) {
        calendarHTML += "<tr>";
        
        for (var j = 0; j < 7; j++) {
          if ((i === 0 && j < startingDay) || day > daysInMonth) {
            calendarHTML += "<td></td>";
          } else {
            var className = "";
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
      
      var prevBtn = document.getElementById("prev-btn");
      var nextBtn = document.getElementById("next-btn");
      
      prevBtn.addEventListener("click", function() {
        month--;
        if (month < 0) {
          year--;
          month = 11;
        }
        generateCalendar(year, month);
      });
      
      nextBtn.addEventListener("click", function() {
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
  