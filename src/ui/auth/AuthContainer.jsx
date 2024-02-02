import React from 'react'

const fLink = (route, text) => <a href={route} className='font-semibold text-gray-200 hover:text-gray-50 transition'>{ text }</a>

const AuthContainer = ({ children, title, footerLink }) => {
  return (
    <div className='w-screen h-screen bg-gray-800 flex justify-center items-center p-10'>
        <div className='w-full md:w-1/3 rounded-lg p-5 bg-gray-900 min-h-[100pt] flex flex-col shadow-2xl shadow-slate-950 hover:shadow-xl hover:scale-[99.3%] transition'>
            <div className='w-full pt-4 justify-end flex'>
                <h3 className='font-bold text-md italic px-5 text-slate-500'>
                    { title }
                </h3>
            </div>

            <div className='w-full py-5'>
                { children }
            </div>

            <div className='w-full mt-4'>
                <span className='text-sm text-gray-300 italic'>
                    {
                        footerLink === 'login' ? <>
                            Already have an account? Let's { fLink('/login', "Sign you in") }
                        </> : <>
                            New here? Let's { fLink('/register', "Make you an acount") }
                        </>
                    }
                </span>
            </div>
        </div>
    </div>
  )
}

export default AuthContainer