import { firebase } from "./config.js"
//import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const signUp = async (email, password) =>{
    try {
        const authuser = await firebase.auth().createUserWithEmailAndPassword(email, password)
        if(authuser.user.email && authuser.user?.uid){
            return true
        }
    } catch (error) {
        console.log(error)
    }
}

const login = async (email,password) =>{
    try {
        const user = firebase.auth().signInWithEmailAndPassword(email,password)
        if(user) 
            return user
    } catch (error) {
        console.log(error)
    }
}

module.exports = { signUp, login }