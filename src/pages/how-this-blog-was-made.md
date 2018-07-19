---
templateKey: blog-post
title: How this blog was made
description: A quick tutorial on how to make a blog with Netlify + Gatsby
author: Jimmy Chion
smTitle: How to make a blog with Netlify + Gatsby
smDescription: 'A quick tutorial, in use on this site.'
color: darkblue
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

Netlify also provides a super simple and customizable CMS (content management system) that allows us to write blog posts without having to write code. 

Gatsby is a static site generator based on React, GraphQL, and the [JAMstack](https://jamstack.org/). You can think of it as a more opinionated Create React App, just for static sites. We only use Gatsby for this blog, but we're fans of Gatsby's creator, @KyleAMathew's work and use his [typography modules](https://github.com/KyleAMathews/typefaces) on npm.

## Creating a blog + deploying it

Resources I found when trying to make this

* Starter project: <https://github.com/AustinGreen/gatsby-starter-netlify-cms>
* Gatsby documentation (v1, not v2): <https://www.gatsbyjs.org/docs/netlify-cms/>
* Netlify documentation (sans CMS): <https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/>

Despite having a template already out there, it took some work for it to work out of the box, hence why I am writing this.
