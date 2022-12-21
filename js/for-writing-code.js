const div = document.createElement('div');
div.classList.add('wrapper');

const body = document.body;
body.appendChild(div);

const header = document.createElement('h1');
header.textContent = 'DOM (Document Object Model)';

div.insertAdjacentElement('beforebegin', header);

const ul = `
<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>`;

div.innerHTML = ul;