import React from 'react';
import Posts from "meteor/nova:posts";

const PostsThumbnail = ({post}) => {
  return (
    <a className="posts-thumbnail-single" href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
      <span><img src={Posts.getThumbnailUrl(post)} /></span>
    </a>
  )
}

PostsThumbnail.displayName = "PostsThumbnail";

module.exports = PostsThumbnail;
export default PostsThumbnail;