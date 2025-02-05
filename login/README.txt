Login Validation App

This is a simple client-side login validation system implemented using HTML, CSS, and JavaScript. It validates the username and password entered by the user and redirects them to a new page if the credentials are correct.

Features

Simple username & password validation

Error message display for incorrect credentials

Redirects users upon successful login

Basic client-side validation (no backend authentication)

Technologies Used

HTML – For the structure of the login page

CSS – For styling the UI

JavaScript – For handling login validation

Installation & Usage

1. Clone the Repository

   git clone https://github.com/Goddy-2024/FRONTEND_APP/login
   cd login-validation-app

2. Open in Browser

Simply open the index.html file in any modern web browser.

3. Credentials for Testing

Use the following test credentials:

Username

Password

Godswill Omondi

AGOAGO@f4

Goddy

####****

File Structure

login-validation-app/
│── index.html          # Main login page
│── styles.css          # Styling for the UI (if applicable)
│── script.js           # Login validation logic
│── loader.html         # Redirect page after successful login
│── README.md           # Documentation

How It Works

The user enters a username and password.

The script checks if the credentials match predefined values.

If the credentials are correct, the user is redirected to loader.html.

If incorrect, an error message is displayed.

Security Considerations ⚠️

This application does not store credentials securely!

Hardcoding passwords in JavaScript is unsafe because they can be extracted by inspecting the page source.

For real-world applications, implement backend authentication with hashed passwords and database storage.

Future Enhancements 🚀

Add backend authentication (Node.js, PHP, or Firebase)

Implement session management to maintain login state

Use hashed passwords instead of plaintext

Add login attempt limits to prevent brute force attacks

Author

Developed by Godswill Omondi

License

This project is open-source and available under the MIT License.
