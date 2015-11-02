---
layout:        post
date:          2015-10-28
categories:    
- coming-soon
siteNav: blog

title:             "Prototypes: From Low to High Fidelity"

thumbnail:         blog/prototypes/thumbnail.png
image:             blog/prototypes/thumbnail.png

description:       "Prototyping allows us to test out our ideas quickly and easily, without going through the entire development process each time."
---

Prototyping is one of the most important aspects of design. It allows us a chance to test out our ideas quickly and easily, without going through the entire development process each time. It allows us to test wild ideas early on, and be confident that the ideas that make it to production are tried and true.

The movement from low- to high-fidelity prototypes is like moving from a macro (zoomed out) to a micro (zoomed in) level. We start off testing and iterating on the overarching design decisions first, before diving deeper and deeper into the details. While it can be tempting to jump into Photoshop or Sketch at the beginning of any new design project, it’s important to sketch out your ideas first. After getting too immersed in a product, the prototyping progression is a great way to again see the forest, not the trees.

### 5 Dimensions of Fidelity

There are five ways to measure the fidelity of a prototype. As fidelity increases, these five dimensions might not progress equally (a medium-fidelity prototype is not necessarily at a medium-level for each dimension, but may be at a high-level for some and a low-level for others). 

##### Level of visual refinement

How similar does the prototype look to the final product? A low-fidelity prototype might just be hand-drawn sketch, while a high-fidelity prototype will be pixel-perfect, looking almost indistinguishable from the real thing.

##### Breadth of functionality

How much functionality does the prototype support? A low-fidelity prototype will focus on just the most important tasks, while a high-fidelity prototype will support more minor tasks (eg. resetting your password).

##### Depth of functionality

How much of each feature is prototyped? A low-fidelity prototype will take you from page to page, showing you the general user flow with typical data pre-filled. A high-fidelity prototype will allow you to input your own data, and see how varying the input affects the output.

##### Richness of interactivity

How much interactivity does the prototype have? A low-fidelity prototype might be very simple, providing no feedback when a user interacts with it. A high-fidelity prototype will take into account animations, hover states, form validation, and all the little back-and-forths between user and product.

##### Richness of data model

How rich is the data your prototype uses? A low-fidelity prototype will use a limited, typical data set, showcasing the most common use cases. A high-fidelity prototype will showcase edge-cases such as extra-long usernames (you might truncate them with an ellipsis), missing data (you might provide [placeholder avatars](/design-solutions/placeholder-avatars/), first-time use (like empty state pages), or extreme amounts of data (you might use pagination or filtering).

### Low Fidelity

A low-fidelity prototype looks at your product on a macro scale. Here, you focus on the most important tasks, and then only in a summarised format. You’re not worried about feedback, interactivity or edge-cases.

The reason we start with low-fidelity prototypes (and the reason we keep them looking like sketches) is because we want to direct our focus on navigation, user flow, and which features will be included. If we start including micro things like fonts or colours at this stage, three problems arise:

1. Your client or boss might think this is what the final product will look like. Keeping everything looking sketchy makes it clear that this is **not** a pixel-perfect representation.
2. Your client or boss (or you) will start to focus on these micro aspects, which aren’t important at this stage. It’s completely irrelevant to the user flow what font you’re using, so including it will only distract.
3. Once you spend hours perfecting the visual aspect of a design, you become attached to it, and it can be difficult to let go of a bad decision. It’s much easier to let go if the entire prototype only took a few minutes to sketch.
4. A bad decision can seem like a good decision. In the past, I composed and mixed my own music. Whenever I composed, I would always make the instruments sound bad. If I made the instruments sound incredible, then even if I wrote shitty music, it would sound good. If the music still sounded good when the mix was bad, it meant it’d sound great when the mix was good. Similarly, investing a lot early on into the visual side of a design can skew your perspective. If the design looks good and is easy to understand as a sketch, then it’ll look really good and be really easy to understand once you reach the end of the design process.

Many people only use a product like [InVision](http://invisionapp.com/) as they move to more high-fidelity prototypes, but I find it most useful at this stage. It’s really important to be able to visualise how the user moves from one screen to the next, and not so important what each screen looks like in isolation.

![Low Fidelity Prototype][low-fidelity]
<figcaption>Sourced from <a href="https://www.youtube.com/watch?v=yafaGNFu8Eg">Low fidelity prototype testing of the EE app</a>.</figcaption>

Questions you should be asking at this stage:

- Which elements must be included on this screen, and which might I be able to remove?
- Is it clear how to navigate to each screen?
- How can I best navigate through the information architecture?

### Medium Fidelity

It can be hard to define a medium-fidelity prototype. It might be mid-level on each of the five dimensions, or it might be low on some dimensions and high on others. It might go deep into the functionality of the most important features, but still ignore the minor features. Which dimensions you focus on first ultimately depends on the project’s needs.

At this stage, you’re primarily focused on the layout of each individual page. You know how this page fits into the overall navigation, and you’re discussing where to place each element on the page (even though you don’t know what each element will ultimately look like).

![Medium Fidelity Prototype][medium-fidelity]
<figcaption>Sourced from <a href="https://support.mybalsamiq.com/projects/examples/grid">Balsamiq</a>.</figcaption>

Animations generally come into play at this stage. Once you start to lay out each page, you can then think about how to transition from one page to another. It can be confusing to instantly jump from one state to another, so animations can help communicate how the user moves through the app. The [Material Design Guidelines](https://www.google.com/design/spec/animation/meaningful-transitions.html) provide some great information on meaningful transitions.

Questions you should be asking at this stage:

- What is the most important element on this page, and how can I give it priority in the hierarchy?
- How can I convey the transition from this page to another?
- What colour should this button be?
- Should I use a select dropdown or radio buttons for this input?

### High Fidelity

The high-fidelity prototype focuses on the product at a micro scale. The big decisions have been made, and the high-fidelity prototype is about ensuring that your design visually conveys the product’s functionality. You’ll start to think about how to give your design affordance, focusing on colours and contrast, and looking into all the tiny interactions. If you’re using animations, you’ll start to nail them down at this stage.

At this stage, a screenshot of the high-fidelity prototype will look identical to a screenshot of the final thing.

![High Fidelity Prototype][high-fidelity]

Questions you should be asking at this stage:

- People aren’t realising this button is clickable, should we try it with a gradient?
- Can we increase the contrast between these colours to make it easier to read?
- What does this element look like on hover?
- What does this look like with incomplete data?

### Prototyping in Practice

In the real-world (and especially in the startup-world), you might not get to follow this process so clearly, and the lines between low-, medium- and high-fidelity can become blurred. That’s ok. Even spending 10 minutes sketching out your design and discussing it with someone else before diving into Photoshop can be really beneficial.

Finally, at some stage you need to move from prototype to real code. Once you reach a certain height in fidelity, it can become much faster to change things in code rather than in Photoshop or Sketch. By no means does reaching this stage mean that the design process is over. If you know how to code, then designing in the browser at this stage is great, and prevents a lot of back-and-forth between designers and developers. If you don’t, prototyping becomes even more important - a few minutes of your time spent prototyping could save days of work for your developer.

[low-fidelity]: /assets/images/blog/prototypes/low-fidelity.jpg
[medium-fidelity]: /assets/images/blog/prototypes/medium-fidelity.png
[high-fidelity]: /assets/images/blog/prototypes/high-fidelity.gif