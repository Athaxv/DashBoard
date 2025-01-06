import { CssBaseline } from "@mui/material"
import { SessionProvider } from "next-auth/react"
// import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <CssBaseline/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}