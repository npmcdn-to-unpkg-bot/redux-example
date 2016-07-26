import path from 'path';
import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import App from './components/Counter';
import { renderToString } from 'react-dom/server';

const app = express();
const port = process.env.port || 3000;

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname)));

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Redux Universal Counter Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `
}

function handleRender(req, res) {
  const store = createStore(counterApp);
  const initialState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <App value={initialState} />
    </Provider>
  );
  res.locals.initialState = initialState;
  res.render('index');
  // res.send(renderFullPage(html, initialState));
}

app.use(handleRender);

app.listen(port, () => {
  console.log('Listen on port', port);
});
