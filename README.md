README.md - Projeto Bookshelf 📚
Bookshelf - Livraria Online

Bookshelf é uma aplicação web para uma livraria online que permite a busca e visualização de livros utilizando a API do Google Books. Esta aplicação faz parte de um projeto de portfólio que visa evoluir de uma arquitetura monolítica para uma arquitetura de microsserviços.
🔥 Visão Geral

O projeto Bookshelf começa como uma aplicação monolítica e será gradualmente transformada para utilizar microsserviços. Durante o desenvolvimento, novas funcionalidades serão implementadas para aprimorar a experiência do usuário e a escalabilidade da aplicação.
🏗️ Tecnologias Utilizadas

    Frontend: Angular com Tailwind CSS para a estilização
    Backend: Spring Boot
    Banco de Dados: PostgreSQL
    API Externa: Google Books API
    Estilização: Tailwind CSS

🎯 Funcionalidades da Versão v0.0

    Busca de livros através da integração com a API do Google Books
    Exibição de livros por categoria
    Página de detalhes de cada livro
    Layout responsivo e estilização consistente utilizando Tailwind CSS

🚀 Roadmap de Evolução

A seguir está o cronograma de novas features que serão implementadas para evolução do projeto.

🗓️ Versão v1.0
(Concluido)

    Funcionalidade: Sistema de Autenticação
        Descrição: Implementação de login e registro de usuários.
        Tecnologia: Utilizará Spring Security e JWT para autenticação e controle de acesso.
        Objetivo: Permitir que usuários se autentiquem e mantenham sessões seguras na aplicação.

🗓️ Versão v2.0
(Concluido)

    Funcionalidade: Sistema de Envio de E-mails
        Descrição: Implementação de envio de e-mails para confirmação de cadastro, recuperação de senha e notificações de pedidos.
        Tecnologia: Utilizará o serviço de envio de e-mails como SendGrid ou JavaMail.
        Objetivo: Melhorar a comunicação e o suporte ao usuário.

🗓️ Versão v3.0

    Funcionalidade: Carrinho de Compras
        Descrição: Implementação de um carrinho de compras persistente para os usuários.
        Tecnologia: Integração com o front-end em Angular para adicionar, remover e atualizar itens no carrinho.
        Objetivo: Permitir que os usuários selecionem livros e façam pedidos diretamente pela aplicação.

🗓️ Versão v4.0

    Funcionalidade: Conversão para Arquitetura de Microsserviços
        Descrição: Transformação da aplicação monolítica em uma arquitetura baseada em microsserviços.
        Tecnologia: Utilizar Spring Cloud, Eureka, Feign e API Gateway (como Zuul ou Spring Cloud Gateway).
        Objetivo: Melhorar a escalabilidade, modularidade e manutenção da aplicação.

🎯 Próximas Funcionalidades Planejadas

    Sistema de pagamento integrado (Stripe ou PayPal)
    Wishlist (Lista de desejos para os usuários)
    Admin Dashboard para gerenciamento de livros e categorias
    Recomendações de livros baseadas em histórico de navegação e compras

🚀 Como Executar o Projeto
Pré-requisitos

    Node.js e npm
    Angular CLI
    JDK 17+
    PostgreSQL

Passos para Rodar a Aplicação

    Clone o repositório:

git clone https://github.com/usuario/bookshelf.git
cd bookshelf

Instale as dependências do Frontend:

cd frontend
npm install

Configure o banco de dados PostgreSQL:

    Crie um banco de dados chamado bookshelf
    Configure o arquivo application.properties no backend com as credenciais do banco

Inicie o Frontend:

npm start

Inicie o Backend:

    cd backend
    ./mvnw spring-boot:run

    Acesse a aplicação:
        Frontend: http://localhost:4200
        Backend: http://localhost:8080

🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um Pull Request ou reportar issues.
📄 Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

Bookshelf é um dos projetos-chave do portfólio e foi projetado para evoluir ao longo do tempo, implementando as melhores práticas de desenvolvimento e adotando tecnologias modernas para oferecer uma experiência robusta e escalável aos usuários.

Vamos evoluir juntos! 💪📚
