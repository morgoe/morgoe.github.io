---
layout:        post
date:          2015-10-05
categories:    
- coming-soon
siteNav: blog

title:             "Which Input When?"

thumbnail:         blog/scrolling-affordance/thumbnail.jpg
image:             blog/scrolling-affordance/thumbnail.jpg

description:       "Each input type has a very specific use-case, and using the wrong input can be confusing for your users."
---

### Input Fields

The input field is the bread and butter of forms. They’re used for anything that requires custom input from a user, not a selection of predefined options. Usernames, emails, addresses, passwords, websites, phone numbers.

Make sure you use the correct [HTML5 input] when using input fields. They fall back gracefully on old browsers, and on new browsers (particularly mobile), they’re great for helping users to enter in the correct type of information. 

![input-fields][input-fields]
<figcaption>input-fields</figcaption>

### Radio Buttons
Radio buttons are used when a user must select one option out of a few. Once selected, they can’t be unselected - so never use a radio button for an optional input.

Radio buttons are ideal when you have a small amount of options, about 4 or 5. Smaller than that, you’re better off with button groups. Larger, and you’re better off with a select dropdown. You may also use a radio button when you’ve only got a few options when you need long labels that won’t fit in button groups.

Radio buttons traditionally look like circles, as opposed to checkboxes looking like squares. Feel free to implement your own styling, but keep the shapes roughly the same or you’ll confuse your users.

![radio-buttons][radio-buttons]
<figcaption>radio-buttons</figcaption>

### Button Groups

These are essentially radio buttons, but they’re a little more intuitive, as they afford* the buttons we use on a radio in real life better than traditional web radio buttons. They’re great for when you only have 2 or 3 options to choose from, all with short one-word labels. 

![button-groups][button-groups]
<figcaption>button-groups</figcaption>

### Checkboxes

Checkboxes are similar to radio buttons, but with more flexibility. They can be used to answer a single question with ‘yes’ or ‘no’. They can also be used to answer a single question with many answers, or one answer, or no answer at all.

![checkboxes][checkboxes]
<figcaption>checkboxes</figcaption>

### Toggles

Toggles are to checkboxes what button groups are to radio buttons. They’re essentially the same input, but they mimic what we use in real life better. They’re also a bit easier at a glance to understand, as they’re coloured, and always positive. 
A ticked checkbox may sometimes mean ‘disabled’, but a green toggle always means ‘enabled’.

![toggles][toggles]
<figcaption>toggles</figcaption>

### Range sliders

Range sliders are good when you need the user to enter a number within a minimum or maximum limit. They’re also good when you want the user to *set* the minimum or maximum limit. Range sliders are not precise - you should only use them when “close enough is good enough”.

![range-sliders][range-sliders]
<figcaption>range-sliders</figcaption>

### Up/down toggles

These are a quick and easy way to let users manipulate a number. They’re only useful if the user will be deviating from the default setting by 2 or 3 digits. Any more than that, and this will be much more cumbersome than a simple input field, or even select dropdown.

![up-downs][up-downs]
<figcaption>up-downs</figcaption>

### Buttons and Links

Buttons do actions, whereas links navigate you somewhere. Due to flat design, and the rising complexity of software, where navigation and action-doing often converge, buttons and links are often used interchangeably.

![buttons-links][buttons-links]
<figcaption>buttons-links</figcaption>

[button-groups]: /assets/images/blog/which-input-when/button-groups.png
[buttons-links]: /assets/images/blog/which-input-when/buttons-links.png
[checkboxes]: /assets/images/blog/which-input-when/checkboxes.png
[input-fields]: /assets/images/blog/which-input-when/keyboards-2.png
[radio-buttons]: /assets/images/blog/which-input-when/radio-buttons.png
[range-sliders]: /assets/images/blog/which-input-when/range-sliders.png
[toggles]: /assets/images/blog/which-input-when/toggles.png
[up-downs]: /assets/images/blog/which-input-when/up-downs.png