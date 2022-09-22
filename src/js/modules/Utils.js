import { Launch } from './Launch';

const spacexApiUrl = "https://api.spacexdata.com/v4/";

const apiPromise = async (query = '') => {
  let response = await fetch(spacexApiUrl + query);
  let json = await response.json();

  return json;
}

const getLaunchInformation = async () => {
  let rockets = {};
  let launches = [];

  await Promise.all([apiPromise('rockets'), apiPromise('launches')])
    .then(data => {
      // Create dictionary of rockets and create array of launches
      data[0].forEach(rocket => {
        rockets[rocket.id] = rocket.name;
      })

      data[1].forEach(launch => {
        launches.push(new Launch(launch, rockets[launch.rocket]))
      })
    })
    .catch(errors => {
      /* Handle Errors */
      console.log('Errors: ' + errors)
    });
    
  return launches;
}

export { getLaunchInformation }