import React, { Component }  from 'react';
import { StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity, StatusBar,ToastAndroid } from 'react-native';


 class LoginScreen extends Component   {

  // const [datLoading, setDataLoading] = useState(false);

  constructor(props) {
    //constructor to set default state
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.loginCall = this.loginCall.bind(this),

    this.state = {
      userEmail: '',
      userPassword: '',
      roleNames:'admin',
      channels:'portal',
      showPassword: false,
    };
  } 
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}
    CheckUserDetails = (viewId) => {
      if (this.state.userEmail!= '') {
        //Check for the Password TextInput
        if (this.state.userPassword != '') {
          //Check for the Email TextInput
          // alert('Login Succesfully')
          
         
          this.loginCall();

        } else {
          ToastAndroid.showWithGravity("Please enter password",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
      } else {
        ToastAndroid.showWithGravity("Please enter Email",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
      }

    };


    loginCall =() =>{
      fetch('https://stage-api.shyftclub.com/v1.0/auth/login',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          email: this.state.userEmail, 
          password: this.state.userPassword,
          roleName: this.state.roleNames,
          channel: this.state.channels
        }),
      })
      .then(response => response.json())
      .then(responseData =>{
       
        if(responseData.success==true){
          this.props.navigation.navigate("CreateAnAccuntScreen")
          ToastAndroid.showWithGravity("Login successfull",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );         
        }else if(responseData.success==false){
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
    render(){
        const { navigate } = this.props.navigation;

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
    <TouchableOpacity onPress={this.handleBackButtonClick}>
    <Image style={{marginLeft:25,marginTop:55}}source={require("../assets/arrowback.png")}/>
</TouchableOpacity>
      <Text style={{marginTop:20,fontSize:20,marginLeft:28,color:'#000',fontFamily:'Montserrat-Bold',fontWeight:'bold'}}>Login with your credentials </Text>
            <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
            />  
      <View>
      <TouchableOpacity style={styles.google} onPress ={() => this.props.navigation.navigate("SavedBookingsScreen")}>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginRight:25}}source={require("../assets/google.png")}/>
     
    <Text style={{color:'#000',marginRight:15,fontFamily:'Montserrat-Bold',fontWeight:'bold',fontSize:16}}> Log in with Google </Text>
     </View>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.facebook} onPress ={() => this.props.navigation.navigate("AccountSettingScreen")}>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginRight:25}}source={require("../assets/facebook.png")}/>
    <Text style={{alignSelf:"center",justifyContent:"center",alignItems:"center",textAlign:"center",color:'#000',fontFamily:'Montserrat-Bold',fontWeight:'bold',fontSize:16}}> Log in with Facebook </Text>
    </View>
      </TouchableOpacity>
      </View>
      <View >
      <View style={{marginTop:35,alignSelf:"center"}}>
      <Text style={{color:'#d9dee2'}}>---  OR  ---</Text>
      </View>     
      <View style={styles.SectionStyle}>
            </View>
            <View style={{marginLeft:45}}>
        <Text style={{color:'#c0c1cb',marginTop:15,fontFamily:"montserrat.ttf"}}>Email</Text>
      </View>
      <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#e1e1e9"
                placeholder="" 
                placeholderTextColor="#58585C"
                style={styles.textInput}
                autoCapitalize="none"
                returnKeyType='next'   
                onSubmitEditing={() => { this.emailTextInput.focus(); }}
                blurOnSubmit={false} 
                keyboardType="email-address"
                onChangeText={userEmail => this.setState({ userEmail })}
              />
            </View>
            <View style={{marginLeft:45,flexDirection:'row'}}>
            <Text style={{color:'#c0c1cb',marginTop:15}}>Password</Text>
            <View style={{marginTop:15,flex: 1,marginRight:60}}>
            <Text style = {{fontSize:14,color:'#17C9E6',textAlign:'right',fontFamily:'Montserrat-SemiBold'}}>Show</Text>
            </View>
           
          </View>
           <View style={styles.SectionStyle}>
              <TextInput
                ref={(input) => { this.emailTextInput = input; }}
                style={styles.inputStyle}
                underlineColorAndroid="#e1e1e9"
                placeholder="" 
                onChangeText={userPassword => this.setState({ userPassword })}
                returnKeyType='done'
                password={true}
                autoCorrect={false}
                placeholderTextColor="#58585C"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType="default"
                secureTextEntry={this.state.showPassword}
              />
            
            </View>
      <View style={styles.forgotpassstyle}>
      <TouchableOpacity style = {{justifyContent:"center",alignItems:"center"}} onPress = {() => this.props.navigation.navigate("ForgotPasswordScreen")}>
        <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {{justifyContent:"center",alignItems:"center"}} onPress = {() => this.props.navigation.navigate("CreateScreen")}>
        <Text style={{alignSelf:"center",color:"#000",fontWeight: 'bold'}}>Retrieve</Text>
        </TouchableOpacity>
      </View>
       {/* <TouchableOpacity onPress = {() => this.props.navigation.navigate("CreateAnAccuntScreen")}> */}
       <View>
      <TouchableOpacity style={styles.login} onPress ={() => this.CheckUserDetails('CreateAnAccuntScreen')}>
     
    <Text style={{color:'#fff',alignSelf:"center",justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:18,fontFamily:'Montserrat-ExtraBold'}}> Login  </Text>
     
      </TouchableOpacity>
      </View>
      </View>
    </View>
    </ScrollView>
  );
}
}
export default  LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  googlebackground: {
    marginLeft:15,
    alignItems:"center",
    justifyContent:"center",
    flex: 2
  },
  fbbackground: {
    backgroundColor: '#0079fb',
    borderRadius:20,
    marginLeft:15,
    marginRight:15,
    alignItems:"center",
    justifyContent:"center",
    flex: 2
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
  google: {
    marginTop:50,
    backgroundColor:'#f6f6f9',
    borderRadius:30,
    height:50,
    width:280,  
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderColor: '#fff'
  },
  facebook: {
    marginTop:20,
    backgroundColor:'#f6f6f9',
    borderRadius:30,
    height:50,
    width:280,  
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderColor: '#fff'
  },
  login: {
    marginTop:20,
    backgroundColor:'#131d5a',
    borderRadius:30,
    height:50,
    width:200,  
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderColor: '#fff'
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 35,
    marginRight: 55,
    // marginBottom:40
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
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 1,
  },
  forgotpassstyle: {
    flexDirection: "row",
    marginTop:25,
    marginLeft:35
  },
  checkbox: {
    alignSelf: "center",
    marginLeft:15
  },
  label: {
    margin: 8,
    marginLeft:15,
    color:'#58585C'
  },
  createbackground: {
    // backgroundColor: '#131d5a',
    borderRadius:20,
    marginLeft:15,
    marginRight:15,
    alignItems:"center",
    justifyContent:"center",
    flex: 2
  },
});
