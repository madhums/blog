1. Install [docker](http://docker.com)
2. Run the following command to start the containers and services.

    ```
    $ docker-compose up -d --build
    ```

3. Run the following to check the logs

    ```
    $ docker-compose logs -f
    ```

4. The setup is in such a way that nodemon automatically restarts any changes. This is ideal for development.
