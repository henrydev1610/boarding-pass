import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Info( props:{label:string; value:String;}){
    return(
        <View>
          <Text style={styles.label}>{props.label}</Text>  
          <Text style={styles.value}> {props.value}</Text>  

        </View>


    )
}