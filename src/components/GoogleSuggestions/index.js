import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchItem: ''}

  onUpdateSearchInput = suggestion => {
    this.setState({searchItem: suggestion})
  }

  getSearchInput = event => {
    this.setState({searchItem: event.target.value})
  }

  render() {
    const {searchItem} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchItem),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="suggestions-list-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchItem}
              className="search-input"
              onChange={this.getSearchInput}
            />
          </div>
          <ul className="lists-container">
            {searchResults.map(eachItem => (
              <SuggestionItem
                eachSuggestion={eachItem}
                key={eachItem.id}
                onUpdateSearchInput={this.onUpdateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
