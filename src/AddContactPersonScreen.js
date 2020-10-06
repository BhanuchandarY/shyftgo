import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, StatusBar, ScrollView,ToastAndroid } from 'react-native';
import GlobalFont from 'react-native-global-font'
import AsyncStorage from '@react-native-community/async-storage'


class AddContactPersionScreen extends Component {


  constructor(props) {
    //constructor to set default state
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.state = {
      contactname: '',
      contactphone: '',

      // Packages: 'Up to 5kg',

    };
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  CheckContactDetails = (viewId) => {

    if (this.state.contactname!= '') {
      AsyncStorage.setItem('cname',JSON.stringify(this.state.contactname));  


      if (this.state.contactphone!= '') {
        AsyncStorage.setItem('cphone',JSON.stringify(this.state.contactphone));  


        this.props.navigation.navigate("SomeMoreAdditionalInfoScreen")
      }else {
        ToastAndroid.showWithGravity("Please enter Contact Phone ",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }


    }else {
      ToastAndroid.showWithGravity("Please enter Contact Name",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
    }


  }

  render() {
    const { navigate } = this.props.navigation;
    return (


      <View style={styles.container}>


        <ScrollView style={styles.scrollView}>

          <View style={styles.shape}>

            <Image style={{ marginTop: 25, justifyContent: "center", alignSelf: "center" }} source={require("../assets/contactperson.png")} />

            <Text style={{ marginTop: 20, fontSize: 20, textAlign: "center", color: '#151D56', fontFamily: 'Montserrat-Bold' }}>Add contact persion</Text>
            <Text style={{ marginTop: 15, fontSize: 14, textAlign: "center", color: '#58585C', fontFamily: 'Montserrat-Bold' }}>
              We need the  contact persion</Text>
            <Text style={{ fontSize: 14, textAlign: "center", color: '#58585C', fontFamily: 'Montserrat-Bold' }}>
              details so we can contact him on </Text>
            <Text style={{ fontSize: 14, textAlign: "center", color: '#58585C', fontFamily: 'Montserrat-Bold' }}>
              pick-up.</Text>

            <View style={{ marginLeft: 45, marginTop: 15 }}>
              <Text style={{ color: '#c0c1cb', fontSize: 14 }}>Contact Name</Text>
            </View>
            <TextInput
              onSubmitEditing={() => { this.fullnameTextInput.focus(); }}
              blurOnSubmit={false}
              style={styles.inputStyle}
              underlineColorAndroid="#e1e1e9"
              placeholder=""
              placeholderTextColor="#58585C"
              style={styles.textInput}
              autoCapitalize="none"
              returnKeyType='next'
              onChangeText={contactname => this.setState({ contactname })}

            />
            <View style={{ marginLeft: 45 }}>
              <Text style={{ color: '#c0c1cb', marginTop: 15, fontSize: 14 }}>Contact Phone</Text>
            </View>
            <TextInput
              ref={(input) => { this.fullnameTextInput = input; }}
              blurOnSubmit={false}
              style={styles.inputStyle}
              underlineColorAndroid="#e1e1e9"
              placeholder=""
              placeholderTextColor="#58585C"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="decimal-pad"
              returnKeyType='done'
              onChangeText={contactphone => this.setState({ contactphone })}


            />
            {/* </View> */}

            <Text style={{ marginTop: 20, fontSize: 17, textAlign: "center", color: '#17C9E6', fontFamily: 'Montserrat-Bold', fontWeight: "bold" }}>
              Import from your phone library </Text>

            <TouchableOpacity style={styles.save} onPress={() => this.CheckContactDetails('AddContactPersionScreen')}>

              <Text style={{ color: '#fff', alignSelf: "center", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: 18, fontFamily: 'Montserrat-ExtraBold' }}> Save  </Text>

            </TouchableOpacity>


            <StatusBar
              backgroundColor="#151D56"
              barStyle="default"

              hidden={false}
              translucent={true}
            />

          </View>
        </ScrollView>

      </View>

    );
  }
}
export default AddContactPersionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151D56',

  },
  save: {
    marginTop: 20,
    backgroundColor: '#131d5a',
    borderRadius: 30,
    height: 50,
    width: 160,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#fff'
  },
  textInput:
  {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginLeft: 45,
    marginRight: 35,
    borderColor: '#FFF',
    backgroundColor: '#fff',
  },
  inputStyle: {
    flex: 1,
    color: '#c0c1cb',
    paddingLeft: 10,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  shape: {
    backgroundColor: '#fff',
    marginTop: 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 1000,
    width: '100%',
    alignSelf: "center",
    borderColor: '#fff'
  },
});