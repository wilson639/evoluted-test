const printLaunches = (launches, rockets) => {
  launches.forEach(launch => {

    let rocketName;
  
    rockets.forEach(rocket => {
      if (rocket.id == launch.rocketId) rocketName = rocket.name;
    });

    document.getElementById("launch-info").innerHTML +=
    `<li class="launch-item col-sm-6">
        <h2>${launch.name}</h2>
        <div class="launch-image-container">
          <span>${launch.getConvertedDate()}</span>
          <img src='${launch.getImage()}' alt='${launch.name} launch'></img>
        </div>
        <p><span>Success: </span>${launch.success}</p>
        <p><span>Description: </span>${launch.getDescription()}</p>
        <p><span>Rocket: </span>${rocketName}</p> 
      </li>`
  })
}

export { printLaunches }