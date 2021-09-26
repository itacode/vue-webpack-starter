const path = require('path');
const dotenv = require('dotenv');

/**
 * Get the application environment
 * @param {Object} options
 * @param {string} options.platform the platform
 * @returns {Object} the application env
 */
function getAppEnv({ platform } = {}) {
  // Adopt this convention https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
  // Inspired by https://pkg.go.dev/github.com/joho/godotenv#readme-precedence-conventions
  if (!platform) {
    platform = 'development';
  }

  dotenv.config({
    path: path.resolve(process.cwd(), `.env.${platform}.local`),
  });
  if (platform != 'test') {
    dotenv.config({
      path: path.resolve(process.cwd(), '.env.local'),
    });
  }
  dotenv.config({
    path: path.resolve(process.cwd(), `.env.${platform}`),
  });

  // The Original .env
  dotenv.config();

  const appEnv = {};
  const regex = /(^VUE_APP_)|(^NODE_ENV$)|(^BASE_URL$)/;
  for (const [key, value] of Object.entries(process.env)) {
    if (regex.test(key)) {
      appEnv[key] = value;
    }
  }

  return appEnv;
}

module.exports = { getAppEnv };
