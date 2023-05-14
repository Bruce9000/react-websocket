This is a little demonstration of a React UI consuming a websocket to render a table of frequently changing data.

Its a starting point for discussion, can extend it to up the data volume or frequency or UI complexity to explore more potential pain points as needed.

# Server

In the server directory do an `npm i`

Then run the `start` script from package.json.

This starts a web socket server that when contacted will spew forth a list of star wars characters with 26 properties containing random numbers that change every 100ms.

Uses the `ws` package and not much else.

# Client

In the client directory do an `npm i`

Then startup the next js dev server with `dev` script in package.json.

Then hit http://localhost:3000 to see the unstyled action.

Uses Next 13 /app router but only for the most basic page.

Creates a web socket connection to the server, which on receiving a message updates a query cache in React Query.

Then uses a React Query hook to expose the data cleanly back to the UI.

Uses @tanstack's headless table UI to render the most basic table.