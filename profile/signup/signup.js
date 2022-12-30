$(document).ready(function() {
    // When the "Sign Up" button on the sign up form is clicked, validate the form and submit it if valid
    $("#sign-up-form").submit(function(event) {
      event.preventDefault();
  
      var form = $(this);
      var name = form.find("input[name='name']").val();
      var email = form.find("input[name='email']").val();
      var password = form.find("input[name='password']").val();
      var level = form.find("select[name='level']").val();
      var errors = [];
  
      // Validate name
      if (name.length < 3) {
        errors.push("Name must be at least 3 characters long");
      }
  
      // Validate email
      if (!email.includes("@")) {
        errors.push("Email must be a valid email address");
      }
  
      // Validate password
      if (password.length < 8) {
        errors.push("Password must be at least 8 characters long");
      }
  
      // Display errors if there are any
      if (errors.length > 0) {
        $("#test-result-form .form-container p.error").remove();
        for (var i = 0; i < errors.length; i++) {
          $("#test-result-form .form-container").prepend("<p class='error'>" + errors[i] + "</p>");
        }
        return;
      }
  
      // Form is valid, submit it
      form.submit();
    });
  });
  
  // Send the email welcoming message and redirect the user to the individual main page
  function sendWelcomeEmail() {
    var name = $("input[name='name']").val();
    var email = $("input[name='email']").val();
  
    // Connect to the email host
    var smtpConfig = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "cosylanguages@gmail.com",
        pass: "123"
      }
    };
    var transporter = nodemailer.createTransport(smtpConfig);
  
    // Set up the email content
    var mailOptions = {
      from: "cosylanguages@gmail.com",
      to: email,
      subject: "Welcome to COSY Languages!",
      text: "Hello " + name + ",\n\nWelcome to COSY Languages! We hope you have a great experience learning new languages with us.\n\nSincerely,\nThe COSY Languages Team"
    };
  
    // Send the email
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  
    // Redirect the user to the individual main page
    window.location.replace("C:\\Users\\1\\.vscode\\cosylanguages\\profile\\individual-main.html");
  }
  