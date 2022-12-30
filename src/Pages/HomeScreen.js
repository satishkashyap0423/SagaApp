import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../Redux/Action/index'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const getVal = useSelector(state=>state)
    // console.log(getVal)
    
    const callApi = async() => {
        let payload ={
            apiName:"verify_details",
            method: 'POST',
            parameter : {
                "udyam_number": "UDYAM-UP-00-0123456",
                "mobile": "9988667886"
            }
        }
        let data  = await dispatch(loginUser(payload))
        console.log(data)
        if(getVal.loginReducer.loading){
            console.log("loading true")
        }
        else {
            console.log("loading false")
        }
    }
  return (
    <View style={{flex:1, justifyContent:'space-evenly', alignItems:'center'}}>
     
      <TouchableOpacity onPress={()=>callApi()} style={{height:40, backgroundColor:'yellow', borderWidth:1, borderRadius:5, justifyContent:'center', alignItems:'center', width:200}}>
        <Text style={{color:'#000'}} >Call API</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen