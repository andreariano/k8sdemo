FROM microsoft/mssql-server-linux:2017-latest

EXPOSE 1433

COPY ./setup.sql .

CMD /opt/mssql/bin/sqlservr