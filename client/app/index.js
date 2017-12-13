import instantsearch from 'instantsearch.js';

import Hit from './widgets/hit/hit.js';
import SearchBox from './widgets/search-box/search-box.js';

import './index.scss';

class InstantSearch {
  constructor() {
    this.instance = instantsearch({
      appId: '',
      apiKey: '',
      indexName: '',
    });

    this._registerWidgets();

    this.instance.start();
  }

  _registerWidgets() {
    this.hitWidget = new Hit(this.instance);
    this.searchWidget = new SearchBox(this.instance);
  }
}

const search = new InstantSearch();
