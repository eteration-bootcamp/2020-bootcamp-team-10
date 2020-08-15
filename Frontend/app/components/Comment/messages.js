/*
 * Comment Messages
 *
 * This contains all the text for the Comment component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Comment';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Comment component!',
  },
});
