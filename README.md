# components 

> tabs 

```html
     <div class="tabs-h  rtl">
            <div class="tabs-header-h shadow bg-white">
              <a href="#account-settings" class=" account-settings tab-nav bg-white"> الاعدادت  </a>
              <a href="#profile" class=" profile tab-nav bg-white"> الملف الشخصي </a>
              <a href="#orders" class=" orders tab-nav bg-white"> طلباتك  </a>
              <a href="#password" class=" password tab-nav bg-white"> كلمة المرور   </a>
            </div>

            <div class="tabs-content   ">
              <div id="account-settings" class='tab bg-white w-100'>

                <form action=""  class="row w-100 p-3">
                  <div class="form-group col-12 col-lg-6">
                    <label for=""> الاسم الاول  </label>
                    <input type="text" class="form-control" name="" value="حسين " id="" aria-describedby="helpId" placeholder="الاسم الاول ">
                  </div>
                  <div class="form-group col-12 col-lg-6">
                    <label for=""> الاسم الاخير  </label>
                    <input type="text" class="form-control" name="" value="نعيم " id="" aria-describedby="helpId" placeholder="الاسم الاول ">
                  </div>
                  <div class="form-group col-12">
                    <label for=""> البريد الألكتروني  </label>
                    <input type="email" class="form-control" value="boom@boomiraq.com" name="" id="" aria-describedby="emailHelpId" placeholder="">
                  </div>
                  <div class="form-group col-12">
                    <label for=""> رقم الهاتف  </label>
                    <input type="tel" class="form-control" value="07722506665" name="" id="" aria-describedby="emailHelpId" placeholder="">
                  </div>

                  <div class="form-group col-12 col-lg-6">
                    <label for=""> الجنس  </label>
                    <select class="form-control" name="" id="">
                      <option> ذكر </option>
                      <option> انثى </option>
                    </select>
                  </div>
                  
                  <div class="form-group col-12 col-lg-6">
                    <label for=""> المحافظة   </label>
                    <select class="form-control" name="" id="">
                      <option> بصرة </option>
                      <option> بغداد </option>
                    </select>
                  </div>

                  <div class="form-group col-12">
                    <button class="btn btn-primary  mt-3 "> حفظ </button>
                  </div>

                </form>


              </div>
              <div id="profile" class='tab row w-100'>
                <div class="col-lg-2 col-12 justify-content-center align-items-center d-flex">
                  <img class="circle"  style="max-width: 200px;margin:auto;" src="../image/avatars/5149016-wizard/png/005-wizard.png" alt="">
                </div>
                <div class="card-body col-12 p-3 d-flex justify-content-center flex-column col-lg-6">
                  <h3 class="card-title text-muted"> حسين نعيم  </h4>
                    <h5 class="card-text text-muted"> البصرة  </h5>
                  <span class="card-text text-muted"> 07722506665 </span>
                  <span class="card-text text-muted"> boom@boom.iraq.com </span>
                  
                </div>

              </div>

               <div id="orders" class='tab d-flex align-items-center'>
                <h1 class="text-center h-100  w-100 text-muted"> لا يوجد طلبات  </h1>
              </div>
               <form id="password" class='tab row'>

                <div class="form-group">
                  <label for=""> كلمة المرور الحالية  </label>
                  <input type="password" required value='028398309' class="form-control" name="" id="" placeholder="">
                </div>
                <div class="form-group">
                  <label for=""> كلمة المرور الجديدة  </label>
                  <input type="password" required class="form-control" name="" id="" placeholder="">
                </div>

                <div class="col-12 form-group">
                  <button class="btn btn-danger mt-3"> تغيير  </button>
                </div>

               </form>

            </div>

          </div>
```
```js
// from js/global/tabs.js

$('.tab-nav').click(function (e) { 
    var target = $(this).attr('href')
    $(this).addClass('active-tab-nav').addClass('shadow');
    $(this).siblings().removeClass('active-tab-nav').removeClass('shadow');
    set_tab_content(target);
  });

  function get_active_tab(){
    var active_tab = location.hash.slice(1);
    return '#'+active_tab
  }

  function set_tab_content(active){
    var tab = $(active)
    tab.siblings().removeClass('active-tab').removeClass("shadow").removeClass("rounded")
    tab.addClass('active-tab').addClass('shadow').addClass('rounded')
  }
  set_tab_content(get_active_tab())
  $(get_active_tab().replace('#','.')).addClass('active-tab-nav').siblings().removeClass('active-tab-nav');


```