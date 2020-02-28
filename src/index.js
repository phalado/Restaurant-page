import header from './header';
import phrase from './phrs';
import footer from './footer';
import contact from './contact';
import specialty from './specialty';
import critics from './critics';

function closeModels() {
  document.getElementById('specialty').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('critics').style.display = 'none';
}

function specModel() {
  document.getElementById('specialty').style.display = 'grid';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('critics').style.display = 'none';
}

function contactModel() {
  document.getElementById('specialty').style.display = 'none';
  document.getElementById('contact').style.display = 'grid';
  document.getElementById('critics').style.display = 'none';
}

function criticsModel() {
  document.getElementById('contact').style.display = 'none';
  document.getElementById('specialty').style.display = 'none';
  document.getElementById('critics').style.display = 'grid';
}

const page = () => {
  const content = document.getElementById('content');

  content.appendChild(header());
  content.appendChild(phrase());
  content.appendChild(footer());
  content.appendChild(contact());
  content.appendChild(specialty());
  content.appendChild(critics());

  content.querySelector('#home').addEventListener('click', closeModels);
  content.querySelector('#spec').addEventListener('click', specModel);
  content.querySelector('#cont').addEventListener('click', contactModel);
  content.querySelector('#crit').addEventListener('click', criticsModel);
};

page();
