create table USERS (
    ID SERIAL PRIMARY KEY,
    USER_NAME VARCHAR(100) NOT NULL UNIQUE
);