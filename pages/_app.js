import '../styles/globals.css'
import {Provider as AuthProvider} from "next-auth/client"

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
