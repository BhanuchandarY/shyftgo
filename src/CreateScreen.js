import React, { Component }  from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,CheckBox,Image,TouchableOpacity,ToastAndroid } from 'react-native';

export default class CreateScreen extends Component{

  constructor(props) {
    //constructor to set default state
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.registerCall = this.registerCall.bind(this),

    this.state = {
      name: '',
      password : '',
      roleName :'customer',
      email :'',
      registerType :'normal',
      phoneNumber :'',
      country :'India',
      channel :'b2c_customer_mweb' 
    };
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}
  CheckUserRegisterDetails = (viewId) => {

    if (this.state.name!= '') {

      if (this.state.email!= '') {

        if (this.state.phoneNumber!= '') {

          if (this.state.password!= '') {

      
            this.registerCall();

          }else{
            ToastAndroid.showWithGravity("Please enter password",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER);
          }
        }else{
            ToastAndroid.showWithGravity("Please enter phonenumber",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER);
        }

        }else{
          ToastAndroid.showWithGravity("Please enter email",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER);

        }
    }else{
      ToastAndroid.showWithGravity("Please enter fullname",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER);
    }

  }
  registerCall =() =>{

    fetch('https://stage-api.shyftclub.com/v1.0/user/register',{
        method:'POST',
        headers:{
          // 'Accept':'application/json',
          'Content-Type': 'application/json',
          'deviceid':'123',
          'OSVersion': 'Vaue'
          
        },
        body:JSON.stringify({
          name: this.state.name, 
          password: this.state.password,
          email: this.state.email,
          registerType: this.state.registerType,
          phoneNumber: this.state.phoneNumber,
          country: this.state.country,
          channel: this.state.channel,
          roleName: this.state.roleName,
          
          
        }),
        
      })
      
      .then(response => response.json())
      .then(responseData =>{

        console.log('responseeeeeeeeeeeeeeeeeeee:',responseData);

        if(responseData.success==true){
          console.log('res:',responseData.success);
          this.props.navigation.navigate("LoginScreen")
          ToastAndroid.showWithGravity("Registration successfull",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        }else if(responseData.success==false){
          console.log('responseeeeeeeeeeeeeeeeeeee:',responseData.errors[0].errorMessage);
          ToastAndroid.showWithGravity(responseData.errors[0].errorMessage,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );

        }
      })
      .catch(error=>{
        console.log('ERROR:',error)
      });

  }
    render() {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}><TouchableOpacity onPress={this.handleBackButtonClick}>
    <Image style={{marginLeft:25,marginTop:45}}source={require("../assets/arrowback.png")}/>
</TouchableOpacity>
      <View style={{marginTop:20}}>
        <Text style={{color:'#000000',fontSize:20,marginLeft:15,fontFamily:'Montserrat-Bold',fontWeight:'bold'}}> Create a Shyft account</Text>
      </View>
      <View style ={{flexDirection:"row",marginTop:40,alignSelf:"center"}}> 
      <View>
      <TouchableOpacity style={styles.google} onPress ={() => this.props.navigation.navigate("SavedLocationScreen")}>
     
    {/* <Text style={{alignSelf:"center",justifyContent:"center",alignItems:"center",textAlign:"center",color:'#000'}}> Log in with Google </Text> */}
    <Image source={require("../assets/google.png")}/>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.facebook} onPress ={() => this.props.navigation.navigate("SavedLocationScreen")}>
      <Image source={require("../assets/facebook.png")}/>
       </TouchableOpacity>
      </View>
      <View style={{marginTop:15,alignSelf:"center"}}>
      <Text style={{color:'#d9dee2'}}>---  OR  ---</Text>
      </View>
      <View style={{marginLeft:25,marginTop:15}}>
        <Text style={{color:'#c0c1cb'}}>Full Name</Text>
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
            <View style={{marginLeft:25}}>
        <Text style={{color:'#c0c1cb',marginTop:15}}>Email</Text>
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
            <View style={{marginLeft:25,marginTop:15,flexDirection:'row'}}>
        <Text style={{color:'#c0c1cb'}}>Mobile Number</Text>
        
        <View style={{flex: 1,marginRight:90}}>
        <Image style={{alignItems:'flex-end',alignSelf:'flex-end'}}source={require("../assets/downarrow.png")}/>
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
            <View style={{marginLeft:25,flexDirection:'row'}}>
        <Text style={{color:'#c0c1cb',marginTop:15}}>Password</Text>
        <View style={{marginTop:15,flex: 1,marginRight:60}}>
            <Text style = {{fontSize:14,color:'#17C9E6',textAlign:'right',fontFamily:'Montserrat-SemiBold'}}>Show</Text>
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
                onChangeText={password => this.setState({ password })}/>
              </View>
           
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <View style={{alignSelf:'center'}}>
          <Text style={{ color:'#58585C'}} >I agree with</Text>
        </View>
        <View style={{alignSelf:'center'}}>
          <Text > Terms and Conditions</Text>
        </View>
      </View>

      <View>
      <TouchableOpacity style={styles.create} onPress ={() => this.CheckUserRegisterDetails('LoginScreen')}>
     
    <Text style={{color:'#fff',alignSelf:"center",justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:18,fontFamily:'Montserrat-ExtraBold'}}> Create  </Text>
     
      </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  google:{
    marginTop:20,
    backgroundColor:'#f6f6f9',
    borderRadius:30,
    height:50,
    width:150,  
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderColor: '#fff'
  },
  textInput:
  {
    width: '90%',
    height: 40,
    borderWidth: 1,
    marginLeft: 15,
    borderColor: '#FFF',
    backgroundColor: '#fff',
  },
  facebook:{
    marginTop:20,
    backgroundColor:'#0079fb',
    borderRadius:30,
    height:50,
    width:150,  
    marginLeft:15,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderColor: '#fff'
  },
  create: {
    marginTop:20,
    backgroundColor:'#131d5a',
    borderRadius:30,
    height:50,
    width:250,  
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderColor: '#fff'
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 15,
    marginRight: 55,
    // margin: 10,
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
  checkboxContainer: {
    flexDirection: "row",
    marginTop:25
    // marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
    marginLeft:15
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 1,
  },
});
