function footer() {
  const footerLines = document.createElement('footer');
  footerLines.innerHTML = `
    <ul class="links">
      <li class="link-links"><a href="#" id="home">Home</a></li>
      <li class="link-links"><a href="#" id="spec">Our specialty</a></li>
      <li class="link-links"><a href="#" id="crit">Critics</a></li>
      <li class="link-links"><a href="#" id="cont">Contact</a></li>
    </ul>
  `;
  footerLines.className = "footer";
  return footerLines;
};

export default footer;
