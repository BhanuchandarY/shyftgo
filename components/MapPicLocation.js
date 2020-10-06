// import React, { useState } from 'react';
import React, { useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AsyncStorage from '@react-native-community/async-storage'

function MapPicLocation(props) {

  return (
    <GooglePlacesAutocomplete
      placeholder='Search Location'
      minLength={1} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search location'}
      keyboardAppearance={'light'}
      listViewDisplayed={false}    // true/false/undefined
      fetchDetails={true}
      // renderDescription={(row) => row.terms[0].value}
      styles={{
        textInputContainer: {
          backgroundColor: 'rgba(0,0,0,0)',
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          //   height: 38,
          marginLeft: 19,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          //   color: '#1faadb',
        },
      }}
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        props.notifyChange(details.geometry.location);
      
        AsyncStorage.setItem('user', JSON.stringify(data.description));
        AsyncStorage.setItem('pickuplat', JSON.stringify(details.geometry.location.lat));
        AsyncStorage.setItem('pickuplng', JSON.stringify(details.geometry.location.lng));                  

      }
      }
      query={{
        key: 'AIzaSyBPnDatU8GFmaTp3-rfJAKmjLS6bPMEjrY',
        language: 'en'
      }}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={300}
    />
  );
}
export default MapPicLocation;
