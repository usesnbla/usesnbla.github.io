/* Dark & Light Mode */
function setColorScheme(scheme) {
  let root = document.getElementsByTagName('html')[0];
  switch (scheme) {
    case 'dark':
      // console.log('dark');
      root.classList.add('dark-mode');
      document.getElementById('cover-logo').src = '/assets/logo/logo_dark.svg';
      document.getElementById('cover').className = 'd-flex h-100 text-center bg-dark text-white';
      break;
    case 'light':
      // console.log('light');
      root.classList.remove('dark-mode');
      document.getElementById('cover-logo').src = '/assets/logo/logo.svg';
      document.getElementById('cover').className = 'd-flex h-100 text-center';
      break;
    default:
      console.log('default');
      break;
  }
}

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

function updateColorScheme() {
  setColorScheme(getPreferredColorScheme());
}

if (window.matchMedia) {
  var colorSchemeQuery = window.matchMedia('(prefers-color-scheme:dark)');
  colorSchemeQuery.addEventListener('change', updateColorScheme);
}

updateColorScheme();