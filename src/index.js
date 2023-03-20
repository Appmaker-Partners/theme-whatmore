import { registerTheme } from '@appmaker-xyz/core';
import { appmaker } from '@appmaker-xyz/core';

export function activate(params) {   
  console.log('theme-whatmore activated');
}
const Theme = {
  id: 'theme-whatmore',
  activate,  
};
registerTheme(Theme);
export default Theme;
