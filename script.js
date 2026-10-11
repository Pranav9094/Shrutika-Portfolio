/* =========================================================
   DATA: yaha se saara content edit hoga (projects, certs...)
   ========================================================= */
const DATA = {
  email: 'shrutikakawale567@gmail.com',
  typed: ['AI & Data Science', 'Web Development', 'Research & Debugging', 'Hackathon Building'],

  skills: [
    { title: 'Languages', items: ['Python', 'C', 'C++', 'R', 'HTML', 'CSS'] },
    { title: 'AI & Data', items: ['Data Analysis', 'Pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'Machine Learning'] },
    { title: 'Web', items: ['Web Development', 'React'] },
    { title: 'Tools', items: ['Git', 'VS Code', 'Jupyter Notebook'] },
    { title: 'Soft Skills', items: ['Research', 'Critical Thinking', 'Problem Solving', 'Time Management', 'Teamwork', 'Communication'] }
  ],

  /* live / repo links baad me yaha daal dena, khali hai to button nahi dikhega */
  projects: [
    {
      name: 'INFRA-SIGHT', event: 'CraftVerse 2.0 · PCCOER Pune', badge: '5th Position', badgeClass: 'gold', type: 'hackathon',
      desc: 'AI system that blends infrastructure history, weather, traffic and sensor signals into one asset-level risk score, moving repairs from reactive to predictive.',
      role: 'Research · UI · PPT · Debugging', tags: ['React', 'FastAPI', 'Machine Learning', 'Computer Vision'], live: '', repo: ''
    },
    {
      name: 'AgroShield', event: 'MIT-ADT AI Grand Challenge 2026', badge: 'Shortlisted', type: 'hackathon',
      desc: 'Crop-weed detection app powered by YOLOv8 (94.73% mAP50) with a FastAPI backend and a React frontend that draws live bounding boxes from the webcam.',
      role: 'Research · UI · PPT · Debugging', tags: ['YOLOv8', 'FastAPI', 'React', 'Computer Vision'], live: '', repo: ''
    },
    {
      name: 'Digital Bench Workspace', event: 'Multiple hackathons', badge: '', type: 'hackathon',
      desc: 'All-in-one AI-powered desktop classroom app with secure login, built on Electron.js, React and Supabase.',
      role: 'Research · UI · PPT · Debugging', tags: ['Electron.js', 'React', 'Tailwind', 'Node.js', 'Supabase'], live: '', repo: ''
    },
    {
      name: 'De-Smoking for Fire Rescue', event: 'Smart India Hackathon 2026', badge: 'Participant', type: 'hackathon',
      desc: 'AI-based de-smoking and de-hazing for indoor fire rescue, combining Dark Channel Prior, CLAHE and YOLOv8 to spot people and obstacles through smoke.',
      role: 'Research · UI · PPT · Debugging', tags: ['YOLOv8', 'OpenCV', 'FastAPI'], live: '', repo: ''
    },
    {
      name: 'Sentinel Gujarat CCTV AI', event: 'Gujarat Police Hackathon 2026', badge: 'Participant', type: 'hackathon',
      desc: 'Hybrid AI platform concept for statewide CCTV integration with vehicle detection, number plate reading and watchlist alerts for smarter policing.',
      role: 'Research · UI · PPT · Debugging', tags: ['YOLOv8', 'EasyOCR', 'Streamlit', 'SQLite'], live: '', repo: ''
    },
    {
      name: 'TrustChain', event: 'Inceptia · PCCOER Pune', badge: 'Participant', type: 'hackathon',
      desc: 'Decentralized credit score for informal workers. Only score hashes live on-chain, keeping data private and gas costs low.',
      role: 'Research · UI · PPT · Debugging', tags: ['React', 'Solidity', 'Polygon', 'Node.js'], live: '', repo: ''
    },
    {
      name: 'Student Performance Analysis', event: 'Personal project', badge: '', type: 'personal',
      desc: 'Explored and visualized academic data to understand patterns in student performance.',
      role: 'Analysis · Visualization', tags: ['Python', 'Pandas', 'Matplotlib'], live: '', repo: ''
    },
    {
      name: 'Exploring ML Models', event: 'Personal project', badge: '', type: 'personal',
      desc: 'Practiced core machine learning algorithms such as linear regression to understand how models learn from data.',
      role: 'Learning · Experiments', tags: ['Python', 'scikit-learn'], live: '', repo: ''
    }
  ],

  wins: [
    { icon: '🏆', title: '5th Position', line: 'CraftVerse 2.0 · PCCOER Pune', sub: 'INFRA-SIGHT' },
    { icon: '⭐', title: 'Shortlisted', line: 'MIT-ADT AI Grand Challenge 2026', sub: 'AgroShield' }
  ],
  participated: ['Smart India Hackathon 2026', 'Gujarat Police Hackathon 2026', 'Inceptia National Hackathon'],

  certs: [
    { title: 'Introduction to Programming Using HTML and CSS', org: 'Credly by Pearson', date: 'Issued Oct 2025' },
    { title: 'HTML and CSS Certification', org: 'Certiport (Pearson)', date: '' },
    { title: 'AWS Student Community Day Participant', org: 'Amazon Web Services (AWS)', date: 'Issued Jan 2026' }
  ]
};

/* ========================= HELPERS ========================= */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ========================= RENDER ========================= */
function renderSkills() {
  $('#skillGrid').innerHTML = DATA.skills.map((g, i) => `
    <div class="card skill tilt reveal" style="--d:${i * 0.06}s">
      <h3><i></i>${g.title}</h3>
      <ul class="tags">${g.items.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>`).join('');

  const words = [...new Set(DATA.skills.flatMap(g => g.items))];
  const html = words.map(w => `<span>${w}</span>`).join('');
  $('#track').innerHTML = html + html;
}

function renderProjects(filter = 'all') {
  const list = DATA.projects.filter(p => filter === 'all' || p.type === filter);
  $('#projectGrid').innerHTML = list.map((p, i) => `
    <article class="card project tilt reveal" style="--d:${i * 0.06}s">
      <div class="p-top">
        <span class="p-event">${p.event}</span>
        ${p.badge ? `<span class="badge ${p.badgeClass || ''}">${p.badge}</span>` : ''}
      </div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <p class="p-role"><strong>Role</strong>${p.role}</p>
      <ul class="tags">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
      ${(p.live || p.repo) ? `<div class="p-links">
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live ↗</a>` : ''}
        ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">GitHub ↗</a>` : ''}
      </div>` : ''}
    </article>`).join('');
  observeReveal();
}

function renderRest() {
  $('#wins').innerHTML = DATA.wins.map((w, i) => `
    <div class="card win tilt reveal" style="--d:${i * 0.1}s">
      <div class="big">${w.icon}</div>
      <div><h3>${w.title}</h3><p>${w.line}</p><small>${w.sub}</small></div>
    </div>`).join('');

  $('#parts').innerHTML = DATA.participated.map(p => `<span>${p}</span>`).join('');

  $('#certGrid').innerHTML = DATA.certs.map((c, i) => `
    <div class="card cert tilt reveal" style="--d:${i * 0.08}s">
      <div class="c-ico">🎓</div>
      <h3>${c.title}</h3>
      <p class="c-org">${c.org}</p>
      ${c.date ? `<p class="c-date">${c.date}</p>` : ''}
    </div>`).join('');
}

/* ========================= REVEAL ========================= */
const revealIO = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add('in');
      revealIO.unobserve(el);
      const delay = (parseFloat(el.style.getPropertyValue('--d')) || 0) * 1000;
      /* reveal class hata dete hain taaki tilt transform conflict na kare */
      setTimeout(() => el.classList.remove('reveal', 'in'), 1200 + delay);
    }), { threshold: 0.12 })
  : null;

function observeReveal() {
  $$('.reveal:not([data-o])').forEach(el => {
    el.dataset.o = 1;
    if (revealIO) revealIO.observe(el); else el.classList.remove('reveal');
  });
}

/* ========================= THEME ========================= */
function initTheme() {
  $('#theme').addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    readParticleColor();
  });
}

/* ========================= NAV ========================= */
function initNav() {
  const nav = $('#nav'), burger = $('#burger'), progress = $('#progress');
  const onScroll = () => {
    nav.classList.toggle('scrolled', scrollY > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  $$('#links a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));

  /* scrollspy */
  const links = $$('#links a');
  const spy = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));
}

/* ========================= TYPED TEXT ========================= */
function initTyped() {
  const el = $('#typed'), words = DATA.typed;
  if (reduceMotion) { el.textContent = words[0]; return; }
  let w = 0, c = 0, del = false;
  (function tick() {
    const word = words[w];
    c += del ? -1 : 1;
    el.textContent = word.slice(0, c);
    let t = del ? 35 : 70;
    if (!del && c === word.length) { del = true; t = 1400; }
    else if (del && c === 0) { del = false; w = (w + 1) % words.length; t = 350; }
    setTimeout(tick, t);
  })();
}

/* ========================= COUNTERS ========================= */
function initCounters() {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const el = e.target, to = +el.dataset.to;
    if (reduceMotion) { el.textContent = to; return; }
    const start = performance.now(), dur = 1200;
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }), { threshold: 0.6 });
  $$('.count').forEach(c => io.observe(c));
}

/* ========================= TILT + SPOTLIGHT ========================= */
function initTilt() {
  if (!finePointer || reduceMotion) return;
  document.addEventListener('pointermove', e => {
    const el = e.target.closest && e.target.closest('.tilt');
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', x * 100 + '%');
    el.style.setProperty('--my', y * 100 + '%');
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 9}deg) translateY(-4px)`;
  });
  document.addEventListener('pointerout', e => {
    const el = e.target.closest && e.target.closest('.tilt');
    if (el && !el.contains(e.relatedTarget)) el.style.transform = '';
  });
}

/* ========================= CURSOR GLOW ========================= */
function initGlow() {
  if (!finePointer || reduceMotion) return;
  const glow = $('#glow');
  let tx = innerWidth / 2, ty = innerHeight / 2, x = tx, y = ty;
  addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; glow.style.opacity = 1; });
  (function loop() {
    x += (tx - x) * 0.12; y += (ty - y) * 0.12;
    glow.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
}

/* ========================= PARTICLE NETWORK ========================= */
let particleRGB = '190,170,255';
function readParticleColor() {
  particleRGB = document.documentElement.getAttribute('data-theme') === 'light' ? '110,80,220' : '190,170,255';
}
function initParticles() {
  const canvas = $('#net'), ctx = canvas.getContext('2d');
  if (!ctx) return;
  readParticleColor();
  let w, h, pts = [], mouse = { x: -999, y: -999 }, running = true;

  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(70, (w * h) / 22000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (!reduceMotion) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particleRGB},.55)`;
      ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
        if (d < 14400) {
          ctx.strokeStyle = `rgba(${particleRGB},${0.18 * (1 - d / 14400)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      const mx = p.x - mouse.x, my = p.y - mouse.y, md = mx * mx + my * my;
      if (md < 19600) {
        ctx.strokeStyle = `rgba(${particleRGB},${0.35 * (1 - md / 19600)})`;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    if (running && !reduceMotion) requestAnimationFrame(draw);
  };

  addEventListener('resize', resize);
  addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) draw();
  });
  resize(); draw();
}

/* ========================= PROJECT FILTER ========================= */
function initFilters() {
  $('#filters').addEventListener('click', e => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    $$('.pill').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-selected', b === btn); });
    renderProjects(btn.dataset.f);
  });
}

/* ========================= CONTACT FORM ========================= */
function initForm() {
  $('#form').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#fName').value.trim(), email = $('#fEmail').value.trim(), msg = $('#fMsg').value.trim();
    const status = $('#formStatus');
    if (!name || !msg) { status.textContent = 'Please fill in your name and message.'; return; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { status.textContent = 'That email address does not look right.'; return; }
    const subject = encodeURIComponent('Hello from ' + name);
    const body = encodeURIComponent(msg + '\n\n- ' + name + (email ? ' (' + email + ')' : ''));
    status.textContent = 'Opening your email app...';
    location.href = 'mailto:' + DATA.email + '?subject=' + subject + '&body=' + body;
  });
}

/* ========================= PHOTO FALLBACK ========================= */
function initPhoto() {
  const img = $('#photo');
  img.addEventListener('error', () => img.remove()); /* photo nahi mili to SK initials dikhenge */
}

/* ========================= INIT ========================= */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderRest();
  initTheme();
  initNav();
  initTyped();
  initCounters();
  initTilt();
  initGlow();
  initParticles();
  initFilters();
  initForm();
  initPhoto();
  observeReveal();
});