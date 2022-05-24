---
title: Creating the script
---

First, add the start menu taskbar icon and start menu to the script

```js
let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
```

Now add the event listener to trigger the start menu to open and close on the click of a button.

```js
startbutton.addEventListener("click", ()=>{

	if(startmenu.style.bottom == "55px"){
		startmenu.style.bottom = "-675px"
	}
	else{
		startmenu.style.bottom = "55px"
	}
})
```

This works good, but there are two problems. First, the start menu starts off open, which is wrong. Second, the start menu only closes if you click the button, and should close if you click anywhere.

To fix the first problem simply change this line of the css inside the start menu section

```css
bottom: 55px;
```

To this line:

```css
bottom: -675px;
```

To solve the second problem, we need to add a mouse up event listener, which listens for any mouse up

```js
window.addEventListener('mouseup', function(e) {
        startmenu.style.bottom = "-675px";
});
```

Great, but now this will close the start menu before the icon can even open it, so we need to exclude the icon from the event listener.

```js
window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".startbutton")){
        startmenu.style.bottom = "-675px";
    }
});
```

The `event.target` sees if it is clicked, and the `!` stands for not, and the `.` in front of startmenu says it is looking for a class name. 
So this is saying if startbutton class is not clicked, then close the start menu.

But now the start menu closes when you click inside of it, so we need to exclude that too

```js
window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".startmenu") && !event.target.closest(".startbutton")){
        startmenu.style.bottom = "-675px";
    }
});
```

The `&&`stands for `and`, so this script is saying if the startmenu and startbutton classes are not clicked, close the start menu.

Great job! You completed the tutorial. I may add more in the future, so stay tuned! (Search menu and Edge coming soon!)
