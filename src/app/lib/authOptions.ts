import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from '@/app/lib/prisma';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from 'bcrypt';
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    session: {
      strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: {},
          password: {},
        },
        async authorize(credentials) {
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
       
      }),
    ],
   
    secret: process.env.NEXTAUTH_SECRET,
  
    debug:true,
    callbacks: {
      jwt: async ({ user, token, trigger, session }) => {
        if (trigger === "update") {
          return { ...token, ...session.user };
        }
        return { ...token, ...user };
      },
      signIn: async ({ user, account, profile }) => {
        if (account?.provider === "google") {
          return true; // Allows the sign in
        }
        return true; // Don't forget to return true for other providers
      },
    
    },
  };