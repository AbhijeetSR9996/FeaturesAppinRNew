import React, { Component } from "react";
import { AppRegistry, StyleSheet, SectionList, Text, View } from "react-native";

export default class SecList extends Component {
render() {
return (
<View style={styles.containerStyle}>
<SectionList
sections={[
{
title: "Account",
data: ["Ranjan", "Ajay", "vijay", "Suresh", "Anish"]
},
{
title: "HR",
data: ["Kameshwar", "Ramana", "Anjali", "Reddy", "Jones"]
},
{
title: "Admin",
data: ["Kriss", "Sudhir", "Ankita", "Brajesh", "Karan"]
},
{
title: "IT",
data: ["Diwakar", "Raju", "Gagan", "Subodh", "Randhir"]
},
{
title: "IT",
data: ["Ranjana", "Rajnish", "Poonam", "Goswami", "Rishikesh"]
},
{
title: "Finance",
data: ["Alka", "Kiran", "Pinky", "Anshu", "Peyush"]
},
{
title: "Sales",
data: ["Ankita", "Rehana", "Drishti", "Ayan", "Arav"]
}
]}
renderItem={({ item }) => (
<Text style={styles.itemStyle}>{item}</Text>
)}
renderSectionHeader={({ section }) => (
<Text style={styles.sectionHeaderStyle}>{section.title}</Text>
)}
keyExtractor={(employee, position) => position}
/>
</View>
);
}
}
const styles = StyleSheet.create({
containerStyle: {
backgroundColor: "green",
flex: 1
},
sectionHeaderStyle: {
paddingTop: 2,
paddingLeft: 10,
paddingRight: 10,
paddingBottom: 2,
fontSize: 22,
fontWeight: "white",
color: "#fff",
backgroundColor: "#8fb1aa"
},
itemStyle: {
padding: 10,
fontSize: 18,
height: 44
}
});
