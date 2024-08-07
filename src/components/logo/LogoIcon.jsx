// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

export default function LogoIcon() {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIcon} alt="icon logo" width="100" />
     *
     */
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_79_407)">
<rect width="60" height="60" rx="20" fill="url(#paint0_linear_79_407)"/>
<text x="30" y="35" fill="white" text-anchor="middle" font-family="Georgia" font-size="24" font-weight="">stek</text>
</g>
<defs>
<linearGradient id="paint0_linear_79_407" x1="30" y1="0" x2="23" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#4680FF"/>
<stop offset="1" stop-color="#2F58B1"/>
</linearGradient>
<clipPath id="clip0_79_407">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}
