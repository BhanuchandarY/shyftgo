// import React, { useState } from 'react';
import React, { useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AsyncStorage from '@react-native-community/async-storage'

function MapInput(props) {

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
        console.log("response lattitude", details.geometry.location.lat);
        console.log("response longtude", details.geometry.location.lng);
        AsyncStorage.setItem('user', JSON.stringify(data.description)); 
        (async () => {
          try {
            let user = await AsyncStorage.getItem('user');
            alert(user);
          }
          catch (error) {
            alert(error)
          }
        })();
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
export default MapInput;
