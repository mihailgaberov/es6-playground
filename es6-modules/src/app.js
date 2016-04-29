import dummyModule from './modules/dummy-module';

import print, * as utils from './modules/utils';

dummyModule('dummy module loaded...');

console.log(utils.addOdds(4));

console.log(utils.deleteOdds(2));

console.log(print(7));
