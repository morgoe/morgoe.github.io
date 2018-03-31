---
layout:                work
date:                  2015-02-11
categories:    
- work
siteNav: work

jumpLinks:
  - url: data-viz
    text: "Data, data everywhere"
    icon: results
  - url: animation
    text: "Animation as communication"
    icon: design
  - url: branding
    text: "Unique look-and-feel"
    icon: paint
  - url: permissions
    text: "Perspective and permissions"
    icon: permissions
  - url: iterative
    text: "Iterative design"
    icon: iterative



title:                 "SurgeMaker GPS — Helping large companies move as nimbly as startups"
description:           "SurgeMaker GPS is a B2B SaaS web application that visualizes the improvements made by teams under coaching and helps inform executives' decisions by drawing insights from data."
hero_title:            "Teaching large companies to move like startups"
hero_image:            /assets/images/work/aeroster/hero.png

subhero_title:         "Tracking the results of agile coaching"
subhero_subtitle:      "MFMVP: Massively-Featured Minimum Viable Product"
subhero_description:   "<p>SurgeMaker GPS is the first in a suite of apps by agile coaching company <a href='http://www.gearstream.com/'>GearStream</a>. They approached me to help redesign their web app that visualised the improvements made by teams under coaching and informed executives' decisions by drawing insights from data.</p><p>What started as a 2 month job turned into over 2 years. Designing an enterprise application is very different to designing a B2C app. The feature set expected from an MVP is basically “everything”. This is why so many massive companies are still using software from 10 years ago, because it’s got “everything”.</p><p>So it took us over 2 years to launch an MVP, and it’s the most extensive product I’ve ever worked on. </p>"

thumbnail:             /assets/images/work/surgemaker/thumbnail2.jpg
thumbnail_ratio:       59.375
---

<section class="Page-section" id="launch">
  <h2 class="m-bottom--lg">
    <p>From concept to product launch in 8 weeks</p>
    <p class="font-serif color-muted">Something something subtitle</p>
  </h2>
  <div class="grid">
    <div class="grid-item when-lg-6">
      {% include carousel.html style="left" image1="/assets/images/work/medify/carousel/carousel-1.png" image2="/assets/images/work/medify/carousel/carousel-2.png" image3="/assets/images/work/medify/carousel/carousel-3.png" image4="/assets/images/work/medify/carousel/carousel-4.png" image5="/assets/images/work/medify/carousel/carousel-5.png" description="A timelapse of the designs for the BMAT product. The second-to-last frame shows what we launched with. The last frame shows what we launched with the following year, after completing the product suite unification project." %}
    </div>

    <div class="grid-item when-lg-6 m-top--lg when-lg-m-top--0">
      <p>Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis.</p>
    </div>
  </div>
</section>

{% include image.html url="/assets/images/work/surgemaker/division.png" description="Here we show an overview of all of the teams in the Line of Business, and how they're performing. Onboarding hints show users how to use the app and what insights might be gleaned from the data shown." %}

<!-- ![Division Page][division]
<figcaption>Here we show an overview of all of the teams in the Line of Business, and how they're performing. Onboarding hints show users how to use the app and what insights might be gleaned from the data shown.</figcaption> -->

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