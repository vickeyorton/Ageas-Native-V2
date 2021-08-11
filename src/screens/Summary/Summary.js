import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,ScrollView} from 'react-native';
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

  return (
    <ScrollView style={styles.scrollview}>
    <View style={styles.container}>
      <Text style={styles.headingText}>
            You have now entered all of your claim details. Please review the
            details and once you are happy you can submit your claim.
      </Text>
        <View style={styles.summaryContent}>
          <View style={styles.header}>
           <Text style={{fontSize: 18 , color : "white"}}>Incident details</Text>
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
              <View>
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
           <Text style={{fontSize: 18 , color : "white"}}>Contact details</Text>
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
                  {contactObj ? contactObj.HousePhone : '-'}
                 </Text>
              </View>
              <View style={{marginBottom: 7}}>
                <Text style={{fontSize : 16}}>Mobile number</Text>
                <Text style={{fontSize : 16}}>
                  {contactObj ? contactObj.MobilePhone : '-'}
                </Text>
              </View>
              <View  style={styles.editContainer} >
              <View>
                <Text style={{fontSize : 16}}>Email address</Text>
                <Text style={{fontSize : 16}}>
                   {contactObj ? contactObj.Email : '-'}
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
           <Text style={{fontSize: 18 , color : "white"}}>Involved parties details</Text>
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
            onPress={() => navigation.navigate(THANKYOU_PAGE)}>
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
   padding : 7
  },
  editContainer : {
     justifyContent: 'space-between',
     flexDirection: 'row', 
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
 
});
