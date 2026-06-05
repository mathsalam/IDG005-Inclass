<template>
    <h1>Sign In</h1>
    <button @click="goToDashboard">Go to Dashboard</button>
    <br>
    <br>
    <br>
    <button @click="goToSignUp">Go to Sign Up</button>
    <br>
    <br>
    <button @click="goToAbout">Go to About</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// replace to a path
function goToDashboard() {
    router.replace('/dashboard')
}

// replace to a named route
function goToSignUp() {
    router.replace({ name: 'SignUp' })
}
function goToAbout() {
    router.replace({ name: 'About' })
}
</script>