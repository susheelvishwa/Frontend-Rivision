document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "http://localhost:3000"; // Change to your JSON server URL

  // Function to fetch user information
  function getUserInfo() {
    fetch(`${apiUrl}/users/1`) // Assuming user with ID 1 is logged in
      .then((response) => response.json())
      .then((user) => {
        const userInfoDiv = document.getElementById("user-info");
        userInfoDiv.textContent = `Logged In: ${user.name}`;
      })
      .catch((error) => console.error("Error fetching user info:", error));
  }

  // Function to handle sign-up form submission
  document
    .getElementById("signup-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      const userData = {
        name: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User signed up successfully:", data);
          // Redirect to login page or perform other actions as needed
        })
        .catch((error) => console.error("Error signing up:", error));
    });

  // Function to handle login form submission
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      const loginData = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      fetch(
        `${apiUrl}/users?email=${loginData.email}&password=${loginData.password}`
      )
        .then((response) => response.json())
        .then((users) => {
          if (users.length > 0) {
            console.log("Login successful:", users[0]);
            // Redirect to product page or perform other actions as needed
            getUserInfo(); // Display logged in user info
          } else {
            console.log("Invalid email or password");
            // Display error message to the user
          }
        })
        .catch((error) => console.error("Error logging in:", error));
    });

  // Call the function to display user info if already logged in
  getUserInfo();
});
