import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with your DB check in production
        if (
          credentials.email &&
          credentials.password &&
          credentials.password.length >= 4
        ) {
          return {
            id: 1,
            name: credentials.email.split("@")[0],
            email: credentials.email,
          };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // Show errors in console during development
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };