document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      event.target.reset();
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });
  