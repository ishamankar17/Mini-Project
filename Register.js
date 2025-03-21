// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDtOsvkH6B9VHe8N4DFYdDBAaBj3swkOro",
    authDomain: "login-page-fd021.firebaseapp.com",
    projectId: "login-page-fd021",
    storageBucket: "login-page-fd021.firebasestorage.app",
    messagingSenderId: "1004327793836",
    appId: "1:1004327793836:web:f8c05df94b3dd463cc5b09",
    measurementId: "G-4913CGY18R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);