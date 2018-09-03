import dev from './dev';
import prod from './prod';

const DEV = 'development';
const PROD = 'production';

let config;

switch(process.env.NODE_ENV){
  case DEV:
    config = dev;
    break;
  case PROD:
    config = prod;
    break;
  default:
    config = dev;
}

export default config;
