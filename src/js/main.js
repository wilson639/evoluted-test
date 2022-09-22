// Import our custom CSS
import '../scss/styles.scss';

// Import only the Bootstrap components we need
// import * as bootstrap from 'bootstrap';

import { getLaunchInformation } from './modules/Utils';
import { printLaunches } from './modules/PrintLaunches';
import { SortLaunches } from './modules/SortLaunches';

// Await list of launches; display and create filter
getLaunchInformation().then(launchInformation => {
  printLaunches(launchInformation);
  new SortLaunches(launchInformation);
})