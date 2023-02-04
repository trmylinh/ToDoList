import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
    addTask:{
        bottom:30,
        paddingHorizontal:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input:{
        height:45,
        width:'80%',
        backgroundColor: color.white,
        borderWidth:1,
        borderColor: color.primary,
        borderRadius:20,
        paddingHorizontal:20,
        paddingVertical:10,
        color: color.text
    },
    iconButton:{
        width:50,
        height:50,
        backgroundColor: color.primary,
        borderRadius:40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:2,
        borderColor: color.background
    },
    icon:{
        fontSize:33,
        color: color.white,

    }
})
export default styles