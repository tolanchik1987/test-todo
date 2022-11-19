import { initializeApp } from "firebase/app";


const firebaseConfig = {
   apiKey: "AIzaSyCa0Kwj37QCyfZn4nT7fgI62vzm3RViMiY",
   authDomain: "womanup-test-efc9d.firebaseapp.com",
   databaseURL: "https://womanup-test-efc9d-default-rtdb.firebaseio.com",
   projectId: "womanup-test-efc9d",
   storageBucket: "womanup-test-efc9d.appspot.com",
   messagingSenderId: "296795773127",
   appId: "1:296795773127:web:0f15fbb62e428fa04bc6e2",
};

export const app = initializeApp(firebaseConfig);