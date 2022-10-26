# sample-pipeline


## Requirements

* Node 16
* Git
* Contentful CLI (only for write access)

## Common setup

Clone the repo and install the dependencies.

```sh
git clone https://github.com/joseamoroso/sample-pipeline
cd sample-pipeline
```

```bash
npm install
```

Create `.env` file and inject your credentials so it looks like this

``` text
TOKEN_SECRET=<YOUR_JWT_SECRET_TOKEN>
API_PORT=3000
JWT_HEADER_NAME=x-jwt-kwy
```

## Start app

To start the express server, run the following

```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.
