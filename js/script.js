/*
image_array = [
    "imagen1.png",
    "imagen2.png",
    "imagen2.png",
    "imagen4.png",

]
function get_random_image(){
   random_index =Math.floor(Math.random()=image_array.lenght);
   selected_image=image_array[random_index]
   document.getElementById('imagenes').src=`./IMAGENES/$(selected_image)`
};
*/
/*
{
img1=getImage(getDocumentBase(),"image1");
       imagen2=getImage(getDocumentBase(),"image2");
       imagen3=getImage(getDocumentBase(),"image3");
       imagen4=getImage(getDocumentBase(),"image3");
          
    
    {
        opcion=(int)(Math.random()*3+1);
        
        System.out.println (opcion+"");
        if(opcion==1)
          {
           c.cambiaImagen(img3);
          }
           
          if(opcion==2)
          {
           c.cambiaImagen(img2);        
          }
          if(opcion==3){
            c.cambiaImagen(img1);
          }
      } 
   */
   function generator(){
       for(let index=0; index<10;index++){
       var x= Math.floor((Math.random()*6)+1);
       console.log(x);
       document.getElementById('imagenes').innerHTML+=
       <img src="IMAGENES/imagen${x}.png"></img>;
       }
    }
