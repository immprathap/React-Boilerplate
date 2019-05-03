/**
 *
 * Explorer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector, createSelector } from 'reselect';
import { compose } from 'redux';

import { toJS } from 'immutable';
// @material-ui components
import Button from "@material-ui/core/Button";

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { tcGroupsRequest } from './actions';
import makeSelectExplorer,{ makeSelectTcGroups } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Explorer extends React.PureComponent {
  handleFetch = () => {
    const { dispatch } = this.props;
    dispatch(tcGroupsRequest());
  }

  handlePrint = () => {
    console.log(this.props.tcGroups);
  }

  componentWillReceiveProps() {
    console.log("component update");
  }

  render() {
    //const {onFetch} = this.props;
    console.log("render",this.props);
    return(
      <div>
        <Helmet>
          <title>Explorer</title>
          <meta name="description" content="Description of Explorer" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <Button onClick={this.handleFetch}>
          Fetch
    </Button>
    <Button onClick={this.handlePrint}>
          Print
    </Button>
      </div>
    )
  }
}

Explorer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tcGroups: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tcGroups: makeSelectTcGroups(),
  explorerState: makeSelectExplorer()
});

/*const mapStateToProps = state => {
  console.log('state in mapstatetoprops',state.get("explorer"));
  return {
    tcGroups: state.tcGroups,

  }
}*/

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'explorer', reducer });
const withSaga = injectSaga({ key: 'explorer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Explorer);
