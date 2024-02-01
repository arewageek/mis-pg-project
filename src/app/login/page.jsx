'use client'
import AuthContainer from '@/ui/auth/AuthContainer'
import { PriButton } from '@/ui/forms/Buttons'
import { TextInput } from '@/ui/forms/Inputs'

import { loginAction } from '@/actions/authActions'

const LoginPage = () => {
    
    return (
        <AuthContainer title="Login" footerLink="register">
            <form action={loginAction}>
                <TextInput type={"email"} placeholder={"Email Address"} />
                <TextInput type={"password"} placeholder={"Password"} />

                <PriButton text="Sign me in" />
            </form>
        </AuthContainer>
    )
}

export default LoginPage