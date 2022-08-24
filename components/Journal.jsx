import LocationIcon from "./icons/Location";
export default function Journal(props) {
  return (
    <div className="journal">
      <div className="journal--left">
        <img src={props.item.imageUrl} alt="" />
      </div>
      <div className="journal--right">
        <div className="location-map">
          <LocationIcon />
          <span>{props.item.location}</span>
          <a
            className="journal-map-link"
            target="_blank"
            href={props.item.googleMapsUrl}
          >
            View on Google Map
          </a>
        </div>
        <h3 className="journal-title">{props.item.title}</h3>
        <h4 className="journal-date">
          {props.item.startDate} - {props.item.endDate}
        </h4>
        <p className="journal-desc">{props.item.description}</p>
      </div>
    </div>
  );
}
