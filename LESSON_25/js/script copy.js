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
    }}}