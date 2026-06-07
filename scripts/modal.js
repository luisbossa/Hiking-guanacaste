const modal = document.getElementById("bookingModal");
const openButtons = document.querySelectorAll(".openBookingModal");
const closeBtn = document.getElementById("closeBookingModal");
const overlay = document.querySelector(".booking-modal__overlay");

const tourDateInput = document.getElementById("tourDate");
const calendarMessage = document.getElementById("calendarMessage");

/* TOUR DATA */

const tourData = {
  name: document.body.dataset.tourName || "",
  description: document.body.dataset.tourDescription || "",
  adultPrice: Number(document.body.dataset.tourPrice) || 0,
  childPrice: Number(document.body.dataset.tourKidsPrice) || 0,
  image: document.body.dataset.tourImage || "",
  duration: document.body.dataset.tourDuration || "",
  ages: document.body.dataset.tourAges || "",
  location: document.body.dataset.tourLocation || "",
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
}

loadTourData();

/* CLOSE MODAL */

function closeModal() {
  modal?.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn?.addEventListener("click", closeModal);
overlay?.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

/* PRICE CALCULATOR */

const adultsInput = document.getElementById("adults");
const childrenInput = document.getElementById("children");
const totalPrice = document.getElementById("totalPrice");

function updatePrice() {
  if (!totalPrice) return;

  const adults = Number(adultsInput?.value) || 0;
  const children = Number(childrenInput?.value) || 0;

  const total = adults * tourData.adultPrice + children * tourData.childPrice;

  totalPrice.textContent = `$${total}`;
}

adultsInput?.addEventListener("input", updatePrice);
childrenInput?.addEventListener("input", updatePrice);

updatePrice();

/* OPEN MODAL */

openButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (!selectedDate) {
      calendarMessage?.classList.add("show");

      clearTimeout(window.calendarMessageTimeout);

      window.calendarMessageTimeout = setTimeout(() => {
        calendarMessage?.classList.remove("show");
      }, 3000);

      return;
    }

    if (tourDateInput) {
      tourDateInput.value = selectedDate;
    }

    updatePrice();

    modal?.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});
