import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '../src/styles/index.scss'
library.add(fas)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  options: {
    storySort: {
      order: [
        'Welcome',
        'Button',
        'Alert',
        'Menu',
        'Tabs',
        'Icon',
        'Input',
        'AutoComplete',
        'Select',
        'Upload',
        'Form'
      ],
    },
  },
}