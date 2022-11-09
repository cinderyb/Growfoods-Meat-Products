
   const porkImages=[{
      "id": 1,
      "name": "Pork Jowls",
      "imgSrc": "images/pork/pork jowl.png",
      "price": "P210/kg"
   },
   {
      "id": 2,
      "name": "Pork Belly",
      "imgSrc": "images/pork/pork belly.png",
      "price": "P295/kg"
   },
   {
      "id": 3,
      "name": "Ham Leg",
      "imgSrc": "images/pork/ham leg.png",
      "price": "P220/kg"
   },
   {
      "id": 4,
      "name": "Pork Chop",
      "imgSrc": "images/pork/pork chop.png",
      "price": "P225/kg"
   },
   {
    "id": 5,
    "name": "Pork samg",
    "imgSrc": "images/pork/pork samg.png",
    "price": "P200/500g"
 },
 {
    "id": 6,
    "name": "Pata",
    "imgSrc": "images/pork/pata.png",
    "price": "P180/kg"
 },
 {
    "id": 7,
    "name": "Spare Ribs",
    "imgSrc": "images/pork/spare ribs.png",
    "price": "P265/kg"
 }
]

function loadImages(){
   porkImages.forEach(function(porkItem){
      loadCard(porkItem.id, porkItem.name, porkItem.imgSrc, porkItem.price);
   });
   
   function loadCard (id, name, imgSrc, price){
         var template =
         '<div class="pork-items col-lg-3 col-md-4">\
         <div class="card h-100">\
           <div class="card-header">'+ name +'</div>\
           <img src="' +imgSrc+ '" alt="...">\
           <div class="card-body">\
             <h2>' +price+ '</h2>\
             <div class="d-grid gap-2">\
               <button type="button" class="btn btn-lg btn-danger">Add to cart</button>\
             </div>\
           </div>\
         </div>\
       </div>' ;

      

       var cardContainer = document.getElementById('cardContainer');

       cardContainer.innerHTML += template;


      }
   }

   function cartDropDown () {

      

   }

   