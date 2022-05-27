---
title: Creating Part 1
---

First, create the edge app div

```html
<div class="edgeapp">

</div>
```

Next, create the header, inside of the app div

```html
<div class="edgeappheader">

</div>
```

Now add the css

```css
.app {
  position: fixed;
  box-shadow: 1px 10px 50px #969696;
  border-radius: 10px;
  border: 1.5px solid #B4B4B4;
  background: var(--fakeMica);
  overflow: hidden;
  width: 60%;
  height: 75%;
  top: 8%;
  left: 20%;
}

.edgeappheader{
  display:flex;
  justify-content: space-between;
  max-height: 38px;
  height: 38px;
  min-height: 38px;
  overflow: hidden;
}
```

It should look like this:

![image](https://user-images.githubusercontent.com/95918679/170703345-081a3f14-cc2f-46e4-8e3d-abdd3379d158.png)

Next, add a headerleftside div and a headerrightside div to the edgeappheader

```html
<div class="headerleftside">
     
</div>
<div class="headerrightside">
  
</div>
```

Next, add the tab to the edge header left div

```html
<img src="img/edge.png">
Edge
<div class="edgetab">
    <img src="img/newtab.png">
    New Tab
</div>
```

Now add the maximize, minimize, and close to the edge header right div

```html
<div class="edgeminimize minimize">
  <img id="edgeminimize" src="img/minimize.png">
</div>
  
  <div class="edgemaximize maximize">
    <img id="edgemaximize" src="img/maximize.png">
  </div>

<div class="edgeclose close">
  <img id="edgeclose" src="img/close.png">
</div>
```

Now add the css

```css
.headerrightside {
  display: flex;
  align-items: center;
}

.headerrightside img{
  width: 15px;
  margin: 15px;
}

.headerleftside {
  font-size: 13px;
  display: flex;
  align-items: center;
}

.headerleftside img{
  width: 20px;
  margin: 0px;
  margin-left: 10px;
  margin-right: 10px;
}
```

Next, add the edge url area div. This will add the icons and url bar.

```html
<div class="edgeurlarea">
  <img class="edgeurlareaicon" src="img/backarrow.svg"> 
  <img class="edgeurlareaicon" src="img/forwardarrow.svg"> 
  <img class="edgeurlareaicon" src="img/reload.png">
  <input type="text" value="https://google.com/?igu=1" class="edgeurlbar edgeURL" ID="URL">
  <img class="edgeurlareaicon" src="img/favorites.png">
  <img class="edgeurlareaicon edgeprofilepicture" src="img/profilepicture.png">
  <img class="edgeurlareaicon" src="img/more.png">
</div>
```

Now add the css

```css
.edgeurlarea{
  background: var(--fakeMica);
  display: flex;
  align-items: center;
  height: 35px;
  max-height: 35px;
  overflow: hidden;
}

.edgeurlarea img{
  width: 20px;
  margin: 10px;
}

.edgeurlbar{
  border: none;
  height: 30px;
  box-shadow: .1px .1px 5px rgb(230, 230, 230);
  border-radius: 3px;
  margin: 15px;
  width: 100%;
  overflow: hidden;
}

.edgeurlbar:focus{
  outline: none;
}
```

Now finally add the iframe (actual website embed)

```html
<iframe class="edgeappIframe appIframe" id="edgeIframe" src="https://google.com/?igu=1"></iframe>
```

Now add the css

```css
.edgeappIframe{
    height: calc(100% - 72px);
    min-height: calc(100% - 72px);
    width: 100%;
    border-width: 0px;
}
```

It should look like this:

![image](https://user-images.githubusercontent.com/95918679/170765482-5443a0ad-8dcc-422a-8bd1-f777dad0675b.png)

And you are done!
