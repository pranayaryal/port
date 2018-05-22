
import React, { Component } from 'react';

class BlogHeader extends Component {
  render() {
    return (
      <div>
        <section className="section">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                </figure>
            <div class="media-content">
                <div class="content">
                <p>
                    <strong>Pranay</strong> <small>@pranayaryal</small> <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                </div>
                <nav class="level is-mobile">
                <div class="level-left">
                    <a class="level-item">
                    <span class="icon is-small"><i class="fas fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                    <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                    <span class="icon is-small"><i class="fas fa-heart"></i></span>
                    </a>
                </div>
                </nav>
            </div>
        </article>
        </section>
      </div>
    );
  }
}

export default BlogHeader;
