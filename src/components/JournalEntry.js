import pin from "../images/pin.png"

function JournalEntry(props) {
  return (
    <main className="entry">
      <img 
        src={`${ props.entry.imageUrl }`}
        className="entry--img"
      />
      <div className="entry--information">
        <div className="entry--location">
          <span>
            <img src={ pin }/>
            { props.entry.location }
            <a href={`${ props.entry.imageUrl }`}>View on Google Maps</a>
          </span>
        </div>
        <h1>{ props.entry.title }</h1>
        <p>{ props.entry.startDate } - { props.entry.endDate }</p>
        <p>{ props.entry.description }</p>
      </div>
    </main>
  )
}

export default JournalEntry