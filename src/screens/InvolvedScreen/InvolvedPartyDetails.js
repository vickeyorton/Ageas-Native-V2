import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  CONTACT_PAGE,
  ADDPASSENGER_PAGE,
  SUMMARY_PAGE,
} from '../../constants/routeNames';
import {Linking} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {GET_INVOLVED} from '../../context/actions';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Involved = ({navigation}) => {
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
  const dispatch = useDispatch();
  const [ques2Selection, setQues2Selection] = useState('');
  const [val, setVal] = useState(0);
  const [opYes, setOpYes] = useState(true);
  const [opNo, setOpNo] = useState(false);
  const [namesArray, setNamesArray] = useState([]);
  const addPassObj = useSelector(state => state.CarReducer.addPassObj);
  // useEffect(() => {
  const involvedObj = useSelector(state => state.CarReducer.involvedObj);
  console.log('.....', involvedObj);
  useEffect(() => {
    if (involvedObj) {
      setVal(involvedObj.noOfPassengers);
    }
  }, []);

  const PROP1 = [
    {
      key: 'Yes',
      text: 'Yes',
    },
    {
      key: 'No',
      text: 'No',
    },
  ];

  useEffect(() => {
    let arr = [];

    console.log(val);

    for (let i = 1; i <= val; i++) {
      arr.push(i);
    }

    setNamesArray(arr);
    console.log(namesArray, 'namesArray');
    console.log(arr, 'arr');
  }, [val]);

  const onEdit = index => {
    // let elementObj = {element:namesArray[index]};
    console.log(`Edit button of index ${index} pressed in Involved page`);
    //dispatch element
    navigation.navigate(ADDPASSENGER_PAGE);
  };
  const onCall = () => {
    Linking.openURL(`tel:0345 122 3018`);
  };

  const deleteItem = index => {
    const updatedArray = namesArray.filter((elem, index2) => {
      return index2 != index;
    });
    setNamesArray(updatedArray);
    console.log(`Item of index ${namesArray[index]} is removed`);
  };

  const onContinue = () => {
    let involvedObj = {
      noOfPassengers: val,
    };
    console.log(involvedObj);
    dispatch({type: GET_INVOLVED, payload: involvedObj});
    //props.passData(involvedObj);
    navigation.navigate(SUMMARY_PAGE);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView>
        <View style={styles.involvedScreen}>
          <View style={styles.involvedConatiner}>
            <Text style={styles.headText}>Your Vehicle</Text>
            <Text style={styles.lableText}>
              The vehicle on this policy is:{' '}
              <Text style={[styles.strong, {color:'#8e419c'} ]}>A1</Text>
            </Text>
            <Text style={styles.lableText}>
              How many passengers were in your vehicle?
            </Text>
            <Text style={styles.numText}>
              (If there were more than 5 passengers in your vehicle, please call :
              <Text> </Text> 
              <Text onPress={onCall} style={styles.callNum}>
                 0345 122 3018 
              </Text>
              <Text> )</Text>
            </Text>
            <View
              style={{borderBottomWidth: 1, width: '40%', marginBottom: 20}}>
              <Picker
                style={styles.selectorBox}
                selectedValue={val}
                onValueChange={e => setVal(e)}>
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>
            {/* <Text style={styles.lableText}>
              Please enter the details of your passengers where known
            </Text> */}
            {namesArray &&
              namesArray.map((elem, index) => (
                
                <View key={index} style={styles.involvedPassengerBox}>
                  <Text style={{marginRight:20}}>{elem}.</Text> 
                  <Text style={styles.passengerName}>
                  {addPassObj ? addPassObj.firstName : 'No details'}
                  </Text>
                  <View style={styles.passengerButtonContainer}>
                    <TouchableOpacity
                      style={styles.passengerButton}
                      onPress={() => onEdit(index)}>
                      <Text style={styles.passengerButtonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.passengerButton}
                      onPress={() => deleteItem(index)}>
                      <Text style={styles.passengerButtonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            <View
              style={{
                borderBottomColor: '#666',
                borderBottomWidth: 1,
                marginBottom: 20,
              }}
            />
            <Text style={styles.headText}>Their Vehicle</Text>

            <View style={styles.questionContainer}>
              <Text style={styles.lableText}>
                Was there another vehicle involved?
              </Text>
              <View style={styles.RadioBtnWrap}>
                {PROP1.map(res => {
                  return (
                    <View key={res.key} style={styles.RadioBtnContainer}>
                      <TouchableOpacity
                        style={styles.radioCircle}
                        onPress={() => {
                          setQues2Selection(res.key);
                        }}>
                        {ques2Selection === res.key && (
                          <View style={styles.selectedRb} />
                        )}
                      </TouchableOpacity>
                      <Text style={styles.radioText}>{res.text}</Text>
                    </View>
                  );
                })}
                {/* <Text> Selected: {driverIssue} </Text> */}
              </View>
            </View>
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={onContinue}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Involved;

const styles = StyleSheet.create({
  involvedScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  involvedContainer: {},
  headText: {
    fontFamily: '',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  lableText: {
    fontSize: 16,
    marginBottom: 12,
  },
  strong: {
    fontWeight: 'bold',
  },
  numText: {
    fontSize: 14,
    marginBottom: 12,
    marginTop:-7
  },
  callNum: {
    color: '#8e419c',
  },
  selectorBox: {
    // width: '45%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 0,
    // marginBottom: 12,
  },
  involvedPassengerBox: {
    borderWidth: 1,
    borderColor: '#8e419c',
    padding: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  passengerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passengerButton: {
    borderColor: '#8e419c',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    // borderRadius: 26,
    marginLeft: 10,
    width: '35%',
  },
  passengerButtonText: {
    color: '#8e419c',
  },
  selectionButtonPressed: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#8e419c',
    marginBottom: 10,
    borderRadius: 26,
  },
  buttonTextPressed: {
    color: '#fff',
    fontSize: 16,
  },
  selectionButtonNotPressed: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,

    borderWidth: 1,
    borderColor: '#8e419c',
    marginBottom: 10,
    borderRadius: 26,
  },
  buttonTextNotPressed: {
    color: '#8e419c',
    fontSize: 16,
  },
  submitButtonContainer: {
    marginTop: 10,
    paddingVertical: 30,
  },
  continueButton: {
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
  continueButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  RadioBtnWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%',
    paddingVertical: 10,
  },
  RadioBtnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    color: '#000',
    marginLeft: 5,
    marginRight: 15,
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8e419c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    zIndex: 2,
    borderRadius: 50,
    backgroundColor: '#8e419c',
    // borderColor:"#8e419c",
    // borderWidth:10,
  },
  passengerName :{
    fontSize:16
  },
  passCont:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  }
});
