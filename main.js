$(document).ready(function () {
    // localStorage.clear();
    // initialize cart
    if (localStorage.getItem("savedId") == null) {
        localStorage.setItem("savedId", "0");
    }
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", "[]");
    }

    // set up the data for each item
    var data = [
        {
            productImage: "small",
            productName: "Dog1",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "dog2",
            productName: "Dog2",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "cat1",
            productName: "Cat1",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "cat2",
            productName: "Cat2",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "bunny1",
            productName: "Bunny1",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "bunny2",
            productName: "Bunny2",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "round1",
            productName: "Round1",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "round2",
            productName: "Round2",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "bear1",
            productName: "Bear1",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "bear2",
            productName: "bear2",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "square1",
            productName: "Square1",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

        {
            productImage: "square2",
            productName: "Square2",
            productPrice: 30,
            productDescription: "Do you feel like you just want to come home with fluffy and cute pillow on your couch?" +
            "Check out these fun dog-head-shaped pillows. We only made four of them so that you can" +
            "feel a little bit special. These are the four most internet famous dogs which will" +
            "make you smile everyday :)"
        },

    ]

    // populate the product info html onto the all-products div
    for (i = 0; i < data.length; i++) {

        $(".all-products").append("<div class='products'>" +
            "<div class='product-card' id=" + i + ">" +
            "<div class='product-image'>" +
            "<a href='detail.html'> <img src=" + "pillows/" + data[i].productImage + ".jpg" + "></a>" +
            "</div>" +
            "<div class='product-info'>" +
            "<h5>" + data[i].productName + "</h5>" +
            "<h6>$30</h6>" +
            "</div>" +
            "</div>" +
            "</div>");
    }


    // save an id on whatever is clicked to local storage
    $(".product-card").click(function () {
        var id = this.id;
        localStorage.setItem("savedId", id);
    })

    // get the clicked id from the local storage
    var gotId = Number(localStorage.getItem("savedId"));
    var readPImage = localStorage.getItem("haha");
    //

    var pImage;
    //append the (info with clicked id) onto the detail page
    $(".pillow-card").append("<div class='dog1'>" +
        "<img src= '" + "pillows/" + data[gotId].productImage + ".jpg" + "'>" +
        "</div>" +

        "<div class='right-box'>" +

        "<div class='name-and-price'>" +
        "<h4> " + data[gotId].productName + "</h4>" +
        "<h5>$30</h5>" +
        "</div>" +

        "<div class='product-size'>" +
        "<h5 id='size-title'>Size</h5>" +
        "<select id='size-options'>" +
        "<option value='small'>S</option>" +
        "<option value='medium'>M</option>" +
        "<option value='large'>L</option>" +
        "</select>" +
        "</div>" +

        "<div class='product-quantity'>" +
        "<h5 id='quantity-title'>Quantity</h5>" +
        "<select id='quantity-options'>" +
        "<option value=1>1</option>" +
        "<option value=2>2</option>" +
        "<option value=3>3</option>" +
        "<option value=4>4</option>" +
        "<option value=5>5</option>" +
        "</select>" +

        "</div>" +

        "<div class='description'>" +
        "<p>" +
        "Do you feel like you just want to come home with fluffy and cute pillow on your couch? Check out these fun" +
        "pillows. We only made four of them so that you can feel a little bit special. These are the four most" +
        "internet famous animal which will make you smile everyday :)" +
        "</p>" +
        "</div>" +

        "<div class='cart'>" +
        "<button class='add-to-cart' style='vertical-align:middle'>" +
        "<span>Add to Cart </span>" +
        "</button>" +
        "</div>" +
        "</div>"

    );

    $("#size-options").change(function () {
        if (gotId == 0) {
            var temp = $("#size-options option:selected").val();
            $(".dog1 img").replaceWith("<img src= '" + "pillows/" + temp + ".jpg" + "'>");
        }
    })


    // constructor - a template of an object
    function Item(imgOfProduct, nameOfProduct, priceOfProduct, sizeOfProduct, quantOfProduct) {
        this.imgOfProduct = imgOfProduct;
        this.nameOfProduct = nameOfProduct;
        this.priceOfProduct = priceOfProduct;
        this.sizeOfProduct = sizeOfProduct;
        this.quantOfProduct = quantOfProduct;
    }
    // add to cart function

    function addToCart(imgOfProduct, nameOfProduct, priceOfProduct, sizeOfProduct, quantOfProduct) {
        // using the template(constructor) to create a new object
        var newObject = new Item(imgOfProduct, nameOfProduct, priceOfProduct, sizeOfProduct, quantOfProduct);
        // change string to array, because local storage can only hold string
        var inCart = JSON.parse(localStorage.getItem("cart"));
        // append this new object
        inCart.push(newObject);
        // update current data to local storage
        localStorage.setItem("cart", JSON.stringify(inCart));

    }

    var selectedSize = "S";
    $("#size-options").change(function () {
        selectedSize=$("#size-options option:selected").text();
    })
    var selectedQuant;
    selectedQuant = $("#quantity-options option:selected").val();
    $("#quantity-options").change(function () {
        selectedQuant = $("#quantity-options option:selected").val();

    })
    // click event
    $(".add-to-cart").click(function () {
        var imgOfProduct = data[gotId].productImage;
        var nameOfProduct = data[gotId].productName;
        var priceOfProduct = data[gotId].productPrice;
        var sizeOfProduct = selectedSize;
        var quantOfProduct = selectedQuant;
        addToCart(imgOfProduct, nameOfProduct, priceOfProduct, sizeOfProduct, quantOfProduct);
        console.log(selectedSize);
        location.reload();
        // console.log(localStorage.getItem("cart"));
        // console.log(JSON.parse(localStorage.getItem("cart")));

    })



    var cartArr = JSON.parse(localStorage.getItem("cart"));
    console.log(cartArr);

    for (i = 0; i < cartArr.length; i++) {
        //append the information into shopping cart html
        $("#table1").append("<tr>" +
            "<td>" +
            "<img id='imgimg' src='pillows/" + cartArr[i].imgOfProduct + ".jpg'>" +
            "</td>" +
            "<td>" + cartArr[i].nameOfProduct + "</td>" +
            "<td>$" + cartArr[i].priceOfProduct + "</td>" +
            "<td>" + cartArr[i].sizeOfProduct + "</td>" +
            "<td>" + cartArr[i].quantOfProduct + "</td>" +
            "<td>$ " + cartArr[i].priceOfProduct * cartArr[i].quantOfProduct + " </td>" +
            "<td>" +
            "<button class='removeButton' id='removeButton_" + i + "' type='button'>Remove</button>" +
            "</td>" +
            "</tr>)"
        );

    }

    //remove
    function removeFromCart(j) {
        var cartArr = JSON.parse(localStorage.getItem("cart"));
        cartArr.splice(j, 1);
        localStorage.setItem("cart", JSON.stringify(cartArr));
    }

    $(".removeButton").click(function () {
        var temp = this.id.split("_");
        var j = Number(temp[1]);
        removeFromCart(j);
        location.reload();
        console.log(j);
        console.log(this.id);
    })
    var grandTotal = 0;
    //append total price
    for (i = 0; i < cartArr.length; i++) {
        grandTotal = grandTotal + cartArr[i].priceOfProduct * cartArr[i].quantOfProduct;
        console.log(cartArr[i].priceOfProduct * cartArr[i].quantOfProduct)

    }
    $("#total-table").append(
        "<tr>" +
        "<td>Grand Total</td>" +
        "<td> " + grandTotal + "</td>" +
        "</tr>"

    );



    //show numbers of item in the shopping cart icon
    $("#info").append(cartArr.length);
})



// image source
// dog1: https://cdn-img-2.wanelo.com/p/684/d9a/757/12ef761c9a6d22419fdb238/full_size.jpg
// dog2: https://sc01.alicdn.com/kf/HTB1UDKDLpXXXXcqXVXXq6xXFXXXj/White-paw-shaped-pet-accessories-xx-large.jpg
// bunny1: https://www.oeufnyc.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/s/ss16-oeuf-bunny-shaped-pillow-02_2.jpg
// bunny2: https://cdn.shopify.com/s/files/1/0526/3989/products/Areaware-Fauna-Pico-Bunny-Cushion-www.milktooth.com-2_2597d8ff-2b10-477a-83c9-5e833c1fec80.jpg?v=1424608192
// round1: https://s-media-cache-ak0.pinimg.com/736x/8b/de/63/8bde63281c80ac3b333b22f545a8b529--modern-decorative-pillows-round-faces.jpg
// round2: https://s-media-cache-ak0.pinimg.com/originals/58/61/50/586150c1ade20d49eefa1485224ce988.jpg
// cat1: https://my-live.slatic.net/v2/resize/products/13427852-3fe223afb83a7b70f5ca98aedab00df6.jpg
// cat2: https://cdn.shopify.com/s/files/1/1801/4743/products/3d-printed-cat-face-car-headrest-pillows-21565504273_1024x1024.jpg?v=1506290108
// bear1: https://ae01.alicdn.com/kf/HTB1EhxtNXXXXXXvaXXXq6xXFXXXM.jpg_220x220.jpg
// bear2: http://ae01.alicdn.com/kf/HTB1A5HZRXXXXXcJapXXq6xXFXXXq/Kawaii-Baby-plush-Fox-Bear-toys-for-baby-bedding-Infant-appease-dolls-kids-Toys-travel-infantil.jpg_120x120.jpg
// square1: https://static.zarahome.net/8/photos3/2017/I/4/1/p/5917/443/999/5917443999_1_1_2.jpg?t=1503489646327
// square2: https://static.zarahome.net/8/photos3/2017/I/4/1/p/7215/091/504/7215091504_1_1_2.jpg?t=1493312231513