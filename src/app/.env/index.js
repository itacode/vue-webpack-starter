import { envDevelopment } from './env-development';
import { envProduction } from './env-production';

const nodeEnv = process.env.NODE_ENV;
const env = {};

// Development
if (nodeEnv === 'development') {
  Object.assign(env, envDevelopment);
}

// Production
if (!nodeEnv || nodeEnv === 'production') {
  Object.assign(env, envProduction);
}

export { env };
