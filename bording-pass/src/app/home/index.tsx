import { View, Text, ImageBackground } from "react-native"
import { styles } from "./styles"


export function Home(){
    return(
        <View  style={styles.container}  >
            <ImageBackground style={styles.header} source={require("@/assets/photo3.jpg")}>
                <Text style={styles.title}>Cartão de embarque</Text>
                <Text style={styles.subtitle}>Falta 45 dias para a sua viagem</Text>
            
            
            </ImageBackground>
            <View style={styles.ticket}>
                <View style={styles.content}>
                    <View style={styles.flight}>

                    </View>
                </View>



            </View>
        </View>   

    )



}