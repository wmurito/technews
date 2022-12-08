<h1 align="center"> TechNews </h1>


## 💻 Projeto

TechNews trata-se de um projeto onde simula a assinatura através de um valor para obter acesso ao conteúdo exclusivo dos posts.

## Configurações necessárias

### **Requisitos**

Necessário realizar as instalações:

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

Criar conta e configurar os serviços externos:

- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

*Configurações dos serviços estão localizadas no arquivo servicesConfig.md na raiz do projeto.*

### **Clone do projeto**

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/wmurito/technews
# Entre na pasta do repositório clonado
$ cd technews
```

### **Iniciando o projeto**

```bash
# Execute yarn para instalar as dependências
$ yarn

# Na raiz do projeto crie uma copia do arquivo .env.local.example
# Altere o nome da copia para .env.local
# Preencha as variáveis ambiente de acordo com as instruções
$ cp .env.local.example .env.local

# Execute stripe listen para ouvir eventos do webhook
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Para iniciar a aplicação
$ yarn dev

```

---

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

## Autor

Feito por Wellington Murito 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Murito-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/wmurito/)
[![Gmail Badge](https://img.shields.io/badge/-elinho.murito@gmail.com-red?style=flat-square&link=mailto:elinho.murito@gmail.com)](mailto:nelsonsantosaraujo@hotmail.com)


