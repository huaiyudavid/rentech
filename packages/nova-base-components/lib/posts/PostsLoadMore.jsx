import React from 'react';
import { FormattedMessage } from 'react-intl';

const PostsLoadMore = ({loadMore, count, totalCount}) => {
  return (
    <div className="col-md-6 posts-load-more-wrapper">
        <a className="posts-load-more row" onClick={loadMore}>
          <span><FormattedMessage id="posts.load_more"/></span>
          &nbsp;
          {totalCount ? <span className="load-more-count">{`(${count}/${totalCount})`}</span> : null}
        </a>
    </div>
  )
}

PostsLoadMore.displayName = "PostsLoadMore";

module.exports = PostsLoadMore;