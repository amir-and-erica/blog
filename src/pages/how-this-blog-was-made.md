---
templateKey: blog-post
title: How we made this blog
description: A quick tutorial on how you can make a blog with Netlify + Gatsby
author: Jimmy Chion
image: /img/howthisblogwasmade.png
smTitle: How to make a blog
smDescription: A quick tutorial about how we made a blog with Netlify + Gatsby
color: purple
date: '2018-07-20T12:00:00-07:00'
tags:
  - netlify
  - gatsby
  - coding
  - design
  - blog
  - github
  - opensource
  - meta
---
## Why a custom blog?

In short, part of our voice is how we present information, and that includes our visual design. Having full control of the code behind the web design allows us to present our voice in the way we think is best for you.

We considered using a variety of other solutions, but in the end, the cost to make something custom (about a week of my time) was worth the control of every aspect of the site. For example, Medium no longer allows custom domains, so this site would be on the URL medium.com/by-the-bay-blog rather than blog.bythebay.cool.

You might consider building your own blog if existing blog platforms don't meet all your needs. Netlify + Gatsby make spinning up a blog pretty easy.

---

_The following is a technical rundown that walks through how to set up a lightweight blog with [Netlify](https://www.netlify.com/) and [Gatsby](https://www.gatsbyjs.org/). I'm assuming you have a beginner-level understanding of web development._

## Intro to Netlify and Gatsby

Netlify and Gatsby are pretty perfect for each other.

Netlify can do a lot. It can host a site on its CDN, continuously build + deploy from Github, manage your DNS, and abstract away common backend functions like forms or identity management. There are a lot of hosting options out there, but Netlify seems readily made for simple React single-page apps that don't need a complicated backend. It pairs well with a static site generator and makes SSL, pre-rendering, and continuous deployment really easy to set up. It's also very fast + free. Its pre-rendering feature is the primary reason we use it to host our main site, [By The Bay](https://www.bythebay.cool/).

Netlify also provides a super simple and customizable CMS (content management system) that allows us to write blog posts in markdown without having to write code.

Gatsby is a static site generator based on React, GraphQL, and the [JAMstack](https://jamstack.org/). You can think of it as a more opinionated Create React App, just for static sites. We only use Gatsby for this blog, but we're fans of Gatsby's creator @KyleAMathew's work and we use his [typography modules](https://github.com/KyleAMathews/typefaces) on npm.

## Creating a blog and deploying it

Here are the resources I found while trying to make this:

* [Starter project by @AustinGreen](<https://github.com/AustinGreen/gatsby-starter-netlify-cms>):
* [Gatsby documentation](https://www.gatsbyjs.org/docs/netlify-cms/) (v1):
* [Netlify documentation](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/) (sans CMS):

@AustinGreen's starter project is good and combines all you need to get a Gatsby project on Netlify and using the Netlify CMS. I wanted to roll my own, so from that, I made a new starter project.

![screenshot of template](/img/preview.png)

* And you can [preview it here](https://gatsby-netlify-cms-blog.netlify.com/).

## Designing our own template

We made a generalizable blog template that can be found here: <https://github.com/cjimmy/gatsby-netlify-cms-blog>

Some notable structural changes:

* **_Styled Components_ instead of inline styles:** Gatsby likes to inline css styles. I much prefer [styled components](https://www.styled-components.com/) which Gatsby neatly has a module for.
* **Removes Sass** – because we already have _one_ CSS module.
* **Adds react-flexbox-grid** – for a grid system. Not necessary for the example, just makes things pretty.
* **Adds fields to frontmatter** – to have an image for the blog post, add authors, and to fill out the <head> tag to make it social media friendly. (The frontmatter of a post is kinda like the meta info + head).
* **Removes tag pages** – and instead queries for the top three most recent posts that share a common tag.

If you navigate to the [repository](https://github.com/cjimmy/gatsby-netlify-cms-blog), and scroll down, you'll see how to get started.

In general, with a Github account, you can quickly deploy a clone of this repo in a few minutes. I added some more steps on how to get authentication and the CMS up and running. Many of the great features of Netlify, such as SSL (https), pre-rendering, and Github authentication are all through their web interface. The template is meant to be a starter for those who are learning web development and need a base.

We'll improve the template as we improve the blog, so stay tuned.
