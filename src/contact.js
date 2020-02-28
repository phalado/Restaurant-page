function contact() {
  const contactLines = document.createElement('div');
  contactLines.innerHTML = `
    <h1>Contact</h1>
    <form class="form">
      <fieldset>
        <label for="name">Your full name:</label>
        <input type="text" id="name" required>
      </fieldset>
      <fieldset>
        <label for="email">Your email address:</label>
        <input type="email" id="email" required>
      </fieldset>
      <fieldset>
        <label for="name">Your message:</label>
        <input type="text" id="message" required>
      </fieldset>
      <button id="submit">Send</button>
    </form>
  `;
  contactLines.setAttribute("id", "contact");
  return contactLines;
};

export default contact;