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
      link: "/pages/jetski.html",
    },
    {
      title: "Catalina Islands Snorkeling",
      price: 185,
      description:
        "Explore the crystal-clear waters of the Catalina Islands, sea turtles and stunning marine life.",
      image: "/images/catalinas/catalinas-cover.jpg",
      link: "/pages/catalinas.html",
    },
    {
      title: "Sunset Catamaran Tour",
      price: 110,
      description:
        "Sail the Pacific Ocean and enjoy an unforgettable Costa Rican sunset.",
      image: "/images/catamaran/catamaran-cover.jpg",
      link: "/pages/catamaran.html",
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
                <a href="#" class="book-btn">
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

    btn.style.display = "none";
  });
});
