function specialty() {
  const specLines = document.createElement('div');
  specLines.innerHTML = `
    <h1>Our specialty</h1>
    <div class="spec-div">
      <img src="images/prato.jpeg" class="spec-img">
      <div class="spec-description">
        <h2>Ratatouille</h2>
        <p class="spec-text">
          A classic French recipe of cooked vegetables from the 18th century. Taste like childhood.
        </p>
      </div>
    </div>
  `;
  specLines.setAttribute("id", "specialty");
  return specLines;
}

export default specialty;
