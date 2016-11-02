import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';

const window = Dimensions.get('window');
//Using airbnb maps 
//make sure to react-native link and add keys to android maniifest file
import MapView from 'react-native-maps'
import StatusBar from '../Components/StatusBar'

import Icon from 'react-native-vector-icons/MaterialIcons';


class MapsSample extends Component {

  constructor(){
    super();
    this.state = {
      mapLocation : {
      latitude: 28.1669886,
      longitude: -82.3448578,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      },
      DoralDescription : ''

    
    }

    

  }



  
  render() {
    return (
    <View style = {{flex : 1,backgroundColor : 'white'}}>
    <StatusBar
            leftIcon='chevron-left'
            title="Maps"
            StatusBarColor="#00BCD4"
            navigator={this.props.navigator}
            closeDrawer={this.props.closeDrawer}
            openDrawer={this.props.openDrawer}
            {...this.props}
    />
    <ScrollView>
      <View style={{ flex : 1}}>

        <View style={{flex : 4, backgroundColor: 'red',height :400}}>
        <View style={styles.Mapcontainer}>
        <MapView
        style={styles.map}
        mapType = "satellite"
        region={this.state.mapLocation}
        showsUserLocation = {true}
        followsUserLocation = {true}
        >
        

        <MapView.Marker
        coordinate = {{longitude:-88.9564451,latitude:31.6621501}}
        title = {"Client Location - 1"}
        description = {"Dr Who ?"}
        />

        <MapView.Marker
        coordinate = {{longitude:-84.3969412,latitude:30.4673607}}
        title = {"Client Location - 2"}
        description = {"Dr Who ?"}
        />

        <MapView.Marker
        coordinate = {{longitude:-88.9564451,latitude:31.6621501}}
        title = {"Client Location - 1"}
        description = {"Dr Who ?"}
        />

        <MapView.Marker
        coordinate = {{longitude:-84.3969412,latitude:30.4673607}}
        title = {"Tallahassee"}
        description = {"2116 Apalachee Parkway, Tallahassee, FL 32301, USA"}
        />


        <MapView.Marker
        coordinate = {{longitude:-81.6431618,latitude:30.4770802}}
        title = {"River City Marketplace"}
        description = {"13141 City Station Dr, Jacksonville, FL 32218 At River City Marketplace"}
        />
        
        <MapView.Marker
        coordinate = {{longitude:-81.52871,latitude:30.2602825}}
        title = {"River City Marketplace"}
        description = {"4855 Town Center Pkwy, Jacksonville, FL 32246"}
        />

        <MapView.Marker
        coordinate = {{longitude:-80.389192,latitude:25.8187165}}
        title = {"Doral"}
        description = {"4855 Town Center Pkwy, Jacksonville, FL 32246"}
        />
        </MapView>
      </View>
        </View>


        <View style={{flex : 1,height : 500}}>
        <TouchableHighlight
        style={{marginTop : 10}}
        onPress={()=>{
        //alert("Working !!")
        this.setState({
        mapLocation : {
        latitude: 12.9716,
        longitude: 77.5946,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }

        })
        }}
        >
        <Text>
        Go To Client Location
        </Text>
        </TouchableHighlight>


        <TouchableHighlight
        onPress={()=>{
          //alert("Working !!")
          this.setState({
            mapLocation : {
            latitude: 40.7127837,
            longitude: -74.00594130000002,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }

          })
        }}
        >
        <Text style={{color : 'blue', fontSize : 20,paddingLeft :10}}>
        Clermont
        </Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={()=>{
          //alert("Working !!")
          this.setState({
            mapLocation : {
            latitude: 25.8187165,
            longitude: -80.389192,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            },
            DoralDescription : "2000 NW 87th Avenue Suites 101 and 102, Doral, FL 33172 Located inside the Gateway Center, Doral"

          })
        }}
        >
        <View>
        <Text style={{color : 'blue', fontSize : 20,paddingLeft :10}}>
        Doral
        </Text>
        <Text>{this.state.DoralDescription}</Text>
        </View>
        </TouchableHighlight>


        </View>
        


      </View>

    </ScrollView>
            

    </View>
          


    );
  }
}


const styles = StyleSheet.create({
controllers : {
  flex : 1,
  backgroundColor : 'green'
},

 Mapcontainer: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: window.width,
   flex : 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default MapsSample
