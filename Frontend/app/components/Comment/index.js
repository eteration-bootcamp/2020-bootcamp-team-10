/**
 *
 * Comment
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';
import './style.css';

class CommentMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false,
      addComment: [],
    };

    // this.addComment = this.addComment.bind(this);
  }

  render() {
    return (
      <div className="comment-container">
        <div className="App container bg-light shadow">
          <div className="row">
            <div className="col-4  pt-3 border-right">
              <h6>Say something about React</h6>
              <CommentForm addComment={this.addComment} />
            </div>
            <div className="col-8  pt-3 bg-white">
              <CommentList
                loading={this.state.loading}
                comments={this.state.comments}
              />
              <Comment />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentMain.propTypes = {};

export default memo(CommentMain);
