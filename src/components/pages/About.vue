<template>
    <h1>About</h1>
    <button @click="goToDashboard">Go to Dashboard</button>
    <button @click="goToSignIn">Go to Sign In</button>
    <button @click="goToSignUp">Go to Sign Up</button>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToDashboard() {
    router.push('/dashboard')
}
function goToSignIn() {
    router.push({ name: 'SignIn' })
}
function goToSignUp() {
    router.push({ name: 'SignUp' })
}
</script>