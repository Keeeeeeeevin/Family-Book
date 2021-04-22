var images = [
    "https://static.onecms.io/wp-content/uploads/sites/6/2020/06/26/000162593HR.jpg",
    "https://static.wikia.nocookie.net/familyguy/images/7/7c/FamilyGuy_Single_LoisPose_R7.jpg/revision/latest?cb=20200526171843",
    "https://static.wikia.nocookie.net/familyguy/images/1/1b/FamilyGuy_Single_MegMakeup_R7.jpg/revision/latest?cb=20200526171840",
    "https://i.pinimg.com/originals/d8/5b/d1/d85bd1c3185756069dbf3d85fffabf60.png",
  ];
  
  var i = 0;
  function nextslide() { 
   
     if(i == 9)
       {
         i=0;
       }
     
      document.getElementById("album").src = images[i];
    i++;
   
  }