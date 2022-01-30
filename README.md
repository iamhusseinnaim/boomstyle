# Geting started with LT framework

## namespace 

> each class in LT frame work start with lt-{componenet}

## componenets

### cards 

```html
    <div class="lt-text-center lt-card lt-rtl lt-p-2 lt-radius-25rem lt-bg-white lt-o-f-hidden">
        <img src="./image/rocket.png" alt="" class="lt-card-image " width="200">
        <div class="lt-card-title lt-text-dark">
            title
        </div>

        <p class="lt-card-sub-text"> content </p>
        <button class="lt-btn lt-btn-primary">action </button>
    </div>
```
> used class 

* lt-card : card container
* lt-card-image : card image max width 300px max height 60% 
* lt-card-title : card title 
* lt-card-sub-text : card help text muted 

### Snack Bars

```html
    <div class="lt-snack-bar lt-bg-white lt-border-white">
        <p class="lt-text-danger"> error message !  </p>
        <i class="fi  pointer  fi-rr-rotate-right"></i>
    </div>
```
> used class 

* lt-snack-bar : snack bar container width as low as 300px

```scss
    .lt-snack-bar{
        // style ....
    }
```

_all youn need is the main container_

### tabs 

```html
    <!-- tabs container  -->
    <div class="lt-tabs  ">
        <!-- tabs head  -->
        <ul class="lt-tabs-head ">
            <li class="lt-tab lt-active-tab" data-target="#tab1" >tab 1</li>
            <li class="lt-tab" data-target="#tab2">tab 2</li>
        </ul>

        <!-- tabs body -->
        <div class="lt-tab-body">
            <!-- tab layer -->
            <div class="lt-tab-layer lt-active-layer" id="tab1">
                <h1 class="lt-tab-title"> الصفحة الاولى  </h1>
                <p class="lt-tab-text"> content </p>

                <button class="lt-btn lt-btn-md lt-btn-light"> hellow ! </button>
            </div>
            <!-- tab layer  -->
            <div class="lt-tab-layer" id="tab2">
                <h1 class="lt-tab-title"> الصفحة الثانية   </h1>
                <p class="lt-tab-text"> conteont </p>
            </div>

        </div>

    </div>

```
> used class

* lt-tabs : tabs container !
* lt-tabs-dark dark container 
* lt-tabs-head : tabs header to toggle between tabs 
* lt-tab : tab button 
* lt-active-tab : active tab button
* lt-tab-body : tabs body container 
* lt-tab-layer : tab page content 
* lt-active-layer : active layer 
* lt-tab-title : tab title 
* lt-tab-text: tab text 

> args [data-target=#layerid]

## navigations

## bottom nav (mobile only !warning)

```html

    <nav class="lt-nav-bottom lt-bg-danger ">
        <li class="lt-nav-link active-link"> <i class="material-icons">home</i> <span class="link-text"> home </span> </li>
        <li class="lt-nav-link"> <i class="material-icons">account_circle</i> <span class="link-text"> account </span> </li>
        <li class="lt-nav-link"> <i class="material-icons">local_shipping</i> <span class="link-text"> orders </span> </li>
        <li class="lt-nav-link"> <i class="material-icons">menu</i> <span class="link-text"> menu </span> </li>
    </nav>

```

> used class 

* lt-nav-bottom
* lt-nav-bottom > lt-nav-link
* link-text
* (extra) material-icons ICONS


### drawers 

```html
    <nav class="lt-nav-drawer  lt-right-drawer">
        <div class="lt-nav-drawer-head">
            <img alt="HS" src="./image/dress.jpeg"  class="lt-avatar lt-text-white lt-avatar-lg lt-bg-danger" />
            <div> 
                <span class="lt-text-xs lt-text-dark"> Hussein Naim </span>
            </div>
        </div>

        <ul class="lt-nav-drawer-items">
            <li class="lt-nav-drawer-item lt-active-nav-drawer-item">list item 1</li>
            <li class="lt-nav-drawer-item">list item 2</li>
            <li class="lt-nav-drawer-item">list item 3</li>
            <li class="lt-nav-drawer-item">list item 4</li>
            <li class="lt-nav-drawer-item">list item 5</li>
            <li class="lt-nav-drawer-item">list item 6</li>
            <li class="lt-nav-drawer-item">list item 7</li>
            <li class="lt-nav-drawer-item">list item 8</li>
            <li class="lt-nav-drawer-item">list item 9</li>
            <li class="lt-nav-drawer-item">list item 10</li>
        </ul>

    </nav>

```

> used class 

* lt-nav-drawer : fixed container 
* lt-nav-drawer-head : drawer head 
* lt-nav-drawer-items : list items 
* lt-nav-drawer-item : list item
* lt-active-nav-drawer-item : active link 

### chips

```html
    <div class="lt-chips"> content </div>
```

> used class

* lt-chips 

## use javascripts file (not compressed)
```html
    <script type="module" src="./js/components/{foo}.js"></script>
```