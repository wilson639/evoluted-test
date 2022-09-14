const printLaunches = (launches, rockets) => {
  launches.forEach(launch => {

    let rocketName;
  
    rockets.forEach(rocket => {
      if (rocket.id == launch.rocketId) rocketName = rocket.name;
    });

    document.getElementById("launch-list").innerHTML +=
    `<li class="launch">
        <p>${launch.getConvertedDate()}</p>
        <p>${launch.name}</p>
        <p>${launch.success}</p>
        <img src='${launch.getImage()}'></img>
        <p>${launch.getDescription()}</p>
        <p>${rocketName}</p> 
      </li>`
  })
}

export { printLaunches }