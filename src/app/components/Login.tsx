import React from 'react'

type Props = {}

function Login({}: Props) {
  return (
    <div>
         <h2 className="txt-4xl">Welcome!</h2>
        <form action="">
            <div>
                <label htmlFor="email-address">Email</label>
                <input type="text" />
            </div>
        </form>
    </div>
  )
}

export default Login