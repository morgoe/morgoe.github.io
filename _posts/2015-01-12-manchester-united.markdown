---
layout:        post
date:          2015-01-12

title:         "Manchester United"
subtitle:      "Social Microsite"

thumbnail:     manchester.png
image:         manchester.jpg

link:          http://social.manutd.com/
role:          "Front-end Dev"
description:   "The site allows fans to see all the content being produced by the club in one place across all their major accounts. It's a national site, serving multiple languages at once."
---

Late last year I read [Axiomatic CSS and Lobotomized Owls](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls) by Heydon Pickering, and I've now had the chance to put this into practice. I recommend reading the article, but the gist of it is this:

    * + * {
        margin-top: 1.5em;
    }

They're the lobotomized owls. 

Basically, anything that follows anything else, will have a margin-top. It's the basis of this site, and I've also used it as the basis in [Deputy 3](http://deputy.com), which is a highly complex web app.

## Benefits

#### Proportional margins

Right here, you've just seen one benefit of this little bit of code. See how the margin between this paragraph and the header above is smaller than the margin between the header and the preceding paragraph? It's following basic Gestalt principles of proximity - the header belongs to this paragraph, not the one before it. I didn't have to do anything there.

I don't have to manually style everything - writing H1's to have a margin-top of 20px and margin-bottom of 10px, buttons to have a different margin (that's also dependent on how big it is), a table has something else, a form has another, a row again. Everything is just done, and everything follows the vertical rhythm of the page.

#### Nesting

Consider a form:

<div class="row">
	<div class="col-sm-6">
		<form class="card padding--small">
			<div class="form-group">
				<label>Username</label>
				<input class="form-control" type="text">
			</div>
			<div class="form-group row">
				<div class="col-sm-6">
					<label>First name</label>
					<input class="form-control" type="text">
				</div>
				<div class="col-sm-6">
					<label>Last name</label>
					<input class="form-control" type="text">
				</div>
			</div>
			<div class="form-group">
				<label>Email address</label>
				<input class="form-control" type="email">
			</div>
			<div class="form-footer">
				<button class="btn-default">Cancel</button>
				<button class="btn-primary">Submit</button>
			</div>
		</form>
	</div>
	<div class="col-sm-6">
		<pre><code>&lt;form class="card padding--small"&gt;
    &lt;div class="form-group"&gt;
    	&lt;label&gt;Username&lt;/label&gt;
    	&lt;input class="form-control" type="text"&gt;
    &lt;/div&gt;
    &lt;div class="form-group row"&gt;
    	&lt;div class="col-sm-6"&gt;
    		&lt;label&gt;First name&lt;/label&gt;
    		&lt;input class="form-control" type="text"&gt;
    	&lt;/div&gt;
    	&lt;div class="col-sm-6"&gt;
    		&lt;label&gt;Last name&lt;/label&gt;
    		&lt;input class="form-control" type="text"&gt;
    	&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
    	&lt;label&gt;Email address&lt;/label&gt;
    	&lt;input class="form-control" type="email"&gt;
    &lt;/div&gt;
    &lt;div class="form-footer"&gt;
    	&lt;button class="btn-default"&gt;Cancel&lt;/button&gt;
    	&lt;button class="btn-primary"&gt;Submit&lt;/button&gt;
    &lt;/div&gt;
&lt;/form&gt;</code></pre>
	</div>
</div>

#### Speed

As I mentioned previously, over at [Deputy](http://deputy.com), we've been redesigning and overhauling the web application. This meant upgrading from Bootstrap 2 to 3 (yes, the lobotomized owls play nicely with Bootstrap), moving the site from a min-width of 960px to a mobile-friendly one, and bringing the entire aesthetic of the product in line with the rest of the company. And to help me rewrite the CSS from scratch, I used Lobotomized Owls. Here's a sneak peak of one of the simpler screens.

![Cat](/images/lobotomized-owls/my-week.jpg)

I want to emphasise that all of the vertical rhythm and spacing, for every single element on that screen, is handled by the owls. Every single aspect of the vertical rhythm of the entire app is set either with `* + *`, `* + .margin-compact` and `* + .margin-none`.

This has been a pretty massive undertaking, but considering how massive it really is, we've done a really incredible job in getting it done so quickly. I have to say in part it's due to these owls, plus a few other helper functions such as:

    .padding {
    	padding: 0.75em 1.5em;
    }
    .padding--large {
    	padding: 1.5em 3em;
    }




## Catches

#### Some things don't want a top-margin

If I'm laying out a grid, I don't want the second column in my grid (or the 3rd, 4th) to have a top-margin. So we need to add:

    .col-xs-1, col-xs-2, ... {
    	margin-top: 0;
    }

Another example is having inline buttons, as in my form above. Sometimes, this is possible to control with certain classes (like .form-footer), having child buttons have no margin top. 

    .form-footer > button {
        margin-top: 0;
    }

But other times this isn't feasable. I haven't found a clean way to work around this that works in all situations. For these times, I have this bit of code:

    .margin-none {
        margin-top: 0;
    }

It can lead to dirty HTML, so if anyone has a good way to solve this issue, please let me know!

#### Sometimes you want a smaller margin

What if you don't want a 24px margin, but just a 12px margin? That's easy with this bit of code:

    * + .margin-compact {
        margin-top: 0.75em;
    }

However, again this can lead to dirty HTML:

<div class="row">
	<div class="col-sm-6">
		<form class="card padding--small">
	        <div class="margin-compact">This</div>
	        <div class="margin-compact">content</div>
	        <div class="margin-compact">is</div>
	        <div class="margin-compact">closer</div>
	        <div class="margin-compact">together</div>
	    </form>
	</div>
	<div class="col-sm-6">
		<pre><code>&lt;form class="card padding--small"&gt;
    &lt;div class="margin-compact"&gt;This&lt;/div&gt;
    &lt;div class="margin-compact"&gt;content&lt;/div&gt;
    &lt;div class="margin-compact"&gt;is&lt;/div&gt;
    &lt;div class="margin-compact"&gt;closer&lt;/div&gt;
    &lt;div class="margin-compact"&gt;together&lt;/div&gt;
&lt;/form&gt;</code></pre>
	</div>
</div>

Notice you don't have to worry about the first div having a `.margin-compact`, because it'll only trigger if it's not the first child. However, it can get messy.



You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
