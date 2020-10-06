import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, StatusBar, ScrollView } from 'react-native';
import GlobalFont from 'react-native-global-font'

class AccountSettingScreen extends Component {


  constructor(props) {
    //constructor to set default state
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.state = {

    };
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  componentDidMount() {
    let fontName = 'Times New Roman'
    GlobalFont.applyGlobal(fontName)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this.handleBackButtonClick}>
              <Image style={{ marginLeft: 25, marginTop: 55 }} source={require("../assets/arrowback.png")} />
            </TouchableOpacity>
            <View style={{ marginTop: 15, flex: 1, marginRight: 60 }}>
              <TouchableOpacity onPress={this.handleBackButtonClick}>
                <Text style={{ marginTop: 50, fontSize: 17, color: '#17C9E6', textAlign: 'right', fontFamily: 'Montserrat-SemiBold', marginRight: 5 }}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ marginTop: 20, fontSize: 20, marginLeft: 28, color: '#000', fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Account Settings </Text>
          <StatusBar
            backgroundColor="#fff"
            barStyle="dark-content"
            hidden={false}
            translucent={true}
          />
          <View style={{ marginLeft: 45 }}>
            <Text style={{ color: '#c0c1cb', marginTop: 35, fontFamily: "montserrat.ttf" }}>Full Name</Text>
          </View>
          <View style={styles.SectionStyle}>
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
              onChangeText={name => this.setState({ name })}
            />
          </View>
          <View style={{ marginLeft: 45 }}>
            <Text style={{ color: '#c0c1cb', marginTop: 15 }}>Email</Text>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              ref={(input) => { this.fullnameTextInput = input; }}
              onSubmitEditing={() => { this.emailTextInput.focus(); }}
              blurOnSubmit={false}
              style={styles.inputStyle}
              underlineColorAndroid="#e1e1e9"
              placeholder=""
              placeholderTextColor="#58585C"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType='next'
              onChangeText={email => this.setState({ email })}


            />
          </View>
          <View style={{ marginLeft: 45, marginTop: 15, flexDirection: 'row' }}>
            <Text style={{ color: '#c0c1cb' }}>Mobile Number</Text>

            <View style={{ flex: 1, marginRight: 90 }}>
              <Image style={{ alignItems: 'flex-end', alignSelf: 'flex-end' }} source={require("../assets/downarrow.png")} />
            </View>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              ref={(input) => { this.emailTextInput = input; }}
              onSubmitEditing={() => { this.mobilenumberTextInput.focus(); }}
              blurOnSubmit={false}
              style={styles.inputStyle}
              underlineColorAndroid="#e1e1e9"
              placeholder=""
              placeholderTextColor="#58585C"
              style={styles.textInput}
              autoCapitalize="none"
              returnKeyType='next'
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
            />
          </View>
          <View style={{ marginLeft: 45, flexDirection: 'row' }}>
            <Text style={{ color: '#c0c1cb', marginTop: 15 }}>Password</Text>
            <View style={{ marginTop: 15, flex: 1, marginRight: 60 }}>
              <Text style={{ fontSize: 14, color: '#17C9E6', textAlign: 'right', fontFamily: 'Montserrat-SemiBold' }}>Show</Text>
            </View>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              ref={(input) => { this.mobilenumberTextInput = input; }}
              style={styles.inputStyle}
              underlineColorAndroid="#e1e1e9"
              placeholder=""
              placeholderTextColor="#58585C"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType='done'
              onChangeText={password => this.setState({ password })} />
          </View>
          <View style={{ marginTop: 25, marginLeft: 45 }}>
            <Text style={{ fontSize: 16 }}>
              Additional information
                  </Text>

          </View>
          <View style={{ marginLeft: 45, flexDirection: 'row' }}>
            <Text style={{ color: '#c0c1cb', marginTop: 25 }}>My address</Text>
            <View style={{ marginTop: 25, flex: 1, marginRight: 60 }}>
              <Text style={{ fontSize: 14, color: '#17C9E6', textAlign: 'right', fontFamily: 'Montserrat-SemiBold' }}>maps</Text>
            </View>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              ref={(input) => { this.mobilenumberTextInput = input; }}
              style={styles.inputStyle}
              underlineColorAndroid="#e1e1e9"
              placeholder=""
              placeholderTextColor="#58585C"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType='done'
              onChangeText={password => this.setState({ password })} />
          </View>
          <View style={{ marginLeft: 45 }}>
            <Text style={{ color: '#c0c1cb', marginTop: 15, fontFamily: "montserrat.ttf" }}>Building Number</Text>
          </View>
          <View style={styles.SectionStyle}>
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
              onChangeText={name => this.setState({ name })}
            />
          </View>
          <View style={{ marginLeft: 45 }}>
            <Text style={{ color: '#c0c1cb', marginTop: 15, fontFamily: "montserrat.ttf" }}>Floor / Room Number</Text>
          </View>
          <View style={styles.SectionStyle}>
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
              onChangeText={name => this.setState({ name })}
            />
          </View>
          <TouchableOpacity style={styles.forgott} onPress={() => this.props.navigation.navigate("LoginScreen")}>

            <Text style={{ color: '#fff', alignSelf: "center", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: 18, fontFamily: 'Montserrat-ExtraBold' }}> Submit  </Text>

          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
export default AccountSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 45,
    marginRight: 55,
  },
  textInput:
  {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#fff',
  },
  forgot: {
    marginTop: 150,
    backgroundColor: '#131d5a',
    borderRadius: 30,
    height: 50,
    width: 200,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: 'center',
    // flex:1,
    borderColor: '#fff'
  },
});