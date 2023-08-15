import React from "react";
import { View ,Text , StyleSheet, SafeAreaView , Image, TouchableOpacity} from "react-native";

const Profile2 = ({navigation}) =>{
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.header}>
            <Image 
                source = {{
                uri:'https://cdn-icons-png.flaticon.com/512/219/219986.png',
                height:200,
                width:200,
                }}
              />
              <Text></Text>
              <Text style={styles.text}>Caspian Pole</Text>
            </View>
            <View style={styles.profilebox}>
                <View style={styles.box1}>
                    <Image 
                        source = {{
                        uri:'data:image/png;base64,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',
                        height:80,
                        width:80,
                        }}
                    />
                </View>
                <View style={styles.description}>
                <Text style={styles.personatext}>Graduated with 3 in Computer Application  </Text>
                </View>

                <View style={styles.footer}>
               <View style={styles.box1}>
               <TouchableOpacity 
                onPress={() => navigation.navigate('Home')} 
              >
               <Image
                
                    source = {{
                       
                    uri:'data:image/png;base64,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',
                    height:80,
                    width:80,
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
        backgroundColor:'#89AFF5'
    },
    header:{
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingLeft:100
        
    },
    profilebox:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white'
       
    },
    text:{
       fontSize:35
    },
    personatext:{
        fontSize:20,
        paddingLeft:20
    },
    box1:{
        width:100,
        height:100,
        paddingLeft:10
    },
    description:{
        width:300,
        height:100,
    },
    footer:{
        flex:1,
        alignItems:'flex-end',
        alignContent:'flex-end',
        paddingRight:20,
        paddingTop:200
       
     },
})

export default Profile2;