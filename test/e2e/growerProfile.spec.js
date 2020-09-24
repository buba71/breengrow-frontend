import { resolve } from 'path';
import test from 'ava';
import { Nuxt, Builder } from 'nuxt';

// Nous gardons une référence à Nuxt pour fermer
// le serveur à la fin du test
let nuxt = null;

// Initialiser Nuxt.js et démarrer l'écoute sur localhost:4000
test.before('Init Nuxt.js', async (t) => {
  const rootDir = resolve(__dirname, '../../');
  let config = {};
  try {
    config = require(resolve(rootDir, 'nuxt.config.js'));
  } catch (e) {}
  config.rootDir = rootDir; // dossier du projet
  config.dev = false; // build de production
  config.mode = 'universal'; // application isomorphique
  config.modules = ['@nuxtjs/auth']; // Set auth module to nuxt build. ### Putain j'y ai passé une journée pour pour cette ligne de code !!  ###.
  nuxt = new Nuxt(config);

  await new Builder(nuxt).build();
  nuxt.listen(4000, '127.0.0.1');
});

// Exemple de test uniquement sur le HTML généré
test('Route /growerProfile is redirected to /login if user not authenticated', async (t) => {
  const context = {};
  const { redirected } = await nuxt.renderRoute(
    '/accounts/growerProfile',
    context
  );

  t.is(redirected.path, '/login');
});

// // Exemple de test via la vérification du DOM
// test('Route / exits and render HTML with CSS applied', async (t) => {
//   // const window = await nuxt.renderAndGetWindow('http://localhost:4000/');
//   // const element = window.document.querySelector('.red');
// });

// Arrêter le serveur Nuxt
test.after('Closing server', (t) => {
  nuxt.close();
});
