import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCF4cKtpPEoumL66w5vCECtorK22-IQuTk",
    authDomain: "formulario-escolar-f661c.firebaseapp.com",
    projectId: "formulario-escolar-f661c",
    storageBucket: "formulario-escolar-f661c.firebasestorage.app",
    messagingSenderId: "104079058147",
    appId: "1:104079058147:web:47deb329c55edd939a11d6"
  };

  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)

  export { db, addDoc, collection }