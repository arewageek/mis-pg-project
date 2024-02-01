'use server'

export const loginAction = async ( formData ) => {
    const email = formData.get('email')
    const password = formData.get('password')
}

export const registerAction = async (formData) => {
    const name = formData.get('name')
    const email = formData.get('email')
    const regNumber = formData.get('reg_number')
    const password = formData.get('password')
}