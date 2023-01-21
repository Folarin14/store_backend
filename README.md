# Storefront Backend Project

## Getting Started

This repo contains the backend of a simple store built using Typescript, Node and Express. To get started, clone this repo, then install all the packages using `npm install` then run `npm run start` to create the database with required tables and start the server.


## Setup
This backend does not use a docker, so you should have a local installation of postgres on your system which defaults to port 5432. If you choose to use a docker to host the database, make sure your container port is properly matched to the host port. If you use a different port for your postgres and local server, change the **PG_PORT** and **PORT** in the environment variable respectively below. Please make sure the database **node_store_db** already exists before running `npm run start` which spins up the migration sequence to add the required table. if you choose to go with a different DB name, make sure you change the **PG_DATABASE** parameter in the **.env** file. This setup **WILL NOT** create the database for you. 


## Environment Variables
The following environment variables are required to make the backend work as expected. Please save this in a **.env** file before running the backend:

- NODE_ENV=development
- LOCALHOST="127.0.0.1"
- PORT=8090
- TEST_DATABASE="testDB"
- PG_DATABASE="node_store_db"
- PG_PORT=5432
- PG_USERNAME="node_user"
- PG_PASSWORD="afolarin014"
- ROUNDS='10'
- MASK_PASSWORD='b7d577192727340d2c7aae6eee97b76a9bedc5e97c01b789162f5d88dae9f403'
- ACCESS_TOKEN_SECRET=
'ce84e15a6f06906cbb453718ab6f7738eeeb9218b67ac532e087cce7b537ae14d824977c7615c76c5cb9d23fba53b077a7e028b785de46603ce4f73d00c57f7e'
- REFRESH_TOKEN_SECRET=
'8cb653734007613b826652614ddde78d34f41fc61c5816d95f1627f06e17e5022c92d80e4e83f5ae292f8d40ca91b7b35d079c8c0c1d369c40a91583a16c3055'
- TEST_BEARER_TOKEN='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJTdGV3YXJ0IiwiYWRtaW4iOnRydWUsImlhdCI6MTY3MzkzNjc1MX0.-9UJc8HQTipj3GS9NN3TAquVooSB8hh84p25prpwrIw

## Sending Request to DB
See the Requirements.md file to understand the tables that exists and how to send and retrieve data from the backend.
