// Import our custom CSS
import '../scss/styles.scss';

// Import only the Bootstrap components we need
// import * as bootstrap from 'bootstrap';

import { getLaunchInfo } from './modules/Utils';
import { printLaunches } from './modules/PrintLaunches';
import { SortLaunches } from './modules/SortLaunches';

const StartApp = async () => {
  const launches = await getLaunchInfo();
  
  printLaunches(launches);
  new SortLaunches(launches);
}

StartApp();