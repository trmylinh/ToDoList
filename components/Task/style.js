import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
    
      item:{
        flexDirection:'row',
        backgroundColor: color.white,
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      list:{
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',	
        justifyContent: 'center',
      },
      even:{
        backgroundColor: color.second
      },
      odd:{
        backgroundColor: color.green
      },
      number:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
      content:{
        width:'80%',
        fontSize: 16,
        
      }
})
export default styles