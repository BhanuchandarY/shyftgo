import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, StatusBar, ScrollView, ToastAndroid } from 'react-native';
import GlobalFont from 'react-native-global-font'
import MapDropOffLocation from '../components/MapDropOffLocation';
import MapPicLocation from '../components/MapPicLocation';

import { getLocation, geocodeLocationByName } from '../services/location-service';
import { getDistance, getPreciseDistance } from 'geolib';
import AsyncStorage from '@react-native-community/async-storage'



class PickuplocationScreen extends Component {


  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.state = {
      region: {},
      textInput: [],
      inputData: [],
      data: null,
      lat: null,
      lng: null,
      clickedCar: 'Car',
      clickedVan: 'Van',
      clickedScooter: 'Scooter',
      calculate: null

    };
  }

  addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(<TextInput style={styles.textInput}
      onChangeText={(text) => this.addValues(text, index)} />);
    this.setState({ textInput });
  }
  async componentWillMount() {
    let exprc = await AsyncStorage.getItem('exprc');
    var response = JSON.parse(exprc)
    this.setState({ data: response })


  }
  componentDidMount() {
    this.getInitialState();
  }
  getInitialState() {
    getLocation().then(
      (data) => {
        console.log(data);
        this.setState({
          region: {
            latitude: data.latitude,
            longitude: data.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003
          }
        });
      }
    );
  }
  getCoordsFromName(loc) {
    this.setState({
      lat: loc.lat,
      lng: loc.lng,
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }
    });
    AsyncStorage.setItem('picklat', JSON.stringify(loc.lat));
    AsyncStorage.setItem('picklng', JSON.stringify(loc.lng));

  }
  getCoordsFromNameDropOff(loc) {
    this.setState({
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003
      }
    });
    var dis = getDistance(
      // (async ()=>{  
      //   try{  
      //     var picklat = await AsyncStorage.getItem('picklat');  
      //     var picklng = await AsyncStorage.getItem('picklng');  

      //     var reslat = JSON.parse(picklat)   
      //     var reslng = JSON.parse(picklng)   

      //     if(isNaN(this.state.data)){
      //      alert("Value is Not Number");
      //     }else{
      //       this.setState({ data: picklat })
      //       this.setState({ datalng: picklng }) 
      //       console.log("response lat ressssssssssssss",this.state.data)           
      //        console.log("response lat ressssssssssssss",this.state.datalng)
      //     }

      //      }  
      //   catch(error){  
      //     alert(error)  
      //   }  
      // })(),
      { latitude: this.state.lat, longitude: this.state.lng },
      { latitude: loc.lat, longitude: loc.lng },
    );
    this.setState({
      calculate: dis / 1000
    });
    AsyncStorage.setItem('calculate', JSON.stringify(this.state.calculate * this.state.data));

    console.log("calculation kilometer", dis / 1000)


    console.log("calculation kilometer", this.state.calculate )
    console.log("calculation ", this.state.calculate * 40 )

    // console.log("pick lattitude", this.state.lat)
  }
  onMapRegionChange(region) {
    this.setState({ region });
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  Scooterclicke = (viewId) => {
    ToastAndroid.showWithGravity("Scooter clicked",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    AsyncStorage.setItem('scooter', JSON.stringify(this.state.clickedScooter));
  }
  Carclicke = (viewId) => {
    ToastAndroid.showWithGravity("Car clicked",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    AsyncStorage.setItem('car', JSON.stringify(this.state.clickedCar));
  }
  Vanclicke = (viewId) => {
    ToastAndroid.showWithGravity("Van clicked",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    AsyncStorage.setItem('van', JSON.stringify(this.state.clickedVan));
  }
  render() {
    const { navigate } = this.props.navigation;
    return (


      <View style={styles.container}>
        <ScrollView style={styles.scrollView}
          keyboardShouldPersistTaps="handled">
          <View style={styles.shape}>

            <Text style={{ marginTop: 24, fontSize: 20, marginLeft: 30, color: '#000000', fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>What to pick </Text>
            <Text style={{
              color: '#000000', marginLeft: 30, fontSize: 20, fontFamily: 'Montserrat-Bold', fontWeight: 'bold'
            }}>

              {this.props.navigation.state.params.JSON_ListView_Clicked_Item
                ? this.props.navigation.state.params.JSON_ListView_Clicked_Item
                : ''}
              {this.props.navigation.state.params.JSON_ListView_Clicked_Item_document
                ? this.props.navigation.state.params.JSON_ListView_Clicked_Item_document
                : ''}
              {this.props.navigation.state.params.JSON_ListView_Clicked_Item_cargo
                ? this.props.navigation.state.params.JSON_ListView_Clicked_Item_cargo
                : ''}
            </Text>

            <Text style={{ marginTop: 30, fontSize: 16, marginLeft: 30, color: '#151D56', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Your package fits in a: </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.Scooterclicke()} >
                <Image style={{ marginTop: 35, marginLeft: 30 }} source={require("../assets/scooter.png")} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.Carclicke()} >

                <Image style={{ marginTop: 35, marginLeft: 45 }} source={require("../assets/car.png")} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.Vanclicke()}>


                <Image style={{ marginTop: 35, marginLeft: 50 }} source={require("../assets/truck.png")} />
              </TouchableOpacity>

              {/* </View>
         </ScrollView> */}
            </View>

            <Text style={{ marginTop: 25, fontSize: 16, marginLeft: 30, color: '#151D56', fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Pick-up location </Text>

            <View style={{ marginLeft: 30, flexDirection: 'row' }}>
              <Text style={{ color: '#c0c1cb', marginTop: 15, color: '#ADAEBA', fontSize: 14 }}>pick-up location</Text>

            </View>

            <View style={{ flexDirection: 'row' }}>

              <MapPicLocation notifyChange={(loc) => this.getCoordsFromName(loc)}
              />
              <Image style={{ marginTop: 8, position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/addlocation.png")} />
            </View>
            <View style={{ width: '85%', height: 1, backgroundColor: '#c0c1cb', marginLeft: 30, marginRight: 55 }}>
            </View>


            <TouchableOpacity onPress={() => this.addTextInput(this.state.textInput.length)}>

              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 25, fontSize: 15, marginLeft: 30, color: '#000', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Add a new pick-up location</Text>
                <Image style={{ marginTop: 25, position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/addlocation.png")} />
              </View>
            </TouchableOpacity>

            <View style={{ width: '85%', marginTop: 8, height: 1, backgroundColor: '#c0c1cb', marginLeft: 30, marginRight: 55 }}>

            </View>

            <Text style={{ marginTop: 30, fontSize: 16, marginLeft: 30, color: '#151D56', fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Drop off location </Text>

            <View style={{ marginLeft: 30, flexDirection: 'row', color: '#ADAEBA' }}>
              <Text style={{ color: '#c0c1cb', marginTop: 15, fontSize: 14 }}>pick-up location</Text>

            </View>
            <View style={{ flexDirection: 'row' }}>


              <MapDropOffLocation notifyChange={(loc) => this.getCoordsFromNameDropOff(loc)} />
              <Image style={{ marginTop: 8, position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/addlocation.png")} />
            </View>
            <View style={{ width: '85%', height: 1, backgroundColor: '#c0c1cb', marginLeft: 30 }}>
            </View>

            <View style={{ flexDirection: 'row' }}>

              <Text style={{ marginTop: 25, fontSize: 15, marginLeft: 30, color: '#000', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Add a new pick-up location</Text>

              <Image style={{ marginTop: 25, position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/addlocation.png")} />

            </View>
            <View style={{ width: '85%', marginTop: 8, height: 1, backgroundColor: '#c0c1cb', marginLeft: 30 }}>


            </View>


            <StatusBar
              backgroundColor="#151D56"
              barStyle="default"

              hidden={false}
              translucent={true}
            />

          </View>
        </ScrollView>
        <View style={styles.CircleShapeView}>
          <View style={{ marginLeft: 28, flexDirection: 'row' }}>
            <Image style={{ marginTop: 35, marginLeft: 25 }} source={require("../assets/dollershape.png")} />
            <View style={{ marginLeft: 28, flexDirection: "column" }}>
              <Text style={{ color: '#ADAEBA', marginTop: 30, fontFamily: 'Montserrat-SemiBold', fontWeight: "normal", fontSize: 14 }}>Booking Cost</Text>
              <Text style={{ color: '#000000', fontFamily: 'Montserrat-SemiBold', fontWeight: "normal", fontSize: 18 }}>{this.state.calculate * 40}
              </Text>
            </View>
            <TouchableOpacity style={styles.continue} onPress={() => this.props.navigation.navigate("SomeMoreAdditionalInfoScreen")}>
              {/* <TouchableOpacity style={styles.continue} onPress={() => {this.calculateDistance}}> */}

              <Text style={{ color: '#fff', alignSelf: "center", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: 18, fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold" }}> Continue  </Text>

            </TouchableOpacity>

          </View>

        </View>
      </View>

    );
  }
}
export default PickuplocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151D56',
  },
  shape: {
    backgroundColor: '#fff',
    marginTop: 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 750,
    width: '100%',
    borderColor: '#fff'
  },
  CircleShapeViewpackages: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.0,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 100,
    width: '100%',
    borderColor: '#fff',
    position: "absolute",
    bottom: 0
  },
  CircleShapeView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 100,
    width: '100%',
    alignSelf: "center",
    borderColor: '#fff',
    position: "absolute",
    bottom: 0
  },
  continue: {
    marginTop: 25,
    backgroundColor: '#111532',
    borderRadius: 30,
    marginLeft: 50,
    height: 50,
    width: 150,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#fff'
  },
  textInput: {
    width: 325,
    marginTop: 8,
    height: 1,
    backgroundColor: '#58585C',
    marginLeft: 28,
    marginRight: 55
  },

});