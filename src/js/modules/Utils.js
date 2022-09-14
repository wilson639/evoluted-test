import { Launch } from './Launch.js';
import { Rocket } from './Rocket.js';

const spacexApiUrl = "https://api.spacexdata.com/v4";

const getAllLaunches = async () => {
  let response = await fetch(spacexApiUrl + '/launches');
  let json = await response.json();

  let launches = [];

  json.forEach(launch => {
    launches.push(new Launch(launch))
  })

  return launches
}

const getAllRockets = async () => {
  let response = await fetch(spacexApiUrl + '/rockets');
  let json = await response.json();

  let rockets = [];

  json.forEach(rocket => {
    rockets.push(new Rocket(rocket))
  })

  return rockets
}

export { getAllLaunches, getAllRockets }