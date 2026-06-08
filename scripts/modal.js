const modal = document.getElementById("bookingModal");
const openButtons = document.querySelectorAll(".openBookingModal");
const closeBtn = document.getElementById("closeBookingModal");
const overlay = document.querySelector(".booking-modal__overlay");
const tourNameInput = document.getElementById("tourNameInput");

const tourDateInput = document.getElementById("tourDate");
const calendarMessage = document.getElementById("calendarMessage");

/* TOUR DATA */

let tourData = {
  name: "",
  description: "",
  adultPrice: 0,
  childPrice: 0,
  image: "",
  duration: "",
  ages: "",
  location: "",
};

/* MODAL CONTENT */

const modalTourTitle = document.getElementById("modalTourTitle");
const modalTourDescription = document.getElementById("modalTourDescription");
const modalTourImage = document.getElementById("modalTourImage");
const modalTourDuration = document.getElementById("modalTourDuration");
const modalTourAges = document.getElementById("modalTourAges");
const modalTourLocation = document.getElementById("modalTourLocation");
const modalTourPrice = document.getElementById("modalTourPrice");

/* LOAD TOUR DATA */

function loadTourData() {
  if (modalTourTitle) {
    modalTourTitle.textContent = tourData.name;
  }

  if (modalTourDescription) {
    modalTourDescription.textContent = tourData.description;
  }

  if (modalTourImage) {
    modalTourImage.src = tourData.image;
    modalTourImage.alt = tourData.name;
  }

  if (modalTourDuration) {
    modalTourDuration.textContent = tourData.duration;
  }

  if (modalTourAges) {
    modalTourAges.textContent = tourData.ages;
  }

  if (modalTourLocation) {
    modalTourLocation.textContent = tourData.location;
  }

  if (modalTourPrice) {
    modalTourPrice.textContent = `$${tourData.adultPrice}`;
  }

  if (tourNameInput) {
    tourNameInput.value = tourData.name;
  }
}

/* CLOSE MODAL */

function closeModal() {
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn?.addEventListener("click", closeModal);
overlay?.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal?.classList.contains("active")) {
    closeModal();
  }
});

/* PRICE CALCULATOR */

const adultsInput = document.getElementById("adults");
const childrenInput = document.getElementById("children");
const totalPrice = document.getElementById("totalPrice");

function updatePrice() {
  if (!totalPrice) return;

  const adults = parseInt(adultsInput?.value || 0, 10);
  const children = parseInt(childrenInput?.value || 0, 10);

  const total = adults * tourData.adultPrice + children * tourData.childPrice;

  totalPrice.textContent = `$${total}`;
}

adultsInput?.addEventListener("input", updatePrice);
childrenInput?.addEventListener("input", updatePrice);

/* OPEN MODAL */

openButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const pageHasCalendar = document.getElementById("calendarGrid") !== null;

    if (pageHasCalendar) {
      const hasCalendarDate =
        typeof selectedDate !== "undefined" &&
        selectedDate !== null &&
        selectedDate !== "";

      if (!hasCalendarDate) {
        if (calendarMessage) {
          calendarMessage.classList.add("show");

          clearTimeout(window.calendarMessageTimeout);

          window.calendarMessageTimeout = setTimeout(() => {
            calendarMessage.classList.remove("show");
          }, 3000);
        }

        return;
      }

      if (tourDateInput) {
        tourDateInput.value = selectedDate;
      }
    }

    /* LOAD TOUR FROM BUTTON */

    tourData = {
      name: button.dataset.tourTitle || "",
      description: button.dataset.tourDescription || "",
      adultPrice: Number(button.dataset.tourPrice) || 0,
      childPrice: Number(button.dataset.tourChildPrice) || 0,
      image: button.dataset.tourImage || "",
      duration: button.dataset.tourDuration || "",
      ages: button.dataset.tourAges || "",
      location: button.dataset.tourLocation || "",
    };

    loadTourData();

    if (tourDateInput) {
      tourDateInput.value = selectedDate;
    }

    if (adultsInput) adultsInput.value = 1;
    if (childrenInput) childrenInput.value = 0;

    updatePrice();

    modal?.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});
