import { StyleSheet } from "react-native";
export default StyleSheet.create({
    padding_20:{
        padding:20,
    },
    padding_10:{
      padding:10,
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
         flex:1
      },
      editSection: {
        borderWidth: 1,
        borderColor: '#8e419c',
        width : 70,
        height : 35,
        paddingVertical : 5,
      }, 
      saveSection: {
        borderWidth: 1,
        borderColor: '#6FA313',
        backgroundColor:'#6FA313',
        width : 70,
        height : 35,
        paddingVertical : 5,
      }, 
      edit: {
        color: '#8e419c',        
        textAlign: 'center',
        fontSize : 16
      },
      save: {
        // color: '#6FA313',
        color:"#fff",
        textAlign: 'center',
        fontSize : 16
      },
      row:{
          flexDirection:"row"
      },
      column_33:{
          width:"30%",
          // width:"33.33%"
      },
      column_80:{
        width:"80%"
    },
    column_20:{
        width:"20%"
    },
      center:{
          justifyContent:"center",
          flex:1,
          alignItems:"center",
        //   flexDirection:"row"
      },
      errorMsg: {
        color: 'red',
        fontSize: 12,
        marginTop: -3,
        paddingBottom:8
      },
});