---
layout:                post
date:                  2015-01-17
categories:    
- work
siteNav: work

title:                 "Surgemaker GPS"

thumbnail:             work/surgemaker/thumbnail.gif
image:                 work/surgemaker/cover.png

is_caseStudy:          true

role:                  "Lead Design & Front-end Development"
description:           "SurgeMaker GPS is a B2B SaaS web application that visualizes the improvements made by teams under coaching and helps inform executives' decisions by drawing insights from data."
description_short:     "We designed this complex B2B web application for just $50,000."
---

SurgeMaker GPS is a B2B SaaS web application that visualizes the improvements made by teams under coaching and helps inform executives' decisions by drawing insights from data.

![Division Page][division]
<figcaption>Here we show an overview of all of the teams in the Line of Business, and how they're performing. Onboarding hints show users how to use the app and what insights might be gleaned from the data shown.</figcaption>

Given the large amount of data available, and its very deep hierarchical structure, our first step was to create an information architecture that was intuitive to navigate. We removed as many layers as we could to make the hierarchy as shallow and flexible as possible. 

![Team Page][team]
<figcaption>The Team page shows how the team is progressing over time, and anything the team has been working on recently.</figcaption>

We structured both the data visualizations and the visual design in a way that communicated this hierarchy. Data visualizations began at a “zoomed out” level, and as users dived down into areas of interest, the app would animate in and out in 3D space.

![iPad][ipad-1]
<figcaption>Here the data that tracks the team's performance at a point in time is collected. Users can make notes and mark "impediments" - areas that block progress.</figcaption>

We then began on the complex task of creating the data visualization “widgets,” each with a unique insight. We began with sketching, wireframing, and prototyping, and then I built the widget templates using HTML, CSS, and JavaScript. The templates were then handed over to the development team to hook into the database.

![iPad][ipad-2]

We finally worked on the visual design together, using quirky typefaces and bold (yet colorblind-friendly) colors and allowing teams to select fun, custom-built avatars to express their identities.

[division]: /assets/images/work/surgemaker/division.png
[team]: /assets/images/work/surgemaker/team.gif
[ipad-1]: /assets/images/work/surgemaker/ipad-1.png
[ipad-2]: /assets/images/work/surgemaker/ipad-2.png