import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onUpdateSearchInput} = props
  const {suggestion} = eachSuggestion
  const updateInput = () => {
    onUpdateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-container" onClick={updateInput}>
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-logo"
      />
    </li>
  )
}

export default SuggestionItem
