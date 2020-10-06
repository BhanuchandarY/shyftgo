import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, StatusBar, ScrollView } from 'react-native';
import GlobalFont from 'react-native-global-font'
import AsyncStorage from '@react-native-community/async-storage'



class PointToPointScreen extends Component {

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      Packages: 'Up to 5kg',
      Documents: 'Lightweight',
      LightCargo: 'Under 50kg',
      data: '',

    };

  }
  componentDidMount = () => {
    fetch('http://6362a050c7e4.ngrok.io/v1.0/mbapp/packages', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.success == true) {
          console.log("ressssssssssssssss", responseJson);
          this.setState({
            data: responseJson.data

          })
          console.log("ressssssssssssssss", this.state.data[1].cur);

          AsyncStorage.setItem('exprc', JSON.stringify(this.state.data[1].exprc));
          AsyncStorage.setItem('cur', JSON.stringify(this.state.data[1].cur));
        }
      })
      .catch((error) => {
        console.error("error", error);

      });
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <View style={{ backgroundColor: '#151D56', paddingBottom: 20 }}>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={this.handleBackButtonClick}>
                <Image style={{ marginLeft: 25, marginTop: 55 }} source={require("../assets/arrowhite.png")} />
              </TouchableOpacity>

            </View>
            <View style={styles.firtText}></View>
            <Text style={styles.textStyle}>Point To Point </Text>
            <Text style={styles.textStyle}>delivery for </Text>
            <Text style={styles.textStyle}>anything </Text>
            <Text style={styles.secondText}>
              We deliver anything. The easy way </Text>
            <Text style={styles.secondTextbelow}>
              to send and receive items in Dubai. </Text>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("PickuplocationScreen", { JSON_ListView_Clicked_Item_document: this.state.Documents }, { JSON_ListView_Clicked_Item_price: this.state.price })}>

              <View style={styles.CircleShapeView}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={{ marginTop: 35, marginLeft: 30 }} source={require("../assets/documentimage.png")} />
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ marginTop: 35, marginLeft: 15, color: '#151D56', fontSize: 20, fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Documents</Text>
                    <Text style={{ marginLeft: 15, color: '#17C9E6', fontSize: 20, fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Lightweight</Text>
                  </View>
                </View>
                <Text style={{ marginLeft: 30, color: '#b0b1be', fontSize: 16, marginTop: 26 }}>Standard or Express</Text>
                <Text style={{ marginLeft: 30, color: '#b0b1be', fontSize: 16 }}>delivery within 1-2hours</Text>

                <Text style={{ marginLeft: 30, color: '#00B073', fontSize: 16, marginTop: 25, fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Service price</Text>
                {
                  this.state.data ? <Text style={{ marginLeft: 30, color: '#000000', fontSize: 22 }}>
                    {this.state.data[0].cur} {this.state.data[0].prc} + {this.state.data[0].kmprc}/km
                     </Text>       

                    : <Text></Text>
                }
                <Text style={{ marginLeft: 30, color: '#ADAEBA', fontSize: 16, marginTop: 16 }}>Add AED 40 for Express</Text>

              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("PickuplocationScreen", { JSON_ListView_Clicked_Item: this.state.Packages }, { JSON_ListView_Clicked_Item_price: this.state.price })}>
              <View style={styles.CircleShapeViewpackages}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={{ marginTop: 35, marginLeft: 30 }} source={require("../assets/packages.png")} />
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ marginTop: 35, marginLeft: 15, color: '#151D56', fontSize: 20, fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Packages</Text>
                    <Text style={{ marginLeft: 15, color: '#17C9E6', fontSize: 20, fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Up to 5kg</Text>
                  </View>
                </View>

                <Text style={{ marginLeft: 30, color: '#ADAEBA', fontSize: 18, marginTop: 26 }}>Standard or Express</Text>
                <Text style={{ marginLeft: 30, color: '#ADAEBA', fontSize: 18 }}>delivery within 1-2hours</Text>

                <Text style={{ marginLeft: 30, color: '#00B073', fontSize: 14, marginTop: 25, fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Service price</Text>
                {
                  this.state.data ? <Text style={{ marginLeft: 30, color: '#000000', fontSize: 22 }}>
                    {this.state.data[1].cur} {this.state.data[1].prc} + {this.state.data[1].kmprc}/km
                     </Text>
                    : <Text></Text>
                }

                <Text style={{ marginLeft: 30, color: '#ADAEBA', fontSize: 16, marginTop: 16 }}>Add AED 40 for Express</Text>

              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("PickuplocationScreen", { JSON_ListView_Clicked_Item_cargo: this.state.LightCargo }, { JSON_ListView_Clicked_Item_price: this.state.price })}>

              <View style={styles.CircleShapelightcargo}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={{ marginTop: 35, marginLeft: 30 }} source={require("../assets/lightcargo.png")} />
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ marginTop: 30, marginLeft: 15, color: '#151D56', fontSize: 20, fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Light Cargo</Text>
                    <Text style={{ marginLeft: 15, color: '#17C9E6', fontSize: 20, fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Under 50kg</Text>
                  </View>
                </View>
                <Text style={{ marginLeft: 30, color: '#ADAEBA', fontSize: 18, marginTop: 26 }}>Standard or Express</Text>
                <Text style={{ marginLeft: 30, color: '#ADAEBA', fontSize: 18 }}>delivery within 1-2hours</Text>

                <Text style={{ marginLeft: 30, color: '#00B073', fontSize: 14, marginTop: 14, fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Service price</Text>
                {
                  this.state.data ? <Text style={{ marginLeft: 30, color: '#000000', fontSize: 22 }}>
                    {this.state.data[2].cur} {this.state.data[2].prc} + {this.state.data[2].kmprc}/km
                     </Text>
                    : <Text></Text>
                }

                <Text style={{ marginLeft: 30, color: '#ADAEBA', fontSize: 16, marginTop: 16 }}>Add AED 40 for Express</Text>

              </View>
            </TouchableOpacity>
          </View>
          <StatusBar
            backgroundColor="#151D56"
            barStyle="default"
            hidden={false}
            translucent={true}
          />
          <View style={{ marginTop: 50 }}>
            <Text style={styles.fontsize} >Save effort, money</Text>
            <Text style={styles.fontsize} >and of course time.</Text>

            <Image style={{ marginTop: 35, alignItems: "center", alignSelf: "center" }} source={require("../assets/ptopimage.png")} />
            <Image style={{ marginTop: 35, alignItems: "center", alignSelf: "center" }} source={require("../assets/ptopsuccess.png")} />

            <Text style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: 'Montserrat-Bold',
              color: '#151D56',
              marginTop: 15,
              fontWeight: 'bold'
            }} >We can help you in </Text>
            <Text style={styles.anoherfontsize} >Left your charger or </Text>
            <Text style={styles.anoherbelowfontsize} >keys at home? </Text>

            <Text style={styles.anoherfontsize} >Need to send a document across </Text>
            <Text style={styles.anoherbelowfontsize} >urgently?</Text>

            <Text style={styles.anoherfontsize} >Surprise your friend with a birthday  </Text>
            <Text style={styles.anoherbelowfontsize} >present. </Text>

            <Text style={{
              textAlign: "center", fontSize: 18, color: '#17C9E6', marginTop: 30,
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal'
            }} >Pick Up & Delivey withing 24   </Text>
            <Text style={{
              textAlign: "center", fontSize: 18, color: '#17C9E6',
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal'
            }} >hours.Service hours: </Text>
            <Text style={{
              textAlign: "center", fontSize: 18, color: '#17C9E6',
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal'
            }} >08:00 AM to 10:00 PM</Text>

            <Image style={{ marginTop: 85, alignItems: "center", alignSelf: "center" }} source={require("../assets/arrow.png")} />



            <View style={styles.Cardshape}>
              <Text style={{
                textAlign: "center", fontSize: 20, color: '#17C9E6', marginTop: 50,
                fontFamily: 'Montserrat-SemiBold',
                fontWeight: 'normal'
              }} >Simple &   </Text>
              <Text style={{
                textAlign: "center", fontSize: 20, color: '#17C9E6',
                fontFamily: 'Montserrat-SemiBold',
                fontWeight: 'normal'
              }} >Transparent pricing</Text>

              <Text style={{
                textAlign: "center", fontSize: 32, color: '#151D56', marginTop: 20,
                fontFamily: 'Montserrat-SemiBold',
                fontWeight: 'bold'
              }} >Booking fee  </Text>
              <Text style={{
                textAlign: "center", fontSize: 30, color: '#151D56',
                fontFamily: 'Montserrat-SemiBold',
                fontWeight: 'bold'
              }} >+ </Text>
              <Text style={{
                textAlign: "center", fontSize: 30, color: '#151D56',
                fontFamily: 'Montserrat-SemiBold',
                fontWeight: 'bold'
              }} >per KM charge </Text>

              <Text style={{
                textAlign: "center", fontSize: 16, color: '#58585C', marginTop: 20,
                fontFamily: 'Montserrat-SemiBold',
                fontWeight: 'normal'
              }} >Per km charge is on distance</Text>
              <Text style={{
                textAlign: "center", fontSize: 16, color: '#58585C',
                fontFamily: 'Montserrat-SemiBold',
                fontWeight: 'normal'
              }} >from pickpup to dropoff point.</Text>

            </View>

            <Text style={{
              textAlign: "center", fontSize: 24, color: '#151D56', marginTop: 60,
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'bold'
            }} >We pick up </Text>
            <Text style={{
              textAlign: "center", fontSize: 24, color: '#151D56',
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'bold'
            }} >& deliver, fast.</Text>

            <Text style={{
              textAlign: "center", fontSize: 16, color: '#58585C', marginTop: 30,
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal'
            }} >Want to send or receive someting  </Text>
            <Text style={{
              textAlign: "center", fontSize: 16, color: '#58585C',
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal'
            }} >from point A to B? Simply schedule a</Text>
            <Text style={{
              textAlign: "center", fontSize: 16, color: '#58585C',
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal'
            }} >Shyft Go 'Pick & Drop' service and get </Text>
            <Text style={{
              textAlign: "center", fontSize: 16, color: '#58585C',
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal'
            }} >it delivered within the same day  </Text>

            <Text style={{
              textAlign: "center", fontSize: 18, color: '#17C9E6', marginTop: 30,
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal'
            }} >Service hours: </Text>
            <Text style={{
              textAlign: "center", fontSize: 18, color: '#17C9E6',
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 'normal'
            }} >08:00 AM to 10:00 PM </Text>


            <Image style={{ marginTop: 50, marginBottom: 20, alignItems: "center", alignSelf: "center" }} source={require("../assets/ptopbotomimg.png")} />



          </View>
        </View>
      </ScrollView>
    );
  }
}
export default PointToPointScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fontsize: {
    textAlign: "center",
    fontSize: 20,
    color: '#151D56',
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold'
  },
  anoherfontsize: {
    textAlign: "center",
    fontSize: 16,
    color: '#000000',
    marginTop: 20,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'normal'
  },
  anoherbelowfontsize: {
    textAlign: "center",
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'normal'
  },
  CircleShapeView: {
    marginTop: 25,
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 320,
    width: '85%',
    alignSelf: "center",
    borderColor: '#fff'
  },
  Cardshape: {
    marginTop: 15,
    backgroundColor: '#F6F7FB',
    borderRadius: 30,
    height: 320,
    width: 280,
    alignSelf: "center",
    borderColor: '#fff'
  },
  CircleShapeViewpackages: {
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 320,
    width: '85%',
    alignSelf: "center",
    borderColor: '#fff'
  },
  CircleShapelightcargo: {
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 320,
    width: '85%',
    alignSelf: "center",
    borderColor: '#fff'
  },
  firtText: {
    marginLeft: 30,
    marginTop: 30
  },
  secondText: {
    marginTop: 18,
    fontSize: 14,
    marginLeft: 30,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold'
  },
  secondTextbelow: {
    fontSize: 14,
    marginLeft: 30,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold'
  },
  textStyle: {
    marginLeft: 30,
    fontSize: 30,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
  }

});