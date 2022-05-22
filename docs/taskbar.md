---
title: Creating the Taskbar
--- 

First, make a new div called `taskbar` and put the `taskbariconscenter` div inside of it

```html
<div class="taskbar">
  <div class="taskbariconscenter">
    
  </div>
</div>
```

Now add the css

```css
.taskbar{
  -webkit-backdrop-filter: saturate(3) blur(20px);
  backdrop-filter: saturate(3) blur(20px);
  background-color: rgba(255,255,255,.80);
  width: 100%;
  min-width: 100%;
  position: absolute;
  bottom: 0;
  margin:0;
  padding:0;
  height: 48px;
  display:flex;
  align-items: center;
  justify-content: center;
}

.taskbariconscenter{
  display: flex;
}
```

It should now look like this, and when you use the inspect element you can see the taskbariconscenter div centered:

![image](https://user-images.githubusercontent.com/95918679/168820259-0e859d2d-25b2-4489-acbd-75376bbf83b8.png)

Next, add the icons to the taskbar

```html
<div class="taskbaricons startbutton">
          <img class="taskbariconsimg" src="img/startbutton.png">
        </div>

        <div class="taskbaricons">
          <img class="taskbariconsimg" src="img/search.png">
        </div>

        <div class="taskbaricons">
          <img class="taskbariconsimg" src="img/taskview.png">
        </div>

        <div class="taskbaricons">
          <img class="taskbariconsimg" src="img/chat.png">
        </div>

        <div class="taskbaricons">
          <img class="taskbariconsimg" src="img/explorer.png">
          <div class="center"><div class="taskbariconhighlight"></div></div>
        </div>

        <div class="taskbaricons edgetaskbaricon">
          <img class="taskbariconsimg" src="img/edge.png">
          <div class="center"><div class="taskbariconhighlight"></div></div>
        </div>

        <div class="taskbaricons">
          <img class="taskbariconsimg" src="img/store.ico">
          <div class="center"><div class="taskbariconhighlight"></div></div>
        </div>
</div>
```

### [Now, move on to create the script that brings everything together.](/docs/script)
