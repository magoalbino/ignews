This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


Neste projeto não utilizamos o styled components, por ter um layout muito simples
O styled components adiciona uma complexidade a mais no projeto, e um pouco mais de processamento tb
Mas aparentemente é ideal para aplicações mais complexas.

Utilizando somente o SASS, os arquivos de estilo são escritos de duas formas:
- 'global.scss' (neste caso, o arquivo afeta toda a aplicação)
- 'home.module.scss' (dessa forma apenas o componente que importou este arquivo vai ter acesso aos seus estilos)

Pacote de ícones do react:
- yarn add react-icons

Server Side Rendering
- O next tem uma camada que fica entre o browser e o código react, imitando a funcionalidade de um servidor. Isso permite que as informações da página sejam encontradas pelos motores de busca.
- Static Site Generation:
- - O next gera um html da página e evita fazer outra requisição ao servidor, independente de quantos usuários acessarem a página. Sendo que o tempo de atualização desse html é definido pelo react (getStaticProps)
- - Serve apenas para informações estáticas, que é visualizada igualmente por todos os usuários
- O server side rendering é mais custoso para carregar a página, e por isso deve ser usado apenas em situações que tirem sua máxima vantagem

No Next, podemos criar uma pasta 'api' dentro de 'pages', e todo arquivo que estiver dentro desta pasta, será visto como uma rota do backend.
Ou seja, funciona como uma api vinda do backend, pois roda justamente na camada intermediária de node do next, entre o react e o browser.
Tudo isso funciona de forma 'serverless'.

No next, o componente MyApp (que fica no arquivo _app.tsx) é o que engloba a aplicação, e é renderizado/recriado toda vez que o usuário troca de tela. E por isso os arquivos de fontes externas não devem ser carregados dentro deste arquivo.
Desta forma, foi criado o arquivo _document.tsx que é carregado somente uma vez, funcionando da mesma forma que o index.html que vem no create-react-app.

