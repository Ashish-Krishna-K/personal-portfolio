const body = document.querySelector('body');
const toggleThemeBtn = document.querySelector('.toggle-theme');

const darkTheme = 'dark-theme';
const lightTheme = 'light-theme';

const setThemeInLocalStorage = (theme) => {
  localStorage.setItem('THEME', JSON.stringify(theme));
};

const getThemeFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('THEME'));
};

let currentTheme = getThemeFromLocalStorage();

if (currentTheme !== null) {
  body.classList.add(currentTheme);
} else {
  body.classList.add(lightTheme);
};

const toggleTheme = () => {
  currentTheme = getThemeFromLocalStorage();
  if (currentTheme === darkTheme) {
    setThemeInLocalStorage(lightTheme);
    body.classList.replace(darkTheme, lightTheme);
  } else {
    setThemeInLocalStorage(darkTheme);
    body.classList.replace(lightTheme, darkTheme);
  }
}

toggleThemeBtn.addEventListener('click', toggleTheme);
