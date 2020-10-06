import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image, StatusBar, Button } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it
export default class App extends React.Component {

//   componentDidMount() {
//     this.timeout = setInterval(() => {
//       this.tick();
//     }, 5000)
//   }
// componentWillUnmount() {
//     clearInterval(this.timeout)
//   }
//  tick = () => {
//   let i = 0;
//   console.log("dataa",i);
//   this.i += 1;
//   this.slider.goToslide(this.i);
//   if(this.i == slides.length){
//     clearInterval(this.timeout)
//   }
//   return;
// }
  constructor(props) {
    super(props);
   
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
    <Text style={{color:'#fff',fontSize:18,fontFamily:'Montserrat-ExtraBold',fontWeight:'bold'}}>Next</Text>
       
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
     
        <Text style={{color:'#fff',fontSize:18,fontFamily:'Montserrat-ExtraBold',fontWeight:'bold'}}>Next</Text>
       
      </View>
    );
  };
  _onDone = () => {

    this.setState({ showRealApp: true });

      return( 
        <View style={{width:50}}>
           
    </View>
      );
  };
  
//   _onSkip = () => {
//     this.setState({ showRealApp: true });
//   };
  _renderItem = ({ item }) => {
    return (
       
      <View
      
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 150
        }}
        >

          <View style={{flexDirection:'row'}}>
            
            <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'bold',fontSize:20}}>SHYFT</Text>
        <Image style={styles.image} source={item.image} />
        </View>
        <Image style={styles.imagess} source={item.images} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text> 
        <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
            /> 
           
      </View>
    );
  };
 
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
        this.props.navigation.navigate("CreateAnAccuntScreen")
      //Real Application
      return (
        <View
        
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}
          
          >
          <Text>
              
            {/* This will be your screen when you click Skip from any slide or Done
            button at last */}
          </Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          // bottomButton={{color: '#cdfaff'}}
          doneLabel='Next'
          dotStyle={{backgroundColor: '#cdfaff',marginBottom:100,width:10,height:5,padding:2}}
          activeDotStyle ={{backgroundColor: '#00cdea',marginBottom:100,width:21,height:5,padding:3}}
          renderNextButton={this._renderNextButton}
          renderDoneButton={this._renderDoneButton}
          // ref={ref => this.slider = ref} 
        //   showSkipButton={true}
        //   onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  imagess: {
    width: 300,
    height: 300,
  },
  image: {
    alignSelf:'center',
    marginLeft:10,
    justifyContent:'center'
  },  
  text: {
    fontSize: 14,
    color: '#58585C',
    textAlign: 'center',
    fontFamily:'Montserrat',
  },
  buttonCircle:{
    backgroundColor:'#131d5a',
    borderRadius:30,
    height:50,
    width:250,  
    marginRight:65,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderColor: '#fff'
    
  },
  title: {
    fontSize:22,
    color: '#151D56',
    textAlign: 'center',
    fontFamily:'Montserrat-Bold',
    fontWeight:'bold'

  },
});

const slides = [
  {
    key: 's1',
    image: require("../assets/shfyftlogonew.png"),
    images: require("../assets/introfirst.png"),
    title:'Let go of \n bag stress',
    text :'Enjoy your city experience \n without the stress of taking \n care of your bags.',
    // imagego: require("../assets/bagstresstext.jpeg"),
    // imagesmtxt: require("../assets/bgstrssmltxt.jpeg"),
    backgroundColor: '#FFF',
  },
  {
    image: require("../assets/shfyftlogonew.png"),
    images: require("../assets/introdowork.png"),
    title:'We will do \n the hard work',
    text :'We will pick up your bags, \n wherever you are and \n whenever you want.',
    backgroundColor: '#FFF',
  },
  {
    key: 's3',
    image: require("../assets/shfyftlogonew.png"),
    images: require("../assets/introeasly.png"),
    title:'Book your \n service easily',
    text :'Place your booking in few \n easy steps and monitor \n your bags everytime.',
    backgroundColor: '#FFF',
  },
];