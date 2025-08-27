import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/fontFamily"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: "center",
       
        justifyContent: "center"
    },
    header:{
        width:"100%",
        height: 500,
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
        
    }, 
    title:{
        color: colors.white,
        fontSize: 24,
        fontFamily: fontFamily.extraBold
    },
    subtitle:{
        color: colors.gray[300],
        fontSize: 14,
        fontFamily: fontFamily.medium,
        paddingBottom:16

    },
    ticket:{
        backgroundColor: colors.white,
        flex: 1,
        width:"100%",
        borderRadius: 20,     
        overflow: "hidden",
        paddingBottom: 100
    },
    content:{

    },
    flight:{
        
    }




})
