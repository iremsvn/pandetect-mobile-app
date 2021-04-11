import React, {Component} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import MapView, {Marker, Polyline, Circle, Callout} from 'react-native-maps';


let points = [];

export default class Main extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            });
        }, 
        error => this.setState({error: error.message}),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
        );
    }

    render() {
        const { navigate } = this.props.navigation;

        for(let i = 0; i < 3; i++){
            points[i] = {
              latitude: this.state.latitude + (i+1)*0.001,
              longitude: this.state.longitude + (i+1)*0.001
            }
          }

        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>

                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: "center",
                    marginHorizontal: 40,
                    marginTop: 35,
                    paddingVertical: 2
                }}>
                    <Icon size={24} />
                    <Text
                        style={{
                            fontSize: 25,
                            fontFamily: "SemiBold",
                            alignSelf: "center"
                        }}
                    >PANDETECT</Text>
                    <Icon name="logout" color="#961B92" size={24}
                        onPress={() => navigate('Login')} />
                </View>

                <View
                    style={styles.topBtnContainer}>
                    <TouchableOpacity
                        style={styles.topUserBtn}>
                        <Text
                            onPress={() => navigate('')}

                            style={styles.topBtnText}>Stream</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.topUserBtn}>
                        <Text
                            onPress={() => navigate('Report')}

                            style={styles.topBtnText}>Report</Text>
                    </TouchableOpacity>

                </View>

                <Text
                    style={{
                        marginTop: 0,
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        fontSize: 15
                    }}>Tab to Places for Information</Text>

                


                <View style={styles.container}>
                <MapView
                style={styles.map}
                region={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.121
                }}
                >

                <Marker 
                coordinate={this.state} 
                />
              
                <Marker 
                coordinate={points[0]}
                image={require('../images/marker.png')}
                title="Place Name"
                onCalloutPress={() => navigate('CurrentData')}  
                >
                <Callout><Text>Place Name 1</Text></Callout>
                </Marker>

                <Marker 
                coordinate={points[1]}
                image={require('../images/marker.png')}
                title="Place Name"
                onCalloutPress={() => console.log(2)}  
                >
                <Callout><Text>Place Name 2</Text></Callout>
                </Marker>

                <Marker 
                coordinate={points[2]}
                image={require('../images/marker.png')}
                title="Place Name"
                onCalloutPress={() => console.log(3)}  
                >
                <Callout><Text>Place Name 3</Text></Callout>
                </Marker>
                </MapView> 
            </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    topBtnContainer: {
        marginHorizontal: 30,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "84%",
        alignItems: "center"
    },
    topUserBtn: {
        backgroundColor: "#85847D",
        borderRadius: 10,
        padding: 10,
        width: "25%"
    },
    topBtnText: {
        color: "white",
        fontFamily: "SemiBold",
        textAlign: "center",
        fontSize: 12
    },
    detailsBtn: {
        alignSelf: "center",
        backgroundColor: "#961B92",
        borderRadius: 10,
        padding: 10,
        width: "25%"
    },

    container: {
        bottom: 0
    },
    map: {
        height: '100%'
    }

});