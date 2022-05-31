---
title: Creating the Search Menu
---

First, create another div with a `center` class and a div with a `searchmenu` class inside of it. This will go below but not inside the startmenu div

```html
<div class="center">
	
	<div class="searchmenu">
	
	</div>

</div>
```

Next, create a search bar

```html
<div class="searchbar">
  <img src="img/search.png">
  <input type="text">
</div>
```

Next, add the base css for the search menu

```css
.searchmenu{
  position: absolute;
  backdrop-filter: blur(20px);
  background-color: rgba(255,255,255,.80);
  height: 90%;
  width: 625px;
  transition: all .2s cubic-bezier(.79,.14,.15,.86);
  border-radius: 8px; 
}

.searchbar {
  margin: 25px 20px 0px 20px; /* top, right, bottom, left */
  height: 38px;
  width: 580px;
  background-color: white;
  border-radius: 5px;
  border: 2px solid lightgray;
  border-bottom: 2px solid var(--accent-color);
  display: flex;
  align-items: center;
  overflow: hidden;
}
```

Next, create a topapps header div and the topapps div

```html
<div class="searchheader">
  Top Apps
</div>

<div class="searchtopapps">

</div>
```

now the css,

```css
.searchheader{
  font-weight: 600;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 15px;
}
```

and add up to 5 apps in the topapps section using this format, replacing ICON and NAME with the appropriate values.

```html
<div class="searchtopapp">
    <img class="searchtopappslabel" src="ICON">
    <p class="searchtopappslabel" align="center">NAME</p>
</div>
```

now add the css for those apps

```css
.searchtopapps{
  margin: 0 20px;
  display: flex;
}

.searchtopappslabel{
  margin: 0px;
  margin-top: 5px;
}
```

It should now look like this:

![image](https://user-images.githubusercontent.com/95918679/170092773-d37991aa-3592-47f3-8fa5-7d4e7b9ad291.png)

Next, add another search header, and put "Quick Searches" inside of it

```html
<div class="searchheader">
    Quick Searches
</div>
```

Next, create the quicksearches section (not inside of the searchheader)

```html
<div class="quicksearches">

</div>
```

and add the css

```css
.quicksearches{
  margin: 15px 15px;
  width: 580px;
}
```

Now put up to five of your favorite searches into the quicksearches section using this format

```html
<div class="quicksearch">
  (Image Optional) TEXT
</div>
```

add the css

```css
.quicksearch{
  padding: 15px 0px;
  display: flex;
  align-items: center;
}
```

It should look like this:

![image](https://user-images.githubusercontent.com/95918679/170092584-583828fe-7b8c-46b1-a34c-27788f367fa6.png)

Now we have to add some more code to the script

```js
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
```

and now we have to do the same thing we did for the start menu

we need to change this line in the searchmenu css section

```css
bottom: 55px;
```

To this line:

```css
bottom: -675px;
```

now go back to the script and add these lines

```js
searchbutton.addEventListener("click", ()=>{

	if(searchmenu.style.bottom == "55px"){
		searchmenu.style.bottom = "-675px"
	}
	else{
		searchmenu.style.bottom = "55px"
	}
})

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".searchmenu") && !event.target.closest(".searchbutton")){
        searchmenu.style.bottom = "-675px";
    }
});
```

And that's it! Next is creating the edge app. (Coming soon)
