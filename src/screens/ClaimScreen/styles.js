import { StyleSheet } from "react-native";
import { color } from "../../assets/theme/color";
export default StyleSheet.create({
    qContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    checkboxContainer: {
        flexDirection: "row",
        // marginBottom: 20,
        paddingVertical:23
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
        textAlign:"justify",
        // letterSpacing:1,
        fontSize:16,
        flex:1
      },
      RadioBtnWrap:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:"70%",
        paddingVertical:10,
      },
      RadioBtnContainer:{
        alignItems: 'center',
        flexDirection: 'row',
		  justifyContent: 'space-between',
      },
      radioText: {
        color: '#000',
        marginLeft:5,
        fontSize:16
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
    zIndex:2,
		borderRadius: 50,
		backgroundColor: '#8e419c',
    // borderColor:"#8e419c",
    // borderWidth:10,
    
    },
    continueBtn:{
      backgroundColor:"#5cb85c",
      alignItems: "center",
      padding: 10,
      borderRadius:10,
      width:160,
    },
    borderBottom:{
      borderBottomWidth:1,
      borderColor:"#000",
      paddingVertical:15
    },
    borderVertical:{
      borderBottomWidth:1,
      borderTopWidth:1,
      borderColor:"#000",
      paddingVertical:15
    }
});