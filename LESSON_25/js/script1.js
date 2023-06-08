class Calendar {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.container = document.getElementById("calendar-container");
    this.prevButton = document.getElementById("prev-button");
    this.nextButton = document.getElementById("next-button");

    this.prevButton.addEventListener("click", () => this.prevMonth());
    this.nextButton.addEventListener("click", () => this.nextMonth());

    this.render();
  }

  getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  render() {
    this.container.innerHTML = "";
    const heading = document.createElement("h2");
    heading.textContent = `${this.months[this.month]} ${this.year}`;
    this.container.appendChild(heading);

    const calendarGrid = document.createElement("div");
    calendarGrid.classList.add("calendar-grid");

    for (let day of this.days) {
      const headerCell = document.createElement("div");
      headerCell.classList.add("day", "header-cell");
      header
      Cell.textContent = day;
      calendarGrid.appendChild(headerCell);
    }

    const firstDayOfMonth = new Date(this.year, this.month, 1).getDay();
    const daysInMonth = this.getDaysInMonth(this.month, this.year);

    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("day", "empty-cell");
      calendarGrid.appendChild(emptyCell);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayCell = document.createElement("div");
      dayCell.classList.add("day", "day-cell");
      dayCell.textContent = i;
      calendarGrid.appendChild(dayCell);
    }

    this.container.appendChild(calendarGrid);
  }

  prevMonth() {
    this.month--;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.render();
  }

  nextMonth() {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.render();
  }
}

const today = new Date();
const calendar = new Calendar(today.getMonth(), today.getFullYear());