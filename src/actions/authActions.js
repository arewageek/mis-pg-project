'use server'

import { UserModel } from "@/lib/models"
import { redirect } from "next/dist/server/api-utils"
import bcrypt from 'bcrypt'

export const loginAction = async ( formData ) => {
    const { email, password } = Object.fromEntries(formData)
}

export const registerAction = async (formData) => {
    const { name, email, regNumber, password } = Objects.fromEntries(formData)

    try{
        const salt = bcrypt.genSalt(10)
        const hashedPassword = bcrypt.hash(password, salt)
        
        const newUser = UserModel({
            name,
            email,
            regNumber,
            password: hashedPassword
        })

        await newUser.save();

        console.log("Account created successfully")
        redirect('/login')

    }

    catch(err){
        console.log(err)
        throw new Error("Unable to setup your account")
    }
}