function onLoad(){
    var root=document.getElementById('root');
    var Div=document.createElement('div');
    var Pre=document.createElement('pre');
    var Span=document.createElement('span');
    var BtnCount =document.createElement('button');
    var BtnIn =document.createElement('button');
    var BtnDec =document.createElement('button');
    var Figure=document.createElement('figure');
    var Image =document.createElement('img');
    var Figcaption1=document.createElement('figcaption');
    var Figcaption2=document.createElement('figcaption');
    const node = document.createTextNode("This is new ");
    const node1 = document.createTextNode("This is new div element");
   // Div.appendChild(node);
     //create div element tag
    root.appendChild(Div);
    //add id attribute in div tag
    Div.id='product_div';
    //getting second div element
    var P_Div=document.getElementById('product_div');
    //create pre element tag
    P_Div.appendChild(Pre);
   // Pre.appendChild(node1);

    //create figure element within div & adding Id
    Div.appendChild(Figure);
    //Figure.appendChild(node1)
    Figure.id ='figure'
    //getting figure element
    var figureChild=document.getElementById('figure');
    // Creating figure child element tag
    figureChild.appendChild(Image);
    Image.id='imgid';
    var imgId =document.getElementById('imgid');
   // imgId.src=`${productImg}`
    Image.src='https://www.jiomart.com/images/product/600x600/490916734/pepsi-250-ml-product-images-o490916734-p490916734-0-202206231805.jpg';
    //figure caption
    figureChild.appendChild(Figcaption1);
    figureChild.appendChild(Figcaption2);
    Figcaption1.id='figcap1';
    Figcaption2.id='figcap2';
    var figCap1=document.getElementById('figcap1');
    // figCap1.innerHTML = `${productName}`;
    figCap1.innerHTML = "Pepsi";
    var figCap2=document.getElementById('figcap2');
    figCap2.innerHTML = "Price" +'&nbsp' + 70;
    // figCap2.innerHTML = "Price" +'&nbsp' + `${productPrice}`;
   

    //Create increment, decrement Button and span
    P_Div.appendChild(BtnIn);
    P_Div.append(BtnCount);
    P_Div.appendChild(BtnDec);

    //Increment and decrement counter function
     var counter=0;
    //Addin id attribute
    BtnCount.id='count';
    BtnIn.id='increment';
    BtnDec.id='decrement';
    //increment Button
    var incButton=document.getElementById('increment');
    incButton.innerHTML='+'  ;
    incButton.onclick=function(){
        counter=counter + 1;
    };

   //Counter button
    var countText=document.getElementById('count');
    countText.innerText=counter;

    //Decrement Button
    var decButton=document.getElementById('decrement');
    decButton.innerHTML= '-';
    decButton.onclick=function(){
        counter= counter - 1;
    };
   
    // function incCount(){
    //   counter =counter + 1;
      
    // }
  
    // function decCount(){
    //   counter =counter - 1;
    // }


var product =[
    {
        productName:'Pepsi',
        productPrice:'70',
        productImg:''
    },
    {
        productName:'Limca',
        productPrice:'40',
        productImg:''
    },
    {
        productName:'Sprite',
        productPrice:'90', 
        productImg:''
    },
];

    
    

}

