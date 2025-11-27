// Simple JS: set current year + mobile nav toggle
(function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if(menuToggle && navMenu){
    menuToggle.addEventListener('click', ()=>{
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.style.display = expanded ? 'none' : 'flex';
      navMenu.setAttribute('aria-hidden', String(expanded));
    });
  }
})();

// Contact form handler (optional; it will still work if you rely on the form action)
(function(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    status.textContent = 'Sending…';
    try{
      const data = new FormData(form);
      const action = form.getAttribute('action');
      if(!action || action.includes('<your_form_id>')){
        status.textContent = 'Please configure the Formspree action URL in the form markup.';
        status.classList.remove('success');
        status.classList.add('error');
        return;
      }
      const res = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if(res.ok){
        form.reset();
        status.textContent = 'Thanks! Your message was sent.';
        status.classList.remove('error');
        status.classList.add('success');
      } else {
        status.textContent = 'There was a problem sending your message, please try again.';
        status.classList.remove('success');
        status.classList.add('error');
      }
    }catch(err){
      status.textContent = 'A network error occurred — please try again later.';
      status.classList.remove('success');
      status.classList.add('error');
    }
  });
})();

// Load saved theme on start
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Toggle theme
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save user choice
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updateToggleIcon();
});

// Change button icon based on mode
function updateToggleIcon() {
    const btn = document.getElementById("theme-toggle");
    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀️"; // light mode icon
    } else {
        btn.textContent = "🌙"; // dark mode icon
    }
}

updateToggleIcon();

document.querySelectorAll('.bubble').forEach(bubble => {
  bubble.addEventListener('click', function() {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

