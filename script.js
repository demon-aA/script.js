function sendMessage() {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;

  fetch('/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, message }),
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}
