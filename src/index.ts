import { PopUpInfo } from './popup.js';
import { ExpandingList } from './expanding-list.js';

customElements.define('popup-info', PopUpInfo);

customElements.define('expanding-list', ExpandingList, { extends: 'ul' });