import { searchBox } from 'instantsearch.js/es/widgets';

import './search-box.scss';

export default class SearchBox {
  constructor(search) {
    search.addWidget(
      searchBox({
        container: '#search',
      })
    );
  }
}
