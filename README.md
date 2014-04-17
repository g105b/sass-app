SassApp
=======

UI elements for native-feeling mobile web apps, using simple Sass and very little pure JavaScript.


List of elements
----------------

All UI elements described by Apple in their [Human Interface Guidelines](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/Bars.html) are covered here.

### Header:

Header is a global bar fixed to the top of the screen, outside the scrollable viewport. Options include: small, hidden.

* Title - A centralised title for the current state of the app. Optionally clickable to navigate to a page.
* Naviation - A navigation bar that enables navigation through an information hierarchy and, optionally, management of screen contents. Options include: left, right (with optional chevron).


### Footer:

Footer is a global bar fixed to the bottom of the screen, outside the scrollable viewport.

* Nav - A tab bar that gives people the ability to switch between different subtasks, views, or modes in an app.
* Menu - A toolbar containing controls that perform actions related to objects in the screen or view. Button options include: left, right, textual.


### Input elements:

* Search - A clearable text input. Options include: Icon (placed on left of element), prompt (placed above element), scope (see below).
* Search scope - A simplified tab bar used in conjunction with a search element to help users define the scope of a search.
* Input - A single-line input for text, numbers, email addresses or dates or times.
* Textarea - A multi-line text input.

### Controls: 

* Select - Select one or more options from a list.
* Tab bar - Toggle between multiple views by pressing the corresponding tab.
* Carousel - Toggle between multiple views by swiping horizontally. 
* Popover - Provides the ability to contain a whole mobile-sized page within a self-contained view on larger screens.
* Progress - Display the progress of a task or process.
* Slider - allows users to make adjustments to a value or process throughout a range of allowed values.

### Views:

* Main - The main container of an app's content areas.
* List - A list of items in a vertical list. Options include: subtitle (right align or new line), right chevron, numerical badge, checkbox, radiobox.
* Grid - A list of items in a grid view.
* Filler - A full-page container that can be set to optionally be raised in front of the footer or header.
* Sheet - A container that takes up the majority of the screen, sliding up from the bottom. Works as a modal container, but can be ignored by tapping outside of the sheet.
* Modal - A container that presents the user with a modal dialog box. Options: spinner (with no buttons or cancel button) alert (with OK button), choice (two or three options), prompt (text input).


Usage
-----

To begin using Sass-App, you need to include two files in your project:

1. Sass-App.scss
2. Sass-App.js

There files and the files they import/require are located within `/Style` and `/Script` respecfully. All source files are to be compiled into the public web root -- the `/www` directory for this project.


PHP.Gt
------

This project is built using [PHP.Gt](http://php.gt), which supports compilation of JavaScript and Sass as standard. Check out the PageView directory of this project to see what HTML is required to make this all work, bound together with the help of PHP.Gt.