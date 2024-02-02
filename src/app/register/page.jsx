'use client'
import AuthContainer from '@/ui/auth/AuthContainer'
import { TextInput } from '@/ui/forms/Inputs'

import { registerAction } from '@/actions/authActions'
import { FaAt, FaEyeSlash, FaIdBadge, FaUser } from 'react-icons/fa'
import { PriButton } from '@/ui/forms/Buttons'

const SignupPage = () => {
    return (
        <AuthContainer title={"Create an account"} footerLink={"login"}>
            <form action={registerAction}>
                <TextInput Icon={FaUser} type="text" name="name" placeholder="Your full name" />
                <TextInput Icon={FaAt} type="email" name="email" placeholder="arewageek@gmail.com" />
                <TextInput Icon={FaIdBadge} type="text" name="reg_number" placeholder="2018/1/xxxxxx" />
                <TextInput Icon={FaEyeSlash} type="password" name="password" placeholder="Your secret password" />

                <PriButton text="Create my account" />
                
            </form>
        </AuthContainer>
    )
}

export default SignupPage