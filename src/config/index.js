import _ from 'lodash';
import dev from './dev';
import prod from './prod';

const DEV = 'development';
const PROD = 'production';

const env = _.get(process, ['env', 'NODE_ENV'], 'development');
let config;

switch(env){
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
