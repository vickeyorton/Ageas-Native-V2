import { StyleSheet } from "react-native";
import color from "../../assets/theme/color";
export default StyleSheet.create({
    BgImageContainer:{
        flex: 1,
        minHeight:300,
        position:"relative"
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        height:"100%",
        minHeight:300,
    },
    BgOverlay: {
        backgroundColor: "#fad5fcc0",
        padding:10,
        flex:1,
        height:300,
        width:"50%",
        textAlign:"justify",
        marginVertical:15
    },
    tabContainer:{
        width:"50%",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:40,
    },
    // tabContainer:{
    //     width:"33.33%",
    //     borderWidth:1,
    //     justifyContent:"center",
    //     alignItems:"center",
    //     paddingHorizontal:20,
    //     paddingVertical:40,
    // },
    TabWrapper:{
        justifyContent: "center",
        flexWrap:"wrap",
        flex:1,
        flexDirection:"row"
    },
    SearchWrapper:{
        height:52,
        borderColor:color.purple,
        borderRadius:6,
        borderWidth:2,
        flexDirection:'row',
        alignItems:"center",
        // flex:1,
        width:"85%",
        backgroundColor:"#fff"
    },
    iconContainer:{
        paddingHorizontal:10,
    },
    textInput:{
        flex:1,
        // backgroundColor:"red"
    }
});