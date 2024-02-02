import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { authConfig } from './authconfig'
import { connect2db } from './lib/utils'
import { UserModel } from './lib/models'

const login = async (creentials) => {
    try{
        connect2db()
        const user = await UserModel.findOne({ username: crendentials.username})

        if(!user) throw new Error("Invlid Credentials")

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if(!isPasswordCorrect) throw new Error("Incorrect password")

        return user;
    }

    catch(err){
        console.log(err)
        throw new Error("Failed to login")
    }
}

export const {signIn, signout, auth} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try{
                    const user = await login(credentials);
                    return user;
                }
                catch(err){
                    return null
                }
            },
        }),
    ],
})