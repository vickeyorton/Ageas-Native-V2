import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
// import Footer from '../../components/common/Footer';
import {Picker} from '@react-native-community/picker';
//  import {dateList,monthList,yearList,hourList,minuteList} from '../../constants/incident';
import Input from '../../components/common/Input';
import CustomBtn from '../../components/common/CustomBtn';
import color from '../../assets/theme/color';
import styles from './styles';
import {CONTACT_PAGE} from '../../constants/routeNames';
import {useSelector, useDispatch} from 'react-redux';
import {GET_INCIDENT} from '../../context/actions';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';




const IncidentScreen = ({navigation}) => {
    const {setOptions, toggleDrawer} = useNavigation();
    useEffect(() => {
        setOptions({
            headerRight: () => (
                <TouchableOpacity
                    // onPress={()=>{toggleDrawer()}}
                >
                    <MaterialIcon style={{padding:10}} color="#fff" name="menu" size={25}></MaterialIcon>
                </TouchableOpacity>
            ),
        });
    }, [])
    const dispatch = useDispatch();
    // const { navigate } = props.navigation;
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedMinute, setSelectedMinute] = useState("");
    const [selectedSituation, setSelectedSituation] = useState("");
    const [street, onChangeStreet] = useState(null);
    const [town, onChangeTown] = useState(null);
    const [a1,setA1] = useState(true);
    const [other,setOther] = useState(false);
    const [vehicleReg, setVehicleReg] = useState("A1");
    

    // useEffect(() => {
        const incident = useSelector(state => state.CarReducer.incident);
        console.log(".....",incident);
        useEffect(() => {
        if(incident){
            setSelectedDate(incident.date);
            setSelectedMonth(incident.month);
            setSelectedYear(incident.year);
            setSelectedHour(incident.hour);
            setSelectedMinute(incident.minute);
            setSelectedSituation(incident.situation);
            onChangeStreet(incident.street);
            onChangeTown(incident.town);
        }
      },[]);
    

    const vehicleRegis = () =>{
        setA1(!a1);
        setOther(!other);
        if(a1){
            setVehicleReg("A1");
        }else if(other){
            setVehicleReg("Other/Unknown");
        }else{
            setVehicleReg("");
        }
    }

    const getA1RegBtn=()=>{
        if(a1){
            return "#8e419c";
        }else{
            return "#fff";
        }
    }
    const getOtherRegBtn=()=>{
        if(other){
            return "#8e419c";
        }else{
            return "#fff";
        }
    }
    const getA1RegText=()=>{
        if(a1){
            return "#fff";
        }else{
            return "#8e419c";
        }
    }
    const getOtherRegText=()=>{
        if(other){
            return "#fff";
        }else{
            return "#8e419c";
        }
    }

    const continueHandle = () =>{
        if(selectedDate && selectedMonth && selectedYear && selectedHour && selectedMinute && vehicleReg && selectedSituation && street && town !== ""){
            let incident = {
                date:selectedDate,
                month:selectedMonth,
                year:selectedYear,
                hour:selectedHour,
                minute:selectedMinute,
                vehicleReg:vehicleReg,
                street:street,
                town:town,
                situation:selectedSituation
            }
            dispatch({type:GET_INCIDENT, payload:incident});
            navigation.navigate(CONTACT_PAGE);
            // navigation.navigate(SUMMARY_PAGE);
        }
    }
    return (
        <Container>
            <View>
                {/* <View style={{backgroundColor:"#8e419c", padding:15}}>
                    <Text style={{fontSize:27,fontWeight:"500",color:"#fff",textAlign:"center"}}>Incident detail</Text>
                </View> */}
                <View style={{padding:20}}>
                    <View>
                        <Text style={{fontSize:18}}>Please tell us when the incident happened</Text>
                        <View style={{paddingVertical:20}}>
                            <View style={{paddingBottom:20}}>
                                <Text style={{fontSize:16}}>Date of incident</Text>
                                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                    <View style={{borderBottomWidth:1}}>
                                        <Picker
                                            selectedValue={selectedDate}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setSelectedDate(itemValue)}
                                        >
                                            {/* {
                                                dateList.map((date,index) =>{
                                                    return(
                                                        <Picker.Item label={date} key={index} value={date} />
                                                    )
                                                })
                                            } */}
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
                                            selectedValue={selectedMonth}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}
                                        >
                                            {/* {
                                                monthList.map((date,index) =>{
                                                    return(
                                                        <Picker.Item label={date} key={index} value={date} />
                                                    )
                                                })
                                            } */}
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
                                            selectedValue={selectedYear}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
                                        >
                                            {/* {
                                                yearList.map((date,index) =>{
                                                    return(
                                                        <Picker.Item label={date} key={index} value={date} />
                                                    )
                                                })
                                            } */}
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
                            </View>
                            <View style={{paddingBottom:5}}>
                                <Text style={{fontSize:16}}>Time of incident</Text>
                                <View style={{flexDirection:"row",width:"60%",justifyContent:"space-between"}}>
                                    <View style={{borderBottomWidth:1}}>    
                                        <Picker
                                            selectedValue={selectedHour}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}
                                        >
                                            {/* {
                                                hourList.map((date,index) =>{
                                                    return(
                                                        <Picker.Item label={date} key={index} value={date} />
                                                    )
                                                })
                                            } */}
                                            <Picker.Item label="H" value="H" />
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
                                        </Picker>
                                    </View>
                                    <View style={{borderBottomWidth:1}}>
                                        <Picker
                                            selectedValue={selectedMinute}
                                            style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                            onValueChange={(itemValue, itemIndex) => setSelectedMinute(itemValue)}
                                        >
                                            {/* {
                                                minuteList.map((date,index) =>{
                                                    return(
                                                        <Picker.Item label={date} key={index} value={date} />
                                                    )
                                                })
                                            } */}
                                            <Picker.Item label="M" value="M" />
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
                                </View>
                            </View>
                        </View>
                        <View style={{paddingVertical:20}}>
                            <Text style={{fontSize:18, marginBottom:10}}>Please select your vehicle registered</Text>
                            <View style={{flex:1,flexDirection:"row"}}>
                            <TouchableOpacity
                                style={[styles.regBtn,{backgroundColor:getA1RegBtn()}]}
                                onPress={()=>{vehicleRegis()}}
                            >
                                <Text style={[styles.regBtnText,{color:getA1RegText()}]}>A1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.regBtn,{backgroundColor:getOtherRegBtn()}]}
                                onPress={()=>{vehicleRegis()}}
                            >
                                <Text style={[styles.regBtnText,{color:getOtherRegText()}]}>Other/Unknown</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingVertical:20}}>
                            <Text style={{fontSize:18}}>Please tell us where the incident happened</Text>
                            <View style={{padding:5}}></View>
                            <Input
                            label="Closest street to the incident"
                            onChangeText={onChangeStreet}
                            value={street}
                            labelFontSize={16}
                            // placeholder="Street name"
                            />
                            <View style={{padding:5}}></View>
                            <Input
                            label="Closest town to the incident"
                            onChangeText={onChangeTown}
                            value={town}
                            labelFontSize={16}
                            // placeholder="Town name"
                            />
                        </View>
                        <View style={{paddingVertical:20}}>
                            <Text style={{fontSize:18}}>Please tell us what happened </Text>
                            <Text style={{fontSize:16}}>(description that best fits the situation)</Text>
                            <View style={{borderBottomWidth:1,paddingVertical:10}}>
                                <Text style={{paddingVertical:10,fontSize:16}}>Choose your circumstance</Text>
                                <Picker
                                    selectedValue={selectedSituation}
                                    style={{ height: 50, width: "100%" ,borderWidth:1,borderColor:"#000"}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedSituation(itemValue)}
                                >
                                    <Picker.Item label="Please select a circumstance"  value="Please select a circumstance" />
                                    <Picker.Item label="Your vehicle was hit in the rear"  value="Your vehicle was hit in the rear" />
                                    <Picker.Item label="A third party vehicle pulled out into the path of your vehicle"  value="A third party vehicle pulled out into the path of your vehicle" />
                                    <Picker.Item label="Your vehicle was hit whilst parked"  value="Your vehicle was hit whilst parked" />
                                    <Picker.Item label="A third party vehicle attempted to overtake your vehicle whilst turning"  value="A third party vehicle attempted to overtake your vehicle whilst turning" />
                                    <Picker.Item label="A third party vehicle turned into the path of your vehicle"  value="A third party vehicle turned into the path of your vehicle" />
                                    <Picker.Item label="An Incident involving only your vehicle"  value="An Incident involving only your vehicle" />
                                    <Picker.Item label="A third party vehicle reversed into yours"  value="A third party vehicle reversed into yours" />
                                    
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:"row",paddingVertical:10,paddingVertical:20}}>
                        <CustomBtn 
                                bgColor={color.success} color="#fff" 
                                borderColor={color.success} title="Continue"
                                onPress={()=>{continueHandle()}}
                                borderRadius={0}
                                width="100%"
                        />
                        {/* <TouchableOpacity
                            style={styles.continueButton}
                            onPress={()=>{continueHandle()}}
                        >
                            <Text style={styles.continueButtonText}>Continue</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
            {/* <View  style={{backgroundColor:"#8e419c", padding:20}}>
                <Footer/>
            </View> */}
        </Container>
    )
}



export default IncidentScreen;
