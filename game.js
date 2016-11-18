
         <!--
            function WriteCookie()
            {
               if( document.myform.customer.value == "" ){
                  alert("Enter your name!");
                  return;
               }
               cookievalue= escape(document.myform.customer.value) + ";";
               document.cookie="name=" + cookievalue;
               document.write ("Setting Cookies : " + "name=" + cookievalue );
            }
