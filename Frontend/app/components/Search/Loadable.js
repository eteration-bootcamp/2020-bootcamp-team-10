/**
 *
 * Asynchronously loads the component for Search
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
