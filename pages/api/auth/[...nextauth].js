import NextAuth from "next-auth"
import Providers from "next-auth/providers"

const options = {
    providers: [
        Providers.GitHub({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        })
      ],

    pages: {
      signIn: "/signin",
    },

    database: process.env.DATABASE_URL
      

      
};

export default (req, res) => NextAuth(req, res, options);

