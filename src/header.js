function header() {
  const headerLines = document.createElement('header');
  headerLines.innerHTML = `
    <header class="logo">
      <img src="images/logo2.png" class="logo-img">
      <h2 class="logo-text">Little chef's</h2>
    </header>
  `;
  return headerLines;
}

export default header;
