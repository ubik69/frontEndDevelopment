let customerMessage = document.getElementById('messageContact');
let submitButton = document.getElementById('submitContact');

submitButton.addEventListener('click', function(event) {
  if (customerMessage.value == '') {
    alert('Please enter a message before submitting.');
    event.preventDefault(); // prevent the form from submitting on load.
  } else {
    alert('We got your message, thanks for contacting.');
  }
});