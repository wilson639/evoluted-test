const printLaunches = (launches, reset = false) => {
  if (reset) document.getElementById("launch-info").innerHTML = '';
  
  launches.forEach(launch => {
    document.getElementById("launch-info").innerHTML +=
    `<li class="launch-item col-12 col-md-6">
        <div class="launch-image-container">
          <span>${launch.getConvertedDate()}</span>
          <img src='${launch.getImage()}' alt='${launch.name} launch'></img>
        </div>
        <h2 class="h3 mb-3">${launch.name}</h2>
        <p><span>Success: </span>${launch.success}</p>
        <p><span>Description: </span>${launch.getDescription()}</p>
        <p class="mb-0"><span>Rocket: </span>${launch.rocketName}</p> 
      </li>`
  })
}

export { printLaunches }