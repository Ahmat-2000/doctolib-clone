import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const MicroSvg = (props: SvgProps) => (
  <Svg
    width={92}
    height={80}
    viewBox="0 0 92 80"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.1183 40.2397C17.0638 40.4285 15.6673 42.4128 16.1831 44.4105L17.6934 50.2601C15.8261 50.622 14.6079 52.4965 15.0949 54.383L21.0607 77.489C21.4697 79.0731 22.9636 80.1295 24.5933 79.9873L33.1222 79.2431C35.1922 79.0624 36.5994 77.0595 36.0675 75.0509L34.5258 69.2282C36.4206 68.8829 37.66 66.9832 37.1556 65.0784L31.0309 41.9476C30.6127 40.3681 29.1154 39.3212 27.4883 39.4707L19.1183 40.2397Z"
      fill="#00264C"
    />
    <Path
      d="M20.1377 19.0317H44.7178C47.5624 19.0317 50.5009 18.6775 53.2416 17.9158C60.3868 15.93 74.6335 11.2021 79.7302 2.67822V69.8872C74.6335 61.3633 60.3868 56.6354 53.2416 54.6496C50.5009 53.8879 47.5624 53.5337 44.7178 53.5337H20.1377V19.0317Z"
      fill="#00BFFF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2138 18.999C8.3648 18.999 6.86589 20.4979 6.86589 22.3469V24.1043H3.73266C1.88367 24.1043 0.384766 25.6032 0.384766 27.4522V45.1123C0.384766 46.9613 1.88367 48.4602 3.73266 48.4602H6.86589V50.2181C6.86589 52.0671 8.3648 53.566 10.2138 53.566H25.1592V18.999H10.2138Z"
      fill="#00264C"
    />
    <Path
      d="M81.3203 30.4656C81.3203 28.6166 82.8192 27.1177 84.6682 27.1177H88.2672C90.1162 27.1177 91.6151 28.6166 91.6151 30.4656V42.0995C91.6151 43.9485 90.1162 45.4474 88.2672 45.4474H84.6682C82.8192 45.4474 81.3203 43.9485 81.3203 42.0995V30.4656Z"
      fill="#FFCD4D"
    />
    <Path
      d="M79.73 3.3479C79.73 1.49891 81.2289 0 83.0779 0H83.1616C85.0106 0 86.5095 1.4989 86.5095 3.34789V69.3014C86.5095 71.1504 85.0106 72.6493 83.1616 72.6493H83.0779C81.2289 72.6493 79.73 71.1504 79.73 69.3014V3.3479Z"
      fill="#107ACA"
    />
  </Svg>
);
export default MicroSvg;
