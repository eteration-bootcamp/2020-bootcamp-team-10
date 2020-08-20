/**
 *
 * Asynchronously loads the component for ProfileCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
