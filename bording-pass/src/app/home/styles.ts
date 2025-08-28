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
        color: colors.gray[400],
        fontSize: 14,
        fontFamily: fontFamily.medium,
        paddingBottom:16

    },
    ticket:{
        backgroundColor: colors.white,
        marginBottom:-50,    
        width:"100%",
        borderRadius: 20,     
        overflow: "hidden",
        paddingBottom: 100
    },
    content:{
        padding:20

    },
    flight:{
        width:"100%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:52
    }, 
    duration:{
        flexDirection:"column",
        alignItems:'center',
        


    },
    hours:{
        color: colors.gray[400],
        fontSize:14,
        textTransform:'uppercase',
        fontWeight:'500'
    }, 
    label:{
        color: colors.gray[400],
        fontSize:12,
        transform:'uppercase',
        fontFamily: fontFamily.regular, 

    },
    name:{

        color: colors.black,
        fontSize:22,
        fontFamily: fontFamily.medium, 
    },
    detail:{
        marginTop: 52,

    }, 
    inline:{
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    footer:{
        width:"100%",
        flexDirection: 'row',
        padding: 20,
        gap:22,
    },
    footerContent:{
      flex:1,
      gap:24
       
    }




})
