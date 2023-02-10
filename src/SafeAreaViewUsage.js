import React from 'react';
import {
    StyleSheet
    , Text
    , SafeAreaView
    , Image
    , View
} from 'react-native';

const decoration = StyleSheet.create({
    tex: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#f7f068",
        fontSize: 50,
    },
    rex: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fa003a",
        borderWidth: 20,
        borderColor: "#b4fa57",
    },
    wex: {
        flex: 1.1,
        padding: 50,
    }
});
const SafeAreaViewUsage = () => {
    return (
        <SafeAreaView style={decoration.rex}
        >
            <Text style={decoration.tex}>
                EDUCBA
            </Text>
            {/* <Image
                source={{ uri: 'http://pngimg.com/uploads/husky/husky_PNG48.png' }}
                style={decoration.wex}
            /> */}
            <Text style={{ fontSize: 16 }}>
                EDUCBA(Corporate Bridge Consultancy Pvt Ltd)is an initiative to provide the world's best skill based education, it was initiated by IIM and IIT Graduates. There are more than 1,000,000 members from 70+ countries who have received skill based training from EDUCBA. EDUCBA provides step by step, online learning plan with more than 5000 courses and 500 above learning paths designed by top professionals of the industry. The trainings are totally job oriented, which aims to skill the participants and make them job ready. EDUCBA has a vision to provide skill based trainings anytime & anywhere and to make the participants job ready EDUCBA allows enrollments 24 hours a day, 7 days a week and 365 days a year. The courses are self paced, so learn at your preferred place, time and pace.The participants can make their own preffered schedule for their study.
            </Text>
        </SafeAreaView>
    );
}
export default SafeAreaViewUsage;