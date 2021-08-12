import React,{useEffect,useState} from 'react';
import Container from '../../components/common/Container';
import { View, Text ,TouchableOpacity} from 'react-native';
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

    const [policyHolder,setPolicyHolder] = useState(null);
    const [policyMobile,setPolicyMobile] = useState(null);
    const [policyEmail,setPolicyEmail] = useState(null);
    const [policyAddress,setPolicyAddress] = useState(null);
    const [policyNumber,setPolicyNumber] = useState(null);
    const [policyStartDate, setPolicyStartDate] = useState("");
    const [policyStartMonth, setPolicyStartMonth] = useState("");
    const [policyStartYear, setPolicyStartYear] = useState("");
    const [policyEndDate, setPolicyEndDate] = useState("");
    const [policyEndMonth, setPolicyEndMonth] = useState("");
    const [policyEndYear, setPolicyEndYear] = useState("");
    const [policyVehicleNum,setPolicyVehicleNum] = useState(null);
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
        } else {
            setPolicyEmail(val);
          setIsValidEmail(false);
        }
    };
    const handleValidMobile = val => {
        if (val.trim().length == 10) {
            setPolicyMobile(val);
          setIsValidMnum(true);
        } else {
            setPolicyMobile(val);
          setIsValidMnum(false);
        }
      };
    const savePersonal =() =>{
        if(policyHolder && policyMobile && policyEmail && policyAddress !== ""){
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
        }
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
        <Container>
            <View style={styles.padding_20}>
                
                <View style={{paddingBottom:10}}>
                    <View style={styles.row}>
                        <View style={styles.column_33}>
                            <View style={{flex:1,alignItems:"center",}}>
                                <View style={{backgroundColor:color.purple,
                                    width:60,height:60,
                                    padding:10,
                                    borderRadius:100,
                                    alignItems:"center",
                                    justifyContent:"center",
                                    marginBottom:5}}>
                                    <Text style={{color:"#fff",
                                        fontSize:20,fontWeight:"700"}}>1</Text>
                                    
                                </View>
                                <Text style={{color:color.purple,
                                        fontSize:16,fontWeight:"700"}}>No.of Policies</Text>
                            </View>
                        </View>
                        <View style={styles.column_33}>
                            <View style={{flex:1,alignItems:"center",}}>
                                <View style={{backgroundColor:color.purple,
                                    width:60,height:60,
                                    padding:10,
                                    borderRadius:100,alignItems:"center",
                                    justifyContent:"center",
                                    marginBottom:5}}>
                                    <Text style={{color:"#fff",
                                        fontSize:20,fontWeight:"700"}}>1</Text>
                                </View>
                                <Text style={{color:color.purple,
                                        fontSize:16,fontWeight:"700"}}>No.of claims</Text>
                            </View>
                        </View>
                        <View style={styles.column_33}>
                            <View style={{flex:1,alignItems:"center",}}>
                                <View style={{backgroundColor:color.purple,
                                    width:60,height:60,
                                    padding:10,
                                    borderRadius:100,alignItems:"center",
                                    justifyContent:"center",
                                    marginBottom:5}}>
                                    <Text style={{color:"#fff",
                                        fontSize:20,fontWeight:"700"}}>0</Text>
                                    
                                </View>
                                <Text style={{color:color.purple,
                                        fontSize:16,fontWeight:"700"}}>Approved claim amount</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    {showEditPersonal ? 
                        <View style={styles.summaryContent}>
                            <View style={styles.header}>
                                <Text style={{fontSize: 18 , color : "white"}}>Personal details</Text>
                            </View>
                                <View style={{ padding : 10}}>
                                <View style={{padding:5}}></View>
                                    <Input
                                    label="Policy holder"
                                    onChangeText={setPolicyHolder}
                                    value={policyHolder}
                                    labelFontSize={16}
                                    />
                                <View style={{padding:5}}></View>
                                <View style={{padding:5}}></View>
                                    <Input
                                    label="Mobile number"
                                    onChangeText={e => handleValidMobile(e)}
                                    value={policyMobile}
                                    labelFontSize={16}
                                    />
                                    {isValidMnum ? null : (
                                        <Text style={styles.errorMsg}>
                                        *Mobile number must contain 10 numbers
                                        </Text>
                                    )}
                                <View style={{padding:5}}></View>
                                <View style={{padding:5}}></View>
                                    <Input
                                    label="Email address"
                                    onChangeText={(e)=>{handleValidEmail(e)}}
                                    value={policyEmail}
                                    labelFontSize={16}
                                    />
                                    {isValidEmail ? null : (
                                        <Text style={styles.errorMsg}>
                                        email must contain "@" and ".com"
                                        </Text>
                                    )}
                                <View style={{padding:5}}></View>
                                <View style={{padding:5}}></View>
                                    <Input
                                    label="Address"
                                    onChangeText={setPolicyAddress}
                                    value={policyAddress}
                                    labelFontSize={16}
                                    />
                                <View style={{padding:5}}></View>
                                
                                <View style={{justifyContent:"flex-end", flexDirection:'row'}}>
                                    <View style={styles.saveSection}>
                                        <TouchableOpacity onPress={() => savePersonal()}>
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
                                <Text style={{fontSize: 18 , color : "white"}}>Personal details</Text>
                                    <TouchableOpacity onPress={() => setShowPersonal(!showPersonal)}>
                                    {showPersonal ? (
                                        <AntDesign name="up" size={18} color="white" />
                                    ) : (
                                        <AntDesign name="down" size={18} color="white" />
                                    )}
                                    </TouchableOpacity>
                            
                            </View>
                            {showPersonal ? (
                                <View style={{ padding : 10}}>
                                <View style={{marginBottom: 7}}>
                                    <Text style={{fontSize : 16}}>Policy holder</Text>
                                    <Text style={{fontSize : 16}}>
                                    {policyHolder ? policyHolder : '-'}
                                    {/* {policyHolder} */}
                                    </Text>
                                </View>
                                <View style={{marginBottom: 7}}>
                                    <Text style={{fontSize : 16}}>Mobile number</Text>
                                    <Text style={{fontSize : 16}}>
                                    {policyMobile ? policyMobile: '-'}
                                    {/* {policyMobile} */}
                                    </Text>
                                </View>
                                <View  style={{marginBottom: 7}}>
                                    <View>
                                        <Text style={{fontSize : 16}}>Email address</Text>
                                        <Text style={{fontSize : 16}}>
                                        {policyEmail ? policyEmail : '-'}
                                        {/* {policyEmail} */}
                                        </Text>
                                    </View>
                                </View>
                                <View  style={{marginBottom: 7}} >
                                    <View>
                                        <Text style={{fontSize : 16}}>Address</Text>
                                        <Text style={{fontSize : 16}}>
                                        {policyAddress ? policyAddress : '-'}
                                        {/* {policyAddress} */}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{justifyContent:"flex-end", flexDirection:'row'}}>
                                    <View style={styles.editSection}>
                                        <TouchableOpacity onPress={() => editPersonal()}>
                                        <Text style={styles.edit}>
                                        
                                            Edit
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ) : null}
                        </View>
                    }
                    {showEditPolicy ? 
                        <View style={styles.summaryContent}>
                            <View style={styles.header}>
                                <Text style={{fontSize: 18 , color : "white"}}>Policy details</Text>
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
                                <Text style={{fontSize: 18 , color : "white"}}>Policy details</Text>
                                    <TouchableOpacity onPress={() => setShowPolicy(!showPolicy)}>
                                    {showPolicy ? (
                                        <AntDesign name="up" size={18} color="white" />
                                    ) : (
                                        <AntDesign name="down" size={18} color="white" />
                                    )}
                                    </TouchableOpacity>
                            
                            </View>
                            {showPolicy ? (
                                <View style={{ padding : 10}}>
                                <View style={{marginBottom: 7}}>
                                    <Text style={{fontSize : 16}}>Policy number</Text>
                                    <Text style={{fontSize : 16}}>
                                    {policyNumber ? policyNumber : '-'}
                                    {/* {policyNumber} */}
                                    </Text>
                                </View>
                                <View style={{marginBottom: 7}}>
                                    <Text style={{fontSize : 16}}>Start date</Text>
                                    <Text style={{fontSize : 16}}>
                                    {/* {policyObj ? policyObj.start : '-'} */}
                                    {policyStartDate ? policyStartDate : 'DD'}/
                                    {policyStartMonth ? policyStartMonth : 'MM'}/
                                    {policyStartYear ? policyStartYear : 'YYYY'}
                                    </Text>
                                </View>
                                <View  style={{marginBottom: 7}}>
                                    <View>
                                        <Text style={{fontSize : 16}}>End date</Text>
                                        <Text style={{fontSize : 16}}>
                                        {/* {policyObj ? policyObj.end : '-'} */}
                                        {policyEndDate ? policyEndDate : 'DD'}/
                                        {policyEndMonth ? policyEndMonth : 'MM'}/
                                        {policyEndYear ? policyEndYear : 'YYYY'}
                                        </Text>
                                    </View>
                                </View>
                                <View  style={{marginBottom: 7}} >
                                    <View>
                                        <Text style={{fontSize : 16}}>Vehicle number</Text>
                                        <Text style={{fontSize : 16}}>
                                        {policyVehicleNum ? policyVehicleNum : '-'}
                                        {/* {policyVehicleNum} */}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{justifyContent:"flex-end", flexDirection:'row'}}>
                                    <View style={styles.editSection}>
                                        <TouchableOpacity onPress={() => editPolicy()}>
                                        <Text style={styles.edit}>
                                        {/* <MaterialIcon style={{padding:10}} color={color.purple} name="edit" size={16}></MaterialIcon> */}
                                            Edit
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ) : null}
                        </View>
                    }
                        <View style={styles.summaryContent}>
                            <View style={styles.header}>
                                <Text style={{fontSize: 18 , color : "white"}}>Claim details</Text>
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
                                        <View style={styles.column_80}>
                                            <Text style={{fontSize:18}}>
                                                AQ01FH9923
                                            </Text>
                                            <View style={styles.row}>
                                                <Text style={{fontSize:16}}>
                                                    4 Aug,  
                                                </Text>
                                                <Text style={{fontSize:16,color:color.warning,paddingHorizontal:10,fontWeight:"700"}}>
                                                    Clarify
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.column_20}>
                                            <Text style={{fontSize:18}}>
                                            {/* <MaterialIcon style={{padding:10}} color="#fff" name="attach-money" size={25}></MaterialIcon> */}
                                            &#163; 620
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginBottom: 10}}>
                                    <View style={[styles.row,{alignItems:"center"}]} >
                                        <View style={styles.column_80}>
                                            <Text style={{fontSize:18}}>
                                                AQ01FH9949
                                            </Text>
                                            <View style={styles.row}>
                                                <Text style={{fontSize:16}}>
                                                    6 Aug,  
                                                </Text>
                                                <Text style={{fontSize:16,color:color.danger,paddingHorizontal:10,fontWeight:"700"}}>
                                                    Rejected
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.column_20}>
                                            <Text style={{fontSize:18}}>
                                            {/* <MaterialIcon style={{padding:10}} color="#fff" name="attach-money" size={25}></MaterialIcon> */}
                                            &#163; 750
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginBottom: 10}}>
                                    <View style={[styles.row,{alignItems:"center"}]} >
                                        <View style={styles.column_80}>
                                            <Text style={{fontSize:18}}>
                                                AQ01FH9976
                                            </Text>
                                            <View style={styles.row}>
                                                <Text style={{fontSize:16}}>
                                                    6 Aug,  
                                                </Text>
                                                <Text style={{fontSize:16,color:color.success,paddingHorizontal:10,fontWeight:"700"}}>
                                                    Approved
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.column_20}>
                                            <Text style={{fontSize:18}}>
                                            {/* <MaterialIcon style={{padding:10}} color="#fff" name="attach-money" size={25}></MaterialIcon> */}
                                            &#163; 300
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                
                            </View>
                        ) : null}
                        </View>
                </View>
                <View style={{marginVertical:15}}>
                    <CustomBtn bgColor={color.success} color="#fff" borderColor={color.success} title="Make a claim" 
                    onPress={()=>{claim()}}
                    />
                </View>
            </View>
        </Container>
        
    )
}

export default HomeScreen;
