1. Install [docker](http://docker.com)
2. Run the following command to start the containers and services as a daemon (`-d`)

    ```sh
    $ docker-compose up -d --build
    ```

3. Run the following to check the logs (in a split pane)

    ```sh
    $ docker-compose logs -f # tail logs
    ```

4. The setup is in such a way that nodemon automatically restarts any changes. This is ideal for development.
5. Migrations are run as the server starts. If you want to create a migration or seed 

    ```sh
    $ npm run db:migrate:run migration_name
    $ npm run db:seed:run seed_name
    ```

    Once you add a migration, you can execute it by restarting the containers 

    ```sh
    $ docker-compose restart
    ```

6. If you want to set up seed data on development, you can run

    ```sh
    $ DATABASE_URL=postgres://postgres:postgres@localhost:5432/blog npm run db:seed:run
    ```

    according to your host/container setting.

If you are interested with one without objection.js and only knex, take a look at this sample project [knex-express-project-sample](https://github.com/robmclarty/knex-express-project-sample). It's well structured and upto the standards!

Todo:

- [ ] Add articles and comments
- [ ] Plug graphql and its playground
- [ ] Docker pre-deployment
    - [ ] See if there are any good logging solutions
    - [ ] Auto scaling and cluster management using kubernetes (also see if there are any visual solutions)
