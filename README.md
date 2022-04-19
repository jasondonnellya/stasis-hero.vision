# Stasis Hero: Vision (In Development)

## What is Stasis Hero: Vision

Stasis Hero Vision is a canon multiplayer text adventure that is set in the world of Stasis Hero.
I have decided to make the code open source as a way to help junior web or game developers and for anyone who is interested in how the project runs.

## Setup

Clone down this repository, open cmd on the root directory and then:

Run
* `npm i`
* `cd server`
* `npm i`

## Running locally

The / root directory is a React App and the /server directory is run using Express and Nodemon.
The purpose of this was to increase performance of the app as much as possible and since there is no routing I decided to avoid using a Server Side Renderer.

### Production

Production is very basic as Express is rigged to serve the static build folder in the root directory so that the API is hosted on the same url while avoiding a proxy.

Simply run `npm run start` in the root directory and node will take care of the rest, however please note that only the server will update if edited and the react app will not update until rebuilt.

Both the app and server will run on `localhost:3000`.

### Development

For running in development you will need to run both the React App and the server folder seperately so that both can rebuild the changes on save.

* Run `npm run dev` in the root directory.
* Open another integrated terminal of the server.
* Run `npm run dev` again in the new terminal.

The app will run on `localhost:3000` while the server will run on `localhost:1337`.
