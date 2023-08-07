import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {Audio} from 'expo-av'
export default class SoundButton extends React.Component{
  playSound=async soundChunk=>{
    var soundLink='https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3';
    console.log(soundLink);
    await Audio.Sound.createAsync(
      {
        uri:soundLink,

      },
      {
        shouldPlay:true
      }
    )
  }
  render()
  {
    return(
      <TouchableOpacity style={style1.btn} onPress={
        ()=>{
          this.playSound(this.props.soundChunk)
          
        }
      }>
      <Text style={style1.txt}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    )
  }
}
const style1=StyleSheet.create({
btn:{
  backgroundColor:"red",
  marginTop:15,
  height:50,
  width:200,
  alignSelf:"center",
  },
  txt:{
    color:"white",
    fontSize:25,
    alignSelf:"center"
  }
})
