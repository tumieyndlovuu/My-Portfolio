const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => { links.classList.toggle('open'); });

const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
    });
  });
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();
  document.getElementById('eName').textContent = '';
  document.getElementById('eEmail').textContent = '';
  document.getElementById('eMessage').textContent = '';
  document.getElementById('formSuccess').textContent = '';

  if(name === ''){ document.getElementById('eName').textContent = 'Name cannot be empty. Presence check.'; valid = false; }
  else if(!/^[a-zA-Z ]+$/.test(name)){ document.getElementById('eName').textContent = 'Name must contain letters only. Type check.'; valid = false; }

  if(email === ''){ document.getElementById('eEmail').textContent = 'Email cannot be empty.'; valid = false; }
  else if(!/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/.test(email)){ document.getElementById('eEmail').textContent = 'Invalid email format.'; valid = false; }

  if(message === ''){ document.getElementById('eMessage').textContent = 'Message cannot be empty.'; valid = false; }
  else if(message.length < 10){ document.getElementById('eMessage').textContent = 'Message must be at least 10 characters. Length check.'; valid = false; }

  if(valid){ document.getElementById('formSuccess').textContent = 'All information validated successfully. Message ready to send.'; form.reset(); }
});