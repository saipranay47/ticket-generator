import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
// import dot env .config


export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

})
