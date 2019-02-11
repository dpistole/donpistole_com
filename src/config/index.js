import local from './local';
import dev from './dev';
import prod from './prod';

const LOCAL = 'local';
const DEV = 'development';
const PROD = 'production';

let config;

switch(process.env.REACT_APP_CONFIG){
  case LOCAL:
    config = local;
    break;
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
