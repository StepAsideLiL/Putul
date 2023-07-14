# Putul

If you want to sell or collect action figure, you come to the write place.

### [Live website link](https://putul-client.web.app/)

### Features of this website

1. User authentication with firebase: Login and Registration page.
2. Page routing with React Router.
3. Private (or Protected) routing.
4. REST API endpoint for performing CRUD operation on MongoDB database.
5. Backend with Express and Nodejs.
6. Perform search by product name.
7. Show products added by users and sort them by price.
8. Animation on scroll on the Home page.

## Launch the project in local server.

Clone the repository

### For client (or front end) side

```bash
cd itamae/itamae-client

npm i

npm run dev
```

#### Note:

- You have to change the fetch url to localhost
- Have firebase web app api keys and put them in a `.env.local` file and name them as in `firebase.config.js`.

### For server (or back end) side

```bash
cd itamae/itamae-server

npm i

npm run dev
```

#### Note:

- Your to add an MongoDB username and password in `.env` file as `DB_USER` and `DB_PASS`.
