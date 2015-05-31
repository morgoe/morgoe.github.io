---
layout:        post
date:          2015-05-30
categories:    
- design-solutions
siteNav: blog

title:             "Placeholder Avatars"
description:       "Make your design look good and function well when none of your users have uploaded avatars."

is_live:           true
---

One problem that pops up in almost any product that has user login is that of avatars. Your design mocks look great with smiling photos of Robert Downey Jr. and Scarlett Johansson, but the reality is that not only will most display photos be of poorer quality, but the majority of your users probably won't upload one at all. 

![Before and After][before-after]
<figcaption>With and without user-uploaded display photos. <a href="https://dribbble.com/shots/1818748-Appon-Chat-Widget" target="_blank">Original by Olia Gozha</a>.</figcaption>

So we have two problems here, the first is that of placeholder avatars - what does your design look like if no-one has uploaded any display photos? The second is that of encouraging users to upload a display photo, which I'll cover in my next post. 

### Generic Faces
Facebook solves this problem by using a generic silhouette as a placeholder avatar, displaying either a male or female version depending on how you've set your gender.

![Generic Silhouettes][silhouettes]
<figcaption>Facebook's placeholder avatars.</figcaption>

I don't think this is a great solution for a number of reasons. 

1. If you have two users of the same sex, their placeholder avatars look identical. *Again, let’s assume only 10% of your users actually upload a photo - your design now becomes a lot more homogenous and confusing. 
2. If you weren't already asking the user to set the gender, now that's another option you need them to set. And if you make this setting optional, then what is the default gender? Male? Female? Androgynous alien?
3. Many products (ie. *Tumblr, OKCupid), have a less binary *approach to gender that makes this *approach even more difficult. 

However, Facebook gets away with it because *everyone* uploads a display photo, so this placeholder rarely shows.

### Fun Artwork
This approach is used by Twitter, Slack, Tumblr and I'm sure many more. It has a great benefit of reinforcing branding - Slack, for example, uses variations of their logo.  Looking back at the design in which no-one uploaded a display photo, instead of looking like homogeneous and confusing like in Facebook’s solution, it now looks finished, inviting, and on-brand.

![Slack Before and After][slack]
<figcaption>Slack without any user-uploaded display photos still looks pretty good. <a href="https://slack.com/is/team-communication" target="_blank">Original by Slack</a>.</figcaption>

This approach can be great if each placeholder were unique. However, in Slack’s approach, each placeholder avatar looks like a subtle variation of the last. It's difficult to recognise someone by their placeholder, although it does provide some recognition when placed alongside a few user-uploaded display photos.

### Initials
Gmail, Dropbox and Apple take a third (and my personal favourite) approach - using the user’s initials for the avatar. Some use both first and last name (Apple), others use just the first (Gmail). 

<img src="/assets/images/blog/placeholder-avatars/apple.jpg" width="320">
<figcaption>iOS's placeholder avatars.</figcaption>

Gmail and Dropbox go further, adding a unique colour to each user. Jerry Primrose is a red JP, and Jeremiah Philip is a green JP. This provides a recognisable avatar in isolation, as well as in context. Note that this solution may present problems in non-English countries where people don't always have exactly 2 initials.

<img src="/assets/images/blog/placeholder-avatars/dropbox.png" width="383">
<figcaption>Dropbox's placeholder avatars.</figcaption>

So how do we do it? You don't want to pick any random colour out of the 16,777,216 possible variations because they'll probably look terrible. So we just pick a few that fit the design, no more than 10.

Next, we need to assign each user a colour. This can't be randomly done upon render, because Jerry Primrose must always be a red JP. The solution is no good if you refresh the page and he’s turned green. 

We can solve this problem using *hashes. This lets us avoid creating another database entry for each user, by calculating it on render, but having the same colour each time. Simply hash the full name, do a modulus by x (where x is the number of colours you picked), and then assign that person the colour at the resulting index. 

Try playing around with the example below, then check out the code to see how it's done. 

<p data-height="268" data-theme-id="0" data-slug-hash="QbdQwY" data-default-tab="result" data-user="morgoe" class='codepen'>See the Pen <a href='http://codepen.io/morgoe/pen/QbdQwY/'>Placeholder Avatars</a> by Morgan Carter (<a href='http://codepen.io/morgoe'>@morgoe</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

My next post will detail how to encourage people to upload an avatar. If you've got a problem you'd like to suggest I tackle, please email me at <a href="mailto:morgancarter1@gmail.com">morgancarter1@gmail.com</a>.


[before-after]: /assets/images/blog/placeholder-avatars/before-after.png
[silhouettes]: /assets/images/blog/placeholder-avatars/silhouettes.png
[slack]: /assets/images/blog/placeholder-avatars/slack.png
