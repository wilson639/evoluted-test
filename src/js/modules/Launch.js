export class Launch {
  constructor(details) {
    this.date = details.date_utc;
    this.name = details.name;
    this.success = details.success;
    this.imageSrc = details.links.flickr.original.slice(-1)[0];
    this.description = details.details;
    this.rocketId = details.rocket;
  }

  getYear() {
    // Return just the year from the date
    return new Date(this.date).getFullYear();
  }

  getConvertedDate() {
    // Convert date from ISO format
    let convertedDate = new Date(this.date);
    return convertedDate.toString('dd-MM-YYYY').slice(3, 16);
  }

  getImage() {
    // If no image is provided, use a placeholder image
    return (this.imageSrc != undefined) ? this.imageSrc : 'placeholder.png';
  }

  getDescription() {
    // If no description is provided, display a standard message
    return (this.description != null) ? this.description : 'No description available.';
  }
}