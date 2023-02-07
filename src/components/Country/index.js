import './index.css'

const Country = props => {
  const {countryDetails, visitCountries} = props
  const {id, name, imageUrl} = countryDetails
  const addVisitCountries = () => {
    visitCountries(countryDetails)
  }
  return (
    <>
      <li className="country-list-item">
        <p className="country-name">{name}</p>
        <button
          type="button"
          className="visit-button"
          onClick={addVisitCountries}
        >
          Visit
        </button>
      </li>
      <hr className="line" />
    </>
  )
}
export default Country
