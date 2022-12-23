import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    {
        label:'Tomatoes', value:'Tomatoes'
      },
      {
        label:'Spinach', value:'Spinach'
      },
      {
          label:'Onions',value:'Onions'
      }
];
const data1 = [
    {
      label:'Quinoa', value:'Quinoa'
    },
    {
        label:'Oats',value:'Oats'
    }
  ];
  const data2 = [
    {
        label:'Boiled Eggs', value:'Boiled Eggs'
      },
      {
        label:'Whole Wheat', value:'Whole Wheat'
      },
  ];  
  const data3 = [
    {
      label:'Sandwich', value:'Sandwich'
    },
    {
      label:'Burger', value:'Burger'
    },
    {
        label:'Tacos',value:'Tacos'
    },
    {
        label:'Pizza',value:'Pizza'
    },
  ];
  const data4 = [
    {
      label:'Watermelon', value:'Watermelon'
    },
    {
      label:'Grapes', value:'Grapes'
    },
    {
        label:'Berries',value:'Berries'
    }
  ];

const Items = () => {

  const [value,setValue] = useState(null);

  return (
    <SafeAreaView style={{flex:1}}>
     <View style={{flex:0.1,alignContent:'flex-end',justifyContent:'center'}}>
      <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'black'}}>Categories & Subcategories</Text>
     </View>
     <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white',flex:3}}>
     <Dropdown 
     data={data}
     maxHeight={300}
     labelField='label'
     valueField='value'
     value={value}
     iconColor='black'
     placeholder='Fresh Vegetables'
    //  renderLeftIcon={() => (
    // <AntDesign
    // style={{marginRight:5}} color='black' name='warning' size={15}/>
    //  )}
     placeholderStyle={{color:'black',fontWeight:'500'}}
     style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',marginHorizontal:'3%',padding:'3%'}}
     />
     <Dropdown 
     data={data1}
     maxHeight={300}
     labelField='label'
     valueField='value'
     value={value}
     iconColor='black'
     placeholder='Diet Food'
     placeholderStyle={{color:'black',fontWeight:'500'}}
     style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',marginHorizontal:'3%',padding:'3%'}}
     />
     <Dropdown 
     data={data2}
     maxHeight={300}
     labelField='label'
     valueField='value'
     value={value}
     iconColor='black'
     placeholder='Healthy Food'
     placeholderStyle={{color:'black',fontWeight:'500'}}
     style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',marginHorizontal:'3%',padding:'3%'}}
     />
     <Dropdown 
     data={data3}
     maxHeight={300}
     labelField='label'
     valueField='value'
     value={value}
     iconColor='black'
     placeholder='Fast Food items'
     placeholderStyle={{color:'black',fontWeight:'500'}}
     style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',marginHorizontal:'3%',padding:'3%'}}
     />
     <Dropdown 
     data={data4}
     maxHeight={300}
     labelField='label'
     valueField='value'
     value={value}
     iconColor='black'
     placeholder='Juicy Fruits'
     placeholderStyle={{color:'black',fontWeight:'500'}}
     style={{backgroundColor:'white',borderWidth:1,borderColor:'grey',marginHorizontal:'3%',padding:'3%'}}
     />
     </ScrollView>
     
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

export default Items;