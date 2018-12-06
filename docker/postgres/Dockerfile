FROM postgres:11.0-alpine

COPY ./docker/postgres/server.crt ${PGDATA}/server.crt
COPY ./docker/postgres/root.crt ${PGDATA}/root.crt
COPY ./docker/postgres/server.key ${PGDATA}/server.key
COPY ./docker/postgres/pg_hba.conf ${PGDATA}/pg_hba.conf
