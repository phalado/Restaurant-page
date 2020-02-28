function critics() {
  const critLines = document.createElement('div');
  critLines.innerHTML = `
    <h1>Critics</h1>
    <div class="crit-div">
      <div class="crit-description">
        <img src="images/critic1.jpg" class="crit-img">
        <h3>Anton Ego</h3>
        <p class="spec-text">Internationally renowed critic. Defined little chef as the finest chef in France.</p>
      </div>
      <div class="crit-description">
        <img src="images/critic2.jpg" class="crit-img">
        <h3>Emile</h3>
        <p class="spec-text">The chef's brother. Eats his food since a baby <s>rat</s>... human. Clearly a human.</p>
      </div>
    </div>
  `;
  critLines.setAttribute('id', 'critics');
  return critLines;
}

export default critics;
