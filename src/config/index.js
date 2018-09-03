import dev from './dev';
import prod from './prod';

const DEV = 'dev';
const PROD = 'prod';

let config;

switch(process.env){
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
