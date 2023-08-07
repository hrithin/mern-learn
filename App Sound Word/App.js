import React from 'react'
import {Text,View,StyleSheet,Image,TouchableOpacity,TextInput,Alert} from 'react-native'
import {Header} from 'react-native-elements'
import db from './localDb'
import SoundButton from './phonicSoundButton'
export default class App extends React.Component{
  constructor()
  {
    super(); 
    this.state={
      text:"",
      chunks:[],
      phonicSounds:[]
    } 
  }
render(){
 
return(
<View>
 
 
<Header backgroundColor="black"
 centerComponent={{
  text:"Hello",
  style:{color:"White",fontSize:20},
}}></Header>
 
<Image style={styles.img}
source={{
  uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"
}}
/>
 
 <TextInput style={styles.inputBox} onChangeText={text1=>{
   this.setState({text:text1})
 }}  value={this.state.text}/>
 <TouchableOpacity  style={styles.btn} onPress={
   ()=>{
    var word=this.state.text.toLowerCase();
    db[word]?
    (this.setState({chunks:db[word].chunks}),
    this.setState({phonicSounds:db[word].phones})):
    Alert.alert(word+" not found")
   }
   
 }> 
<Text style={styles.txt}>Click Me</Text>
 
</TouchableOpacity>
<View>
{
  this.state.chunks.map((item,index)=>{
    return(
      <SoundButton 
      wordChunk={
        this.state.chunks[index]}
        soundChunk={
          this.state.phonicSounds[index]
      }/>
    )
  })
}
</View>
</View>

)
}
}
 
const styles =StyleSheet.create({
img:{width:150,
height:150,
alignSelf:"center"},
btn:{
  backgroundColor:"red",
  height:50,
  width:200,
  alignSelf:"center",
  marginTop:10
  },
  txt:{color:"white",
  alignSelf:"center",
  paddingTop:15,
  

 
  },
  inputBox:{
    width:200,
    borderWidth:5,
    marginTop:-1,
    height:50,
    outline:"none",
    alignSelf:"center",
    textAlign:'center'


  }
})