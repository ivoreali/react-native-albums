// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View> )
};

const styles = {
    viewStyle: {
        backgroundColor: '#EFEFEF', 
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize:20
    }
};


// make the component available to other parts of the app
export default Header;