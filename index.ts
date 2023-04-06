const body = document.querySelector('body');
const toggleThemeBtn = document.querySelector('.toggle-theme');

const darkTheme = 'dark-theme';
const lightTheme = 'light-theme';

type theme = 'dark-theme' | 'light-theme';

const setThemeInLocalStorage = (theme: theme) => {
  localStorage.setItem('THEME', JSON.stringify(theme));
};

const getThemeFromLocalStorage = (): theme | null => {
  const themeFromStorage = localStorage.getItem('THEME');
  return !themeFromStorage ?
    themeFromStorage :
    JSON.parse(themeFromStorage);
};

const currentTheme = getThemeFromLocalStorage();

if (currentTheme !== null) {
  if (body !== null) {
    body.classList.add(currentTheme);
  }
};

const toggleTheme = () => {
  let currentTheme = getThemeFromLocalStorage();
  if (currentTheme === darkTheme) {
    setThemeInLocalStorage(lightTheme);
    if (body !== null) {
      body.classList.replace(darkTheme, lightTheme);
    }
  } else {
    setThemeInLocalStorage(darkTheme);
    if (body !== null) {
      body.classList.replace(lightTheme, darkTheme);
    }
  }
};

if (toggleThemeBtn !== null) {
  toggleThemeBtn.addEventListener('click', toggleTheme);
};