import React,{useEffect,useState,useRef} from 'react';
import Container from '../../components/common/Container';
import { View, Text ,TouchableOpacity,Image,TextInput,Platform,Button} from 'react-native';
import color from '../../assets/theme/color';
import {MAKE_CLAIM_PAGE} from '../../constants/routeNames';
import Input from '../../components/common/Input';
import CustomBtn from '../../components/common/CustomBtn';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useSelector,useDispatch} from 'react-redux';
import {GET_PERSONAL, GET_POLICY} from '../../context/actions';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const {setOptions, toggleDrawer} = useNavigation();
    useEffect(() => {
        setOptions({
            headerRight: () => (
                <TouchableOpacity
                >
                    <MaterialIcon style={{padding:10}} color="#fff" name="menu" size={25}></MaterialIcon>
                </TouchableOpacity>
            ),
        });
    }, []);

    const claim = () => {
            navigation.navigate(MAKE_CLAIM_PAGE)
        
    }

    const [policyHolder,setPolicyHolder] = useState("Daniel");
    const [policyMobile,setPolicyMobile] = useState("7358471892");
    const [policyEmail,setPolicyEmail] = useState("daniel@uk.com");
    const [policyAddress,setPolicyAddress] = useState("Parktown,London");
    const [policyNumber,setPolicyNumber] = useState("PL23786672");
    const [policyStartDate, setPolicyStartDate] = useState("01/05/2021");
    const [policyStartMonth, setPolicyStartMonth] = useState("");
    const [policyStartYear, setPolicyStartYear] = useState("");
    const [policyEndDate, setPolicyEndDate] = useState("30/04/2022");
    const [policyEndMonth, setPolicyEndMonth] = useState("");
    const [policyEndYear, setPolicyEndYear] = useState("");
    const [policyVehicleNum,setPolicyVehicleNum] = useState("SN67 ANX");
    const [isValidEmail,setIsValidEmail] = useState(true);
    const [isValidMnum, setIsValidMnum] = useState(true);
    

    const [showEditPersonal, setShowEditPersonal] = useState(false);
    const [showEditPolicy, setShowEditPolicy] = useState(false);
    // const [showEditClaim, setShowEditClaim] = useState(false);
    const [showPersonal, setShowPersonal] = useState(true);
    const [showPolicy, setShowPolicy] = useState(true);
    const [showClaim, setShowClaim] = useState(true);
    const personalObj = useSelector(state => state.CarReducer.personal);
    const policyObj = useSelector(state => state.CarReducer.Policy);
    const claimObj = useSelector(state => state.CarReducer.ClaimObj);

    // refs
    const polVecNumIn = useRef();
    const polNumIn = useRef();
    const perPolHolder = useRef();
    const perMobNum = useRef();
    const perEmail = useRef();
    const perAddress = useRef();

    //date picker
    
    const [isPickerStartShow, setIsPickerStartShow] = useState(false);
    const [isPickerEndShow, setIsPickerEndShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  

  const showPickerStart = () => {
    setIsPickerStartShow(true);
  };

  const onChangeStart = (event, value) => {
    setPolicyStartDate(value.toDateString());
    changeStartDate(value.toDateString());
    if (Platform.OS === 'android') {
      setIsPickerStartShow(false);
    }
  };

  const showPickerEnd = () => {
    setIsPickerEndShow(true);
  };

  const onChangeEnd = (event, value) => {
    setPolicyEndDate(value.toDateString());
    changeEndDate(value.toDateString());
    if (Platform.OS === 'android') {
      setIsPickerEndShow(false);
    }
  };
    //
    

    
    // Address Field
    const changeAddress = (val) =>{
        setPolicyAddress(val);
        savePersonal();
    }
    // Name field
    const changeName = (val) =>{
        setPolicyHolder(val);
        savePersonal();
    }
    // policy number field

    const changePolNum=(val)=>{
        setPolicyNumber(val);
        savePolicy();
    }

    // start date field
    const changeStartDate=(val)=>{
        setPolicyStartDate(val);
        savePolicy();
    }

    //end date field

    const changeEndDate=(val)=>{
        setPolicyEndDate(val);
        savePolicy();
    }

    // vechile number field

    const changeVechNum=(val)=>{
        setPolicyVehicleNum(val);
        savePolicy();
    }

    useEffect(() => {
        if(personalObj){
            setPolicyHolder(personalObj.name);
            setPolicyMobile(personalObj.mobile);
            setPolicyEmail(personalObj.email);
            setPolicyAddress(personalObj.address);
        }
        if(policyObj){
            setPolicyNumber(policyObj.number);
            setPolicyStartDate(policyObj.startDate);
            setPolicyStartMonth(policyObj.startMonth);
            setPolicyStartYear(policyObj.startYear);
            setPolicyEndDate(policyObj.endDate);
            setPolicyEndMonth(policyObj.endMonth);
            setPolicyEndYear(policyObj.endYear);
            setPolicyVehicleNum(policyObj.vehicleNum);
        }
      },[policyNumber]);

    const editPersonal = () =>{
        setShowEditPersonal(true)
    }
    const editPolicy = () =>{
        setShowEditPolicy(true)
    }
    const handleValidEmail = val => {
        if (val.includes('@') && val.includes('.com')) {
            setPolicyEmail(val);
          setIsValidEmail(true);
          savePersonal();
        } else {
            setPolicyEmail(val);
          setIsValidEmail(false);
        }
    };
    const handleValidMobile = val => {
        if (val.trim().length == 10) {
            setPolicyMobile(val);
          setIsValidMnum(true);
          savePersonal();
        } else {
            setPolicyMobile(val);
          setIsValidMnum(false);
        }
      };
    const savePersonal =() =>{
        // if(policyHolder && policyMobile && policyEmail && policyAddress !== ""){
            let personal = {
                name:policyHolder,
                mobile:policyMobile,
                email:policyEmail,
                address:policyAddress,
            }
            dispatch({type:GET_PERSONAL, payload:personal});
            setTimeout(() => {
                setShowEditPersonal(false);
                }, 400);
        // }
    }
    const savePolicy =() =>{
        if(policyNumber && policyStartDate && policyStartMonth && policyStartYear && policyEndDate && policyEndMonth && policyEndYear && policyVehicleNum !== ""){
            let policy = {
                number:policyNumber,
                startDate:policyStartDate,
                startMonth:policyStartMonth,
                startYear:policyStartYear,
                endDate : policyEndDate,
                endMonth:policyEndMonth,
                endYear:policyEndYear,
                vehicleNum:policyVehicleNum,
            }
            dispatch({type:GET_POLICY, payload:policy});
            setTimeout(() => {
                setShowEditPolicy(false);
                }, 400);
        }
    }

    return (
        <Container style={{backgroundColor:"#fff"}}>
            <View style={styles.padding_10}>
                
            
                <View style={{
                    // paddingBottom:10,
                    // backgroundColor:"#bce4e9",
                    backgroundColor:"#fad5fcc0",

                    paddingVertical:0,
                    paddingHorizontal:20 ,
                    borderRadius:10,
                    // marginTop:10,
                    marginBottom:20,
                    borderColor:color.purple,
                    // shadowColor: 'black',
                    // shadowOpacity: 0.9,
                    // elevation: 10
                    }}>
                
                
                <View style={{
                    // paddingBottom:10,
                    // backgroundColor:"#bce4e9",
                    // backgroundColor:"#ebecf0",
                    paddingTop:20,
                    // paddingHorizontal:5 ,
                    // borderRadius:10,
                    // marginTop:10,
                    // marginBottom:20,
                    // shadowColor: 'black',
                    // shadowOpacity: 0.9,
                    // elevation: 10
                    }}>
                    <View style={[styles.row,{justifyContent:"space-between"}]}>
                        <View style={[styles.column_33,{
                         backgroundColor:"#FF9800",
                        //  backgroundColor:"#FFC107",
                        //  width:70,height:70,
                         borderRadius:10,
                         paddingHorizontal:10,
                         paddingVertical:20,
                         alignItems:"center",
                         justifyContent:"center",
                         marginBottom:5,
                         shadowColor: 'black',
                         shadowOpacity: 0.9,
                         elevation: 10,}
                         ]}>
                            <View style={{flex:1,alignItems:"center"}}>
                                <Text style={{color:"#fff",
                                        fontSize:16,fontWeight:"700",textAlign:"center",
                                         paddingBottom:15
                                        }}>No.of Policies
                                </Text>
                                <View style={{
                                    backgroundColor:color.warning,
                                    // backgroundColor:"#ffcc00",
                                    width:70,height:70,
                                    borderRadius:100,
                                    alignItems:"center",
                                    borderRadius:100,alignItems:"center",
                                    justifyContent:"center",}}
                                   >
                                    <Text style={{color:"#fff",
                                        fontSize:25,fontWeight:"bold",paddingVertical:15}}>1</Text>
                                        
                                </View>
                            </View>
                        </View>
                        <View style={[styles.column_33,{
                            backgroundColor:"#d30535",
                            // width:70,height:70,
                            borderRadius:10,
                            paddingHorizontal:10,
                            paddingVertical:20,
                            alignItems:"center",
                            justifyContent:"center",
                            marginBottom:5,
                            shadowColor: 'black',
                            shadowOpacity: 0.9,
                            elevation: 10,
                            }
                        
                            ]}>
                            <View style={{flex:1,alignItems:"center",}}>
                                
                                <Text style={{color:"#fff",
                                        fontSize:16,fontWeight:"700",textAlign:"center",paddingBottom:15}}>No.of Claims
                                </Text>
                                <View style={{backgroundColor:"#f44336",width:70,height:70,
                                    borderRadius:100,
                                    alignItems:"center",
                                    borderRadius:100,alignItems:"center",
                                    justifyContent:"center",}}>
                                    <Text style={{color:"#fff",
                                        fontSize:25,fontWeight:"bold",paddingVertical:15}}>1</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.column_33,{
                            backgroundColor:"#262163",
                            // width:70,height:70,
                            borderRadius:10,
                            paddingHorizontal:10,
                            paddingVertical:20,
                            alignItems:"center",
                            justifyContent:"center",
                            marginBottom:5,
                            shadowColor: 'black',
                            shadowOpacity: 0.9,
                            elevation: 10,
                        }
                        ]}>
                            <View style={{flex:1,alignItems:"center",}}>
                                
                                <Text style={{color:"#fff",
                                        fontSize:16,fontWeight:"700",textAlign:"center",paddingBottom:15}}>Claimed Amount
                                </Text>
                                <View style={{backgroundColor:"#3F51B5",width:70,height:70,
                                    borderRadius:100,
                                    alignItems:"center",
                                    borderRadius:100,alignItems:"center",
                                    justifyContent:"center",}}>
                                    <Text style={{color:"#fff",
                                        fontSize:25,fontWeight:"bold",paddingVertical:15}}>&#163;195</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{marginVertical:15}}>
                    <CustomBtn bgColor={color.success} color="#fff" borderColor={color.success} title="Make a claim" 
                    onPress={()=>{claim()}}
                    />
                </View>
            </View>

                {/* <View style={{
                    // paddingBottom:10,
                    // backgroundColor:"#bce4e9",
                    // backgroundColor:"#ebecf0",
                    paddingVertical:20,
                    // paddingHorizontal:5 ,
                    // borderRadius:10,
                    // marginTop:10,
                    // marginBottom:20,
                    // shadowColor: 'black',
                    // shadowOpacity: 0.9,
                    // elevation: 10
                    }}>
                    <View style={styles.row}>
                        <View style={styles.column_33}>
                            <View style={{flex:1,alignItems:"center"}}>
                                <View style={{
                                    backgroundColor:"#262163",
                                    // backgroundColor:"#26c8d4",
                                    width:70,height:70,
                                    borderRadius:100,alignItems:"center",
                                    justifyContent:"center",
                                    marginBottom:5,
                                    shadowColor: 'black',
                                    shadowOpacity: 0.9,
                                    elevation: 10,}}>
                                    <Text style={{color:"#fff",
                                        fontSize:20,fontWeight:"700"}}>1</Text>
                                    
                                </View>
                                <Text style={{color:color.purple,
                                        fontSize:16,fontWeight:"700",textAlign:"center"}}>No.of Policies</Text>
                            </View>
                        </View>
                        <View style={styles.column_33}>
                            <View style={{flex:1,alignItems:"center",}}>
                                <View style={{
                                    backgroundColor:"#d30535",
                                    width:70,height:70,
                                    borderRadius:100,alignItems:"center",
                                    justifyContent:"center",
                                    marginBottom:5,
                                    shadowColor: 'black',
                                    shadowOpacity: 0.9,
                                    elevation: 10,}}>
                                    <Text style={{color:"#fff",
                                        fontSize:20,fontWeight:"700"}}>1</Text>
                                </View>
                                <Text style={{color:color.purple,
                                        fontSize:16,fontWeight:"700",textAlign:"center"}}>No.of Claims</Text>
                            </View>
                        </View>
                        <View style={styles.column_33}>
                            <View style={{flex:1,alignItems:"center",}}>
                                <View style={{backgroundColor:"#ffcc00",
                                    width:70,height:70,
                                    borderRadius:100,alignItems:"center",
                                    justifyContent:"center",
                                    marginBottom:5,
                                    shadowColor: 'black',
                                    shadowOpacity: 0.9,
                                    elevation: 10,}}>
                                    <Text style={{color:"#fff",
                                        fontSize:20,fontWeight:"700"}}> &#163;595</Text>
                                    
                                </View>
                                <Text style={{color:color.purple,
                                        fontSize:16,fontWeight:"700",textAlign:"center"}}>Claimed Amount</Text>
                            </View>
                        </View>
                    </View>
                </View> */}
                <View style={styles.padding_10}>
                <View style={styles.summaryContent}>
          <View style={styles.header}>
           <Text style={{fontSize: 18 , color : "white" ,fontWeight : "bold"}}>Personal details</Text>
            <TouchableOpacity onPress={() => setShowPersonal(!showPersonal)}>
              {showPersonal ? (
                <AntDesign name="up" size={18} color="white" />
              ) : (
                <AntDesign name="down" size={18} color="white" />
              )}
            </TouchableOpacity>
          </View>
          {
              showPersonal ? 
             <View>
              <View className="personalDetails">
                <View style={{paddingHorizontal : 15,paddingVertical : 5}}>
                   <Text style={{fontSize : 16}}>Policy holder</Text>
                   <View style={{padding : 3}}></View>
                   <View style={{width : "90%",borderWidth : 1,borderRadius : 10,justifyContent : "space-between" ,display : "flex",borderColor : "#8e419c",flexDirection : "row",marginHorizontal : "5%",marginVertical : "2%"}}>
                     <TextInput style={{paddingHorizontal: 10,paddingVertical : 4,color:color.purple}}
                     // onChangeText={(val)=>setPolicyHolder(val)}
                      onChangeText={(val)=>{changeName(val)}}
                      value={policyHolder}
                      ref={perPolHolder}
                     />
                     <TouchableOpacity onPress={()=>{perPolHolder.current.focus();}}>
                        <MaterialIcon style={{padding:10}} color="#8e419c" name="edit" size={20}></MaterialIcon>
                     </TouchableOpacity>
                   </View>
                 </View>
              </View>
              <View className="personalDetails">
                <View style={{paddingHorizontal : 15,paddingVertical : 5}}>
                   <Text style={{fontSize : 16}}>Mobile number</Text>
                   <View style={{padding : 3}}></View>
                   <View style={{width : "90%",borderWidth : 1,borderRadius : 10,justifyContent : "space-between" ,display : "flex",borderColor : "#8e419c",flexDirection : "row",marginHorizontal : "5%",marginVertical : "2%"}}>
                     <TextInput style={{paddingHorizontal: 10,paddingVertical : 4,color:color.purple}} 
                       onChangeText={e => handleValidMobile(e)}
                       value={policyMobile}
                       ref={perMobNum}
                     />
                     <TouchableOpacity onPress={()=>{perMobNum.current.focus();}}>
                        <MaterialIcon style={{padding:10}} color="#8e419c" name="edit" size={20}></MaterialIcon>
                     </TouchableOpacity>
                   </View>
                   {isValidMnum ? null : (
                           <Text style={styles.errorMsg}>
                              *Mobile number must contain 10 numbers
                           </Text>
                   )}
                 </View>
              </View>
              <View className="personalDetails">
                <View style={{paddingHorizontal : 15,paddingVertical : 5}}>
                   <Text style={{fontSize : 16}}>Email address</Text>
                   <View style={{padding : 3}}></View>
                   <View style={{width : "90%",borderWidth : 1,borderRadius : 10,justifyContent : "space-between" ,display : "flex",borderColor : "#8e419c",flexDirection : "row",marginHorizontal : "5%",marginVertical : "2%"}}>
                     <TextInput style={{paddingHorizontal: 10,paddingVertical : 4,color:color.purple}}
                      onChangeText={(e)=>{handleValidEmail(e)}}
                      value={policyEmail}
                      ref={perEmail}
                     />
                     <TouchableOpacity onPress={()=>{perEmail.current.focus();}}>
                        <MaterialIcon style={{padding:10}} color="#8e419c" name="edit" size={20}></MaterialIcon>
                     </TouchableOpacity>
                   </View>
                    {isValidEmail ? null : (
                              <Text style={styles.errorMsg}>
                                 email must contain "@" and ".com"
                               </Text>
                   )}
                 </View>
              </View>
              <View className="personalDetails">
                <View style={{paddingHorizontal : 15,paddingVertical : 5}}>
                   <Text style={{fontSize : 16}}>Address</Text>
                   <View style={{padding : 3}}></View>
                   <View style={{width : "90%",borderWidth : 1,borderRadius : 10,justifyContent : "space-between" ,display : "flex",borderColor : "#8e419c",flexDirection : "row",marginHorizontal : "5%",marginVertical : "2%"}}>
                     <TextInput style={{paddingHorizontal: 10,paddingVertical : 4,color:color.purple}}
                    //    onChangeText={(val)=>setPolicyAddress(val)}
                        onChangeText={(val)=>{changeAddress(val)}}
                       value={policyAddress}
                       ref={perAddress}
                     />
                     <TouchableOpacity onPress={()=>{perAddress.current.focus();}}>
                        <MaterialIcon style={{padding:10}} color="#8e419c" name="edit" size={20}></MaterialIcon>
                     </TouchableOpacity>
                   </View>
                 </View>
              </View>
              </View>: null
            }
           
        </View>
                    
                    {showEditPolicy ? 
                        <View style={styles.summaryContent}>
                            <View style={styles.header}>
                                <Text style={{fontSize: 18 , color : "white",fontWeight:"700"}}>Policy details</Text>
                            </View>
                                <View style={{ padding : 10}}>
                                <View style={{padding:5}}></View>
                                    <Input
                                    label="Policy number"
                                    onChangeText={setPolicyNumber}
                                    value={policyNumber}
                                    labelFontSize={16}
                                    />
                                <View style={{padding:5}}></View>
                                
                                <View style={{padding:5}}></View>
                                <Text style={{fontSize : 16}}>Start date</Text>
                                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                    <View style={{borderBottomWidth:1}}>
                                        <Picker
                                            selectedValue={policyStartDate}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setPolicyStartDate(itemValue)}
                                        >
                                            <Picker.Item label="DD" value="DD" />
                                            <Picker.Item label="01" value="01" />
                                            <Picker.Item label="02" value="02" />
                                            <Picker.Item label="03" value="03" />
                                            <Picker.Item label="04" value="04" />
                                            <Picker.Item label="05" value="05" />
                                            <Picker.Item label="06" value="06" />
                                            <Picker.Item label="07" value="07" />
                                            <Picker.Item label="08" value="08" />
                                            <Picker.Item label="09" value="09" />
                                            <Picker.Item label="10" value="10" />
                                            <Picker.Item label="11" value="11" />
                                            <Picker.Item label="12" value="12" />
                                            <Picker.Item label="13" value="13" />
                                            <Picker.Item label="14" value="14" />
                                            <Picker.Item label="15" value="15" />
                                            <Picker.Item label="16" value="16" />
                                            <Picker.Item label="17" value="17" />
                                            <Picker.Item label="18" value="18" />
                                            <Picker.Item label="19" value="19" />
                                            <Picker.Item label="20" value="20" />
                                            <Picker.Item label="21" value="21" />
                                            <Picker.Item label="22" value="22" />
                                            <Picker.Item label="23" value="23" />
                                            <Picker.Item label="24" value="24" />
                                            <Picker.Item label="25" value="25" />
                                            <Picker.Item label="26" value="26" />
                                            <Picker.Item label="27" value="27" />
                                            <Picker.Item label="28" value="28" />
                                            <Picker.Item label="29" value="29" />
                                            <Picker.Item label="30" value="30" />
                                            <Picker.Item label="31" value="31" />
                                        </Picker>
                                    </View>
                                    <View style={{borderBottomWidth:1}}>
                                        <Picker
                                            selectedValue={policyStartMonth}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setPolicyStartMonth(itemValue)}
                                        >
                                            <Picker.Item label="MM" value="MM" />
                                            <Picker.Item label="01" value="01" />
                                            <Picker.Item label="02" value="02" />
                                            <Picker.Item label="03" value="03" />
                                            <Picker.Item label="04" value="04" />
                                            <Picker.Item label="05" value="05" />
                                            <Picker.Item label="06" value="06" />
                                            <Picker.Item label="07" value="07" />
                                            <Picker.Item label="08" value="08" />
                                            <Picker.Item label="09" value="09" />
                                            <Picker.Item label="10" value="10" />
                                            <Picker.Item label="11" value="11" />
                                            <Picker.Item label="12" value="12" />
                                        </Picker>
                                    </View>
                                    <View style={{borderBottomWidth:1}}>    
                                        <Picker
                                            selectedValue={policyStartYear}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setPolicyStartYear(itemValue)}
                                        >
                                            <Picker.Item label="YYYY" value="YYYY" />
                                            <Picker.Item label="2021" value="2021" />
                                            <Picker.Item label="2020" value="2020" />
                                            <Picker.Item label="2019" value="2019" />
                                            <Picker.Item label="2018" value="2018" />
                                            <Picker.Item label="2017" value="2017" />
                                            <Picker.Item label="2016" value="2016" />
                                            <Picker.Item label="2015" value="2015" />
                                            <Picker.Item label="2014" value="2014" />
                                            <Picker.Item label="2013" value="2013" />
                                            <Picker.Item label="2012" value="2012" />
                                            <Picker.Item label="2011" value="2011" />
                                            <Picker.Item label="2010" value="2010" />
                                            <Picker.Item label="2009" value="2009" />
                                            <Picker.Item label="2008" value="2008" />
                                            <Picker.Item label="2007" value="2007" />
                                            <Picker.Item label="2006" value="2006" />
                                            <Picker.Item label="2005" value="2005" />
                                            <Picker.Item label="2004" value="2004" />
                                            <Picker.Item label="2003" value="2003" />
                                            <Picker.Item label="2002" value="2002" />
                                            <Picker.Item label="2001" value="2001" />
                                            <Picker.Item label="2000" value="2000" />
                                            <Picker.Item label="1999" value="1999" />
                                        </Picker>
                                    </View>
                                </View>
                                <View style={{padding:5}}></View>
                                <View style={{padding:5}}></View>
                                <View style={{padding:5}}></View>
                                <Text style={{fontSize : 16}}>End date</Text>
                                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                    <View style={{borderBottomWidth:1}}>
                                        <Picker
                                            selectedValue={policyEndDate}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setPolicyEndDate(itemValue)}
                                        >
                                            <Picker.Item label="DD" value="DD" />
                                            <Picker.Item label="01" value="01" />
                                            <Picker.Item label="02" value="02" />
                                            <Picker.Item label="03" value="03" />
                                            <Picker.Item label="04" value="04" />
                                            <Picker.Item label="05" value="05" />
                                            <Picker.Item label="06" value="06" />
                                            <Picker.Item label="07" value="07" />
                                            <Picker.Item label="08" value="08" />
                                            <Picker.Item label="09" value="09" />
                                            <Picker.Item label="10" value="10" />
                                            <Picker.Item label="11" value="11" />
                                            <Picker.Item label="12" value="12" />
                                            <Picker.Item label="13" value="13" />
                                            <Picker.Item label="14" value="14" />
                                            <Picker.Item label="15" value="15" />
                                            <Picker.Item label="16" value="16" />
                                            <Picker.Item label="17" value="17" />
                                            <Picker.Item label="18" value="18" />
                                            <Picker.Item label="19" value="19" />
                                            <Picker.Item label="20" value="20" />
                                            <Picker.Item label="21" value="21" />
                                            <Picker.Item label="22" value="22" />
                                            <Picker.Item label="23" value="23" />
                                            <Picker.Item label="24" value="24" />
                                            <Picker.Item label="25" value="25" />
                                            <Picker.Item label="26" value="26" />
                                            <Picker.Item label="27" value="27" />
                                            <Picker.Item label="28" value="28" />
                                            <Picker.Item label="29" value="29" />
                                            <Picker.Item label="30" value="30" />
                                            <Picker.Item label="31" value="31" />
                                        </Picker>
                                    </View>
                                    <View style={{borderBottomWidth:1}}>
                                        <Picker
                                            selectedValue={policyEndMonth}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setPolicyEndMonth(itemValue)}
                                        >
                                            <Picker.Item label="MM" value="MM" />
                                            <Picker.Item label="01" value="01" />
                                            <Picker.Item label="02" value="02" />
                                            <Picker.Item label="03" value="03" />
                                            <Picker.Item label="04" value="04" />
                                            <Picker.Item label="05" value="05" />
                                            <Picker.Item label="06" value="06" />
                                            <Picker.Item label="07" value="07" />
                                            <Picker.Item label="08" value="08" />
                                            <Picker.Item label="09" value="09" />
                                            <Picker.Item label="10" value="10" />
                                            <Picker.Item label="11" value="11" />
                                            <Picker.Item label="12" value="12" />
                                        </Picker>
                                    </View>
                                    <View style={{borderBottomWidth:1}}>    
                                        <Picker
                                            selectedValue={policyEndYear}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setPolicyEndYear(itemValue)}
                                        >
                                            <Picker.Item label="YYYY" value="YYYY" />
                                            <Picker.Item label="2021" value="2021" />
                                            <Picker.Item label="2020" value="2020" />
                                            <Picker.Item label="2019" value="2019" />
                                            <Picker.Item label="2018" value="2018" />
                                            <Picker.Item label="2017" value="2017" />
                                            <Picker.Item label="2016" value="2016" />
                                            <Picker.Item label="2015" value="2015" />
                                            <Picker.Item label="2014" value="2014" />
                                            <Picker.Item label="2013" value="2013" />
                                            <Picker.Item label="2012" value="2012" />
                                            <Picker.Item label="2011" value="2011" />
                                            <Picker.Item label="2010" value="2010" />
                                            <Picker.Item label="2009" value="2009" />
                                            <Picker.Item label="2008" value="2008" />
                                            <Picker.Item label="2007" value="2007" />
                                            <Picker.Item label="2006" value="2006" />
                                            <Picker.Item label="2005" value="2005" />
                                            <Picker.Item label="2004" value="2004" />
                                            <Picker.Item label="2003" value="2003" />
                                            <Picker.Item label="2002" value="2002" />
                                            <Picker.Item label="2001" value="2001" />
                                            <Picker.Item label="2000" value="2000" />
                                            <Picker.Item label="1999" value="1999" />
                                        </Picker>
                                    </View>
                                </View>
                                <View style={{padding:5}}></View>
                                <View style={{padding:5}}></View>
                                    <Input
                                    label="Vehicle number"
                                    onChangeText={setPolicyVehicleNum}
                                    value={policyVehicleNum}
                                    labelFontSize={16}
                                    />
                                <View style={{padding:5}}></View>
                                
                                <View style={{justifyContent:"flex-end", flexDirection:'row'}}>
                                    <View style={styles.saveSection}>
                                        <TouchableOpacity onPress={() => savePolicy()}>
                                        <Text style={styles.save}>
                                            Save
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    :
                        <View style={styles.summaryContent}>
                            <View style={styles.header}>
                                <Text style={{fontSize: 18 , color : "white",fontWeight:"700"}}>Policy details</Text>
                                    <TouchableOpacity onPress={() => setShowPolicy(!showPolicy)}>
                                    {showPolicy ? (
                                        <AntDesign name="up" size={18} color="white" />
                                    ) : (
                                        <AntDesign name="down" size={18} color="white" />
                                    )}
                                    </TouchableOpacity>
                            
                            </View>
                            {showPolicy ? (
                                <View>
                                <View className="policyDetails">
                                  <View style={{paddingHorizontal : 15,paddingVertical : 5}}>
                                     <Text style={{fontSize : 16}}>Policy number</Text>
                                     <View style={{padding : 3}}></View>
                                     <View style={{width : "90%",borderWidth : 1,borderRadius : 10,justifyContent : "space-between" ,display : "flex",borderColor : "#8e419c",flexDirection : "row",marginHorizontal : "5%",marginVertical : "2%"}}>
                                       <TextInput style={{paddingHorizontal: 10,paddingVertical : 4,color:color.purple}}
                                       // onChangeText={(val)=>setPolicyHolder(val)}
                                        onChangeText={(val)=>{changePolNum(val)}}
                                        value={policyNumber}
                                        ref={polNumIn}
                                       />
                                       <TouchableOpacity onPress={()=>{polNumIn.current.focus();}}>
                                          <MaterialIcon style={{padding:10}} color="#8e419c" name="edit" size={20}></MaterialIcon>
                                       </TouchableOpacity>
                                     </View>
                                   </View>
                                </View>
                                <View className="policyDetails">
                                  <View style={{paddingHorizontal : 15,paddingVertical : 5}}>
                                     <Text style={{fontSize : 16}}>Start date</Text>
                                     <View style={{padding : 3}}></View>
                                     <View style={{width : "90%",borderWidth : 1,borderRadius : 10,justifyContent : "space-between" ,display : "flex",borderColor : "#8e419c",flexDirection : "row",marginHorizontal : "5%",marginVertical : "2%"}}>
                                       <TextInput style={{paddingHorizontal: 10,paddingVertical : 4,color:color.purple}} 
                                         onChangeText={e => changeStartDate(e)}
                                         value={policyStartDate}
                                       />
                                       <TouchableOpacity onPress={showPickerStart}>
                                          <MaterialIcon style={{padding:10}} color="#8e419c" name="event" size={20}></MaterialIcon>
                                       </TouchableOpacity>
                                     </View>
                                   </View>
                                </View>
                                <View className="policyDetails">
                                  <View style={{paddingHorizontal : 15,paddingVertical : 5}}>
                                     <Text style={{fontSize : 16}}>End date</Text>
                                     <View style={{padding : 3}}></View>
                                     <View style={{width : "90%",borderWidth : 1,borderRadius : 10,justifyContent : "space-between" ,display : "flex",borderColor : "#8e419c",flexDirection : "row",marginHorizontal : "5%",marginVertical : "2%"}}>
                                       <TextInput style={{paddingHorizontal: 10,paddingVertical : 4,color:color.purple}}
                                        onChangeText={(e)=>{changeEndDate(e)}}
                                        value={policyEndDate}
                                       />
                                       <TouchableOpacity onPress={showPickerEnd}>
                                          <MaterialIcon style={{padding:10}} color="#8e419c" name="event" size={20}></MaterialIcon>
                                       </TouchableOpacity>
                                      
                                     </View>
                                    
                                   </View>
                                </View>
                                <View className="policyDetails">
                                  <View style={{paddingHorizontal : 15,paddingVertical : 5}}>
                                     <Text style={{fontSize : 16}}>Vechile number</Text>
                                     <View style={{padding : 3}}></View>
                                     <View style={{width : "90%",borderWidth : 1,borderRadius : 10,justifyContent : "space-between" ,display : "flex",borderColor : "#8e419c",flexDirection : "row",marginHorizontal : "5%",marginVertical : "2%"}}>
                                       <TextInput style={{paddingHorizontal: 10,paddingVertical : 4,color:color.purple}}
                                      //    onChangeText={(val)=>setPolicyAddress(val)}
                                          onChangeText={(val)=>{changeVechNum(val)}}
                                         value={policyVehicleNum}
                                         ref={polVecNumIn}
                                       />
                                       <TouchableOpacity onPress={()=>{polVecNumIn.current.focus();}}>
                                          <MaterialIcon style={{padding:10}} color="#8e419c" name="edit" size={20}></MaterialIcon>
                                       </TouchableOpacity>
                                     </View>
                                   </View>
                                </View>
                                <View style={styles.container}>
      

      
      {/* The startdate picker */}
      {isPickerStartShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChangeStart}
          style={styles.datePicker}
        />
      )}
      {/* The end date picker */}
      {isPickerEndShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChangeEnd}
          style={styles.datePicker}
        />
      )}
    </View>
                                                  </View>
                            //     <View style={{ padding : 10}}>
                            //     <View style={{marginBottom: 7}}>
                            //         <Text style={{fontSize : 16}}>Policy number</Text>
                            //         <Text style={{fontSize : 16}}>
                            //         {policyNumber ? policyNumber : 'PL23786672'}
                            //         {/* {policyNumber} */}
                            //         </Text>
                            //     </View>
                            //     <View style={{marginBottom: 7}}>
                            //         <Text style={{fontSize : 16}}>Start date</Text>
                            //         <Text style={{fontSize : 16}}>
                            //         {/* {policyObj ? policyObj.start : '-'} */}
                            //         {policyStartDate ? policyStartDate : '01'}/
                            //         {policyStartMonth ? policyStartMonth : 'May'}/
                            //         {policyStartYear ? policyStartYear : '2021'}
                            //         </Text>
                            //     </View>
                            //     <View  style={{marginBottom: 7}}>
                            //         <View>
                            //             <Text style={{fontSize : 16}}>End date</Text>
                            //             <Text style={{fontSize : 16}}>
                            //             {/* {policyObj ? policyObj.end : '-'} */}
                            //             {policyEndDate ? policyEndDate : '30'}/
                            //             {policyEndMonth ? policyEndMonth : 'Apr'}/
                            //             {policyEndYear ? policyEndYear : '2022'}
                            //             </Text>
                            //         </View>
                            //     </View>
                            //     <View  style={{marginBottom: 7}} >
                            //         <View>
                            //             <Text style={{fontSize : 16}}>Vehicle number</Text>
                            //             <Text style={{fontSize : 16}}>
                            //             {policyVehicleNum ? policyVehicleNum : 'SN67 ANX'}
                            //             {/* {policyVehicleNum} */}
                            //             </Text>
                            //         </View>
                            //     </View>
                            //     <View style={{justifyContent:"flex-end", flexDirection:'row'}}>
                            //         <View style={[styles.editSection,{marginRight:20}]}>
                            //             <TouchableOpacity onPress={() => editPolicy()}>
                            //             <Text style={styles.edit}>
                            //             {/* <MaterialIcon style={{padding:10}} color={color.purple} name="edit" size={16}></MaterialIcon> */}
                            //                 Edit
                            //             </Text>
                            //             </TouchableOpacity>
                            //         </View>
                            //         <View style={[styles.editSection,{marginRight:20}]}>
                            //             <TouchableOpacity >
                            //             <Text style={styles.edit}>
                            //             {/* <MaterialIcon style={{padding:10}} color={color.purple} name="edit" size={16}></MaterialIcon> */}
                            //                 View
                            //             </Text>
                            //             </TouchableOpacity>
                            //         </View>
                            //         <View style={styles.editSection}>
                            //             <TouchableOpacity >
                            //             <Text style={styles.edit}>
                                        
                            //                 Add
                            //             </Text>
                            //             </TouchableOpacity>
                            //         </View>
                            //     </View>
                            // </View>
                        ) : null}
                        </View>
                    }
                        <View style={styles.summaryContent}>
                            <View style={styles.header}>
                                <Text style={{fontSize: 18 , color : "white",fontWeight:"700"}}>Claim details</Text>
                                    <TouchableOpacity onPress={() => setShowClaim(!showClaim)}>
                                    {showClaim ? (
                                        <AntDesign name="up" size={18} color="white" />
                                    ) : (
                                        <AntDesign name="down" size={18} color="white" />
                                    )}
                                    </TouchableOpacity>
                            
                            </View>
                            {showClaim ? (
                                <View style={{ padding : 10}}>
                                <View style={{marginBottom: 10}}>
                                    <View style={[styles.row,{alignItems:"center"}]} >
                                        <View style={styles.column_50}>
                                            <Text style={{fontSize:18}}>
                                                AQ01FH9923
                                            </Text>
                                            <View style={styles.row}>
                                                <Text style={{fontSize:16}}>
                                                    4 Aug, Clarify
                                                </Text>
                                                {/* <Text style={{fontSize:16,color:color.warning,paddingHorizontal:10,fontWeight:"700"}}>
                                                    Clarify
                                                </Text> */}
                                            </View>
                                        </View>
                                        <View style={[styles.column_20,{flexDirection:"row",justifyContent:"space-between"}]}>
                                            <MaterialIcon style={{padding:10}} color={color.warning} name="thumbs-up-down" size={25}></MaterialIcon>
                                        </View>
                                        <View style={styles.column_20}>
                                            <Text style={{fontSize:18,borderBottomWidth:5,borderColor:color.warning}}>
                                            {/* <MaterialIcon style={{padding:10}} color="#fff" name="attach-money" size={25}></MaterialIcon> */}
                                            &#163; 620
                                            </Text>
                                        </View>
                                        <View style={[styles.column_20,{flexDirection:"row",justifyContent:"space-between"}]}>
                                        <TouchableOpacity >
                                          <MaterialIcon style={{padding:10}} color={color.purple} name="edit" size={25}></MaterialIcon>
                                       </TouchableOpacity>
                                        </View>
                                        
                                    </View>
                                </View>
                                <View style={{marginBottom: 10}}>
                                    <View style={[styles.row,{alignItems:"center"}]} >
                                        <View style={styles.column_50}>
                                            <Text style={{fontSize:18}}>
                                                AQ01FH9949
                                            </Text>
                                            <View style={styles.row}>
                                                <Text style={{fontSize:16}}>
                                                    6 Aug, Rejected  
                                                </Text>
                                                {/* <Text style={{fontSize:16,color:color.danger,paddingHorizontal:10,fontWeight:"700"}}>
                                                    Rejected
                                                </Text> */}
                                            </View>
                                        </View>
                                        <View style={[styles.column_20,{flexDirection:"row",justifyContent:"space-between"}]}>
                                            <MaterialIcon style={{padding:10}} color={color.danger} name="thumb-down" size={25}></MaterialIcon>
                                        </View>
                                        <View style={styles.column_20}>
                                            <Text style={{fontSize:18,borderBottomWidth:5,borderColor:color.danger}}>
                                            {/* <MaterialIcon style={{padding:10}} color="#fff" name="attach-money" size={25}></MaterialIcon> */}
                                            &#163; 750
                                            </Text>
                                        </View>
                                        
                                    </View>
                                </View>
                                <View style={{marginBottom: 10}}>
                                    <View style={[styles.row,{alignItems:"center"}]} >
                                        <View style={styles.column_50}>
                                            <Text style={{fontSize:18}}>
                                                AQ01FH9976
                                            </Text>
                                            <View style={styles.row}>
                                                <Text style={{fontSize:16}}>
                                                    6 Aug, Approved  
                                                </Text>
                                                {/* <Text style={{fontSize:16,color:color.success,paddingHorizontal:10,fontWeight:"700"}}>
                                                    Approved
                                                </Text> */}
                                            </View>
                                            
                                        </View>
                                        <View style={[styles.column_20,{flexDirection:"row",justifyContent:"space-between"}]}>
                                            <MaterialIcon style={{padding:10}} color={color.success} name="thumb-up" size={25}></MaterialIcon>
                                        </View>
                                        <View style={styles.column_20}>
                                            <Text style={{fontSize:18,borderBottomWidth:5,borderColor:color.success}}>
                                            
                                            &#163; 195
                                            </Text>
                                        </View>
                                        
                                    </View>
                                </View>
                                
                            </View>
                        ) : null}
                        </View>
                </View>
                
            </View>
        </Container>
        
    )
}

export default HomeScreen;
