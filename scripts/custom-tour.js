document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("customTourForm");

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const preferredDate = document.getElementById("preferredDate");
  const budget = document.getElementById("budget");
  const adventureDescription = document.getElementById("adventureDescription");

  const message = document.getElementById("formMessage");

  const activityCheckboxes = document.querySelectorAll(
    '.checkbox-grid input[type="checkbox"]',
  );

  function showMessage(text, type) {
    message.textContent = text;

    message.classList.remove("error", "success");

    message.classList.add(type, "show");

    message.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  function clearErrors() {
    document
      .querySelectorAll(".error")
      .forEach((el) => el.classList.remove("error"));
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();

    const activitiesSelected = [...activityCheckboxes].some(
      (checkbox) => checkbox.checked,
    );

    let isValid = true;

    if (!fullName.value.trim()) {
      fullName.classList.add("error");
      isValid = false;
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
      email.classList.add("error");
      isValid = false;
    }

    if (!phone.value.trim()) {
      phone.classList.add("error");
      isValid = false;
    }

    if (!preferredDate.value) {
      preferredDate.classList.add("error");
      isValid = false;
    }

    if (!budget.value) {
      budget.classList.add("error");
      isValid = false;
    }

    if (!activitiesSelected) {
      showMessage(
        "Please select at least one activity for your custom tour.",
        "error",
      );

      return;
    }

    if (!adventureDescription.value.trim()) {
      adventureDescription.classList.add("error");
      isValid = false;
    }

    if (!isValid) {
      showMessage(
        "Please complete all required fields before submitting your request.",
        "error",
      );

      return;
    }

    showMessage(
      "✅ Your custom tour request has been sent successfully. Our team will contact you shortly.",
      "success",
    );

    form.reset();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      field.classList.remove("error");
    });
  });
});
