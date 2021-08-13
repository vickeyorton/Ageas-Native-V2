import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,ScrollView,Alert, Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  THANKYOU_PAGE,
  INVOLVED_PAGE,
  CONTACT_PAGE,
  INCIDENT_PAGE,
} from '../../constants/routeNames';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {HOME_PAGE} from '../../constants/routeNames';


const Summary =({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity
        // onPress={()=>{toggleDrawer()}}
        >
          <MaterialIcon
            style={{padding: 10}}
            color="#fff"
            name="menu"
            size={25}></MaterialIcon>
        </TouchableOpacity>
      ),
    });
  }, []);
  const [showIncident, setShowIncident] = useState(true);
  const [showContact, setShowContact] = useState(true);
  const [showInvolved, setShowInvolved] = useState(true);
  const incident = useSelector(state => state.CarReducer.incident);
  const contactObj = useSelector(state => state.CarReducer.contactObj);
  const involvedObj = useSelector(state => state.CarReducer.involvedObj);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.scrollview}>
    <View style={styles.container}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {/* <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
     
        <View style={{borderRadius: 1,justifyContent: 'space-between',
   flexDirection: 'row', 
   padding : 7,}}>
           <Text style={{fontSize: 20 , color : "#2c2c2c", width: "100%", textAlign:"center" ,fontWeight : "bold"}}>Thank you</Text>
           </View>
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
    
    
   </View>
      </Modal>

      <Text style={styles.headingText}>
            You have now entered all of your claim details. Please review the
            details and once you are happy you can submit your claim.
      </Text>
      <View style={styles.summaryContent}>
          <View style={styles.header}>
           <Text style={{fontSize: 18 , color : "white" ,fontWeight : "bold"}}>Contact details</Text>
            <TouchableOpacity onPress={() => setShowContact(!showContact)}>
              {showContact ? (
                <AntDesign name="up" size={18} color="white" />
              ) : (
                <AntDesign name="down" size={18} color="white" />
              )}
            </TouchableOpacity>
        
          </View>
           {showContact ? (
            <View style={{ padding : 10}}>
              <View style={{marginBottom: 7}}>
                <Text style={{fontSize : 16}}>Home telephone number</Text>
                <Text style={{fontSize : 16}}>
                  {contactObj ? contactObj.HousePhone : '0345 165 0920'}
                 </Text>
              </View>
              <View style={{marginBottom: 7}}>
                <Text style={{fontSize : 16}}>Mobile number</Text>
                <Text style={{fontSize : 16}}>
                  {contactObj ? contactObj.MobilePhone : '7896545789'}
                </Text>
              </View>
              <View  style={styles.editContainer} >
              <View>
                <Text style={{fontSize : 16}}>Email address</Text>
                <Text style={{fontSize : 16}}>
                   {contactObj ? contactObj.Email : 'daniel@uk.com'}
                </Text>
              </View>
              <View style={styles.editSection}>
                <TouchableOpacity onPress={() => navigation.navigate(CONTACT_PAGE)}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
          ) : null}
        </View>

        <View style={styles.summaryContent}>
          <View style={styles.header}>
           <Text style={{fontSize: 18 , color : "white",fontWeight : "bold"}}>Incident details</Text>
            <TouchableOpacity onPress={() => setShowIncident(!showIncident)}>
              {showIncident ? (
                <AntDesign name="up" size={18} color="white" />
              ) : (
                <AntDesign name="down" size={18} color="white" />
              )}
            </TouchableOpacity>
        
          </View>
           {showIncident ? (
            <View style={{ padding : 10}}>
              <View style={{marginBottom: 7}}>
                <Text style={{fontSize : 16}}>Date and time</Text>
                <Text style={{fontSize : 16}}>
                  {incident ? incident.date : 'DD'}/
                  {incident ? incident.month : 'MM'}/
                  {incident ? incident.year : 'YYYY'}{' '}
                  {incident ? incident.hour : 'H'}:
                  {incident ? incident.minute : 'M'}
                </Text>
              </View>
              <View style={{marginBottom: 7}}>
                <Text style={{fontSize : 16}}>Vehicle registration</Text>
                <Text style={{fontSize : 16}}>
                 {incident ? incident.vehicleReg : '-'} 
                </Text>
              </View>
              <View  style={styles.editContainer} >
              <View style={{width:"80%"}}>
                <Text style={{fontSize : 16}}>Circumstance</Text>
                <Text style={{fontSize : 16}}>
                  {incident ? incident.situation : '-'}
                </Text>
              </View>
              <View style={styles.editSection}>
                <TouchableOpacity onPress={() => navigation.navigate(INCIDENT_PAGE)}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
          ) : null}
        </View>
      
        <View style={styles.summaryContent}>
          <View style={styles.header}>
           <Text style={{fontSize: 18 , color : "white" ,fontWeight : "bold"}}>Involved parties details</Text>
            <TouchableOpacity onPress={() => setShowInvolved(!showInvolved)}>
              {showInvolved ? (
                <AntDesign name="up" size={18} color="white" />
              ) : (
                <AntDesign name="down" size={18} color="white" />
              )}
            </TouchableOpacity>
        
          </View>
           {showInvolved ? (
            <View style={{ padding : 10}}>
              <View style={{marginBottom: 7}}>
                <Text style={{fontSize : 16,color:"#8e419c"}}>Your vehicle</Text>
                 <View style={styles.line1} />
                <Text style={{fontSize : 16}}>No of passengers </Text>
                <Text style={{fontSize : 16}}> 
                   {involvedObj ? involvedObj.noOfPassengers : '-'}
                 </Text>
              </View>
              <View style={{marginBottom: 7}}>
                 <Text style={{fontSize : 16,color:"#8e419c"}}>Their vehicle</Text>
                 <View style={styles.line1} />
                <Text style={{fontSize : 16}}>Registration</Text>
                <Text style={{fontSize : 16,marginBottom: 9}}>NA</Text>
              <View>
                <Text style={{fontSize : 16}}>Driver name</Text>
                <Text style={{fontSize : 16}}>Daniel</Text>
              </View>
              </View>
              <View  style={styles.editContainer} >
              <View>
                <Text style={{fontSize : 16}}>No of passengers</Text>
                <Text style={{fontSize : 16}}> 
                    {involvedObj ? involvedObj.noOfPassengers : '-'}
                </Text>
              </View>
              <View style={styles.editSection}>
                <TouchableOpacity  onPress={() => navigation.navigate(INVOLVED_PAGE)}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
          ) : null}
        </View>
        <View style={styles.submitSection}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  );
}

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  headingText: {
    fontFamily: '',
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 15,
  },
  summaryContent : { 
    borderWidth : 1,
    borderColor : '#8e419c',
    marginBottom : 8
  },
  header : {
   justifyContent: 'space-between',
   flexDirection: 'row', 
   backgroundColor :  '#8e419c' ,
   padding : 7,
   //marginTop:5
  },
  editContainer : {
     justifyContent: 'space-between',
     flexDirection: 'row', 
     flex:1
  },
  editSection: {
    borderWidth: 1,
    borderColor: '#8e419c',
    width : 70,
    height : 35,
    paddingVertical : 5
  }, 
  edit: {
    color: '#8e419c',
    textAlign: 'center',
    fontSize : 16
  },
   submitButton: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#fff',
    backgroundColor: 'rgb(111, 163,19)',
    // borderRadius: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    minHeight: 50,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  line1 : {
    height: 1,
    backgroundColor: "#8e419c",
    alignSelf: 'stretch',
    marginVertical : 5
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

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"rgba(0, 0, 0, 0.8)"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
 
});