// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
];

const mainEl = document.querySelector('main');
const topMenuEl = document.getElementById('top-menu');
// Task 4.0
const subMenuEl = document.getElementById('sub-menu');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

menuLinks.forEach((link) => {
  const a = document.createElement('a');
  a.setAttribute('href', link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

// Task 4.1
subMenuEl.style.height = '100%';
// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// Task 4.3
subMenuEl.classList.add('flex-ctr');
// Task 4.4
subMenuEl.style.position = 'absolute';
// Task 4.5
subMenuEl.style.top = '0';
// Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');

let showingSubMenu = false;
// Task 5.2
topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.tagName.toLowerCase() !== 'a') {
    return;
  }
  // Task 5.3
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  // Task 5.4
  topMenuLinks.forEach((link) => {
    link.classList.remove('active');
  });
  // Task 5.5
  event.target.classList.add('active');
  // console.log(event.target.textContent);

  const linkObject = menuLinks.find((link) => {
    return event.target.textContent === link.text;
  });

  // Task 6.3
  mainEl.textContent = linkObject.text.toUpperCase();

  // Task 5.6
  if (linkObject.subLinks) {
    showingSubMenu = true;
    // Task 5.7
    buildSubMenu(linkObject.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    showingSubMenu = false;
    subMenuEl.style.top = '0';
  }
  // Task 5.8
  function buildSubMenu(subLinksArr) {
    subMenuEl.innerHTML = '';
    subLinksArr.forEach((link) => {
      const a = document.createElement('a');
      a.setAttribute('href', link.href);
      a.textContent = link.text;
      subMenuEl.appendChild(a);
    });
  }
});

// Task 6.0
subMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.tagName.toLowerCase() !== 'a') {
    return;
  }

  // Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';

  // Task 6.2
  topMenuLinks.forEach((link) => {
    link.classList.remove('active');
  });
});

// Task 6.3 at line 97
