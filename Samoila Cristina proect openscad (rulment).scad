$fn=100;


  module diamtru_rulment(raza_interioara, inaltime, raza_exterioara)

    rotate_extrude(){
    difference (){
        union(){
            
            translate([10.5,0,0]) square([4,7], center = true);
            translate([19.5,0,0]) square([4,7], center = true);
          
        }
        
        
        translate([14.75,0,0]) circle( 3.5 );
       
    }
}
  
    module bile_rulment(raza_bile, diametru, culoare)
      for ( ball= [0:30:360]) {
           rotate ([0,0, ball])
           translate ([14.75,0,0])
           color ("gray")
           sphere (r=3.25 );
    
 }
 
 $fn=100;


rotate_extrude(){
    difference (){
        union(){
            
            
            translate([10.8,0,0]) square([4,7], center = true);
            
            translate([19.8,0,0]) square([5,7], center = true);
      
        }
        
        
       
        translate([14.75,0,0]) circle( 3.5 );
       
    }
}
 for ( ball= [0:30:360]) {
     rotate ([0,0, ball])
     translate ([14.75,0,0])
     color ("gray")
     sphere (r=3.25 );
    
 }
