document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("findMoreBtn");
  const container = document.getElementById("extraToursContainer");

  const tours = [
    {
      title: "Jet Ski Adventure",
      price: 145,
      description:
        "Ride along the beautiful Pacific coast and enjoy breathtaking ocean views.",
      image: "/images/jetski/jetski-cover.jpg",
      modalImage: "/images/jetski/jetski-modal.jpg",
      link: "/pages/jetski.html",
      duration: "2 - 3 Hours",
      ages: "Ages 16+",
      location: "Guanacaste",
      childPrice: 145,
    },
    {
      title: "Catalina Islands Snorkeling",
      price: 185,
      description:
        "Explore the crystal-clear waters of the Catalina Islands and stunning marine life.",
      image: "/images/catalinas/catalinas-cover.webp",
      modalImage: "/images/catalinas/catalinas-modal.webp",
      link: "/pages/catalina.html",
      duration: "4 Hours",
      ages: "Ages 8+",
      location: "Catalina Islands",
      childPrice: 165,
    },
    {
      title: "Sunset Catamaran Tour",
      price: 210,
      description:
        "Sail the Pacific Ocean and enjoy an unforgettable Costa Rican sunset.",
      image: "/images/catamaran/catamaran-cover.jpg",
      modalImage: "/images/catamaran/catamaran-modal.jpg",
      link: "/pages/catamaran.html",
      duration: "5 Hours",
      ages: "All Ages",
      location: "Guanacaste Coast",
      childPrice: 180,
    },
  ];

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const cards = tours
      .map(
        (tour) => `
        <div class="elementor-column elementor-col-33">
          <div class="tour-card" style="background-image:url('${tour.image}')">

            <span class="tour-price">
              <span class="tour-price__label">FROM</span>
              <span class="tour-price__value">$${tour.price}</span>
            </span>

            <div class="tour-card__overlay"></div>

            <div class="tour-card__content">
              <h2 class="title">${tour.title}</h2>

              <p>
                ${tour.description}
              </p>

              <div class="tour-card__actions">
                <a
                    href="#"
                    class="book-btn openBookingModal"
                    data-tour-title="${tour.title}"
                    data-tour-description="${tour.description}"
                    data-tour-duration="${tour.duration}"
                    data-tour-ages="${tour.ages}"
                    data-tour-location="${tour.location}"
                    data-tour-price="${tour.price}"
                    data-tour-child-price="${tour.childPrice}"
                    data-tour-image="${tour.modalImage}"
                    >
                    BOOK NOW
                </a>

                <a href="${tour.link}" class="learn-btn">
                  LEARN MORE
                  <i aria-hidden="true" class="jki jki-right-arrow-12"></i>
                </a>

              </div>
            </div>

          </div>
        </div>
      `,
      )
      .join("");

    container.innerHTML = `
        <section class="elementor-section elementor-section-boxed extra-tours-section">
            <div class="elementor-container elementor-column-gap-no extra-tours-grid">
            ${cards}
            </div>
        </section>
    `;

    const section = container.querySelector(".extra-tours-section");

    requestAnimationFrame(() => {
      section.classList.add("show");
    });

    initDynamicBookingButtons();

    btn.style.display = "none";
  });
});

function initDynamicBookingButtons() {
  const modal = document.getElementById("bookingModal");

  document.querySelectorAll(".openBookingModal").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      document.getElementById("modalTourTitle").textContent =
        button.dataset.tourTitle;

      document.getElementById("modalTourDescription").textContent =
        button.dataset.tourDescription;

      document.getElementById("modalTourDuration").textContent =
        button.dataset.tourDuration;

      document.getElementById("modalTourAges").textContent =
        button.dataset.tourAges;

      document.getElementById("modalTourLocation").textContent =
        button.dataset.tourLocation;

      document.getElementById("modalTourPrice").textContent =
        "$" + button.dataset.tourPrice;

      document.getElementById("modalTourImage").src = button.dataset.tourImage;

      document.getElementById("tourNameInput").value = button.dataset.tourTitle;

      modal.classList.add("active");

      updateBookingTotal(
        Number(button.dataset.tourPrice),
        Number(button.dataset.tourChildPrice),
      );
    });
  });
}

let currentAdultPrice = 0;
let currentChildPrice = 0;

function updateBookingTotal(adultPrice, childPrice) {
  currentAdultPrice = adultPrice;
  currentChildPrice = childPrice;

  const adults = Number(document.getElementById("adults").value) || 0;

  const children = Number(document.getElementById("children").value) || 0;

  const total = adults * adultPrice + children * childPrice;

  document.getElementById("totalPrice").textContent = "$" + total.toFixed(2);
}

document.getElementById("adults").addEventListener("input", () => {
  updateBookingTotal(currentAdultPrice, currentChildPrice);
});

document.getElementById("children").addEventListener("input", () => {
  updateBookingTotal(currentAdultPrice, currentChildPrice);
});
