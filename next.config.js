const withSass = require('@zeit/next-sass')

const env = {
  dev: {
    apiBaseUrl: 'http://localhost:4000'
  },
  prod: {
    apiBaseUrl: 'https://uuid.dev'
  }
}

const config = {
  target: 'serverless',
  env: process.env.NODE_ENV === 'development' ? env.dev : env.prod
}

module.exports = withSass(config)