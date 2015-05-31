---
layout:        post
date:          2015-06-30
categories:    
- coming-soon
siteNav: blog

title:             "Affordance for Overflowing Content"
description:       "Users know to scroll if there's content cut off at the fold. However this isn't always possible in responsive design, so we need an alternative."
---

One problem that pops up in almost any product that has user login is that of avatars. Your design mocks look great with smiling photos of Robert Downey Jr. and Scarlett Johansson, but the reality is that not only will most display photos be of that quality, but the majority of your users probably won't upload one at all. 

So we have two problems here, the first is that of placeholder avatars - what does your design look like if no-one has uploaded any display photos? The second is that of encouraging users to upload a display photo, which I'll cover in my next post. 

### Generic Faces
Facebook solves this problem by using a generic silhouette as a placeholder avatar. This silhouette is also gender-specific. 

I don't think this is a great solution for a number of reasons. 

1. If you have two male users (or two female), their placeholder avatars look identical. Again, let’s assume only 10% of your users actually upload a photo - your design now becomes a lot more homogenous and confusing. 
2. If you weren't already asking the user to set the gender, now that's another option you need them to set. And if you make this setting optional, then what is the default gender? Make? Female? Androgynous alien?
3. Many products (ie. Tumblr, OkCupid), have a less binary approach to gender. This makes things even more difficult. 

However, Facebook gets away with it because *everyone* uploads a display photo. 

### Gravatar
*Research this*

### Fun Artwork
This approach is used by Twitter, Slack, Tumblr and I'm sure many more. It has a great benefit of reinforcing branding - Slack, for example, uses variations of their logo.  Looking back at your design in which no-one uploaded a display photo, instead of looking like homogeneous and confusing like in Facebook’s solution, it now looks fun, inviting, and *correct.

This approach can be great in some areas. Take Neopets? for example - each piece of art is unique and identifying. This makes it easy to recognise a user by their avatar, even if it's a default. What's their  favourite animal? 

However, in Slack’s approach, each placeholder avatar looks like a subtle variation of the last. You can't recognise someone by their avatar, although it does provide some recognition when placed in context. 

### Initials
Gmail, Dropbox and Apple take a third (and my favourite) approach. If your brand doesn't really fit the Neopets vibe, you can simply use the user’s initials for the avatar. Some use both first and last name (Apple), others use just the first (Gmail). 

Gmail and Dropbox go further, adding a unique colour to each user. Joseph Parry is a red JP, and Joseph Primrose is a green JP. This provides a recognisable avatar in isolation, as well as in context. 
This approach may give some issues in non-English languages*. 

So how do we do it? You don't want to pick any random colour out of the 16,777,216 possible variations because they'll probably look terrible. So we just pick a few, no more than 10.

Next, we need to assign each user a colour. This can't be randomly done upon render, because Joseph Parry needs to always be a red JP. The solution is no good if you refresh the page and he’s now green. 

We can solve this problem using *hashes. We didn't want to create another database entry for each user, so this allows us to calculate it on render, but have the same colour each time. 

Simply hash the full name, do a modulus by x (where x is the number of colours you picked), and then assign that person the colour at the resulting index. 

Try playing around with the example below, then check out  the code to see how it's done. 

My next post will detail how to encourage people to upload an avatar.