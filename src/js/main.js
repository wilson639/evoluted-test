// Import our custom CSS
import '../scss/styles.scss';

// Import only the Bootstrap components we need
// import * as bootstrap from 'bootstrap';

import { getAllLaunches, getAllRockets } from './modules/Utils';
import { printLaunches } from './modules/PrintLaunches';

const StartApp = async () => {
  let launches = await getAllLaunches();
  let rockets = await getAllRockets();
  
  printLaunches(launches, rockets);
}

StartApp();