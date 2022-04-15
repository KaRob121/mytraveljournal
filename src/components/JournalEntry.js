import pin from "../images/pin.png"

function JournalEntry(props) {
  return (
    <main className="entry">
      <img
        className="entry--img"
        src={`${ props.entry.imageUrl }`}
        alt="Image of location visited"
      />
      <div className="entry--information">
        <div className="entry--location">
          <img 
            src={ pin }
            className="entry--pin-icon"
            alt="Pin icon"
          />
          <span className="entry--location--country">{ props.entry.location }</span>
          <a href={`${ props.entry.googleMapsUrl }`}>View on Google Maps</a>
        </div>
        <h1 className="entry--title">{ props.entry.title }</h1>
        <p className="bold">{ props.entry.startDate } - { props.entry.endDate }</p>
        <p>{ props.entry.description }</p>
      </div>
    </main>
  )
}

export default JournalEntry