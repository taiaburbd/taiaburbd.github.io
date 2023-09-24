<template>
    <div></div>
  </template>
  
  <script>
  import { collection, addDoc } from "firebase/firestore"
  import db from './firebase/init.js'
  
  export default {
    created() {
      this.createUser()
    },
    methods: {
      async createUser() {
        const colRef = collection(db, 'users')
        const dataObj = {
          firstName: 'Jane',
          lastName: 'Doe',
          dob: '1991'
        }
  
        const docRef = await addDoc(colRef, dataObj)
        console.log('Document was created with ID:', docRef.id)
      }
    }
  }
  </script>