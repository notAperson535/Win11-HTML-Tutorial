---
title: Creating the Start Menu
--- 

### [Make sure you have done the base files first](/docs/basefiles/)

First, create the center and startmenu div

```html
<div class="center">
  <div class="startmenu">
    
  </div>
</div>
```

Now style the css so that it is centered and blurred

```css
.center{ /* centers the div */
  display: flex;
  justify-content: center;
}
.startmenu{
  position: absolute; /* makes it movable */
  backdrop-filter: blur(20px); /* blurs the background */
  background-color: rgba(255,255,255,.80); /* makes the background white */
  bottom: 55px; /* positions it */
  height: 90%;
  width: 625px;
  border-radius: 8px; /* rounds the corners */
}
```

It should look like this:

![image](https://user-images.githubusercontent.com/95918679/168805406-ecd1a9a5-ce23-43bb-90c0-44202af81d26.png)

Next, we need to add the start menu contents. First add the divs

```html
<div class="sTop">
  <div class="pinnedlabel"> <!-- Shows the text "Pinned" -->
    Pinned
  </div>
  <div class="allapps"> <!-- Shows the allapps button -->
    <img src="img/allapps.png">
  </div>
</div>
```

Now add the css
```css
.pinnedlabel{
  margin-top: -5px;
  margin-left: 45px;
}

.allapps img{
  height: 20px;
  border-radius: 4px; /* rounds the corners */
  margin-right: 45px;
}
```

Next, add the start icons and center them by creating a grid in the css and html

HTML:
```html
<div class="sAppscontainer">
  <div class="sApps">
    
  </div>
</div
```
CSS:
```css
.sAppscontainer{ /*centers the icons with a display:grid */
  display: grid;
  justify-items: center;
}

.sApps{
  position: absolute;
  display: grid; /* makes it a grid */
  grid-template-columns: auto auto auto auto auto auto; /* 6 columns */
}
```

Now put icons inside of the sApps div. Here is the format for each one. Remember there are more app images in the `img` folder.
```html
<div class="starticons">
  <img src="img/edge.png"> <!-- App image -->
  <p class="startlabels" align="center"> Microsoft Edge </p> <!-- Visible App Name -->
</div>
```

Now it should look something like this:

![image](https://user-images.githubusercontent.com/95918679/168810127-43aafe50-df12-4ad8-b491-c04971201e6f.png)

### [Now move on to create the taskbar](/docs/taskbar)
