import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    ToastAndroid,
} from "react-native";
import DatePicker from 'react-native-datepicker';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage'


const { width } = Dimensions.get("window");
class SomeMoreAdditionalInfoScreen extends Component {

    constructor(props) {
        //constructor to set default state
        super(props);
        var dates = new Date().getDate();
        // this.loginCall = this.loginCall.bind(this),
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            active: 0,
            xTabOne: 0,
            xTabTwo: 0,
            pkpcnt: 1,
            dlvcnt: 1,
            isVisible: false,
            chosenDatepick: '',
            chosenDatedropoff: '',
            data: null,
            datadropoff: '',
            cur: '',
            tamt: 0,
            vtyp: '',
            pickpname: '',
            pickuplat: 0,
            pickuplng: 0,
            email: '',
            userid: 0,
            contactname: '',
            contactphone: '+91',
            dropoffname: '',
            dropofflat: 0,
            dropofflng: 0,
            translateX: new Animated.Value(0),
            translateXTabOne: new Animated.Value(0),
            translateXTabTwo: new Animated.Value(width),
            translateY: -1000
        };
    }

    async componentWillMount() {

        let userdropoff = await AsyncStorage.getItem('userdropoff');
        var responsedropof = JSON.parse(userdropoff)
        this.setState({ datadropoff: responsedropof })

        let user = await AsyncStorage.getItem('user');
        var response = JSON.parse(user)
        this.setState({ data: response })

        console.log("pickpup name", response)

        let cur = await AsyncStorage.getItem('cur');
        var responsecur = JSON.parse(cur)
        this.setState({ cur: responsecur })

        console.log("cur", responsecur)



        let tamt = await AsyncStorage.getItem('calculate');
        var rescal = JSON.parse(tamt)
        this.setState({ tamt: rescal })

        console.log("calculate", rescal)


        let types = await AsyncStorage.getItem('scooter');
        var responsetype = JSON.parse(types)
        this.setState({ vtyp: responsetype })

        console.log("scooter", responsetype)


        let typec = await AsyncStorage.getItem('car');
        var responsetype = JSON.parse(typec)
        this.setState({ vtyp: responsetype })

        console.log("car", responsetype)


        let typev = await AsyncStorage.getItem('van');
        var responsetype = JSON.parse(typev)
        this.setState({ vtyp: responsetype })

        console.log("van", responsetype)


        let pname = await AsyncStorage.getItem('user');
        var respname = JSON.parse(pname)
        this.setState({ pickpname: respname })

        console.log("pname", respname)


        let plat = await AsyncStorage.getItem('pickuplat');
        var resplat = JSON.parse(plat)
        this.setState({ pickuplat: resplat })

        console.log("pickpup lat", resplat)


        let plng = await AsyncStorage.getItem('pickuplng');
        var resplng = JSON.parse(plng)
        this.setState({ pickuplng: resplng })

        console.log("pickpup lng", resplng)


        let mailid = await AsyncStorage.getItem('email');
        var resmail = JSON.parse(mailid)
        this.setState({ email: resmail })

        console.log("email", resmail)


        let userids = await AsyncStorage.getItem('userid');
        var resuser = JSON.parse(userids)
        this.setState({ userid: resuser })

        console.log("userid", resuser)


        let cname = await AsyncStorage.getItem('cname');
        var rescname = JSON.parse(cname)
        this.setState({ contactname: rescname })

        console.log("cname", rescname)


        let cphone = await AsyncStorage.getItem('cphone');
        var rescphone = JSON.parse(cphone)
        this.setState({ contactphone: rescphone })

        console.log("cphone", rescphone)



        let dropname = await AsyncStorage.getItem('userdropoff');
        var resdname = JSON.parse(dropname)
        this.setState({ dropoffname: resdname })

        console.log('dropoff name', resdname)


        let droplat = await AsyncStorage.getItem('dropofflat');
        var reslat = JSON.parse(droplat)
        this.setState({ dropofflat: reslat })

        console.log("dropofflat", reslat)



        let droplng = await AsyncStorage.getItem('dropofflng');
        var reslng = JSON.parse(droplng)
        this.setState({ dropofflng: reslng })

        console.log("dropofflng", reslng)




    }

    CheckBookingDetails = (viewId) => {

        this.bookingCall();

    }

    bookingCall = () => {

        fetch('http://6362a050c7e4.ngrok.io/v1.0/order/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pkpcnt: 1,
                dlvcnt: 1,
                tamt: this.state.tamt,
                cur: this.state.cur,
                vtyp: "Car",
                uid: this.state.userid,

                pkp: [{

                    add: this.state.pickpname,
                    lat: this.state.pickuplat,
                    lon: this.state.pickuplng,
                    tim: this.state.chosenDatepick,
                    ph: this.state.contactphone,
                    name: this.state.contactname,
                    email: this.state.email
                }],
                dlv: [{

                    add: this.state.dropoffname,
                    lat: this.state.dropofflat,
                    lon: this.state.dropofflng,
                    tim: this.state.chosenDatepick,
                    ph: this.state.contactphone,
                    name: this.state.contactname,
                    email: this.state.email,

                }]
            }),

        })

            .then(response => response.json())
            .then(responseData => {
                console.log("responsedataaaaaaaaa", responseData)
                if (responseData.success == true) {
                    ToastAndroid.showWithGravity(responseData.data.bkstat,
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                }
            })
            .catch(error => {
                console.log('ERROR:', error)
            });


    }

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo,
            isVisible,
            chosenDatepick
        }
            = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };
    //     handleBackButtonClick() {
    //       this.props.navigation.goBack(null);
    //       return true;
    //   }
    showDatepicker = () => {
        showMode('date');
    };
    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDatepick: moment(datetime).format('YYYY-MM-DD HH:mm A'),


        })
        AsyncStorage.setItem('datepck', JSON.stringify(this.state.chosenDatepick));


    }
    hidePicker = () => {
        this.setState({
            isVisible: false

        })
    }
    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }
    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.container}>


                    <StatusBar
                        backgroundColor="#151D56"
                        barStyle="default"

                        hidden={false}
                        translucent={true}
                    />
                    <View style={styles.shape}>
                        <DateTimePicker

                            isVisible={this.state.isVisible}
                            onConfirm={this.handlePicker}
                            onCancel={this.hidePicker}
                            headerTextIOS="pick"
                            mode={'datetime'}

                            is24Hour={false}

                        />
                        {/* <TouchableOpacity style={styles.button} onPress={this.showPicker}> */}
                        <Text style={{ marginTop: 30, fontSize: 20, marginLeft: 30, color: '#000000', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Some more </Text>
                        <Text style={{ fontSize: 20, marginLeft: 30, color: '#000', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>
                            additional info </Text>
                        {/* </TouchableOpacity> */}
                        <View

                            style={{
                                width: "100%",
                                marginLeft: 10,
                                // marginRight:300,
                                justifyContent: 'space-between',
                            }}
                        >

                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: 30,
                                    marginLeft: 20,
                                    marginRight: 150,
                                    marginBottom: 20,
                                    height: 39,
                                    position: "relative"
                                }}
                            >

                                <Animated.View
                                    style={{
                                        position: "absolute",
                                        width: "50%",
                                        height: "100%",
                                        top: 0,
                                        left: 0,
                                        backgroundColor: "#17C9E6",
                                        borderRadius: 8,
                                        transform: [
                                            {
                                                translateX,

                                            }
                                        ]
                                    }}
                                />

                                <TouchableOpacity
                                    style={{
                                        //  width:150,
                                        flex: 1,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        //   borderWidth: 1,
                                        //   borderColor: "#007aff",
                                        backgroundColor: active === 0 ? "#17C9E6" : "#c0c1cb",
                                        borderRadius: 8,
                                        //   borderRightWidth: 0,
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 8
                                    }}
                                    onLayout={event =>
                                        this.setState({
                                            xTabOne: event.nativeEvent.layout.x
                                        })
                                    }
                                    onPress={() =>
                                        this.setState({ active: 0 }, () =>
                                            this.handleSlide(xTabOne)
                                        )
                                    }
                                >
                                    <Text
                                        style={{
                                            color: active === 0 ? "#fff" : "#000"
                                        }}
                                    >
                                        Pick-Up
                           </Text>
                                </TouchableOpacity>
                                <Text>    </Text>
                                <TouchableOpacity
                                    style={{
                                        width: 150,
                                        flex: 1,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: active === 1 ? "#17C9E6" : "#c0c1cb",
                                        borderRadius: 8,
                                        //   borderLeftWidth: 0,
                                        borderTopLeftRadius: 8,
                                        borderBottomLeftRadius: 8,
                                    }}
                                    onLayout={event =>
                                        this.setState({
                                            xTabTwo: event.nativeEvent.layout.x
                                        })
                                    }
                                    onPress={() =>
                                        this.setState({ active: 1 }, () =>
                                            this.handleSlide(xTabTwo)

                                        )
                                    }
                                >
                                    <Text
                                        style={{
                                            color: active === 1 ? "#fff" : "#000"
                                        }}
                                    >
                                        Drop Off
                           </Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView>

                                <Animated.View

                                    style={{
                                        //   justifyContent: "center",
                                        //   alignItems: "center",
                                        marginLeft: 30,
                                        transform: [
                                            {
                                                translateX: translateXTabOne
                                            }
                                        ]
                                    }}
                                    onLayout={event =>
                                        this.setState({
                                            translateY: event.nativeEvent.layout.height
                                        })
                                    }
                                >


                                    <Text style={{ marginTop: 20, fontSize: 16, color: '#151D56', fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Pick-up 1 </Text>

                                    <Text style={{ color: '#c0c1cb', marginTop: 15 }}>pick-up location</Text>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.SectionStyle}>


                                            <Text style={{ marginTop: 8, color: '#58585C', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>{this.state.pickpname}</Text>

                                            {/* <TextInput
                                                ref={(input) => { this.emailTextInput = input; }}
                                                underlineColorAndroid="transparent"
                                                placeholder="Hajar Rd, 315 Rd"
                                                // onChangeText={userPassword => this.setState({ userPassword })}
                                                returnKeyType='done'
                                                password={true}
                                                autoCorrect={false}
                                                placeholderTextColor="#58585C"
                                                autoCapitalize="none"
                                                keyboardType="default"
                                            /> */}
                                        </View>

                                        <Image style={{ marginTop: 8, position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/addlocation.png")} />
                                    </View>
                                    <View style={{ marginRight: 30, height: 1, backgroundColor: '#c0c1cb' }}>


                                    </View>

                                    <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                                        <Text style={{ marginTop: 18, color: '#c0c1cb', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Pick-up date and time</Text>


                                        <Text style={{ marginTop: 8, color: '#58585C', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>{this.state.chosenDatepick}</Text>

                                        <View style={{ marginTop: 8, height: 1, backgroundColor: '#c0c1cb', marginRight: 30 }}>

                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate("AddContactPersionScreen")}>

                                            <Image style={{ marginTop: 25 }} source={require("../assets/addpersion.png")} />
                                        </TouchableOpacity>
                                        <Text style={{
                                            marginTop: 25, fontSize: 14, color: '#17C9E6', fontFamily: 'Montserrat-Bold', textAlign: "center", justifyContent: "center", marginLeft: 30,
                                            alignItems: "center", alignSelf: "center"
                                        }}>Contact persion for pick-up </Text>
                                        <Image style={{ marginTop: 25, position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/notification.png")} />
                                    </View>

                                </Animated.View>
                                <Animated.View
                                    style={{
                                        //   justifyContent: "center",
                                        //   alignItems: "center",
                                        marginLeft: 30,
                                        transform: [
                                            {
                                                translateX: translateXTabTwo
                                            },
                                            {
                                                translateY: -translateY
                                            }
                                        ]
                                    }}
                                >
                                    <Text style={{ marginTop: 20, fontSize: 16, color: '#151D56', fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}>Pick-up 1 </Text>

                                    <Text style={{ color: '#c0c1cb', marginTop: 15 }}>pick-up location</Text>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.SectionStyle}>

                                            <Text style={{ marginTop: 8, color: '#58585C', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>{this.state.datadropoff}</Text>

                                            {/* <TextInput
                                                ref={(input) => { this.emailTextInput = input; }}
                                                underlineColorAndroid="transparent"
                                                placeholder="Hajar Rd, 315 Rd"
                                                // onChangeText={userPassword => this.setState({ userPassword })}
                                                returnKeyType='done'
                                                password={true}
                                                autoCorrect={false}
                                                placeholderTextColor="#58585C"
                                                autoCapitalize="none"
                                                keyboardType="default"
                                            /> */}
                                        </View>
                                        <Image style={{ marginTop: 8, position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/addlocation.png")} />
                                    </View>
                                    <View style={{ marginRight: 30, height: 1, backgroundColor: '#c0c1cb' }}>


                                    </View>
                                    <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                                        <Text style={{ marginTop: 18, color: '#c0c1cb', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>Pick-up date and time</Text>

                                        <Text style={{ marginTop: 8, color: '#58585C', fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>{this.state.chosenDatedropoff}</Text>

                                        <View style={{ marginTop: 8, height: 1, backgroundColor: '#c0c1cb', marginRight: 30 }}>

                                        </View>
                                    </TouchableOpacity>

                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate("AddContactPersionScreen")}>

                                            <Image style={{ marginTop: 25 }} source={require("../assets/addpersion.png")} />
                                        </TouchableOpacity>
                                        <Text style={{
                                            marginTop: 25, fontSize: 14, color: '#17C9E6', fontFamily: 'Montserrat-Bold', textAlign: "center", justifyContent: "center", marginLeft: 30,
                                            alignItems: "center", alignSelf: "center"
                                        }}>Contact persion for pick-up </Text>
                                        <Image style={{ marginTop: 25, position: "absolute", right: 0, marginRight: 30 }} source={require("../assets/notification.png")} />
                                    </View>

                                </Animated.View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <View style={styles.CircleShapeView}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ViewSummaryScreen")}>

                            <Text style={{ marginTop: 35, marginLeft: 25, color: '#17C9E6', fontSize: 17, fontFamily: 'Montserrat-Bold', fontWeight: 'normal' }}>View summary</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.continue} onPress={() => this.CheckBookingDetails('SomeMoreAdditionalInfoScreen')}>

                            <Text style={{ color: '#8387a3', alignSelf: "center", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: 18, fontFamily: 'Montserrat-ExtraBold' }}>
                                Continue  </Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        );
    }
}
export default SomeMoreAdditionalInfoScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151D56',
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
        marginTop: 100,
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
    pickup: {
        marginTop: 25,
        backgroundColor: '#17C9E6',
        borderRadius: 8,
        marginLeft: 30,
        height: 40,
        width: 110,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#fff'
    },
    dropoff: {
        marginTop: 25,
        backgroundColor: '#c0c1cb',
        borderRadius: 8,
        marginLeft: 10,
        height: 40,
        width: 110,
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
        height: 750,
        width: '100%',
        alignSelf: "center",
        borderColor: '#fff'

    },
    SectionStyle: {
        height: 40,
        width: 500, 
    },
});
