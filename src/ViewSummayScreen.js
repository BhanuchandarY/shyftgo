import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, StatusBar, ScrollView } from 'react-native';
import GlobalFont from 'react-native-global-font'
import AsyncStorage from '@react-native-community/async-storage'


class ViewSummaryScreen extends Component {


  constructor(props) {
    //constructor to set default state
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.state = {
      contactname: '',
      contactphone: '',
      date: '',
      picname: '',
      dropoffname: '',

      // Packages: 'Up to 5kg',

    };
  }

  async componentWillMount() {

    let user = await AsyncStorage.getItem('user');
    var response = JSON.parse(user)
    this.setState({ picname: response })

    let dropoffn = await AsyncStorage.getItem('userdropoff');
    var resdropofn = JSON.parse(dropoffn)
    this.setState({ dropoffname: resdropofn })

    let datepck = await AsyncStorage.getItem('datepck');
    var resdate = JSON.parse(datepck)
    this.setState({ date: resdate })

    let cphone = await AsyncStorage.getItem('cphone');
    var rescphone = JSON.parse(cphone)
    this.setState({ contactphone: rescphone })

    let cname = await AsyncStorage.getItem('cname');
    var rescname = JSON.parse(cname)
    this.setState({ contactname: rescname })


  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  render() {
    const { navigate } = this.props.navigation;
    return (


      <View style={styles.container}>


        <ScrollView style={styles.scrollView}>

          <View style={styles.shape}>


            <Text style={{ marginTop: 20, fontSize: 14, color: '#17C9E6', fontFamily: 'Montserrat-Bold', marginLeft: 30, fontWeight: "bold" }}>Package</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 5, fontSize: 16, color: '#000000', fontFamily: 'Montserrat-Bold', marginLeft: 30 }}>
                Fits in a car (medium)</Text>
              <Image style={{ position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/edit.png")} />

            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginTop: 20, fontSize: 14, color: '#17C9E6', fontFamily: 'Montserrat-Bold', marginLeft: 30, fontWeight: "bold" }}>First pick-up</Text>
              <Image style={{ marginTop: 20, position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/edit.png")} />
            </View>
            <Text style={{ fontSize: 16, color: '#000000', fontFamily: 'Montserrat-Bold', marginLeft: 30 }}>
              {this.state.picname}</Text>
            <Text style={{ marginTop: 8, fontSize: 16, color: '#000000', fontFamily: 'Montserrat-Bold', marginLeft: 30 }}>
              {this.state.date}</Text>
            <Text style={{ marginTop: 8, fontSize: 16, color: '#000000', fontFamily: 'Montserrat-Bold', marginLeft: 30 }}>
              {this.state.contactname}, {this.state.contactphone} </Text>

            {/* <Text style={{marginTop:20,fontSize:14,color:'#17C9E6',fontFamily:'Montserrat-Bold',marginLeft:30,fontWeight:"bold"}}>Second pick-up</Text>
               <Text style={{fontSize:16,color:'#000000',fontFamily:'Montserrat-Bold',marginLeft:30}}>
               Bonnington Tower,JLT</Text>
               <Text style={{marginTop:8,fontSize:16,color:'#000000',fontFamily:'Montserrat-Bold',marginLeft:30}}>
               23 Mar 2020, 11:00-11:15 AM</Text>
               <Text style={{marginTop:8,fontSize:16,color:'#000000',fontFamily:'Montserrat-Bold',marginLeft:30}}>
      {this.state.contactname}, {this.state.contactphone}</Text> */}

            <Text style={{ marginTop: 20, fontSize: 14, color: '#151D56', fontFamily: 'Montserrat-Bold', marginLeft: 30, fontWeight: "bold" }}>Drop off</Text>
            <Text style={{ fontSize: 16, color: '#000000', fontFamily: 'Montserrat-Bold', marginLeft: 30 }}>
              {this.state.dropoffname}</Text>
            <Text style={{ marginTop: 8, fontSize: 16, color: '#000000', fontFamily: 'Montserrat-Bold', marginLeft: 30 }}>
              {this.state.date}</Text>
            <Text style={{ marginTop: 8, fontSize: 16, color: '#000000', fontFamily: 'Montserrat-Bold', marginLeft: 30 }}>
              {this.state.contactname}, {this.state.contactphone} </Text>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("SomeMoreAdditionalInfoScreen")}>

                <Text style={{ marginTop: 70, marginLeft: 25, color: '#17C9E6', fontSize: 17, fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Close summary</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.continue} onPress={() => this.props.navigation.navigate("SomeMoreAdditionalInfoScreen")}>

                <Text style={{ color: '#8387a3', alignSelf: "center", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: 16, fontFamily: 'Montserrat-ExtraBold' }}>
                  Continue  </Text>

              </TouchableOpacity>
            </View>

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
export default ViewSummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151D56',
  },
  continue: {
    marginTop: 55,
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