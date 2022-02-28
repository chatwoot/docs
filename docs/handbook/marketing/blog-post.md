---
title: "How to add blog posts to Chatwoot?"
sidebar_label: "Blog Posts"
---

We use [Ghost](https://www.ghost.org) to manage our blog.

The Ghost Installation details are as follows:

- **Installation URL**: https://www-internal-blog.chatwoot.com
  - Site Password is shared in 1Password.
- **Admin dashboard**: https://www-internal-blog.chatwoot.com/ghost

Ghost powers both general blog posts and release notes in Chatwoot marketing website.

### Blog Post

To create a blog post, click on "New Post" button on the Ghost dashboard and start writing the content.

**Blog Post checklist:**
- The Post URL is readable, does not contain hashes at the end.
- Tag: `blog` is added to the post.
- A featured image is added. See "Upload post image" section.

### Release Notes

After each release, a release note is added with screenshot/GIFs.

**Release note checklist:**
- Post URL is of the format `/blog/vX-X-X`.
- Tag: `releases` is added to the post.

<img src={require('./images/blog-post/blog-post-meta.png').default} width="300" alt="release-notes" className="d-block" />

## Publishing Checklist

Please make sure that you have verified the following before publishing the content.

- Check the preview of the post to make sure that there are no issues in rendering images and text.
- Post access is made public.
- If any image is used, make sure that the fonts used is `Proxima Nova`.
