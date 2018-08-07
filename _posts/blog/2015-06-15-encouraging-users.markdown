---
layout:        post
date:          2015-09-07
categories:    
- design-solutions
siteNav: blog

title:             "Encouraging Users to Upload Photos"

thumbnail:         blog/encouraging-upload/thumbnail.png
image:             blog/encouraging-upload/thumbnail.png

description:       "Lessen the problem of placeholder avatars by encouraging your users to upload a photo in the first place."
---

In the last post, we covered how to create beautiful [placeholder avatars](/design-solutions/placeholder-avatars/). Now let's focus on the other half of the problem - encouraging our users to actually upload a display photo.

## Reasons and rewards

Whenever you’re asking something of a user, it’s always helpful to give them a reason (why the user should give the data) and a reward (what benefits it will bring the user). 

On social networks like Facebook or LinkedIn, almost everyone uploads a display photo. It’s no wonder they don’t bother having nice placeholder avatars.

A display photo on Facebook is a way for users to express themselves, and users are rewarded for uploading a display photo with likes and comments from other users - social validation.

<div class="m-top--sm">
	{% include image.html style="full" url="/assets/images/blog/encouraging-upload/isabelfoo-socialmedia.png" width="400" description="<a href='https://dribbble.com/shots/1683533-Social-Media'>Social Media</a> by Isabel Foo." %}
</div>

A display photo on LinkedIn is important for users to identify themselves to potential connections, and to project a certain image. Users are rewarded when uploading a display photo, again with likes, but more importantly, exposure to potential business relationships.

Reasons and rewards don't need to be so complex. Even a bit of supporting text (eg. *“Adding a photo helps your friends identify you.”*) goes a long way.

## Use their existing social display photos

You can take advantage of the work the social media giants have done by simply grabbing the display photo from one of the user’s social networks. Many products now offer social logins, or allow you to connect your social networks after creating an account. If this suits your product, it’s a really simple way to practically guarantee getting a display photo for every user.

Learn how to do this for [Facebook](https://developers.facebook.com/docs/graph-api/reference/v2.4/user/picture) and [Twitter](https://dev.twitter.com/overview/general/user-profile-images-and-banners).

## Make it part of onboarding

A number of products include this as a step in the onboarding process, often making it difficult to skip or hard to ignore.

<div class="m-top--sm">
	{% include image.html style="full" url="/assets/images/blog/encouraging-upload/okcupid.png" description="OKCupid makes adding a display photo hard to ignore. It would probably help to also add some supporting copy, like “profiles with photos get XX% more views”." %}
</div>

However, this can be a tradeoff. Make it too easy to skip, and some users will. Make it too hard, and users might get irritated and abandon the product before completing the onboarding.

## Entice them

Someone commented on the previous blog post: if you put all this work into making the placeholder avatars not only beautiful, but uniquely identifying, then won't users be discouraged from uploading a photo? Yes, but that's assuming the user sees their beautiful, uniquely identifying avatar.

Both Dropbox and Gmail cleverly show a non-identifying placeholder to the user, and another to other the user's connections. 

<div class="m-top--sm">
	{% include image.html style="full" url="/assets/images/blog/placeholder-avatars/dropbox.png" width="320" description="Dropbox shows these placeholder avatars to the user's connections." %}
</div>
<div class="m-top--sm">
	{% include image.html style="full" url="/assets/images/blog/encouraging-upload/faceholder.gif" width="298" description="Dropbox shows this placeholder avatar, or 'Faceholder', to the user. <a href='https://dribbble.com/shots/1972358-Faceholder'>Sourced from Dribbble</a>." %}
</div>

Daniel Eden of Dropbox said:

<blockquote class="blockquote m-top--sm">
	<p>We ran an experiment to see what would encourage the most profile picture uploads - this character, or the user’s initials in a circle…the faceholder character significantly outperformed the initials.</p>

	<p class="margin--sm">The character lends itself a few things:</p>

	<ul>
		<li>It’s super cute, so people want to interact with it</li>
		<li>Unlike the initials, it’s clearly not a representation of the user’s true identity</li>
		<li>It looks like a placeholder. The dotted border just screams “change me!”</li>
	</ul>
</blockquote>

## Gravatar

Gravatar is interesting - and according to [UserOnboard](http://useronboard.com/)’s Samuel Hulick, *“painfully underused”*. Gravatar is a Globally Recognised Avatar - if a user has an account on Gravatar, and you have their email address, then you also have access to a display photo without the user needing to do anything within your product.

Many blog platforms use Gravatar to import a display photo with no effort from the user. However, this requires the user to have a Gravatar account already, and depending on who your product is aimed at, this could be only a fraction of your user base.

## All of the above

None of these solutions are necessarily standalone - you could potentially implement all of them. Which ones work best for your design is ultimately your decision. The aim of this blog is not to tell you how to solve your design problems, but to give you a few tried-and-tested options to start with, and for you to take it from there.

[like]: /assets/images/blog/encouraging-upload/like.png
[okcupid]: /assets/images/blog/encouraging-upload/okcupid.png