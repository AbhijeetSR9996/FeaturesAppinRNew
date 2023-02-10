import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {
LineChart,
BarChart,
PieChart, ProgressChart,
ContributionGraph,
StackedBarChart,
} from 'react-native-chart-kit';
export default class ThirdUsage extends React.Component {
render() {
return (
<ScrollView>
<View style={styles.container}>
<View>
<Text
style={{
textAlign: 'center',
fontSize: 18,
padding: 16,
marginTop: 16,
}}>
Bar Chart
</Text>
<BarChart data={{
labels: [ 'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
],
datasets: [
{
data: [20, 45, 28, 80, 99, 43],
},
],
}}
width={Dimensions.get('window').width - 16}
height={220}
yAxisLabel={'$'} chartConfig={{
backgroundColor: '#10c9bd',
backgroundGradientFrom: '#f2b40a',
backgroundGradientTo: '#99f7e3',
decimalPlaces: 2,
color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
style: {
borderRadius: 16,
},
}}
style={{ marginVertical: 8,
borderRadius: 16,
}}
/>
</View>
</View>
</ScrollView>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center', padding: 8,
paddingTop: 30, backgroundColor: '#ecf0f1',
},
});