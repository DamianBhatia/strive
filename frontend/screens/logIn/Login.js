import React from 'react'
import {View, ImageBackground,Text, TouchableOpacity,Image} from 'react-native'
import styles from './styles'
import LoginHeader from '../../components/LoginPage/LoginHeader'
import LoginInputs from '../../components/LoginPage/LoginInputs'
import LoginButton from '../../components/LoginPage/LoginButton'
import GoogleIcon from "../../assets/Icons/google.svg"

const backgroundImage = require("../../assets/images/building.png")

/**
 * @param {object} history prop for pushing to new screen
 * @returns {jsx} renders loging screen
 */
export default Login = ({ history }) => {
    return(
        <View style = {styles.container}>
            
            <ImageBackground source = {backgroundImage}  resizeMode="cover" style={styles.image} imageStyle={{ opacity: 0.6 }}>
                <LoginHeader />
                <LoginInputs />
                <View style={styles.buttonsContainer}>
                    <LoginButton history = {history} label = {"Sign Up"}/>
                    <View style={styles.orContainer}>
                        <Text style={styles.or}> or </Text>
                    </View>
                    <LoginButton history = {history} label = {"Sign Up with Google"} icon = {<GoogleIcon height = {20} width = {30} />}/>
                </View>
                <View style={styles.signIn}>
                    <Text style={{color: 'white', fontSize: 18}}>Already have an account?</Text>
                    <TouchableOpacity><Text style={styles.signInText}>Sign In</Text></TouchableOpacity>
                </View>
            </ImageBackground>
         </View>     
    )
}
