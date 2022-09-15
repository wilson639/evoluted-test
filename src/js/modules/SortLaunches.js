import { printLaunches } from "./PrintLaunches";

export class SortLaunches {
  constructor(launches, rockets) {
    this.rockets = rockets;
    this.launches = launches;
    this.selectFilter = document.getElementById('launch-select');

    this.populateSelect();
    this.handleSelectEvent();
  }

  populateSelect() {
    // Create list of each unique year and populate dropdown
    const options = [...new Set(this.launches.map(launch => launch.getYear()))];

    options.forEach(year => {
      this.selectFilter.options.add(new Option(year));
    });

    // Filter is disabled by default until options are populated
    this.selectFilter.disabled = false;
  }

  handleSelectEvent() {
    this.selectFilter.onchange = (event) => {

      const selectQuery = event.target.value;
      let sortedLaunches = [];
    
      if (selectQuery != 'All') {
        sortedLaunches = this.launches.filter(launch => launch.date.includes(selectQuery));
      } else {
        sortedLaunches = this.launches;
      }
    
      // Print new list of launches, third parameter (true) is to clear existing
      printLaunches(sortedLaunches, this.rockets, true);
    }
  }
}