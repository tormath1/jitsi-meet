// @flow

import React from 'react';
import { connect } from 'react-redux';

import { InputDialog } from '../../base/dialog';

import AbstractDisplayNamePrompt from './AbstractDisplayNamePrompt';

/**
 * Implements a component to render a display name prompt.
 */
class DisplayNamePrompt extends AbstractDisplayNamePrompt<*> {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     */
    render() {
        return (
            <InputDialog
                contentKey = 'dialog.enterDisplayName'
                onSubmit = { this._onSetDisplayName } />
        );
    }

    _onSetDisplayName: string => boolean;
}

// $FlowExpectedError
export default connect()(DisplayNamePrompt);
