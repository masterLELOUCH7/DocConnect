import React from 'react'

const Login = () => {

  const [state, setState] = React.useState('Sign up')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log({ name, email, password }) // For testing
  }

  return (
    <form 
      onSubmit={onSubmitHandler}
      className='min-h-[80vh] flex items-center justify-center'
    >
      <div className='flex flex-col gap-5 bg-white shadow-lg p-8 rounded-2xl w-full max-w-md'>

        {/* Title */}
        <div className='text-center'>
          <p className='text-3xl font-semibold text-gray-800'>
            {state === 'Sign up' ? "Create Account" : "Login"}
          </p>
          <p className='text-gray-500 text-sm'>
            Please {state === 'Sign up' ? "sign up" : "log in"} to continue
          </p>
        </div>

        {/* Full Name Input */}
        {state === "Sign up" && (
          <div>
            <p className='text-sm text-gray-700 mb-1'>Full Name</p>
            <input
              type="text"
              className='w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-red-500'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        {/* Email Input */}
        <div>
          <p className='text-sm text-gray-700 mb-1'>Email</p>
          <input
            type="email"
            className='w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-red-500'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <p className='text-sm text-gray-700 mb-1'>Password</p>
          <input
            type="password"
            className='w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-red-500'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          className='w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition-all'
        >
          {state === 'Sign up' ? "Create Account" : "Login"}
        </button>

        {/* Switch mode */}
        <p className='text-center text-sm text-gray-600'>
          {state === 'Sign up' ? "Already have an account?" : "Don't have an account?"}
          <span
            className='text-red-500 font-medium cursor-pointer ml-1'
            onClick={() => setState(state === "Sign up" ? "Login" : "Sign up")}
          >
            {state === 'Sign up' ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </form>
  )
}

export default Login
