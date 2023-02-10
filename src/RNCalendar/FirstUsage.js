import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet
} from 'react-native';
import CalendarStrip from 'react-native-slideable-calendar-strip';

export default class FirstUsage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }
    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() :
            '';
        return (
            <View style={styles.container}>
                <CalendarStrip isEnglish showWeekNumber showEnglishLunar
                    selectedDate={this.state.selectedDate} onPressDate={(date) => {
                        this.setState({ selectedDate: date });
                    }}
                    onPressGoToday={(today) => {
                        this.setState({ selectedDate: today });
                    }}
                    onSwipeDown={() => {
                        alert('onSwipeDown');
                    }}
                    markedDate={['2020-03-04', '2020-03-15', '2020-03-04', '2020-03-01']}
                    weekStartsOn={1}
                />
                <View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b3fff3', 
        marginTop: 100,
    }
});