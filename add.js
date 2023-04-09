function add(){
	let s1=document.getElementById('s1').value;
	let s2=document.getElementById('s2').value;
    	let i1=document.getElementById('i1').value;
     	let  r;
     console.log(s1);
      document.getElementById('i2').innerHTML='varsha';
     if(s1=='c1' && s2=='c2')
	{
          document.getElementById('i2').innerHTML=i1;
      }
	else if(s1=='f1' && s2=='f2')
	{
          document.getElementById('i2').innerHTML=i1;
      }
      else if(s1=='k1' && s2=='k2')
	{
          document.getElementById('i2').innerHTML=i1;
      }
      else if(s1=='c1' && s2=='f2')
      {
          r= (i1*1.8)+32;
          document.getElementById('i2').innerHTML=r;
	 }
       else if(s1=='c1' && s2=='k2')
      {
          r=i1+273.15;
          document.getElementById('i2').innerHTML=r;
	 }
       else if(s1=='f1' && s2=='c2')
      {
          r=i1-32;
          if(r<0)
	    {
            r=r*-1;
            r=(r*5)/9;
            document.getElementById('i2').innerHTML=r*-1;
          }
          else
	    {
          r=(r*5)/9;
          document.getElementById('i2').innerHTML=r;
          } 
	 }
       else if(s1=='f1' && s2=='k2')
      {
           r = 1.8*(i1+459.67);
           document.getElementById('i2').innerHTML=r;
	 }
        else if(s1=='k1' && s2=='c2')
      {
           r=i1-273.15;
           document.getElementById('i2').innerHTML=r;
	 }
        else if(s1=='k1' && s2=='f2')
      {
           r= 1.8*(i1- 273) + 32;
           document.getElementById('i2').innerHTML=r;
	 }
      
}

