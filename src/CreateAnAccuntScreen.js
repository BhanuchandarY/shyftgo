import React, { Component }  from 'react';
import { StyleSheet, Text, View,Image,TextInput,StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

class CreateAnAccountScreen extends Component  {
  constructor(props) {
    //constructor to set default state
    super(props);
  }
    render(){
      const { navigate } = this.props.navigation;
  return (
    <View style={styles.container}>
      {/* <Text style={{marginTop:70,fontSize:22,color:'#000',alignSelf:"center"}}>SHYFT </Text> */}
      <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
            />  
             <View style={{flexDirection:'row',alignSelf:'center',marginTop:45}}>
            <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'bold',fontSize:20}}>SHYFT</Text>
            <Image style={{alignSelf:'center',marginLeft:10}} source={require("../assets/shfyftlogonew.png")}/>
        </View>
     
     
      <View>     
      
      <Image style={{width:300,height:300,alignSelf:"center"}} source={require("../assets/createaccount.png")}/>
      </View> 
      <View style={{color:'#838385',marginTop:10,fontSize:15}}>

      <Text style={{alignSelf:"center",fontSize:22,color:'#151D56',fontFamily:'Montserrat-Bold',fontWeight:'bold'}}>Welcome to Shyft.</Text>
      <Text style={{alignSelf:"center",fontSize:22,color:'#151D56',fontFamily:'Montserrat-Bold',fontWeight:'bold'}}>Your luggage assistant.</Text>
      </View>
    <View style={{marginTop:10,fontSize:15}}>
      <Text style={{alignSelf:"center",color:'#58585C',fontFamily:'Montserrat-Medium',fontSize:14,fontWeight:'normal'}}>Create a new account</Text>
      <Text style={{alignSelf:"center",color:'#58585C',fontFamily:'Montserrat-Medium',fontSize:14,fontWeight:'normal'}}>to enjoy the full Shyft experience</Text>
      </View>
    
      <View>
      <TouchableOpacity style={styles.SubmitButtonStyle} onPress ={() => this.props.navigation.navigate("CreateScreen")}>
     

    {/* <Image source={require("../assets/createbutton.jpeg")}/> */}
    <Text style={{color:'#fff',alignSelf:"center",justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:18,fontFamily:'Montserrat-ExtraBold'}}> Create an account </Text>
     
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress ={() => this.props.navigation.navigate("LoginScreen")}>
      <View style={styles.forgotpassstyle}>
      {/* <Image source={require("../assets/createlogin.jpeg")}/> */}
  
  <Text style={styles.label}>I have an account ,</Text>
  <Text style={{alignSelf:"center",color:"#1f2862",fontSize:22,fontFamily:'Montserrat-ExtraBold'}}>login</Text>

</View>
</TouchableOpacity>
      </View>
  );
}
}
export default  CreateAnAccountScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  forgotpassstyle: {
    flexDirection: "row",
    marginTop:30,
    alignSelf:"center",
    // marginBottom: 20,
  },
  SubmitButtonStyle: {
    marginTop:50,
    backgroundColor:'#131d5a',
    borderRadius:30,
    height:50,
    width:250,  
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderColor: '#fff'
  },
 
  label: {
    margin: 8,
    marginLeft:15,
    fontSize:17,
    color:'#58585C'
  },
});
