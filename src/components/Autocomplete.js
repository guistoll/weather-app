import React from 'react';
import PropTypes from 'prop-types';
import fetchLocations from '../api/SearchLocationAction';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0, // The active selection's index
      filteredSuggestions: [], // The suggestions that match the user's input
      showSuggestions: false, // Whether or not the suggestion list is shown
      userInput: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  // Event fired when the input value is changed
  onChange(event) {
    const userInput = event.currentTarget.value;

    if (userInput.length > 2) {
      fetchLocations(userInput).then(filteredSuggestions => {
        this.setState({
          filteredSuggestions,
          showSuggestions: true,
        })
      });
    }
    else {
      this.setState({
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: event.currentTarget.value
      });
    }

    // Update the user input, reset the active suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      userInput: event.currentTarget.value
    });
  }

  // Event fired when the user clicks on a suggestion
  onClick(event, selectedCity) {
    this.props.getCity(selectedCity);

    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.currentTarget.innerText
    });
  };

  render() {
    const {
      onChange,
      onClick,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul
            css={{
              border: '1px solid #999',
              borderTopWidth: 0,
              listStyle: 'none',
              margin: '0 auto',
              maxHeight: '143px',
              overflowY: 'auto',
              paddingLeft: '0',
              width: 'calc(400px + 1rem)',
            }}
          >
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  css={{
                    padding: '0.5rem',
                    backgroundColor: 'white',
                    ':hover': {
                      backgroundColor: '#e9e9e9',
                      cursor: 'pointer',
                      fontWeight: '700',
                    }
                  }}
                  className={className}
                  key={suggestion.url}
                  onClick={(event) => { onClick(event, suggestion.url) }}
                >
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div
            css={{
              color: '#999',
              padding: '0.5rem',
              textAlign: 'center',
            }}
          >
            <em>No results</em>
          </div>
        );
      }
    }

    return (
      <div css={{ display: 'table', width: '100%' }}>
        <form css={{ display: 'table-cell' }}>
          <label
            css={{
              display: 'block',
              fontSize: '20px',
              margin: '30px 0 20px',
              textAlign: 'center',
            }}
          >
            Select a City:
          </label>
          <input
            css={{
              border: '1px solid #999',
              display: 'block',
              fontFamily: 'Lato',
              fontSize: '16px',
              margin: '0 auto',
              padding: '0.5rem',
              width: '400px',
            }}
            type='text'
            onChange={onChange}
            value={userInput}
          />
          {suggestionsListComponent}
        </form>
      </div>
    );
  }
}

Autocomplete.propTypes = {
  suggestions: PropTypes.array
};

Autocomplete.defaultProps = {
  suggestions: []
};