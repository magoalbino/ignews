import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({

    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: 'read:user'
        }),
    ],

    // database: process.env.DATABASE_URL,  //aqui seria para salvar os dados da autenticação em um banco de dados, que não será feito nessa aplicação
})