FROM postgres:11.0-alpine

COPY ./infra/postgres/server.crt ${PGDATA}/server.crt
COPY ./infra/postgres/root.crt ${PGDATA}/root.crt
COPY ./infra/postgres/server.key ${PGDATA}/server.key
COPY ./infra/postgres/pg_hba.conf ${PGDATA}/pg_hba.conf
