/*Header only*/

$(document).ready(function() {
    // When the "Become A Student" button is clicked, redirect to the sign up page
    $('#become-student-button').click(function() {
        window.location.href = 'signup.html';
      });
      
    // When the "Log In" button is clicked, toggle the visibility of the log in form
    $("#log-in-button").click(function() {
      $("#log-in-form").toggle();
    });
  });
  
/*Header only*/

$(document).ready(function() {
    // When the "Become a Student" button is clicked, show the sign up form
    $("#become-student-button").click(function() {
      $("#sign-up-form").show();
    });
  
    // When the "Log In" button is clicked, show the log in form
    $("#log-in-button").click(function() {
      $("#log-in-form").show();
    });
  
    // When the "Cancel" button on the sign up form is clicked, hide the form
    $("#sign-up-form .cancel-button").click(function() {
      $("#sign-up-form").hide();
    });
  
    // When the "Cancel" button on the log in form is clicked, hide the form
    $("#log-in-form .cancel-button").click(function() {
      $("#log-in-form").hide();
    });
  });
  
