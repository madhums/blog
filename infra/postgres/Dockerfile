FROM postgres:11.0-alpine

COPY ./server.crt ${PGDATA}/server.crt
COPY ./root.crt ${PGDATA}/root.crt
COPY ./server.key ${PGDATA}/server.key
COPY ./pg_hba.conf ${PGDATA}/pg_hba.conf
