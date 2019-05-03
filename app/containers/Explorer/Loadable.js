/**
 *
 * Asynchronously loads the component for Explorer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
