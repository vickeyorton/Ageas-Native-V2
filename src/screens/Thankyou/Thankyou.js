import React,{useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {HOME_PAGE} from '../../constants/routeNames';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

 const Thankyou=({navigation})=> {
  
  const route = useRoute();
  const nav = useNavigation();
  useEffect(() => {
         nav.setOptions({
              headerLeft: null,
              headerTitleAlign:"center"
          })
  }, [nav]);
  return (
    <View style={styles.container}>
     
      
      <View style={styles.content}>
        <Text style={styles.para1}>Thank you for submitting your claim, one of our claim handlers will be in touch by the end of the next working day.</Text>
        <View style={styles.contentBox}>
        <Text style={styles.para2}>The claim number for your policy is {"\n"}<Text style={[styles.policyNum,{color:'#8e419c'}]}>4062863N</Text></Text> 
       <View style={styles.line1} />
        <Text style={styles.para3}>If you need to contact us please call {"\n"} <Text style={styles.contact}>03451 122 3018</Text></Text>
       </View>
        <View style={styles.btnCont}>
      <TouchableOpacity onPress={()=>navigation.navigate(HOME_PAGE)} style={styles.homeBtn}><Text style={styles.homeBtnText}>Home</Text></TouchableOpacity>
      </View>
      </View>
     
     
    </View>
  );
}
export default Thankyou;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight : 5,
  },
  line1 : {
    height: 1,
    backgroundColor: "black",
    alignSelf: 'stretch',
    marginVertical : 10
  },
 
  content : {
    padding : 10
  },
  contentBox : {
    borderWidth : 1,
    borderColor : "#8e419c",
    padding : 8,
    marginVertical : 15
  },
  para1 : {
    fontSize : 17,
    lineHeight : 25
  },
  para2 : {
    fontSize : 17,
    lineHeight : 25
  },
 para3 : {
   fontSize : 17,
   lineHeight : 25
 },

  contact : {
    color : "#8e419c"
    
  },
  btnCont:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10
  },
  homeBtn:{
    borderWidth: 1,
    width: "100%",
    backgroundColor: '#6FA313',
    borderColor: '#fff',
    // borderRadius: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  homeBtnText:{
    color:"#fff",
    fontSize:17

  }

  
});
