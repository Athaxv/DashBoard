import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '@mui/material';
// import { Avatar } from '@mui/material';

function Login() {
  const { data: session } = useSession();

  if (session) {
    return <>
    Signed in as { session?.user?.email } <br/>
    <p>Welcome {session?.user?.name}</p>
    <Button variant={'contained'} color={'error'} onClick={() => signOut()}>Sign out</Button>
    </>
  }
    return <>
      <h2>Please LogIn!</h2> <br/>
      <Button variant={'contained'} color={'success'} onClick={() => signIn()}>Sign in</Button>
    </>
  
}

export default Login
