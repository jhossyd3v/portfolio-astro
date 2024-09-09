const headerDesktopMQ = window.matchMedia('(min-width: 1024px)');

const setMenuHeightAsHeaderHeight = () => {
  const header = document.querySelector('.header');
  let newHeaderHeight = 0
  let footerHeaderHeight = 0;

  if(headerDesktopMQ.matches) {
    const headerMenu = header.querySelector('.header__menu');
    newHeaderHeight = headerMenu.offsetHeight + 1;
  } else {
    const headerMenu = header.querySelector('.header__menu');
    footerHeaderHeight = headerMenu.offsetHeight + 1;

  }

  header.style.setProperty('--header-height', `${newHeaderHeight}px`);

  const footer = document.querySelector('.footer');
  if(footer) {
    footer.style.setProperty('--header-height', `${footerHeaderHeight}px`);
  }
}

const getClosestAnchorTag = (element) => {
  if(element.tagName === 'A') return element;

  return element.closest('a');
}

const getTargetElement = (href) => {
  if(href === '#') {
    return document.querySelector('body');
  } else {
    return document.querySelector(href);
  }
}

const calculateOffsetPosition = (targetElement, headerHeight) => {
  const targetElementPosition = targetElement.getBoundingClientRect().top;
  const windowScrollY = window.scrollY;

  return targetElementPosition + windowScrollY - headerHeight;
}

const handleItemClick = (event) => {
  event.preventDefault();

  const target = getClosestAnchorTag(event.target);
  const href = target.getAttribute('href');

  if(!href) return

  const targetElement = getTargetElement(href);

  if(!targetElement) return;

  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;

  const offsetPosition = calculateOffsetPosition(targetElement, headerHeight);

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

const initHeader = () => {
  const header = document.querySelector('.header');

  if(!header) return;

  setMenuHeightAsHeaderHeight();

  window.addEventListener('resize', () => {
    setMenuHeightAsHeaderHeight();
  })

  const headerLinks = header.querySelectorAll('.item__link');

  headerLinks.forEach(link => {
    const href = link.getAttribute('href');

    if(!href.startsWith('#')) return;

    link.addEventListener('click', handleItemClick)
  })
}

export default initHeader;