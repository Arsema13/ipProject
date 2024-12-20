// Get the form element
const form = document.querySelector("form");

// Add event listener for form submission
form.addEventListener("submit", function (e) {
  // Prevent the form from submitting normally
  e.preventDefault();

  // Get the input field values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Check if the form is filled out correctly
  if (name && email && message) {
    // Display a confirmation message
    alert("Thank you for contacting us, " + name + "! We will get back to you soon.");

    // Optionally, clear the form after submission
    form.reset();
  } else {
    // If the form is not filled out correctly, show a reminder to fill all fields
    alert("Please fill all the fields before submitting.");
  }
});
