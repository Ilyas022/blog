import React from 'react'
import SignUpForm from '../shared/forms/SignUpForm'

const SignUpPage: React.FC = (): JSX.Element => {
  return (
    <main className="bg-grey-lighter flex flex-col">
      <div className="container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <SignUpForm className="bg-white p-6 rounded shadow-md text-black w-full" />
        <div className="text-gray-700 mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue-600 border-solid text-blue-600"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </main>
  )
}

export default SignUpPage
