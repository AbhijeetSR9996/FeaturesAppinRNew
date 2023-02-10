import React, { Component } from 'react'
import {
    ActivityIndicator,
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native'
export default class RNActivityIndicator extends Component {
    state = { indicatorAnimating: true }
    closeIndicator = () => setTimeout(() => this.setState({
        indicatorAnimating: false
    }), 6000)
    componentDidMount = () => this.closeIndicator()
    render() {
        const indicatorAnimating = this.state.indicatorAnimating
        return (
            <View style={[indicagtorStyle.containerStyle, indicagtorStyle.horizontalStyle]} >
                <ActivityIndicator animating={indicatorAnimating} size="small" color="pink" />
                <ActivityIndicator size="large" color="green" />
                <ActivityIndicator size="small" color="red" />
            </View>
        )
    }
}
const indicagtorStyle = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontalStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 11
    }
})