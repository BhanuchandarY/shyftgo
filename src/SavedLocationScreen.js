import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,StatusBar,ScrollView } from 'react-native';
import GlobalFont from 'react-native-global-font'

class SavedLocationScreen extends Component   {


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

   render() {
      const { navigate } = this.props.navigation;
      return (
        <ScrollView style={styles.scrollView}>
         <View style={styles.container}>
             <View style={{flexDirection:'row'}}>
         <TouchableOpacity onPress={this.handleBackButtonClick}>
         <Image style={{marginLeft:25,marginTop:55}}source={require("../assets/arrowback.png")}/>
     </TouchableOpacity>
     <View style={{marginTop:15,flex: 1,marginRight:60}}>
     <TouchableOpacity onPress={this.handleBackButtonClick}>
         <Text style={{marginTop:50,fontSize:17,color:'#17C9E6',textAlign:'right',fontFamily:'Montserrat-SemiBold',marginRight:5}}>Edit</Text>
     </TouchableOpacity>
     </View>
     </View>
           <Text style={{marginTop:20,fontSize:20,marginLeft:28,color:'#000',fontFamily:'Montserrat-Bold',fontWeight:'bold'}}>Saved locations </Text>
                 <StatusBar  
                         backgroundColor = "#fff"  
                         barStyle = "dark-content"   
                         hidden = {false}    
                         translucent = {true}  
                 />  
                  <View style={{flexDirection:'row'}}>
                 <View style={styles.CircleShapeView}>
                 <Image source={require("../assets/arrowback.png")}/>
                 </View>
                 <View style={{flex:1}}>
                 <Text style={{marginTop:25,marginLeft:15,color:'#aeafbb',fontSize:16}}>Home</Text>
                 <Text style={{marginLeft:15,color:'#000000',fontSize:20}}>Hajar Rd,315 Rd</Text>
                 </View>
                 </View>
                 <View style={{flexDirection:'row'}}>
                 <View style={styles.CircleShapeView}>
                 <Image source={require("../assets/arrowback.png")}/>
                 </View>
                 <View style={{flex:1}}>
                 <Text style={{marginTop:25,marginLeft:15,color:'#aeafbb',fontSize:16}}>My Office</Text>
                 <Text style={{marginLeft:15,color:'#000000',fontSize:20}}>Lorem Ipsum, 200 Rd</Text>
                 </View>
                 </View>
                 <View style={{flexDirection:'row'}}>
                 <View style={styles.CircleShapeView}>
                 <Image source={require("../assets/arrowback.png")}/>
                 </View>
                 <View style={{flex:1}}>
                 <Text style={{marginTop:25,marginLeft:15,color:'#aeafbb',fontSize:16}}>Grocery Store</Text>
                 <Text style={{marginLeft:15,color:'#000000',fontSize:20}}>Lorem Ipsum, 200 Rd</Text>
                 </View>
                 </View>    
                 <View>
      <TouchableOpacity style={styles.login} onPress ={() => this.CheckUserDetails('CreateAnAccuntScreen')}>
     
    <Text style={{color:'#fff',alignSelf:"center",justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:18,fontFamily:'Montserrat-ExtraBold'}}> Add new  </Text>
      </TouchableOpacity>
      </View>
           </View>
           </ScrollView>
      );
   }
}
export default  SavedLocationScreen;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'#fff',
    // margin: 10
    },
    CircleShapeView: {
        width: 50,
        height: 50,
        marginTop:25,
        marginLeft:45,
        alignItems:'center',
        // alignSelf:'center',
        justifyContent:'center',
        // marginBottom:500,
        borderRadius: 150/2,
        backgroundColor: '#d5fff0'
    },
    login: {
        marginTop:200,
        backgroundColor:'#131d5a',
        borderRadius:30,
        height:50,
        width:200,  
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:100,
        borderColor: '#fff'
      },
});