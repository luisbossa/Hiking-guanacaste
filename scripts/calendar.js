const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");

const prevMonthBtn = document.getElementById("calendarPrev");
const nextMonthBtn = document.getElementById("calendarNext");

const selectedDateText = document.getElementById("selectedDate");
const bookingBtn = document.getElementById("calendarBookBtn");

let selectedDate = null;

const today = new Date();

let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function renderCalendar(month, year) {
  calendarGrid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = new Date(year, month).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendarGrid.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const btn = document.createElement("button");

    btn.type = "button";
    btn.classList.add("booking-calendar-day");

    btn.textContent = day;

    const currentDate = `${year}-${String(month + 1).padStart(
      2,
      "0",
    )}-${String(day).padStart(2, "0")}`;

    if (selectedDate === currentDate) {
      btn.classList.add("selected");
    }

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".booking-calendar-day")
        .forEach((el) => el.classList.remove("selected"));

      btn.classList.add("selected");

      selectedDate = `${year}-${String(month + 1).padStart(
        2,
        "0",
      )}-${String(day).padStart(2, "0")}`;

      calendarMessage.classList.remove("show");

      if (selectedDateText) {
        selectedDateText.textContent = selectedDate;
      }
    });

    calendarGrid.appendChild(btn);
  }
}

prevMonthBtn.addEventListener("click", () => {
  currentMonth--;

  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }

  renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener("click", () => {
  currentMonth++;

  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);

bookingBtn.addEventListener("click", (e) => {
  if (!selectedDate) {
    e.preventDefault();

    calendarMessage.classList.add("show");

    const y =
      calendarMessage.getBoundingClientRect().top + window.pageYOffset - 150;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    return;
  }

  calendarMessage.classList.remove("show");
});
