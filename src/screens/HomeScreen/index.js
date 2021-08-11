import React,{useState,useEffect} from 'react';
import { View,TextInput, Text,ImageBackground,TouchableOpacity,Image,TouchableWithoutFeedback } from 'react-native';
import Container from '../../components/common/Container';
import styles from './styles';
// import Footer from '../../components/common/Footer';
import { CLAIM_PAGE } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import color from "../../assets/theme/color";

const image = {uri : "https://www.ageas.co.uk/globalassets/assets/headline-images/about-ageas-headline-image-homepage.jpg?w=470&h=290&scale=both&mode=crop&quality=75"}
// { uri: "https://media01.living4media.com/largepreviews/MzQxOTc1ODgw/11031480-Dalmatian-sitting-on-a-black-and-white-carpet-in-front-of-a-sofa.jpg" };
const Tab = [
    {   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/car_insurance.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/car_insurance_inverted.png",
name:"Car Insurance",
component:"Car"
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/home_insurance.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/home_insurance_inverted.png",
name:"Home Insurance",
component:"Home"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_pet_line_option1.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_pet_line_white.png",
name:"Pet Insurance",
component:"Pet"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/business_insurance.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/business_insurance_inverted.png",
name:"Business Insurance",
component:"Business"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/travel_icon_70x70_purple.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/travel_icon_70x70_white.png",
name:"Travel Insurance",
component:"Travel"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/bike_insurance.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/bike_insurance_inverted.png",
name:"Motorcycle Insurance",
component:"Motorcycle"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_security_insurance_line.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_security_insurance_white.png",
name:"Other Products",
component:"Other"   
    },
];
const HomeScreen = ({navigation}) => {
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
    const [value, onChangeText] = useState(null);
    const [focused,setFocused] = useState(false);

    const getFocused =() =>{
        if(focused){
            return color.primary
        }
    }
    const checkIndexIsSix = (i) =>{
        return i === 6;
    }
    const checkExceptFirstRow = (i) =>{
        if(i>2){
            return true;
        }else{
            return false;
        }
    }
    const checkIndexGreaterthan = (i) =>{
        if(i>3){
            return true;
        }else{
            return false;
        }
    }


    return (
        <Container>
            <View style={styles.BgImageContainer}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.BgOverlay}>
                    <Text style={{fontSize:34,fontWeight:"700",color:"#8e419c",textAlign:"justify"}}>Goodbye </Text>
                    <Text style={{fontSize:25,fontWeight:"700",color:"#8e419c",textAlign:"justify"}}>exhausting claims</Text>
                    <Text style={{paddingVertical:15,fontSize:15,textAlign:"justify"}}>Whether you bought your insurance with Ageas or through an intermediary such as a broker, get in touch using the details below and we’ll get the ball rolling right away.</Text>
                </View>
                </ImageBackground>
            </View>
            
            <View style={styles.TabWrapper}>
                {Tab.map((data,index)=>{
                    return(
                    // <TouchableOpacity key={index} style={[styles.tabContainer,{ borderRightWidth: checkIndexIsSix(index) ? 1 : 0},{ borderTopWidth: checkExceptFirstRow(index) ? 0 : 1}]}
                    // onPress={()=>{navigation.navigate(CLAIM_PAGE)}}>
                    //     <Image style={{width:50,height:50}} source={{uri:data.pic}}/>
                    //     <Text style={{flex:1,justifyContent:"center",textAlign:"center",fontSize:15}}>{data.name}</Text>
                    // </TouchableOpacity>
                    <TouchableWithoutFeedback key={index}
                    onPress={()=>{navigation.navigate(CLAIM_PAGE)}}>
                        <View style={[styles.tabContainer,{ borderRightWidth: checkIndexIsSix(index) ? 1 : 0},{ borderTopWidth: 0},{width:checkIndexGreaterthan(index) ? "33.33%" : "50%"}]} >
                            <Image style={{width:50,height:50}} source={{uri:data.pic}}/>
                            <Text style={{flex:1,justifyContent:"center",textAlign:"center",fontSize:15}}>{data.name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    )
                })}
            </View>
            <View  style={{backgroundColor:"#8e419c", padding:20}}>
                {/* <Footer/> */}
                <Text style={{textAlign:"center",color:"#fff"}}>Copyright @ 2021 Ageas.co.uk</Text>
            </View>
        </Container>
    )
}

export default HomeScreen;
