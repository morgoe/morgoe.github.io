---
published:     false
layout:        post
date:          2015-01-15
categories:    
- work

title:         "Stackla Event Screens"

thumbnail:     stackla.png
image:         stackla-event-screens.jpg

is_caseStudy:  true
role:          "UX/UI Design, Design Direction & Front-end Dev"
description:   "The Stackla Event Screens were designed with both the creator and viewer as the 'user' in mind. Each Event Screen built upon the lessons taught by the preceding one."
---

While at Stackla, I was part of the team designing and coding up some Event Screens. These would be displayed as part of some live event, at the venue, and display the social media content surrounding the event. 

Each Event Screen:
- had to be customisable for each individual brand and event, with their own logos, hashtags, fonts, colours. It had to look like *their* product, not a Stackla product. Yet despite this, it needed to look really good before they touched it. This forced us to use really minimal styling and CSS that was easy to overwrite. Thank god flat design is in right now.
- needed to be extremely flexible. We often didn’t know screen resolutions, browsers, internet connections (or lack thereof) until the day of the event, and sometimes only afterwards! It also didn’t really matter for the user what these technical details were - what really mattered was how big the screen was, and how far away it was - not whether is was 720 or 1080p!
- needed to encourage social media participation. This was really what Stackla promised to deliver. The screens needed to excite those at the event, prompting them to Instagram or tweet and see their posts immediately appear on the big screen. This would then encourage those at home following the event to participate.

The first Event Screen we created was an offshoot of our web product, and was essentially a live Pinterest board. The key difference with this first screen was that it was completely independent of screen resolution. The user picked the number of columns, and it’d shape everything to fit in whatever screen resolution they had. Even if they customised the screen on their laptop before, they were assured that the screen would look identical on the day. This first screen was nicknamed “Waterfall”.

![Waterfall Event Screen at State of Origin][waterfall]
<figcaption>Waterfall Event Screen at State of Origin</figcaption>

We learned a few lessons from the Waterfall screen, and applied them to our next screen. The primary issue was that when content wasn’t coming through quickly, it was painfully obvious that this was the case. For an event that had a lot of social media content coming in, it was great. But for an event that was slow-moving on social media, the screen looked like a static image - this wasn’t particularly exciting and didn’t prompt people to take part. Our next Event Screen was the “Carousel”, which took 30 or so social media posts and rotated through them. Whenever a new piece of media came in, it was silently inserted and displayed as soon as possible. Again, these adapted to any screen size, and were easily customisable. The “Carousel” screen ended up being used for the Glasgow Commonwealth Games, which was pretty exciting.

![Carousel Event Screen at Glasgow Commonwealth Games][carousel2]
<figcaption>Carousel Event Screen at Glasgow Commonwealth Games</figcaption>

Another big improvement on the Carousel screen was the displaying of text tweets. In all our preceding displays, text tweets were by far the most dull visually. With this, I created a small plugin that emulated Material Design’s “Dynamic Type”. It made the font-size for each tweet as large as possible while still fitting within the screen. And I know what you’ll say - there are a ton of plugins that do this already! The difference was that this was constrained to a set few font-sizes and line-heights. This ensured consistency throughout - font sizes wouldn’t vary from 47 to 38 to 59, but from 48 to 36 to 60. 

![Carousel Event Screen at ANZ Stadium][carousel1]
<figcaption>Carousel Event Screen at ANZ Stadium</figcaption>

The last Event Screen I worked on before leaving was the “Scrollwall”. This was a hybrid of the previous two - it carouselled across the screen, but could show a number of pieces on the screen at once. It was *condensed?* yet dynamic at the same time. At this point, the back-end system of Event Screens had opened up enough that clients could create their own screens from scratch, to their exact specifications. 

![Scrollwall Event Screen][scrollwall]
<figcaption>Scrollwall Event Screen</figcaption>

[waterfall]: /assets/images/work/stackla-event-screens/waterfall.jpg
[carousel1]: /assets/images/work/stackla-event-screens/carousel1.jpg
[carousel2]: /assets/images/work/stackla-event-screens/carousel2.jpg
[scrollwall]: /assets/images/work/stackla-event-screens/scrollwall.gif