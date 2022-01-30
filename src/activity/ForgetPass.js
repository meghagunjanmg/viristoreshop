import React, {useState} from "react";
import { StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  SafeAreaView, ScrollView,
  TouchableOpacity } from "react-native";
import { SimpleLineIcons, Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons'; 

const ForgetPass = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} style={styles.skip}>
                    <Text style={styles.skipText}>&#8592; Back</Text> 
                </TouchableOpacity>

                <View style={styles.imageview}>
                    <Image style={styles.image}
                        source={require('../../assets/ic_launcher.png')}
                        resizeMode="cover" />
                </View>

                <View>
                    <Text style={styles.cred}>Forget Password</Text>
                </View>

                <View style={styles.searchSection}>
                    <SimpleLineIcons style={styles.keyIcon} name="screen-smartphone" size={20} color="#f2a900" />
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#6C6969"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>VERIFY</Text>
                </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>

    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
   },
   scrollView: {
    backgroundColor: '#fff',
    width: "100%",
   },
   imageview: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
   },
   image :{
    marginBottom: 20,
    marginTop: 40,
    marginLeft: "35%",
    width: 100,
    height:100,
  },
  cred: {
    alignItems: "center",
    fontSize: 25,
    marginBottom: 20,
    marginLeft: "20%",
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: "#6C6969",
    borderWidth: 1,
    borderRadius: 20,
    width: "80%",
    marginTop: 20,
    marginLeft: "10%",
  },
  input: {
    flex: 1,
    paddingTop: 7,
    paddingRight: 7,
    paddingBottom: 7,
    paddingLeft: 0,
    color: '#424242',
  },
  keyIcon:{
    padding: 7,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    color: '#FFFFFF',
    backgroundColor: "#f2a900",
    marginTop: 30,
    marginLeft: "10%",
  },
  loginText:{
    color: "#FFFFFF",
  },
  skip:{
    alignItems: "flex-start",
  },
  skipText:{
    color: "#f2a900",
    alignItems: "flex-end",
    marginTop: 30,
    marginLeft: 10,
    fontSize: 20,
  },
});

export default ForgetPass;