import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';
import Posts from "meteor/nova:posts";
import Categories from "meteor/nova:categories";

class CustomPostsItem extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;

    let postClass = "posts-item"; 
    if (post.sticky) postClass += " posts-sticky";

    // ⭐ custom code starts here ⭐
    if (post.color) {
      postClass += " post-"+post.color;
    }
    // ⭐ custom code ends here ⭐

    return (
      <div className="col-md-4">
      <div className={postClass}>
        
          <div className="posts-item-vote">
            <Telescope.components.Vote post={post} currentUser={this.context.currentUser}/>
          </div>

          <div className="posts-item-content">
            
            <div className="posts-top">
              <h3 className="posts-item-title">
                <div>
                  <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
                    {post.title}
                  </Link>
                  {this.renderCategories()}
                </div>
              </h3>
            </div>

            {post.thumbnailUrl ? <Telescope.components.PostsThumbnail post={post}/> : null}
            
            <div className="posts-bottom">
              <div className="posts-item-meta">
                <div>
                  {post.user? <div className="posts-item-user"><Telescope.components.UsersAvatar user={post.user} size="small"/><Telescope.components.UsersName user={post.user}/></div> : null}
                  <div className="posts-item-date"><FormattedRelative value={post.postedAt}/></div>
                  <div className="posts-item-comments">
                    <Link to={Posts.getPageUrl(post)}>
                      <FormattedMessage id="comments.count" values={{count: post.commentCount}}/>
                    </Link>
                  </div>
                
                  {(this.context.currentUser && this.context.currentUser.isAdmin) ?<Telescope.components.PostsStats post={post} />:null}
                </div>
                <div>{this.renderActions()}</div>
                <div>{this.renderCommenters()}</div>
              </div>
            </div>

          </div>
      </div>
      </div>
    )
  }
};
  
CustomPostsItem.propTypes = {
  post: React.PropTypes.object.isRequired
}

CustomPostsItem.contextTypes = {
  currentUser: React.PropTypes.object
};

export default CustomPostsItem;