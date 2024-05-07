import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {        //if user is logged in redirect to homepage
            if (user) {
                router.push("/")
            }
        })
    },[])

    return (
        <Wrapper>
            <SafarLogo src="https://i.ibb.co/YR40zsk/safar-logo.png" />
            <Title>Log In To Access Your Account</Title>
            <HeadImg src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SignInBtn onClick={() => signInWithPopup(auth, provider)}>
                Sign In With Google
            </SignInBtn>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen bg-gray-200 w-screen p-4
`

const SignInBtn = tw.button`
bg-black text-white text-center py-4 mt-4 self-center w-full  rounded-lg cursor-pointer
`

const SafarLogo = tw.img`
h-42 w-40 object-contain self-start mt-10
`

const Title = tw.div`
    text-4xl pt-4 mt-2 text-gray-500
`

const HeadImg = tw.img`
    object-contain w-full
`