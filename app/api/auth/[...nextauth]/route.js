import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// Handler to handle the authentication
const handler = NextAuth({
  // Options object
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
