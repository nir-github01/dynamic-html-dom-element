var product = [
    {
        productId: '1',
        productName: 'Pepsi',
        productPrice: '70',
        productImg: 'https://www.jiomart.com/images/product/600x600/490916734/pepsi-250-ml-product-images-o490916734-p490916734-0-202206231805.jpg'
    },
    {
        productId: '2',
        productName: 'Limca',
        productPrice: '40',
        productImg: 'https://5.imimg.com/data5/SELLER/Default/2020/9/GW/PZ/BL/44930791/limca-soft-drink-lemon-600ml-1-800x800-500x500.jpg'
    },
    {
        productId: '3',
        productName: 'Sprite',
        productPrice: '90',
        productImg: 'https://www.jiomart.com/images/product/600x600/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg'
    },
];
const root = document.getElementById('root');
let counter = 0;
function onLoad() {
  
    for (let index in product) {
        const pl = product[index];
        //div element
        const Div = document.createElement('div');
        Div.id = 'product_div';
        const P_Div = document.getElementById('product_div');
        //pre element
        var Pre = document.createElement('pre');
        //span element
        var Span = document.createElement('span');

        //figure element
        var Figure = document.createElement('figure');
        Figure.id = 'figure';
        var figureId = document.getElementById('figure');
        //Image
        var Image = document.createElement('img');
        Image.id = 'imgid';
        var imgId = document.getElementById('imgid');
        Image.src = pl.productImg;
        //figurecaption
        var Figcaption1 = document.createElement('figcaption');
        Figcaption1.innerHTML = pl.productName;
        var Figcaption2 = document.createElement('figcaption');
        Figcaption2.innerHTML ="Price" +'&nbsp' + pl.productPrice;
        Figcaption1.id = 'figcap1';
        Figcaption2.id = 'figcap2';
        var figCap1 = document.getElementById('figcap1');
        var figCap2 = document.getElementById('figcap2');
        //button element
        var BtnCount = document.createElement('button');
        var BtnIn = document.createElement('button');
        var BtnDec = document.createElement('button');
        BtnCount.id = 'count';
        BtnIn.id = 'increment';
        BtnDec.id = 'decrement';
        var countText = document.getElementById('count');
        var incButton = document.getElementById('increment');
        var decButton = document.getElementById('decrement');
        BtnIn.innerHTML ='+';
        BtnCount.innerHTML = counter;
        BtnDec.innerHTML ='-';

        BtnIn.onclick = function () {
            counter = counter + 1;
            countText.innerHTML = counter;
        };
        BtnDec.onclick = function () {
            counter = counter - 1;
            if (counter > 0) {
                countText.innerHTML = counter;
            } else {
                counter = 0;
                countText.innerHTML = counter;
            }

        }


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

// productList = [
//     { pid: 1001, pname: "Pepsi", unitPrice: 30.0, img: 'images/pepsi.jfif', stockQuantity: 100 },
//     { pid: 1002, pname: "Thumsup", unitPrice: 30.0, img: 'images/thumsup.jfif', stockQuantity: 100 },
//     { pid: 1003, pname: "Limca", unitPrice: 30.0, img: 'images/limca.jfif', stockQuantity: 100 }
// ]
// const root = document.getElementById("root");

// function onLoad() {
//     for (let index in product) {
//         const p1=product[index];
//         const div_p1 = document.createElement("div");
//         const pre_p1 = document.createElement("pre")

//         const img_p1 = document.createElement("img");
//         img_p1.src = p1.productImg;

//         const span_pname_p1 = document.createElement("span");
//         span_pname_p1.innerText = p1.productName;

//         const btn_dec_p1 = document.createElement("button");
//         btn_dec_p1.innerText = "-";

//         const span_quantity_p1 = document.createElement("span");
//         span_quantity_p1.innerText = 0;

//         const btn_inc_p1 = document.createElement("button");
//         btn_inc_p1.innerText = "+";


//         pre_p1.append(img_p1);
//         pre_p1.append(span_pname_p1);
//         pre_p1.append(btn_dec_p1);
//         pre_p1.append(span_quantity_p1)
//         pre_p1.append(btn_inc_p1);

//         div_p1.append(pre_p1);
//         root.append(div_p1);
//     }
// }

