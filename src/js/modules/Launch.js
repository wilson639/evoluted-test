import placeholderImage from '../../img/placeholder.png'

export class Launch {
  constructor(details, rocketName) {
    this.date = details.date_utc;
    this.name = details.name;
    this.success = details.success;
    this.imageSrc = details.links.flickr.original.slice(-1)[0];
    this.description = details.details;
    this.rocketId = details.rocket;
    this.rocketName = rocketName;
  }

  getYear() {
    // Return just the year from the date
    return new Date(this.date).getFullYear();
  }

  getConvertedDate() {
    // Convert date from ISO format
    return new Date(this.date).toString('dd-MM-YYYY').slice(3, 16);
  }

  getImage() {
    // If no image is provided, use a placeholder image
    return (this.imageSrc != undefined) ? this.imageSrc : placeholderImage;
  }

  getDescription() {
    // If no description is provided, display a standard message
    return (this.description != null) ? this.description : 'No description available.';
  }

  getSuccess() {
    // Convert 'success' to string and return capitalized 
    const successString = String(this.success);
    return `${successString[0].toUpperCase()}${successString.slice(1)}`;
  }
}