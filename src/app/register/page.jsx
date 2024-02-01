'use client'
import AuthContainer from '@/ui/auth/AuthContainer'
import { TextInput } from '@/ui/forms/Inputs'

import { registerAction } from '@/actions/authActions'

const SignupPage = () => {
    return (
        <AuthContainer title={"Create an account"} footerLink={"login"}>
            <form action={registerAction}>
                <TextInput type="text" name="name" placeholder="Your full name" />
                <TextInput type="email" name="email" placeholder="arewageek@gmail.com" />
                <TextInput type="text" name="reg_number" placeholder="2018/1/xxxxxx" />
                <TextInput type="password" name="password" placeholder="Your secret password" />
            </form>
        </AuthContainer>
    )
}

export default SignupPage