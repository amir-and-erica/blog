---
templateKey: blog-post
title: How this blog was made
description: A quick tutorial on how to make a blog with Netlify + Gatsby
author: Jimmy Chion
smTitle: How to make a blog with Netlify + Gatsby
smDescription: 'A quick tutorial, in use on this site.'
color: blue
date: '2018-07-18T15:54:03-07:00'
tags:
  - netlify
  - gatsby
  - coding
  - design
  - blog
---
_This is going to be a technical blog post that goes through how to set up a lightweight blog with [Netlify](https://www.netlify.com/) and [Gatsby](https://www.gatsbyjs.org/). I'm assuming you have a beginner-level understanding of web development._

## Intro to Netlify + Gatsby

Netlify does a lot. It can host a site on its CDN, continuously build + deploy from Github, manage your DNS, and abstract away common backend functions like forms or identity management. There are a lot of hosting options out there, but Netlify seems readily made for simple React single-page apps that don't need a complicated backend. In other words, it pairs well with a static site generator and makes SSL, pre-rendering, and continuous deployment really easy to set up. It's also very fast + free. Its pre-rendering feature is the primary reason we use it to host our main site, [By The Bay](https://www.bythebay.cool/).

Netlify also provides a super simple and customizable CMS (content management system) that allows us to write blog posts in markdown without having to write code.

Gatsby is a static site generator based on React, GraphQL, and the [JAMstack](https://jamstack.org/). You can think of it as a more opinionated Create React App, just for static sites. We only use Gatsby for this blog, but we're fans of Gatsby's creator, @KyleAMathew's work and use his [typography modules](https://github.com/KyleAMathews/typefaces) on npm.

## Creating a blog + deploying it

Resources I found when trying to make this

* **Starter project**: <https://github.com/AustinGreen/gatsby-starter-netlify-cms>
* **Gatsby documentation** (v1, not v2): <https://www.gatsbyjs.org/docs/netlify-cms/>
* **Netlify documentation** (sans CMS): <https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/>

@AustinGreen's starter project is good and combines all you need to get a Gatsby project on Netlify and using the Netlify CMS. I wanted to roll my own, so from that, I made a new starter project.

![screenshot of template](/img/preview.png)

* And you can [preview here](https://gatsby-netlify-cms-blog.netlify.com/).

## Our own template

We made a generalizable blog template that can be found here: <https://github.com/cjimmy/gatsby-netlify-cms-blog>


Some notable structural changes:

* **_Styled Components_ instead of inline styles:** Gatsby likes to inline css styles. I much prefer [styled components](https://www.styled-components.com/) which Gatsby neatly has a module for.
* **Removes Sass** – because we already have _one_ CSS module.
* **Adds react-flexbox-grid** – for a grid system. Not necessary for the example, just makes things pretty.
* **Adds fields to frontmatter** – to have an image for the blog post, add authors, and to fill out the <head> tag to make it social media friendly. (The frontmatter of a post is kinda like the meta info + head).
* **Removes tag pages** – and instead queries for the top 3 most recent posts that share a common tag.

If you navigate to the [repository](https://github.com/cjimmy/gatsby-netlify-cms-blog), and scroll down, you'll see how to get started.

In general, with a Github account, you can quickly deploy a clone of this repo in a few minutes. I add some more steps on how to get authentication and the CMS up and running. Many of the great features of Netlify, such as SSL(https), prerendering, and Github authentication are all through their web interface. The template is meant to be a starter for those to who are learning web development and need a base.

The template will continue to improve as we improve this blog, so stay tuned.
