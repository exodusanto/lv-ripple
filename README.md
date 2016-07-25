# lv-ripple

Material ripple effects for jQuery,
Inspired by **Angular Material Design** , 
this plugin contains the ripple animation for buttons and links

**Angular version** [https://github.com/exodusanto/ng-ripple](https://github.com/exodusanto/ng-ripple)

### Version
0.1.0

### Dependencies
 - jQuery

## Installation
**NPM**
```sh
$ npm install lv-ripple
```
or **Bower**
```sh
$ bower install lvRipple
```

## Examples
Various examples: [https://lv-ripple.antoniodalsie.com/](https://lv-ripple.antoniodalsie.com/)

## Command
Search all ripple inside page
``` js
$.ripple.init();
``` 
Initialize element or a group of elements
``` js
$(selector).ripple();
``` 

**Other command:**

Show all active ripple
``` js
$.ripple.list();
``` 
Enable/Disable element ripple
``` js
$(selector).ripple("enable");
$(selector).ripple("disable");
``` 
Update option of ripple
``` js
$(selector).ripple("update");
``` 
Destroy element ripple
``` js
$(selector).ripple("destroy");
``` 

Save instance and use command
``` js
var instance = $(selector).ripple();
instance.enable();
instance.disable();
instance.destroy();
instance.update(); // update option
instance.element(); // get element
``` 
## Options
Create directive with **Element**:

``` html
<ripple></ripple>
```

or with **Class**:


``` html
<a href="#" class="ripple"></ripple>
```

or with **Attibute**:


``` html
<a href="#" data-ripple></ripple>
```
or

``` html
<a href="#" ripple></ripple>
```

Add material button with **box-shadow**:
``` html
<ripple class="r-raised"></ripple>
```
**Icon** element:
``` html
<ripple class="r-icon"></ripple>
```
**Fab** element:
``` html
<ripple class="r-round r-raised"></ripple>
```
**Disabled ripple**
``` html
<ripple r-disabled></ripple>
```

or **Disabled hover** and **active**
``` html
<ripple clas="r-int-disabled"></ripple>
```
or **Disabled** all **element**:
``` html
<ripple class="disabled"></ripple>
```
Custom **light color**
``` html
<ripple r-light></ripple>
```

Custom **ripple color**
``` html
<ripple r-color="#fff"></ripple>
```
Custom **ripple opacity**
``` html
<ripple r-opacity="#f00"></ripple>
```

Ripple in-front (overink)
``` html
<ripple class="r-overink"></ripple>
```

Prevent ink for specific element and children
``` html
<ripple>
	<div class="r-noink">
		I hate ink
	</div>
	<div>
		I love ink
	</div>
</ripple>
```

## General Options
``` js
    $.ripple.config({
		rippleOpacity: .2,
		rippleDelay: 100
	});
```

**Ripple Opacity** (rippleOpacity):

For all element

**Ripple Incremental** (rippleDelay):

This is the delay of exit animation of ink

## Changelog

Version 0.0.3:

Fix double fire mobile event

Version 0.0.2:

Fix array type (from jQuery to JS)

Version 0.0.1:

Create plugin