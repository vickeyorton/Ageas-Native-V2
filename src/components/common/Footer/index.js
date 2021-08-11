import React from 'react';
import { View, Text,Linking ,Image } from 'react-native';
import styles from './styles';

const Footer = () => {
    return (
        <View style={styles.footerWrap}>
            <View style={{flex:1, padding:5}}>
                <Image style={styles.footerLogo} source={{uri:'https://www.ageas.co.uk/Static/images/png/ageas-footer-logo.png'}}/>
            </View>
            <View style={{flex:2, padding:5}}>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Ageas Group</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Ageas Brokers</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Important information</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Terms and conditions</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Terms of business</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Privacy policies</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Modern slavery statement</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Ageas Group</Text>
            </View>
            <View style={{flex:1, padding:5}}>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Make a claim</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Contact us</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Ageas Bowl</Text>
                <Text style={styles.footerLink} onPress={() => Linking.openURL('http://google.com')}>Careers</Text>
            </View>
        </View>
    )
}

export default Footer
