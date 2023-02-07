import './index.css'

const VisitedCountries = props => {
  const {visitedCountry, removeCountry} = props
  const {id, name, imageUrl} = visitedCountry
  const onClickRemove = () => {
    removeCountry(name)
  }

  return (
    <li className="visit-list-item">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="name-container">
        <p className="visit-name-para">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
