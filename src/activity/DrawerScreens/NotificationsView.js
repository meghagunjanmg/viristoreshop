import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ListEmptyComponent,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import {connect} from "react-redux";
import {updateUserdetails,UpdateNotifyByData} from "../../actions/itemsAction";
import { Button } from 'react-native-paper';

const NotificationsView = (props) => {
const [data, setData] = useState([]);
const userId="0";
useEffect(() => {

    let dataToSend = {user_id: props.item.userdata.user_id};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    
    fetch('http://myviristore.com/admin/api/notificationlist', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
        setData(responseJson.data);
    })
    .catch((error) => {
        console.error(error);
    });
    
    
  }, [])

const deleteAll = () => {
    let dataToSend = {user_id: props.item.userdata.user_id};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    
    fetch('http://myviristore.com/admin/api/delete_all_notification', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
       
    })
    .catch((error) => {
        console.error(error);
    });
}
    return (
        <View style={styles.container}>
             <TouchableOpacity onPress={() => deleteAll()}>
  <Button style={{alignItems: 'flex-end'}}>
  Delete All
  </Button>
</TouchableOpacity>
          <FlatList 
            style={styles.notificationList} 
            enableEmptySections={true}
            data={data}
            
            keyExtractor= {(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <View style={styles.notificationBox}>
                  <Text style={styles.title}>{item.noti_title}</Text>
                  <Text style={styles.description}>{item.noti_message}</Text>
                </View>
              )}}/>
        </View>
      );

              }
       
const mapStateToProps = (state) => {
    // console.log("State Contains:-"+ state)
    // console.log(`Map State to props:- ${state.item.homepageData.status}`)
    return({
        //Here State.post is 
        //Coming From -> "./reducers/index.js"
        //where "post" is defined under combineReducers
        item:state.item
    })
  }
  export default connect(mapStateToProps, {updateUserdetails,UpdateNotifyByData})(NotificationsView);
  const styles = StyleSheet.create({
    container:{
      backgroundColor:'#DCDCDC'
    },
    notificationList:{
      marginTop:20,
      padding:10,
    },
    notificationBox: {
      padding:20,
      marginTop:5,
      marginBottom:5,
      backgroundColor: '#FFFFFF',
      borderRadius:10,
    },
    icon:{
      width:45,
      height:45,
    },
    title:{
      fontSize:16,
      color: "#000000",
      marginLeft:10,
      fontWeight: 'bold'
    },
    no:{
        fontSize:16,
        color: "#000000",
        marginLeft:10,
        flex:1,
        fontWeight: 'bold'
      },
    description:{
        fontSize:14,
        color: "#000000",
        marginLeft:10,
      },
  });
  
             