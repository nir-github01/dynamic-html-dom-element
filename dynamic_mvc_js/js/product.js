const Product = function(productId, productName, productPrice, productImg, counter=0){
    this.productId= productId;
    this.productName = productName;
    this.productPrice = productPrice;
    this.productImg =productImg;
    this.counter=counter;
    this.decr =() => {return this.counter - 1};
    this.incr =() => {return this.counter + 1};

}
var productList = [
    new Product(
       1,
        'Pepsi',
      70,
       " https://www.jiomart.com/images/product/600x600/490916734/pepsi-250-ml-product-images-o490916734-p490916734-0-202206231805.jpg"
    ),
    new Product(
       2,
       'Limca',
       40,
      "  https://5.imimg.com/data5/SELLER/Default/2020/9/GW/PZ/BL/44930791/limca-soft-drink-lemon-600ml-1-800x800-500x500.jpg"
    ),
    new Product(
       3,
     'Sprite',
       90,
     "https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg"
    ),
]; 

// var productList = [
//     {
//         productId: '1',
//         productName: 'Pepsi',
//         productPrice: '70',
//         productImg: 'https://www.jiomart.com/images/product/600x600/490916734/pepsi-250-ml-product-images-o490916734-p490916734-0-202206231805.jpg'
//     },
//     {
//         productId: '2',
//         productName: 'Limca',
//         productPrice: '40',
//         productImg: 'https://5.imimg.com/data5/SELLER/Default/2020/9/GW/PZ/BL/44930791/limca-soft-drink-lemon-600ml-1-800x800-500x500.jpg'
//     },
//     {
//         productId: '3',
//         productName: 'Sprite',
//         productPrice: '90',
//         productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
//     },
    // {
    //     productId: '4',
    //     productName: 'Pepsi',
    //     productPrice: '70',
    //     productImg: 'https://www.jiomart.com/images/product/600x600/490916734/pepsi-250-ml-product-images-o490916734-p490916734-0-202206231805.jpg'
    // },
    // {
    //     productId: '5',
    //     productName: 'Limca',
    //     productPrice: '40',
    //     productImg: 'https://5.imimg.com/data5/SELLER/Default/2020/9/GW/PZ/BL/44930791/limca-soft-drink-lemon-600ml-1-800x800-500x500.jpg'
    // },
    // {
    //     productId: '6',
    //     productName: 'Limca',
    //     productPrice: '40',
    //     productImg: 'https://5.imimg.com/data5/SELLER/Default/2020/9/GW/PZ/BL/44930791/limca-soft-drink-lemon-600ml-1-800x800-500x500.jpg'
    // },
    // {
    //     productId: '7',
    //     productName: 'Sprite',
    //     productPrice: '90',
    //     productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
    // },
    // {
    //     productId: '8',
    //     productName: 'Sprite',
    //     productPrice: '90',
    //     productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
    // },
    // {
    //     productId: '9',
    //     productName: 'Limca',
    //     productPrice: '40',
    //     productImg: 'https://5.imimg.com/data5/SELLER/Default/2020/9/GW/PZ/BL/44930791/limca-soft-drink-lemon-600ml-1-800x800-500x500.jpg'
    // },
    // {
    //     productId: '10',
    //     productName: 'Sprite',
    //     productPrice: '90',
    //     productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
    // },
    // {
    //     productId: '11',
    //     productName: 'Sprite',
    //     productPrice: '90',
    //     productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
    // },
    // {
    //     productId: '12',
    //     productName: 'Sprite',
    //     productPrice: '90',
    //     productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
    // },
    // {
    //     productId: '13',
    //     productName: 'Sprite',
    //     productPrice: '90',
    //     productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
    // },
    // {
    //     productId: '14',
    //     productName: 'Limca',
    //     productPrice: '40',
    //     productImg: 'https://5.imimg.com/data5/SELLER/Default/2020/9/GW/PZ/BL/44930791/limca-soft-drink-lemon-600ml-1-800x800-500x500.jpg'
    // },
    // {
    //     productId: '15',
    //     productName: 'Sprite',
    //     productPrice: '90',
    //     productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
    // },
    // {
    //     productId: '16',
    //     productName: 'Sprite',
    //     productPrice: '90',
    //     productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
    // },
//];

function decerementVal(event){
    const decButton= event.target.id;
    const productId=decButton.substring(9, 12);
    const p=Product.find(p=>p.productId==productId);
    const countText =document.getElementById(' count'+ productId);
    countText.innerText =p.decr(); 
   // alert(productId)
    // for(let index of product){
    //    alert(index)
    // }
    }
     function incerementVal(event){
        const incButton= event.target.id;
        const productId=incButton.substring(9, 12)
        const p=Product.find(p=>p.productId==productId);
        const countText =document.getElementById(' count'+ productId);
        countText.innerText=p.incr(); 
       // alert(pId)
       // alert(productId)
        // for(let index of product){
        //     for(let pVal of index){
        //         alert(pVal)
        //     }
      
        // }
    }
const root = document.getElementById('root');

function onLoad() {
  
    for ( p of productList) {
       // let counter = 0;
        // let p = product[i];
       // console.log(i)
        //div element
        const Div = document.createElement('div');
            Div.id = 'product_div' + p.productId;
          Div.classList.add('product_div');
        const P_Div = document.getElementById('product_div' + p.productId);
        //pre element
        var Pre = document.createElement('pre');
        //span element
        var Span = document.createElement('span');

        //figure element
        var Figure = document.createElement('figure');
            Figure.id = 'figure' + p.productId;
            Figure.classList.add('figure');
        var figureId = document.getElementById('figure'+p.productId );
        //Image
        var Image = document.createElement('img');
            Image.id = 'imgid' + p.productId;
            Image.classList.add('imgclass');
        var imgId = document.getElementById('imgid' + p.productId);
            Image.src = p.productImg;
        //figurecaption
        var Figcaption1 = document.createElement('figcaption');
            Figcaption1.innerHTML = p.productName;
        var Figcaption2 = document.createElement('figcaption');
            Figcaption2.innerHTML ="Price" +'&nbsp' + p.productPrice;
            Figcaption1.id = 'figcap1' +p.productId;
            Figcaption1.classList.add('figcap1');
            Figcaption2.id = 'figcap2' +p.productId;
            Figcaption2.classList.add('figcap2');
        var figCap1 = document.getElementById('figcap1' + p.productId);
        var figCap2 = document.getElementById('figcap2' + p.productId);
        //button element
        var BtnCount = document.createElement('button');
            BtnCount.classList.add('count');
            BtnCount.id = 'count'+ p.productId;
        var BtnIn = document.createElement('button');
            BtnIn.id = 'increment' + p.productId;
            BtnIn.classList.add('increment');
        var BtnDec = document.createElement('button');
            BtnDec.id = 'decrement'+p.productId;
            BtnDec.classList.add('decrement');
        var countText = document.getElementById('count' +p.productId);
        var incButton = document.getElementById('increment'+ p.productId);
        var decButton = document.getElementById('decrement'+ p.productId);
            BtnIn.innerHTML ='+';
            countText.innerText =p.counter;
            BtnDec.innerHTML ='-';
            BtnIn.onclick = incerementVal;
            //  function () {
            //     counter = counter + 1;
            //     countText.innerHTML = counter;
            // };
            BtnDec.onclick = decerementVal;
            
            // function () {
            //     counter = counter - 1;
            //     if (counter > 0) {
            //         countText.innerHTML = counter;
            //     } else {
            //         counter = 0;
            //         countText.innerHTML = counter;
            //     }
            // }
        


        root.append(Div);
        Div.append(Figure);
        Figure.append(Image);
        Figure.append(Figcaption1);
        Figure.append(Figcaption2);
        Div.append(BtnIn);
        Div.append(BtnCount);
        Div.append(BtnDec);

    }
}



