import React, { Component } from 'react';//importing react core
import { View } from 'react-native';//importing View from the react-native
import { Table, Row, Rows } from 'react-native-table-component';//Here we are Importing


export default class RNTable extends Component {
constructor(props) {
super(props);
this.state = {
headerData:  ["username", "age", "sex", "location"],//initialisation of header of table
tableContents: [
["ranjan", "30", "male", "Chennai"],
["Ajay", "29", "male", "Mumbai",],
["vijay", "29", "male", "Mumbai",],
["Suraj", "24", "male", "Kolkata",],
["Akash", "27", "male", "Mumbai",],
["Alka", "29", "female", "Delhi",]
]
}//initialisation of table contents
}
//calling the render function for the
render() {
const state = this.state;
return (
<View>
<Table>
<Row data={state.headerData}/>
<Rows data={state.tableContents}/>
</Table>
</View>
)
}
}