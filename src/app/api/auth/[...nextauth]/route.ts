import bcrypt from 'bcrypt';

import { prisma } from '@/app/lib/prisma';
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import type { NextAuthOptions } from 'next-auth';
import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                username: { label: "Username", type: "text", placeholder: "John Smith" },
            },
            // start of authorize func
            async authorize(credentials: Record<"email" | "password" | "username", string> | undefined) {
                if (!credentials?.email || !credentials?.password) {
                  throw new Error('Please enter an email and password');
                }
              
                const dbUser = await prisma.user.findUnique({
                  where: {
                    email: credentials.email,
                  },
                });
              
                if (!dbUser || !dbUser?.hashedPassword) {
                  return null;
                }
              
                const passwordMatch = await bcrypt.compare(credentials.password, dbUser.hashedPassword);
              
                if (!passwordMatch) {
                  return null;
                }
              
                const user = {
                    id: dbUser.id + '',
                    email: dbUser.email,
                    name: dbUser.firstName,
                };
                
                return user;
                
              },
            //end of autjorize func
        }),  
    ],
    secret: process.env.SECRET || "a-default-secret", // Replace with a default secret if needed
    session: {
        strategy: "jwt" as const,
    },
    debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };