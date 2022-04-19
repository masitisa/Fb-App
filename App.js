import { StatusBar } from 'react-native';
import React, { useState } from "react";
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather, } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function App() {

  const [count, setCount] = useState(0);
  const like = () => setCount(prevCount => prevCount + 1);
  const [comments, setcomments] = useState(0);
  const comment = () => setcomments(prevCount => prevCount + 1);
  const [Share, setShare] = useState(0);
  const sharecount = () => setShare(prevCount => prevCount + 1);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headline}>
            <Text style={styles.facebook}>facebook</Text>
          <View style={styles.search}>
            <TouchableOpacity>
              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <SimpleLineIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
            
          </View>
        </View>
        <View style={styles.navigate}>
          <TouchableOpacity>
            <Entypo name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
          <Ionicons name="ios-people-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Fontisto name="messenger" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="md-notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Foundation name="play-video" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="store" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.post}>
          <View style={styles.details}>
          <Image style={styles.profilepic} source={require('./assets/waterfall.jpg')} /> 
          <View style={styles.names}>
            <Text style={{fontWeight:'bold'}}>Nature Lovers</Text>
            <Text style={styles.times}>34 min</Text>
          </View>
          </View>
          <View style={styles.text}>
            <Text>Here on earth, the most beautiful waterfall</Text>
          </View>
          <View >
          <Image style={styles.pic} source={require('./assets/waterfall.jpg')} />
          </View>
          <Text style={styles.postinfo}> {count + comments + Share} likes, comments and shares</Text>
          <View style={styles.reaction}>
            <View style={styles.reactions}>
              <TouchableOpacity style={styles.button } onPress={like} >
                <AntDesign name="like2" size={15} color="black" />
                <Text> {count}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.reactions}>
              <TouchableOpacity style={styles.button} onPress={comment} >
              <FontAwesome5 name="comment-alt" size={15} color="black" />
                <Text> {comments}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={sharecount} >
            <Fontisto name="share-a" size={15} color="black" />
              <Text> {Share}</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.post}>
          <View style={styles.details}>
          <Image style={styles.profilepic} source={require('./assets/waterfall.jpg')} /> 
          <View style={styles.names}>
            <Text style={{fontWeight:'bold',}}>Nature Lovers</Text>
            <Text style={styles.times}>4 hrs</Text>
          </View>
          </View>
          <View style={styles.text}>
            <Text>Here on earth, the most beautiful waterfall</Text>
          </View>
          <View >
          <Image style={styles.pic} source={require('./assets/ocean.png')} />
          </View>
          <Text style={styles.postinfo}> {count + comments + Share} likes, comments and shares</Text>
          <View style={styles.reaction}>
            <View style={styles.reactions}>
              <TouchableOpacity style={styles.button } onPress={like} >
                <AntDesign name="like2" size={15} color="black" />
                <Text> {count}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.reactions}>
              <TouchableOpacity style={styles.button} onPress={comment} >
              <FontAwesome5 name="comment-alt" size={15} color="black" />
                <Text> {comments}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={sharecount} >
            <Fontisto name="share-a" size={15} color="black" />
              <Text> {Share}</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
   
  },
  header:{
    height:90,
    backgroundColor:'blue',
    width:'100%',
    justifyContent:'space-evenly',
    alignItems:'baseline'

  },
  reaction:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  post:{
    marginVertical:5,
    width:'99%',
    padding:5,
    backgroundColor:'#fff',
    borderRadius:10
  },
  pic:{
    width:'100%',
  },
  profilepic:{
    height:50,
    width:50,
    borderRadius:40
  },
  details:{
    flexDirection:'row'
  },
  text:{
    margin:5
  },
  navigate:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal: '3%'
  },
  facebook:{fontSize:20,fontWeight:'bold',color:'#fcc'},
  headline:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:'3%'
  },
  search:{
    flexDirection:'row',
    marginRight : 6,
    width:'20%',
    justifyContent:'space-between'
  },
  button:{
    borderWidth:0.2,
    paddingHorizontal:20,
    borderRadius:30,
    paddingVertical:4,
    flexDirection:'row',
    alignItems:'center'
  },
  postinfo:{
    margin:4
  },
  names:{
    marginTop:5,
    marginLeft:10
  },
  times:{
    color:'gray'
  }
});
