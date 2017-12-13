import { hits } from 'instantsearch.js/es/widgets';

import template from './hit.html';
import './hit.scss';

export default class Hit {
  constructor(search) {
    search.addWidget(
      hits({
        container: '#results',
        templates: {
          empty: '',
          item: template,
        },
      })
    );
  }
}
