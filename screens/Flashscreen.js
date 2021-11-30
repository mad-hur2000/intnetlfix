import React from 'react';
import { FlatList, Text , Image, View, StyleSheet} from 'react-native';

const Flashscreen = () => {
    return ( 
        <View>
            <View style={sytles.header}>
                <Text style={sytles.headertext}> Netflix UI</Text>
            </View>
       <Image 
       style={sytles.image}
       source={{uri:'https://mobileinternist.com/wp-content/uploads/2021/02/netflix-logo-android.jpg?ezimgfmt=ng%3Awebp%2Fngcb31%2Frs%3Adevice%2Frscb31-1'}}>

       </Image>
       </View>
     );
}
 
export default Flashscreen;

const sytles=StyleSheet.create({
    headertext:{
        marginLeft:20,
        justifyContent:'center',
        alignSelf:'flex-start',
        fontWeight:'bold',
        fontSize:24,
        color:'white',
        marginBottom:8
    },
    header:{
        justifyContent:'flex-end',
        // marginBottom:10,
        height:80,
        width:'100%',
        borderBottomColor:'rgba(225,34,34,1)',
        borderWidth:1,
        backgroundColor:'black'
    },
    image:{
        height:'100%',
        width:'100%'
    }

})