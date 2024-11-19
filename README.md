<h2 align="center"> 💻 Carrinho de Compra Sobremesas </h2> 

<p align="center">
  

  <img max-width="auto" height="auto"  src="https://github.com/user-attachments/assets/41e1fc73-9e28-4f0b-bb57-ecb8aee2609a">
  <img max-width="auto" height="auto"  src="https://github.com/user-attachments/assets/70b21937-a795-46d1-91e4-8eb5f4181f80">
  
</p> 



## 💻  Sobre o Projeto

Este projeto é uma página permite que os usuários explorem um cardápio das sobremesas, gerenciem suas escolhas em um carrinho de compras.

 Principais funcionalidades:

 - Visualize uma seleção de sobremesas com imagens, descrições e preços.
 - Adicione sobremesas ao carrinho
 - Escolha a quantidade de cada item diretamente
 - Visualize todos os itens adicionados ao carrinho com valores detalhados.
 - Atualize a quantidade de cada item ou remova itens indesejados.
 - Calcule automaticamente o valor total dos itens no carrinho.
 - Simule a finalização da compra com um resumo detalhado do pedido.

  
<a href="https://sobremesas-carrinho-de-compra.netlify.app/" target="_blank"><strong>Acessar »</strong></a>

<br>


## :rocket: Tecnologias Usadas


Front-end 
```
ReactJS
Typescript
Tailwind
```























# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
