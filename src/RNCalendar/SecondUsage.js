import React, { Component } from 'react'; import {
    StyleSheet, Text,
    View
} from 'react-native';
import { Calendar } from 'react-native-calendario';

export default class SecondUsage extends Component {
    constructor(props) {
        super(props); this.state = {
            selectedStartDate: null, selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date, type) {
        if (type === 'END_DATE') {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date, selectedEndDate: null,
            });
        }
    }
    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date();
        const maxDate = new Date(2020, 6, 3);
        const startDate = selectedStartDate ? selectedStartDate.toString() :
            '';
        const endDate = selectedEndDate ? selectedEndDate.toString() : '';
        return (
            <View style={styles.container}>
                <Calendar
                    onChange={(range) => console.log(range)} minDate={new Date(2020, 2, 28)}
                    startDate={new Date(2020, 2, 27)}
                    endDate={new Date(2020, 3, 2)} theme={{
                        activeDayColor: {}, monthTitleTextStyle: {
                            color: '#a722e0', fontWeight: '300',
                            fontSize: 16,
                        },
                        emptyMonthContainerStyle: {}, emptyMonthTextStyle: {
                            fontWeight: '200',
                        },
                        weekColumnsContainerStyle: {}, weekColumnStyle: {
                            paddingVertical: 10,
                        },
                        weekColumnTextStyle: {
                            color: '#000305',
                            fontSize: 13,
                        },
                        nonTouchableDayContainerStyle: {},
                        nonTouchableDayTextStyle: {}, startDateContainerStyle: {}, endDateContainerStyle: {}, dayContainerStyle: {}, dayTextStyle: {
                            color: '#613a6b', fontWeight: '200',
                            fontSize: 15,
                        },
                        dayOutOfRangeContainerStyle: {}, dayOutOfRangeTextStyle: {}, todayContainerStyle: {}, todayTextStyle: {
                            color: '#fc051e',
                        },
                        activeDayContainerStyle: {
                            backgroundColor: '#d472f7',
                        },
                        activeDayTextStyle: {
                            color: 'black',
                        },
                        nonTouchableLastMonthDayTextStyle: {},
                    }}
                />
                <View>
                    <Text>SELECTED START DATE:{startDate}</Text>
                    <Text>SELECTED END DATE:{endDate}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfcac', marginTop: 100,
    },
});