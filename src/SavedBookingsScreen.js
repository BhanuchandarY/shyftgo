import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,StatusBar,ScrollView } from 'react-native';
import GlobalFont from 'react-native-global-font'

class SavedBookingsScreen extends Component   {


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
           <Text style={{marginTop:20,fontSize:20,marginLeft:28,color:'#000',fontFamily:'Montserrat-Bold',fontWeight:'bold'}}>Saved bookings</Text>
                 <StatusBar  
                         backgroundColor = "#fff"  
                         barStyle = "dark-content"   
                         hidden = {false}    
                         translucent = {true}  
                 />  
                  
                 <View style={styles.bagstorage}>
                     <Text style={{marginTop:20,fontSize:22,marginLeft:28,color:'#fff',fontFamily:'Montserrat-Bold',fontWeight:'bold'}}>Bag Storage #43049</Text>
                     <Text style={{marginTop:10,fontSize:16,marginLeft:28,color:'#fff',fontFamily:'Montserrat-Bold',fontWeight:'normal'}}>20 Aug 2020, 6:00 PM</Text>
         
                     <View style={{flexDirection:'row'}}>
                     <View style={styles.saved}>
                     <Text style={{fontSize:17,color:'#000',fontFamily:'Montserrat-Bold',alignSelf:"center",alignItems:"center"}}>Saved</Text>
                     </View> 
                     <View style={{ position: "absolute",right: 0,top: 0,marginRight:25,marginTop:20}}>
                     <Image  source={require("../assets/menuicon.png")}/>
                     </View>
                     <View style={{ position: "absolute",right: 0,top: 0,marginRight:85,marginTop:20}}>
                     <Image  source={require("../assets/editicon.png")}/>
                     </View>

                     

           </View>
           </View>

           </View>
        
      );
   }
}
export default  SavedBookingsScreen;

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
    bagstorage: {
        marginTop:20,
        backgroundColor:'#454646',
        borderRadius:15,
        height:150,
        width:'90%', 
        alignSelf:'center', 
        borderColor: '#fff'
      },
      saved: {
        marginTop:20,
        backgroundColor:'#fff',
        borderRadius:10,
        height:35,
        width:80, 
        marginLeft:30,
        borderColor: '#fff',
        justifyContent:"center"
      },
});