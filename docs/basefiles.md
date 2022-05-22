---
title: Working on the Base Files
permalink: /basefiles/
--- 

First download the files from the `template` branch on github. It will provide all of the files necessary, aka the images.

Now open the HTML file and add the `<html>` and `<head>` tags. Now link the stylesheet, font, icon, and title by adding these lines inside the `<head>` tag

```html
  <head>
    <link href="https://fonts.cdnfonts.com/css/segoe-ui-variable" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="StartIcon.ico">
    <title>Windows 11 in HTML</title>
   </head>
```

Next, add the `<body>` tag

Now add the auto-start audio file

```html
<audio autoplay>
  <source src="audio/startup.mp3" type="audio/mpeg">
</audio>
```
  
Now at the very end of the body tag, add this line to add the script
  
```html
<script src="script.js"></script>
```

Now add these lines to the css to put the background in and set the font

```css
body{
  background-image: url("img/background.jpg");
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  transition: all .2s ease;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI Variable', sans-serif;
  user-select: none;
}
```

![image](https://user-images.githubusercontent.com/95918679/168868470-19dfc68b-34e9-46d3-bbe2-7987a869034e.png)

### [Now move on to the start menu creation](/docs/startmenu)
