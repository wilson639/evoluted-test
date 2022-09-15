import { Launch } from './Launch.js';

const spacexApiUrl = "https://api.spacexdata.com/v4";

const getAllLaunches = async () => {
  let response = await fetch(spacexApiUrl + '/launches');
  let json = await response.json();

  const launches = [];

  json.forEach(launch => {
    launches.push(new Launch(launch))
  })

  return launches;
}

const getAllRockets = async () => {
  let response = await fetch(spacexApiUrl + '/rockets');
  let json = await response.json();

  const rockets = {};

  json.forEach(rocket => {
    rockets[rocket.id] = rocket.name;
  })

  return rockets;
}

export { getAllLaunches, getAllRockets }