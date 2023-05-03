import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCzScPO97KYuS_BZ0SXH96dmiUN6zDvfjc",
    authDomain: "foodwebsite-c9f90.firebaseapp.com",
    databaseURL: "https://foodwebsite-c9f90-default-rtdb.firebaseio.com",
    projectId: "foodwebsite-c9f90",
    storageBucket: "foodwebsite-c9f90.appspot.com",
    messagingSenderId: "369982344275",
    appId: "1:369982344275:web:cf20809e629c0a217e4aa6"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage } 