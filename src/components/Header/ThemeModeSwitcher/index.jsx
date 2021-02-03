import IconButton from '@material-ui/core/IconButton';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import { useThemeMode } from 'contexts/ThemeModeContext';

function ThemeModeSwitcher() {
  const { themeMode, toggleThemeMode } = useThemeMode();

  return (
    <IconButton aria-label="Toggle theme mode" onClick={toggleThemeMode}>
      {themeMode === 'light' ? (
        <WbSunnyOutlinedIcon />
      ) : (
        <Brightness2OutlinedIcon />
      )}
    </IconButton>
  );
}

export default ThemeModeSwitcher;
