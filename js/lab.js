// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // $('.btn').hover(function() {
  //   $(this).removeClass('btn-primary').addClass('btn-warning');
  //   $(this).stop().animate({
  //       padding: '10px'
  //   }, 300);
  // }, function() {
  //   $(this).removeClass('btn-warning').addClass('btn-primary');
  //   $(this).stop().animate({
  //       padding: '7px'
  //   }, 300);
  // });

  // Apply hover animation to the columns
  $('#column1, #column2').hover(
    function () {
      // On hover: grow the element
      $(this).stop().animate({
        transform: 'scale(1.1)', // Slightly grow the element
      }, 300);
    },
    function () {
      // On mouse out: return to normal size
      $(this).stop().animate({
        transform: 'scale(1)', // Reset to original size
      }, 300);
    }
  );
}

// let's get this party started
main();
