import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

// Handler to handle the authentication
const handler = NextAuth({
  // Options object
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      connectToDB();
    } catch (error) {
      console.log(error);
    }
  },
});

export { handler as GET, handler as POST };
