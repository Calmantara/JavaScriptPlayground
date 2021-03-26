# javascript-functionapp

## About

This project is simulation for Node function app to store stream data from event hub.

### Prerequisites

- NodeJS
- Docker

### Installing

Run docker postgres in port 5432

```
docker run -itd --name mypostgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres -N 500
```

Run _index.js_

```
node index.js
```
