import { Theme } from './settings/types';
import { DevouringDetailsLanding11 } from './components/generated/DevouringDetailsLanding11';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <>
      <DevouringDetailsLanding11 />
    </>
  ); // %EXPORT_STATEMENT%
}

export default App;
