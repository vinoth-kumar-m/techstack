--
--    SPDX-License-Identifier: Apache-2.0
--

CREATE USER blockchain with password 'blockchain';
DROP DATABASE IF EXISTS blockchain;
CREATE DATABASE blockchain owner blockchain;
\c blockchain;
--

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username character varying(128) DEFAULT NULL,
  password character varying(256) DEFAULT NULL,
  firstName character varying(128) DEFAULT NULL,
  lastName character varying(128) DEFAULT NULL,
  role character varying(15) DEFAULT NULL,
  status character varying(10) DEFAULT 'ACTIVE',
  createdt Timestamp DEFAULT NULL
);

ALTER table users owner to blockchain;

GRANT SELECT, INSERT, UPDATE,DELETE ON ALL TABLES IN SCHEMA PUBLIC to blockchain;

INSERT INTO users (username, password, firstName, lastName, role, status, createdt) 
  VALUES ('admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 
    'Administrator', 'Administrator', 'Admin', DEFAULT, current_timestamp);