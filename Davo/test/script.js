document.addEventListener('DOMContentLoaded', function () {
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function updateCalendar() {
        const calendarDays = document.getElementById('calendarDays');
        const currentMonthElement = document.getElementById('currentMonth');
        const eventDateInput = document.getElementById('eventDate');
        const eventsForDay = document.getElementById('eventsForDay');

        calendarDays.innerHTML = '';
        currentMonthElement.innerHTML = `${getMonthName(currentMonth)} ${currentYear}`;
        eventDateInput.min = getFormattedDate(new Date(currentYear, currentMonth, 1));
        eventDateInput.max = getFormattedDate(new Date(currentYear, currentMonth + 1, 0));

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const events = getEvents();

        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.textContent = i;
            day.addEventListener('click', () => handleDayClick(i));
            calendarDays.appendChild(day);

            const dateKey = getFormattedDate(new Date(currentYear, currentMonth, i));
            if (events[dateKey]) {
                day.classList.add('eventDay');
            }
        }

        updateEventList();
    }

    function getEvents() {
        const storedEvents = JSON.parse(localStorage.getItem('events')) || {};
        return storedEvents;a
    }

    function saveEvents(events) {
        localStorage.setItem('events', JSON.stringify(events));
    }

    document.getElementById('prevMonth').addEventListener('click', () => {
        currentMonth = (currentMonth - 1 + 12) % 12;
        if (currentMonth === 11) {
            currentYear--;
        }
        updateCalendar();
        updateEventList();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        currentMonth = (currentMonth + 1) % 12;
        if (currentMonth === 0) {
            currentYear++;
        }
        updateCalendar();
        updateEventList();
    });

    document.getElementById('addEvent').addEventListener('click', () => {
        const eventDateInput = document.getElementById('eventDate');
        const eventTextInput = document.getElementById('eventText');
        const selectedDate = eventDateInput.value;
        const eventText = eventTextInput.value;

        if (!eventText || !selectedDate) {
            alert('Please select a date and enter an event description.');
            return;
        }

        const dateKey = getFormattedDate(new Date(selectedDate));
        const events = getEvents();

        if (!events[dateKey]) {
            events[dateKey] = [];
        }

        events[dateKey].push(eventText);
        saveEvents(events);

        eventTextInput.value = '';
        updateEventList();
    });

    function updateEventList() {
        const eventDateInput = document.getElementById('eventDate');
        const eventsForDay = document.getElementById('eventsForDay');
        const selectedDate = new Date(eventDateInput.value);
        const dateKey = getFormattedDate(selectedDate);
        const events = getEvents();

        eventsForDay.innerHTML = '';

        if (events[dateKey]) {
            events[dateKey].forEach(event => {
                const eventItem = document.createElement('li');
                eventItem.textContent = event;
                eventsForDay.appendChild(eventItem);
            });
        } else {
            const noEventItem = document.createElement('li');
            noEventItem.textContent = 'No events for this day.';
            eventsForDay.appendChild(noEventItem);
        }
    }

    function handleDayClick(day) {
        const selectedDate = new Date(currentYear, currentMonth, day);
        const eventDateInput = document.getElementById('eventDate');
        eventDateInput.value = getFormattedDate(selectedDate);
        updateEventList();
    }

    function getFormattedDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function getMonthName(month) {
        const monthNames = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];
        return monthNames[month];
    }

    // Добавим вызов функции updateCalendar при загрузке страницы
    updateCalendar();
});
