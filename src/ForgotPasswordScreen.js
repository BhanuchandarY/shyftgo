import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,StatusBar } from 'react-native';
import GlobalFont from 'react-native-global-font'

class ForgotPasswordScreen extends Component   {


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
         <View style={styles.container}>
         <TouchableOpacity onPress={this.handleBackButtonClick}>
         <Image style={{marginLeft:25,marginTop:55}}source={require("../assets/arrowback.png")}/>
     </TouchableOpacity>
           <Text style={{marginTop:20,fontSize:20,marginLeft:28,color:'#000',fontFamily:'Montserrat-Bold',fontWeight:'bold'}}>Forgot Password </Text>
                 <StatusBar  
                         backgroundColor = "#fff"  
                         barStyle = "dark-content"   
                         hidden = {false}    
                         translucent = {true}  
                 />  
                  <View style={{marginLeft:45}}>
        <Text style={{color:'#c0c1cb',marginTop:55,fontFamily:"montserrat.ttf"}}>Email</Text>
      </View>
              <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#e1e1e9"
                placeholder="" 
                placeholderTextColor="#58585C"
                style={styles.textInput}
                autoCapitalize="none"
                returnKeyType='done'   
               //  onSubmitEditing={() => { this.emailTextInput.focus(); }}
               //  blurOnSubmit={false} 
                keyboardType="email-address"
                onChangeText={userEmail => this.setState({ userEmail })}
              />
            </View>
            <TouchableOpacity style={styles.forgot} onPress ={() =>  this.props.navigation.navigate("LoginScreen")}>
     
     <Text style={{color:'#fff',alignSelf:"center",justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:18,fontFamily:'Montserrat-ExtraBold'}}> Submit  </Text>
      
       </TouchableOpacity>
           </View>
      );
   }
}
export default  ForgotPasswordScreen;

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
      // marginTop:30
      // marginBottom:40
      // margin: 10,
    },
    textInput:
    {
      width: '90%',
      height: 40,
      borderWidth: 1,
      // marginLeft: 15,
      borderColor: '#FFF',
      backgroundColor: '#fff',
    },
    forgot: {
      marginTop:150,
      backgroundColor:'#131d5a',
      borderRadius:30,
      height:50,
      width:200,  
      alignSelf:"center",
      alignItems:"center",
      justifyContent: 'center',
      // flex:1,
      borderColor: '#fff'
    },
});