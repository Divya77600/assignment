import React,{useEffect, useState} from "react";
import { View ,Text,FlatList, StyleSheet, TouchableOpacity} from "react-native";

const Details  =({navigation})=>{

    const [details,setDetails]=useState(null)

useEffect(()=>{
fetch("https://api.nationalize.io/?name=nathaniel")
.then((response)=>{return response.json()} )
.then((data)=>setDetails(data.country))
.catch((e)=>console.log(e))
},[])

details && console.log(details);
    return(
        <View style={styles.container}>
<Text style={styles.heading}>Details</Text>
<View style={styles.top}>
<Text style={styles.text1}>Probability</Text>
<Text style={styles.text2}>ID</Text> 
</View>

          <FlatList
          data={details}
          renderItem={({item})=>{
            return(
                <View>
                     
                     <Text style={styles.item}>:{item.probability}                    {item.country_id} </Text>
                </View>
            )
          }}
        
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.text}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Details;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#1589FF',
        padding: 15,
        marginTop: 20
      },
      container: {
        margin: 20,
        
      },
      text: {
        fontWeight: 'bold',
        fontSize: 25
      },
      heading: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 20,
      },
      item:{
        fontSize:22,
        marginTop:30,
        backgroundColor:'orange',
        padding:20,
      },
      top: {
        flexDirection: 'row',
        backgroundColor: 'red',
        padding: 22,
      },
      text1: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
      },
      text2: {
        marginLeft: 70,
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
      }
  });


