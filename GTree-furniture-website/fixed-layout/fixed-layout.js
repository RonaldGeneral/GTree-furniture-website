var path = "/";

function head(title){
    document.write(
'           <meta charset="UTF-8">' +
'           <meta name="keywords" content="furniture, table, chair, bedroom, lighting, decorations, shelf">' +
'           <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
'           <link href="' + path + 'css/common-layout.css" rel="stylesheet">' +
'           <link href="'+ path +'css/fixed-layout.css" rel="stylesheet">' +
'           <link href="'+ path +'css/fixed-layout-assets/logo.png" rel="shortcut icon">' +
'           <title>' + title + '</title>')
}      

function body(){
    document.write(
'        <!--header part-->' +
'       <header>' +
'           <!--company logo-->' +
'           <div class="upper-part">' +
'           <section class="logo">' +
'               <a href="'+ path +'homepage/homepage.html"><img src="'+ path +'css/fixed-layout-assets/logo.png" alt="GTree' + 'Furniture logo"></a>' +
'           </section>' +
'' +
'           <!--search bar-->' +
'           <form class="searchbar">' +
'               <input type="text" placeholder="Welcome to GTree Furniture! Enter something - Table, Chair,' + 'Shelf, ..." name="search">' +
'               <button type="submit">SEARCH!</button>' +
'           </form>' +
'           ' +
'           <!--track order, cart, login icons-->' +
'           <section class="three-icons">' +
'           <a href="'+ path +'track-order/track-order.html"><img src="'+ path +'css/fixed-layout-assets/track_order.png"' + 'alt="track order"></a>' +
'           <a href="'+ path +'shopping-cart/shopping-cart.html"><img src="'+ path +'css/fixed-layout-assets/cart.png"' + 'alt="cart"></a>' +
'           <a id="login" href="'+ path +'Login/login.html"><img src="'+ path +'css/fixed-layout-assets/login.png"' + 'alt="login"></a>' +
'           </section>' +
'           </div>' +
'           <script>' +
'               /*check if the user is login*/' +
'               if (typeof(Storage) !== "undefined") {' +
'                    var storage = localStorage.getItem("isLogin")' +
'                    if (storage == "true")' +
'                    {' +
    '                        document.getElementById("login").href = "'+ path +'Personal-particulars/personal-particulars.html";' +
    '                }' +
        '        }   ' +
        '    </script>' +
        '    <section id="namebar">' +
        '        <div id="first">Modern</div>' +
        '        <div id="second">Comfortable</div>' +
        '        <div id="third">Reliable</div>' +
        '        <div id="fourth">Because we are</div>' +
        '        ' +
        '        <div id="company-name">GTree Furniture</div>' +
        '    </section>' +
        '</header>' +
        '    <!--navigation bar-->' +
        '    <span class="nav">' +
        '        <nav>' +
        '            <ul class="menu">' +
        '                <li onclick="link(0)"><a id="home" href="#">Home</a></li>' +
        '                <li onclick="link(1)">' +
        '                    <a id="furniture-category" href="#">Furniture Category</a>' +
        '                    <ul class="submenu-1">' +
        '                        <li onmousedown="link(5)">' +
        '                            <a id="table" href="#">Tables</a></li>' +
        ' ' +
        '                        <li onmousedown="link(6)">' +
        '                            <a id="chair" href="#">Chairs</a></li>' +
        ' ' +
        '                        <li onmousedown="link(7)">' +
        '                            <a id="bedroom" href="#">Bedroom</a></li>' +
        ' ' +
        '                        <li onmousedown="link(8)">' +
        '                            <a id="lighting" href="#">Lighting</a></li>' +
        ' ' +
        '                        <li onmousedown="link(9)">' +
        '                            <a id="decorations" href="#">Decorations</a></li>' +
        '                        ' +
        '                        <li onmousedown="link(10)">' +
        '                            <a id="shelves" href="#">Shelves</a></li>' +
        '                    </ul>' +
        '                </li>' +
        '                <li onclick="link(2)"><a id="promotion" href="#">Promotion</a></li>' +
        '                <li onclick="link(3)"><a id="faq" href="#">FAQ</a></li>' +
        '                <li onclick="link(4)"><a id="about-us" href="#">About Us</a></li>' +
        '            </ul>' +
        '        </nav>' +
        '    </span>' +
        '<script>' +
        '    /*defining the 11 hyperlinks into an array*/' +
        '            var hyperlink = [' +
    '            /*home*/ "'+ path +'homepage/homepage.html",' +
    '        /*furnitureCategory*/ "'+ path +'productcatalog/mainproductcatalog/maincatalog.html",' +
    '        /*promotion*/ "'+ path +'Promotion/promotion.html",' +
    '        /*faq*/ "'+ path +'frequently-asked-questions/frequently-asked-questions.html",' +
    '        /*aboutUs*/ "'+ path +'about-us/about-us.html",' +
    '        /*table*/ "'+ path +'productcatalog/table/productcatalogtable.html",' +
    '        /*chair*/ "'+ path +'productcatalog/chair/productcatalogchair.html",' +
    '        /*bedroom*/ "'+ path +'productcatalog/bedroom/bed/bed.html",' +
    '        /*lighting*/ "'+ path +'productcatalog/lightning/productcataloglightning.html",' +
    '        /*decorations*/ "'+ path +'productcatalog/decoration/productcatalogdecoration.html",' +
    '        /*shelves*/ "'+ path +'productcatalog/shelves/productcatalogshelves.html"' +
    '            ];' +
    '        ' +
    '        /*defining the id name into an array*/' +
    '        var tag = [' +
        '            "home",' +
        '        "furniture-category",' +
        '        "promotion",' +
        '        "faq",' +
        '        "about-us",' +
        '        "table",' +
        '        "chair",' +
        '        "bedroom",' +
        '        "lighting",' +
        '        "decorations",' +
        '        "shelves"' +
        '    ];' +
        '    for (var i = 0; i < 11; i++)' +
        '        document.getElementById(tag[i]).href = hyperlink[i];' +
        '' +
        '    function link(number){' +
        '        window.location.assign(hyperlink[number]);' +
        '   }' +
        '   ' +
        '</script>');
}

function footer(){
    document.write(
        '        <!--footer part-->' +
        '<footer>' +
        '   <div id="footer-1">' +
        '       <a href="'+ path +'homepage/homepage.html"><img src="'+ path +'css/fixed-layout-assets/logo.png" alt="GTree Furniture logo"></a>' +
        '       <p style="text-align: center;">GTree Furniture</p>' +
        '   </div>' +
        '   <div id="footer-2">Contact Us' +
        '       <ul>' +
        '           <li>E-mail : <a href="mailto:GTreeFurniture@gmail.com">GTreeFurniture@gmail.com</a></li>' +
        '           <li>Tel No. : <a href="tel:017-555 8163">017-555 8163</a></li>' +
        '           <li>Address : 40, Jalan Utama, 12300 Butterworth, Pulau Pinang</li>' +
        '       </ul>' +
        '   </div>' +
        '   <div id="footer-3">Follow Us' +
        '       <ul>' +
        '           <li><a href="https://www.facebook.com/" target="_blank"><img src="'+ path +'css/fixed-layout-assets/facebook.png" alt="Facebook"></a></li>' +
        '           <li><a href="https://www.instagram.com/" target="_blank"><img src="'+ path +'css/fixed-layout-assets/instagram.png" alt="Instagram"></a></li>' +
        '           <li><a href="https://www.youtube.com/" target="_blank"><img src="'+ path +'css/fixed-layout-assets/youtube.png" alt="YouTube"></a></li>' +
        '       </ul>' +
        '   </div>' +
        '   <div id="footer-4">Bedder Than The Rest' +
        '       <p>Our Cooperation Partners</p>' +
        '      <ul>' +
        '           <li><a href="https://www.fedex.com/en-us/home.html" target="_blank"><img src="'+ path +'css/fixed-layout-assets/fedex.png" alt="FedEx" ></a></li>' +
        '           <li><a href="https://www.gdexpress.com/" target="_blank"><img src="'+ path +'css/fixed-layout-assets/gdex.png" alt="GDEx"></a></li>' +
        '           <li><a href="https://www.publicbankgroup.com/" target="_blank"><img src="'+ path +'css/fixed-layout-assets/public_bank.png" alt="Public Bank"></a></li>' +
        '           <li><a href="https://www.hlb.com.my/en/personal-banking/home.html" target="_blank"><img src="'+ path +'css/fixed-layout-assets/hong_leong_bank.png" alt="Hong Leong Bank"></a></li>' +
        '           <li><a href="https://www.maxis.com.my/en/home/" target="_blank"><img src="'+ path +'css/fixed-layout-assets/maxis.png" alt="Maxis"></a></li>' +
        '       </ul>' +
        '   </div>' +
        '   ' +
        '</footer>' +
        '<p style="text-align: center;">&#169; GTree Furniture Company 2021 All rights reserved.</p>' +
        '    </body>' +
        '</html>'
    );
}