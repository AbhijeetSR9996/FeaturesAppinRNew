import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {
LineChart,
BarChart,
PieChart,
ProgressChart,
ContributionGraph,
StackedBarChart,
} from 'react-native-chart-kit';

export default class SecondUsage extends React.Component {
render() {
return (
<ScrollView>
<View style={styles.container}>
<View>
<Text
style={{
textAlign: 'center', fontSize: 18,
padding: 16,
marginTop: 16,
}}>
Progress Chart
</Text>
<ProgressChart data={[0.4, 0.6, 0.9]}
width={Dimensions.get('window').width - 16} height={220}
chartConfig={{
backgroundColor: '#cc14aa',
backgroundGradientFrom: '#7ff591',
backgroundGradientTo: '#f0f716',
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