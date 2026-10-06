// Hosting Practice Demo - Vanilla JavaScript
document.addEventListener('DOMContentLoaded', function () {
  var testButton = document.getElementById('test-js-btn');
  var statusOutput = document.getElementById('js-status');

  if (testButton && statusOutput) {
    testButton.addEventListener('click', function () {
      statusOutput.textContent = 'JavaScript is working!';
      statusOutput.className = 'js-output active';
    });
  }
});
