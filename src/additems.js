import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
//import ImagePicker from 'react-native-image-picker';

const data = [
  {
    label:'Boiled Eggs', value:'Boiled Eggs'
  },
  {
    label:'Whole Wheat', value:'Whole Wheat'
  },
];

const AddItems = () => {

  const [value,setValue] = useState(null);

  return (
    <SafeAreaView style={{flex:1}}>
     <View style={{flex:0.3,alignContent:'flex-end',justifyContent:'center',marginBottom:'5%'}}>
      <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'black'}}>Add Categories & Subcategories</Text>
     </View>
     <View style={{marginTop:'-5%'}}><Text style={{alignSelf:'center',color:'grey',marginHorizontal:'5%',}}>______________________________________________________</Text></View>
     <Text style={{alignSelf:'flex-start',fontSize:15,fontWeight:'bold',color:'black'}}>Category name</Text>
     <View  >
        <TextInput  placeholder='' style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',marginHorizontal:'3%',padding:'2%',marginTop:'3%'}}/>
     </View>
     <Text style={{alignSelf:'flex-start',fontSize:15,fontWeight:'bold',color:'black'}}>Category Image</Text>
     <View style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',marginHorizontal:'2%',padding:'8%',alignItems:'center',justifyContent:'space-between',flexDirection:'row',marginTop:'3%'}} >
     <View style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',marginHorizontal:'5%',padding:'15%'}} />
     <View style={{borderWidth:1,borderColor:'grey',marginHorizontal:'5%',padding:'5%',backgroundColor:'lightblue'}} >
        <TouchableOpacity>
        <Text style={{color:'white'}}>Choose file</Text>
        </TouchableOpacity>
     </View>
    </View>
        <Text style={{alignSelf:'flex-start',fontSize:15,fontWeight:'bold',color:'black',marginTop:'3%'}}>Create sub-categories</Text>   
        <View style={{backgroundColor:'white',borderWidth:1,borderColor:'transparent',marginHorizontal:'2%',padding:'3%',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}} >
        <View >
        <TextInput  placeholder='' style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',padding:'5%',width:'200%',marginLeft:'15%'}}/>
        </View>
        <View style={{backgroundColor:'lightblue',borderWidth:1,borderColor:'grey',marginHorizontal:'10%',padding:'3%'}} >
        <TouchableOpacity style={{borderRadius:10}} >
        <Text style={{color:'white',fontSize:20}}>+</Text>
        </TouchableOpacity>
        </View>
    </View>
    <View style={{backgroundColor:'white',borderWidth:1,borderColor:'transparent',marginHorizontal:'2%',padding:'3%',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}} >
        <View >
        <TextInput  placeholder='' style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',padding:'5%',width:'200%',marginLeft:'15%'}}/>
        </View>
        <View style={{backgroundColor:'grey',borderWidth:1,borderColor:'grey',marginHorizontal:'10%',padding:'3%'}} >
        <TouchableOpacity>
        <Text style={{color:'white',fontSize:20}}>-</Text>
        </TouchableOpacity>
        </View>
    </View>
    <View style={{borderWidth:1,borderColor:'grey',marginHorizontal:'5%',padding:'5%',backgroundColor:'lightblue'}} >
        <TouchableOpacity>
        <Text style={{color:'white',alignSelf:'center',fontSize:20}}>Add</Text>
        </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default AddItems;