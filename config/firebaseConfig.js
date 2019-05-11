import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCEpeoTD5v6itvjx1vbGY8uL-jRiT3yMew",
    authDomain: "ebook-reader-35aa2.firebaseapp.com",
    projectId: "ebook-reader-35aa2",
    storageBucket: "ebook-reader-35aa2.appspot.com",
    appId: "1:996007217644:web:21d215f6ea6862ac"
}

firebase.initializeApp(firebaseConfig);

export const authRef = firebase.auth()
export const booksRef = firebase.storage().ref().child('ebooks')