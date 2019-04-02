import app from './app';
import { config } from './config/config';

const server = app.listen(config.port, () => {
  console.log(`Express server listening on port ${config.port}`);
});

module.exports = server;