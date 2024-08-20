# Nest - 2024 - Introdução

[gravação da aula](https://youtu.be/2aKe4ZYvMZU)

## Objetivo
1. Introdução a desenvolvimento de API com NestJS
2. Criar novo endpoint `tarefas` com verbos CRUD

## Links

- Repositório de códido da aula
  - [2024-nest](https://github.com/infoweb-pos/2024-nest)
- Tutoriais
  - [Nest - Documentation](https://docs.nestjs.com/)
  - [Prisma - Quick start](https://www.prisma.io/docs/getting-started/quickstart)
- Ferramentas
  - [nest js](https://nestjs.com/)
  - Rest client - HTTP Client
    - [Postman](https://www.postman.com/product/rest-client/)
    - [VS Code extension - Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)


## 3. Notas de aula

### 3.1. Criar e executar projeto

no terminal do sistema operacional, executar o comando

```bash
npx @nestjs/cli new 2024-nest

```

a resposta para a pergunta sobre qual gerenciador usar, deve ser `npm`

```bash
## respostas

? Which package manager would you ❤️  to use? npm

```

para executar o `api`, execute o comando abaixo

```bash
cd 2024-nest
npm run start:dev

```

a saída para o comando deve ser como abaixo

```console
[15:03:04] Starting compilation in watch mode...

[15:03:06] Found 0 errors. Watching for file changes.

[Nest] 11517  - 20/08/2024, 15:03:07     LOG [NestFactory] Starting Nest application...
[Nest] 11517  - 20/08/2024, 15:03:07     LOG [InstanceLoader] AppModule dependencies initialized +16ms
[Nest] 11517  - 20/08/2024, 15:03:07     LOG [RoutesResolver] AppController {/}: +7ms
[Nest] 11517  - 20/08/2024, 15:03:07     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 11517  - 20/08/2024, 15:03:07     LOG [NestApplication] Nest application successfully started +2ms

```

lembrando que o único `endpoint` é o raiz e que a porta é `3000`.
por isso, o único endereço ativo é `http://localhost:3000/`
