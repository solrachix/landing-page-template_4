const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  future: {
    webpack5: true
  },
  target: 'serverless', // produzirá páginas independentes que não requerem um servidor monolítico. É compatível apenas com o next start ou plataformas de implantação Serverless (como ZEIT Now) - você não pode usar a API do servidor personalizado.
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
