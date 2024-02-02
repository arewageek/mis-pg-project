'use client'
import AuthContainer from '@/ui/auth/AuthContainer'
import { PriButton } from '@/ui/forms/Buttons'
import { TextInput } from '@/ui/forms/Inputs'

import { loginAction } from '@/actions/authActions'

import { FaAt, FaEyeSlash } from 'react-icons/fa'

const LoginPage = () => {
    
    return (
        <AuthContainer title="Login" footerLink="register">
            <form action={loginAction}>
                <TextInput type={"email"} placeholder={"Email Address"} Icon={FaAt} />
                <TextInput type={"password"} placeholder={"Password"} Icon={FaEyeSlash} />

                <PriButton text="Sign me in" />
            </form>
        </AuthContainer>
    )
}

export default LoginPage