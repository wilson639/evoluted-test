import { Launch } from './Launch.js';

const spacexApiUrl = "https://api.spacexdata.com/v4";

const getAllLaunches = async () => {
  let response = await fetch(spacexApiUrl + '/launches');
  let json = await response.json();

  return json;
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

const getLaunchInfo = async () => {
  let launch_json = await getAllLaunches();
  const rockets = await getAllRockets();

  let launches = [];

  launch_json.forEach(launch => {
    launches.push(new Launch(launch, rockets[launch.rocket]))
  })

  return launches;
}

export { getLaunchInfo }