import React from "react";
import { View ,Text , StyleSheet, SafeAreaView , Image,TouchableOpacity} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePageMain from "./WelcomePage";
import Student_event from "./Student_event";

const Stack = createNativeStackNavigator();



const FlexBoxMain = () => {
    return(

       <SafeAreaView style={styles.wrapper}>
            <View style={[styles.boxstyle, styles.box1]}>
                <View style={styles.header}>
                     <Image source = {require('./../../georgain.png')} />
                </View>
            </View>


            <View style={[styles.boxstyle, styles.box2]}>
            <View style={styles.header}>
                    <Image
                        source = {{
                                uri:'https://educationconcern.com/wp-content/uploads/2021/07/Georgian-College-Canada.jpg',
                                height:300,
                                width:350,
                            }}
            />
                </View>
            </View>


            <View style={[ styles.box3]}>
            <View style={styles.footer}>
                    <View style={styles.boxfooter1}>
                       
                        <Image
                             source = {{
                                uri:'https://www.georgiancollege.ca/wp-content/uploads/login-modal-student-email-icon-georgian-college-2022-03-11-150x113.jpg',
                                height:100,
                                width:120,
                            }}
                         />
                    </View>
                    <View style={styles.boxfooter2}>
                    <TouchableOpacity
                        onPress={()=>{
                     
                        }}>
                            <Image
                             source = {{
                                uri:'https://www.georgiancollege.ca/wp-content/uploads/login-modal-student-portal-icon-georgian-college-2022-03-11-150x113.jpg',
                                height:100,
                                width:120,
                            }}
                         />
                    </TouchableOpacity>
                    
                    </View>
                    
                    
                </View>
            </View>
       </SafeAreaView>
    )

}




const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
    boxstyle:{
        width:"100%",
        height:50
    },
    box1:{
        flex:1,
        alignItems : "center"
    },
    box2:{
        flex:2,
        alignItems : "center"
    },
    box3:{
        flex:1
    },
    header:{
        flex:1,
        margin : 10,
        backgroundColor:'white'
        
    },
    footer:{
        flex:1,
        margin : 10,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-evenly'
        
    },
    boxfooter1:{
        backgroundColor:'blue',
        width:100,
        height:100
    },
    boxfooter2:{
        backgroundColor:'green',
        width:100,
        height:100
    },
   
}

)

export default FlexBoxMain;
