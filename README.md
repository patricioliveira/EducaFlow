# EducaFlow
Desafio Plataforma PAM


# EducaFlow - Execução em Docker

Este guia fornece instruções para executar a aplicação EducaFlow em contêineres Docker.

## Pré-requisitos

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Você pode encontrar instruções de instalação em:

- [Docker Installation Guide](https://docs.docker.com/get-docker/)
- [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

## Execução da Aplicação

1. Na raiz do projeto, execute o seguinte comando para iniciar os contêineres:

    ```bash
    docker-compose up -d --build
    ```

   Isso iniciará os contêineres do PostgreSQL, backend Django e frontend Angular.

2. Aguarde até que todos os contêineres estejam em execução. Você pode verificar o status com:

    ```bash
    docker-compose ps
    ```

3. Acesse a aplicação frontend em [http://localhost:3000](http://localhost:3000).

4. Para acessar a interface de administração do Django, acesse [http://localhost:8000/admin](http://localhost:8000/admin) e faça login com as credenciais de superusuário.

5. Para acessar a interface de documentação da aplicação, acesse [http://localhost:8000/swaager](http://localhost:8000/swagger).

6. Para parar a aplicação, execute:

    ```bash
    docker-compose down
    ```

---