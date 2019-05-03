/**
 *
 * Explorer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// @material-ui components
import Button from "@material-ui/core/Button";


import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { tcGroupsRequest } from './actions';
import { makeSelectTcGroups } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'explorer';

class Explorer extends React.Component {

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    const {onFetch} = this.props;
    return(
      <div>
        <Helmet>
          <title>Explorer</title>
          <meta name="description" content="Description of Explorer" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <Button onClick={onFetch}>
          Fetch
      </Button>
      </div>
    )
  }
}

Explorer.propTypes = {
  tcGroups: PropTypes.object,
  onFetch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tcGroups: makeSelectTcGroups(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetch: () => dispatch(tcGroupsRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key, reducer });
const withSaga = useInjectSaga({ key, saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(Explorer);
