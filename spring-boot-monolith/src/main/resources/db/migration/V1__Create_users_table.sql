create table USERS (
    ID SERIAL PRIMARY KEY,
    USER_NAME UNIQUE VARCHAR(100) NOT NULL
);