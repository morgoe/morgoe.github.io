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

Input fields, radio buttons, checkboxes, buttons, links, datepickers, button groups, dropdowns, steppers, range sliders, oh my!

Cum socks natoque penatibus et manies dis parturient montes, nascetur ridiculous mus. Aeneas eu leo quad. Pellentesque ornare sem lacinia qual venenatis vestibule. Nullam id dolor id bibh ultricies vehicula ut id elit. Integer poser erat a ante venenatis dapibus postere veilt aliquet.

### Input Fields
The input field is the bread and butter of forms. They’re used for anything that requires custom input from a user, not a selection of predefined options. Usernames, emails, addresses, passwords, websites, phone numbers. 

Make sure you use the correct [HTML5 input](http://robertnyman.com/html5/forms/input-types.html) when using input fields. They fall back gracefully on old browsers, and on new browsers (particularly mobile) they’re great for helping users to enter in the correct type of information.

![keyboards][keyboards]

### Auto-completing Input Fields
This looks similar to a normal text input field, but once you start typing, it suggests possible options you might be after. These suggestions could be open or prescriptive. 

An open input doesn’t limit the user to a set of predefined options, it just tries to get them to their goal faster, without having to type out the entire thing. A great example of this would be Google’s search, or even the address bar in your browser. However, this is challenging to pull off and requires a lot of data. 

A prescriptive input has a limited number of predefined options. When you have potentially hundreds of options (too many to display on-screen at once), an auto-completing input field is a good choice. A good use-case for this would be asking a user’s home country. Once the user starts to type, the input filters down the hundreds of options down to a few relevant ones, allowing the user to easily select the one they’re after. 

This is not a standard HTML input type, so you’ll need to use a plugin like [Chosen](https://harvesthq.github.io/chosen/).

![input-fields][input-fields]

### Tag Input Fields
This input is similar to the above, but allows the user to select more than one option. These may be prescriptive, limiting the user to some predefined options, like _____. Or they may be open, suggesting but not limiting to predefined options - like an email address field. 

![tag-fields][tag-fields]

### Checkboxes
Checkboxes are used when you want the user to select any number (including zero) of predefined options. They can also be used to agree or disagree to a single option.

Checkboxes traditionally are shaped as squares, while radio buttons are circular. Feel free to implement your own styling, but keep the shapes roughly the same or you’ll confuse your users. Also make sure that clicking on the text label will toggle the checkbox or radio button.

![checkboxes][checkboxes]

### Toggles
These are essentially the same as checkboxes, but they resemble a real-life switch, which can be a bit more intuitive. They generally mean ‘On/Off’, not ‘Agree/Disagree’.

Toggles are also a bit easier at a glance to understand, as they’re brightly coloured, and always positive. A ticked checkbox may be negative (eg. “don’t send me promotional emails”), but a green toggle always means ‘enabled’.

Toggles are very easy to implement using pure CSS. See an example _here_*.

![toggles][toggles]

### Radio Buttons
Radio buttons and checkboxes are often erroneously interchanged. While checkboxes allow the user to select any number of predefined options, radio buttons are used to force the user to select exactly one predefined option. Once selected, they can’t be unselected. If you need the user to select exactly 1 or 0 options, you may use a set of radio buttons and include an option “None”.

Radio buttons are ideal when you have a small amount of options, about 4 or 5. Smaller than that, you’re probably better off with button groups. Larger, and you’re better off with a select dropdown. You may also use a radio button when you’ve only got a few options when you need long labels that won’t fit in button groups.

![radio-buttons][radio-buttons]

### Button Groups
Button groups are to radio buttons what toggles are to checkboxes. They’re essentially radio buttons, but they’re a little more intuitive, as they borrow the affordance of real-life buttons better than traditional digital radio buttons do. They’re great for when you only have 2 or 3 options to choose from, all with short one-word labels. 

![button-groups][button-groups]

### Select Dropdowns
If you need the user to select exactly one of many options (too many for a set of radio buttons), then a select dropdown is the ideal choice. However, if you have lots and lots of options (eg. “Select your country”), avoid a select dropdown and use an auto-completing input field instead. 

Select dropdowns hide all of the options from the user until opened, and even when opened, only show some of the options until scrolled. This means that they’re good when the user doesn’t need to know all the options available. If they must know the options they’re **not** selecting, a set of radio buttons is better.

![select-dropdowns][select-dropdowns]

### Multi-select Dropdowns
Where select dropdowns are similar to radio buttons in forcing the user to select exactly one option, multi-select dropdowns are similar to checkboxes in allowing the user to select any number of options. You would use a multi-select dropdown when you have too many possible options to use inline checkboxes. However, as with select dropdowns, if you have lots and lots of options, it’s better to use a tag input field (described below).

Unfortunately, the traditional* HTML multi-select is awful - it doesn’t save any space, and is very unintuitive. A plugin like Bootstrap Multi-select is a much better implementation.

![multiselect-dropdowns][multiselect-dropdowns]

### Range sliders
Range sliders are good when you need the user to enter a number within a minimum or maximum limit. They’re also good when you want the user to *set* the minimum or maximum limit. Range sliders are not precise - you should only use them when “close enough is good enough”.

![range-sliders][range-sliders]

### Steppers
These are a quick and easy way to let users manipulate a number. They’re only useful if the user will be deviating from the default setting by 2 or 3 digits. Any more than that, and this will be much more cumbersome than a simple input field, or even select dropdown.

![steppers][steppers]

### In Conclusion
Cum socks natoque penatibus et manies dis parturient montes, nascetur ridiculous mus. Aeneas eu leo quad. Pellentesque ornare sem lacinia qual venenatis vestibule. Nullam id dolor id bibh ultricies vehicula ut id elit. Integer poser erat a ante venenatis dapibus postere veilt aliquet.

[keyboards]: /assets/images/blog/which-input-when/keyboards.png
[input-fields]: /assets/images/blog/which-input-when/input-fields.png
[tag-fields]: /assets/images/blog/which-input-when/tag-fields.png
[checkboxes]: /assets/images/blog/which-input-when/checkboxes.png
[toggles]: /assets/images/blog/which-input-when/toggles.png
[radio-buttons]: /assets/images/blog/which-input-when/radio-buttons.png
[button-groups]: /assets/images/blog/which-input-when/button-groups.png
[select-dropdowns]: /assets/images/blog/which-input-when/select-dropdowns.png
[multiselect-dropdowns]: /assets/images/blog/which-input-when/multiselect-dropdowns.png
[range-sliders]: /assets/images/blog/which-input-when/range-sliders.png
[steppers]: /assets/images/blog/which-input-when/steppers.png