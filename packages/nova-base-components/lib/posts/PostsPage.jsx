import React from 'react';
import Posts from "meteor/nova:posts";

const PostsPage = ({document, currentUser}) => {

  const post = document;
  const htmlBody = {__html: post.htmlBody};

  return (
    <div className="posts-page">

      <Telescope.components.HeadTags url={Posts.getLink(post)}  title={post.title} image={post.thumbnailUrl} />

      <Telescope.components.PostsItem post={post}/>
      <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div>
      <h1>Location: {post.Loc}</h1>
      <h1>Rent End: {post.EndDate ? post.EndDate.toUTCString() : "N/A"}</h1>

      {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

      <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>

    </div>
  )
};

PostsPage.displayName = "PostsPage";

module.exports = PostsPage;
export default PostsPage;
