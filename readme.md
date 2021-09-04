# Gutenberg with custom react app

## How it works
- Create a `webpack.config.js` file and extend the default config to add a new entry point: `client: './src/client.js'`
- Inside blocks.json, specify the new client script using the keyword: `"script"` and point to output of the build file: `"file:./build/client.js"`
- The new `client.js` file must live within the src folder
- The frontend react app can live within the `src` directory and structured as you see fit