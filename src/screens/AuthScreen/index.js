import React,{useEffect,useState} from 'react';
import { TouchableOpacity, Text, View,Image,ImageBackground,Dimensions } from 'react-native';
import Container from '../../components/common/Container';
import CustomBtn from '../../components/common/CustomBtn';
import styles from './styles';
import {SIGNIN_PAGE} from '../../constants/routeNames';
// import Footer from '../../components/common/Footer';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import color from '../../assets/theme/color';

const windowHeight = Dimensions.get('window').height;
const image = { uri: "https://media01.living4media.com/largepreviews/MzQxOTc1ODgw/11031480-Dalmatian-sitting-on-a-black-and-white-carpet-in-front-of-a-sofa.jpg" };
const AuthScreen = ({navigation}) => {
    const {setOptions, toggleDrawer} = useNavigation();
    useEffect(() => {
        setOptions({
            headerRight: () => (
                <TouchableOpacity
                    // onPress={()=>{toggleDrawer()}}
                >
                    {/* <MaterialIcon style={{padding:10}} color={color.purple} name="menu" size={25}></MaterialIcon> */}
                </TouchableOpacity>
            ),
            // headerTitle: () => (
            //     <Image
            //       style={{width: 100, height: 45}}
            //       source={require('../../assets/images/ageas-title-logo.png')}
            //     />
            //   ),
              headerStyle:{
                //   backgroundColor:"#fad5fcc0",
                backgroundColor:color.purple,
                  borderWidth:1,
              }
        });
    }, [])

    return (
    
        <Container>
            <View style={{padding:20
                ,height:windowHeight - 115
                }}>
                {/* <Image
                  style={{width: "100%", height: 50,position:"absolute",top:30,marginHorizontal:20,zIndex:3}}
                  source={require('../../assets/images/One-stop.jpg')}
                /> */}
                <Image
                    style={styles.image}
                    source={
                        require('../../assets/images/Dalmatian.png')
                    //     {
                    // uri:
                        // "https://media01.living4media.com/largepreviews/MzQxOTc1ODgw/11031480-Dalmatian-sitting-on-a-black-and-white-carpet-in-front-of-a-sofa.jpg"

                    // }
                }
                />
                
                {/* <View style={styles.BgImageContainer}>
                    <ImageBackground source={image} resizeMode="cover" style={styles.Bgimage}>
                    <View style={styles.BgOverlay}>
                    </View>
                    </ImageBackground>
                </View> */}
                {/* <View style={{width:"100%"}}> */}
                    
                    <View style={{flexDirection:"row",
                    // justifyContent:"center",
                    // flex:1
                    }}>
                        <View style={{paddingVertical:10 ,flexDirection:"row",
                        // justifyContent:"center"
                        }}>
                            <CustomBtn 
                            bgColor={color.success} color="#fff" 
                            borderColor={color.success} title="Sign in" 
                            width="100%" margin="auto"
                            onPress={()=>{navigation.navigate(SIGNIN_PAGE)}}
                            
                            />
                        </View>
                    </View>
                    <View style={{flexDirection:"row",
                    // justifyContent:"center",
                    // flex:1
                    }}>
                        <View style={{paddingVertical:10 ,flexDirection:"row",
                        // justifyContent:"center"
                        }}>
                            <CustomBtn 
                            bgColor="#fff" color={color.success} 
                            borderColor={color.success} title="Sign up" 
                            width="100%" margin="auto"
                            // onPress={onPress}
                            />
                        </View>
                    </View>
                    
                {/* </View> */}
            </View>
            <View  style={{backgroundColor:color.purple, padding:20}}>
                {/* <Footer/> */}
                <Text style={{textAlign:"center",color:"#fff", fontWeight:"bold"}}>Copyright @ 2021 ageas.co.uk</Text>
            </View>
        </Container>
    )
}

export default AuthScreen;
