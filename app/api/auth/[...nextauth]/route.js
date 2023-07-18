import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

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
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
