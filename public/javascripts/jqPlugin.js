// JavaScript Document
jQuery.cookie = function(name, value, options) { 
if (typeof value != 'undefined') { // name and value given, set cookie 
options = options || {}; 
if (value === null) { 
value = ''; 
options.expires = -1; 
} 
var expires = ''; 
if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) { 
var date; 
if (typeof options.expires == 'number') { 
date = new Date(); 
date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000)); 
} else { 
date = options.expires; 
} 
expires = '; expires=' + date.toUTCString(); 
} 
var path = options.path ? '; path=' + (options.path) : ''; 
var domain = options.domain ? '; domain=' + (options.domain) : ''; 
var secure = options.secure ? '; secure' : ''; 
document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join(''); 
} else { 
var cookieValue = null; 
if (document.cookie && document.cookie != '') { 
var cookies = document.cookie.split(';'); 
for (var i = 0; i < cookies.length; i++) { 
var cookie = jQuery.trim(cookies[i]); 
if (cookie.substring(0, name.length + 1) == (name + '=')) { 
cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); 
break; 
} 
} 
} 
return cookieValue; 
} 
};
// MSDropDown - jquery.dd.js
// author: Marghoob Suleman - Search me on google
// Date: 12th Aug, 2009, {18 Dec, 2010 (2.36)}
// Version: 2.37 {date: 17 June, 2011}
// Revision: 33
// web: www.giftlelo.com | www.marghoobsuleman.com
/*
// msDropDown is free jQuery Plugin: you can redistribute it and/or modify
// it under the terms of the either the MIT License or the Gnu General Public License (GPL) Version 2
*/
;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(5($){3 1L="";3 3m=5(p,q){3 r=p;3 s=1a;3 q=$.3n({1d:4c,2q:7,3o:23,1U:6,1M:4d,3p:\'28\',1N:15,3q:\'4e\',2I:\'\',1j:\'\'},q);1a.1V=2r 3r();3 u="";3 v={};v.2J=6;v.2s=15;v.2t=1o;3 x=15;3 y={2K:\'4f\',1O:\'4g\',1H:\'4h\',29:\'4i\',1h:\'4j\',2L:\'4k\',2M:\'4l\',4m:\'4n\',2u:\'4o\',3s:\'4p\'};3 z={28:q.3p,2N:\'2N\',2O:\'2O\',2P:\'2P\',1t:\'1t\',1k:.30,2a:\'2a\',2v:\'2v\',2w:\'2w\',11:\'11\'};3 A={3t:"2x,2Q,2R,1P,2y,2z,1u,1B,2A,1Q,4q,1W,2S",18:"1C,1v,1k,4r"};1a.1R=2r 3r();3 B=$(r).18("1b");4(1w(B)=="14"||B.1c<=0){B="4s"+$.1S.3u++;$(r).2B("1b",B)};3 C=$(r).18("1j");q.1j+=(C==14)?"":C;3 D=$(r).3v();x=($(r).18("1C")>1||$(r).18("1v")==6)?6:15;4(x){q.2q=$(r).18("1C")};3 E={};3 F=0;3 G=15;3 H;3 I={};3 J=5(a){4(1w(I[a])=="14"){I[a]=1p.4t(a)}12 I[a]};3 K=5(a){12 B+y[a]};3 L=5(a){3 b=a;3 c=$(b).18("1j");12 c};3 M=5(a){3 b=$("#"+B+" 2T:11");4(b.1c>1){1D(3 i=0;i<b.1c;i++){4(a==b[i].1i){12 6}}}19 4(b.1c==1){4(b[0].1i==a){12 6}};12 15};3 N=5(a,b,c,d){3 e="";3 f=(d=="2U")?K("2M"):K("2L");3 g=(d=="2U")?f+"2V"+(b)+"2V"+(c):f+"2V"+(b);3 h="";3 i="";4(q.1N!=15){i=\' \'+q.1N+\' \'+a.3w}19{h=$(a).18("1X");h=(h.1c==0)?"":\'<3x 3y="\'+h+\'" 3z="3A" /> \'};3 j=$(a).1q();3 k=$(a).4u();3 l=($(a).18("1k")==6)?"1k":"2W";E[g]={1I:h+j,2b:k,1q:j,1i:a.1i,1b:g};3 m=L(a);4(M(a.1i)==6){e+=\'<a 3B="3C:3D(0);" 1r="\'+z.11+\' \'+l+i+\'"\'}19{e+=\'<a  3B="3C:3D(0);" 1r="\'+l+i+\'"\'};4(m!==15&&m!==14){e+=" 1j=\'"+m+"\'"};e+=\' 1b="\'+g+\'">\';e+=h+\'<1x 1r="\'+z.1t+\'">\'+j+\'</1x></a>\';12 e};3 O=5(t){3 b=t.3E();4(b.1c==0)12-1;3 a="";1D(3 i 2c E){3 c=E[i].1q.3E();4(c.3F(0,b.1c)==b){a+="#"+E[i].1b+", "}};12(a=="")?-1:a};3 P=5(){3 f=D;4(f.1c==0)12"";3 g="";3 h=K("2L");3 i=K("2M");f.2X(5(c){3 d=f[c];4(d.4v=="4w"){g+="<1y 1r=\'4x\'>";g+="<1x 1j=\'3G-4y:4z;3G-1j:4A; 4B:4C;\'>"+$(d).18("4D")+"</1x>";3 e=$(d).3v();e.2X(5(a){3 b=e[a];g+=N(b,c,a,"2U")});g+="</1y>"}19{g+=N(d,c,"","")}});12 g};3 Q=5(){3 a=K("1O");3 b=K("1h");3 c=q.1j;1Y="";1Y+=\'<1y 1b="\'+b+\'" 1r="\'+z.2P+\'"\';4(!x){1Y+=(c!="")?\' 1j="\'+c+\'"\':\'\'}19{1Y+=(c!="")?\' 1j="2C-1m:4E 4F #4G;1s:2d;1n:2Y;\'+c+\'"\':\'\'};1Y+=\'>\';12 1Y};3 R=5(){3 a=K("1H");3 b=K("2u");3 c=K("29");3 d=K("3s");3 e="";3 f="";4(J(B).1E.1c>0){e=$("#"+B+" 2T:11").1q();f=$("#"+B+" 2T:11").18("1X")};f=(f.1c==0||f==14||q.1U==15||q.1N!=15)?"":\'<3x 3y="\'+f+\'" 3z="3A" /> \';3 g=\'<1y 1b="\'+a+\'" 1r="\'+z.2N+\'"\';g+=\'>\';g+=\'<1x 1b="\'+b+\'" 1r="\'+z.2O+\'"></1x><1x 1r="\'+z.1t+\'" 1b="\'+c+\'">\'+f+\'<1x 1r="\'+z.1t+\'">\'+e+\'</1x></1x></1y>\';12 g};3 S=5(){3 c=K("1h");$("#"+c+" a.2W").1J("1P");$("#"+c+" a.2W").1e("1P",5(a){a.1Z();V(1a);21();4(!x){$("#"+c).1J("1B");X(15);3 b=(q.1U==15)?$(1a).1q():$(1a).1I();1T(b);s.2e()}})};3 T=5(){3 d=15;3 e=K("1O");3 f=K("1H");3 g=K("29");3 h=K("1h");3 i=K("2u");3 j=$("#"+B).2Z();j=j+2;3 k=q.1j;4($("#"+e).1c>0){$("#"+e).2D();d=6};3 l=\'<1y 1b="\'+e+\'" 1r="\'+z.28+\'"\';l+=(k!="")?\' 1j="\'+k+\'"\':\'\';l+=\'>\';l+=R();l+=Q();l+=P();l+="</1y>";l+="</1y>";4(d==6){3 m=K("2K");$("#"+m).31(l)}19{$("#"+B).31(l)};4(x){3 f=K("1H");$("#"+f).2f()};$("#"+e).9("2Z",j+"1z");$("#"+h).9("2Z",(j-2)+"1z");4(D.1c>q.2q){3 n=2g($("#"+h+" a:3H").9("2h-3I"))+2g($("#"+h+" a:3H").9("2h-1m"));3 o=((q.3o)*q.2q)-n;$("#"+h).9("1d",o+"1z")}19 4(x){3 o=$("#"+B).1d();$("#"+h).9("1d",o+"1z")};4(d==15){3J();W(B)};4($("#"+B).18("1k")==6){$("#"+e).9("2E",z.1k)};Z();$("#"+f).1e("1B",5(a){32(1)});$("#"+f).1e("1Q",5(a){32(0)});S();$("#"+h+" a.1k").9("2E",z.1k);4(x){$("#"+h).1e("1B",5(c){4(!v.2s){v.2s=6;$(1p).1e("1W",5(a){3 b=a.3K;v.2t=b;4(b==39||b==40){a.1Z();a.2i();33();21()};4(b==37||b==38){a.1Z();a.2i();34();21()}})}})};$("#"+h).1e("1Q",5(a){X(15);$(1p).1J("1W");v.2s=15;v.2t=1o});$("#"+f).1e("1P",5(b){X(15);4($("#"+h+":2j").1c==1){$("#"+h).1J("1B")}19{$("#"+h).1e("1B",5(a){X(6)});s.3L()}});$("#"+f).1e("1Q",5(a){X(15)});4(q.1U&&q.1N!=15){2k()}};3 U=5(a){1D(3 i 2c E){4(E[i].1i==a){12 E[i]}};12-1};3 V=5(a){3 b=K("1h");4($("#"+b+" a."+z.11).1c==1){u=$("#"+b+" a."+z.11).1q()};4(!x){$("#"+b+" a."+z.11).1K(z.11)};3 c=$("#"+b+" a."+z.11).18("1b");4(c!=14){3 d=(v.22==14||v.22==1o)?E[c].1i:v.22};4(a&&!x){$(a).1F(z.11)};4(x){3 e=v.2t;4($("#"+B).18("1v")==6){4(e==17){v.22=E[$(a).18("1b")].1i;$(a).4H(z.11)}19 4(e==16){$("#"+b+" a."+z.11).1K(z.11);$(a).1F(z.11);3 f=$(a).18("1b");3 g=E[f].1i;1D(3 i=35.4I(d,g);i<=35.4J(d,g);i++){$("#"+U(i).1b).1F(z.11)}}19{$("#"+b+" a."+z.11).1K(z.11);$(a).1F(z.11);v.22=E[$(a).18("1b")].1i}}19{$("#"+b+" a."+z.11).1K(z.11);$(a).1F(z.11);v.22=E[$(a).18("1b")].1i}}};3 W=5(a){3 b=a;J(b).4K=5(e){$("#"+b).1S(q)}};3 X=5(a){v.2J=a};3 Y=5(){12 v.2J};3 Z=5(){3 b=K("1O");3 c=A.3t.4L(",");1D(3 d=0;d<c.1c;d++){3 e=c[d];3 f=24(e);4(f==6){2F(e){1f"2x":$("#"+b).1e("4M",5(a){J(B).2x()});1g;1f"1P":$("#"+b).1e("1P",5(a){$("#"+B).1G("1P")});1g;1f"2y":$("#"+b).1e("2y",5(a){$("#"+B).1G("2y")});1g;1f"2z":$("#"+b).1e("2z",5(a){$("#"+B).1G("2z")});1g;1f"1u":$("#"+b).1e("1u",5(a){$("#"+B).1G("1u")});1g;1f"1B":$("#"+b).1e("1B",5(a){$("#"+B).1G("1B")});1g;1f"2A":$("#"+b).1e("2A",5(a){$("#"+B).1G("2A")});1g;1f"1Q":$("#"+b).1e("1Q",5(a){$("#"+B).1G("1Q")});1g}}}};3 3J=5(){3 a=K("2K");$("#"+B).31("<1y 1r=\'"+z.2a+"\' 1j=\'1d:3M;3N:3O;1n:36;\' 1b=\'"+a+"\'></1y>");$("#"+B).4N($("#"+a))};3 1T=5(a){3 b=K("29");$("#"+b).1I(a)};3 3a=5(w){3 a=w;3 b=K("1h");3 c=$("#"+b+" a:2j");3 d=c.1c;3 e=$("#"+b+" a:2j").1i($("#"+b+" a.11:2j"));3 f;2F(a){1f"3b":4(e<d-1){e++;f=c[e]};1g;1f"3P":4(e<d&&e>0){e--;f=c[e]};1g};4(1w(f)=="14"){12 15};$("#"+b+" a."+z.11).1K(z.11);$(f).1F(z.11);3 g=f.1b;4(!x){3 h=(q.1U==15)?E[g].1q:$("#"+g).1I();1T(h);2k(E[g].1i)};4(a=="3b"){4(2g(($("#"+g).1n().1m+$("#"+g).1d()))>=2g($("#"+b).1d())){$("#"+b).2l(($("#"+b).2l())+$("#"+g).1d()+$("#"+g).1d())}}19{4(2g(($("#"+g).1n().1m+$("#"+g).1d()))<=0){$("#"+b).2l(($("#"+b).2l()-$("#"+b).1d())-$("#"+g).1d())}}};3 33=5(){3a("3b")};3 34=5(){3a("3P")};3 2k=5(i){4(q.1N!=15){3 a=K("29");3 b=(1w(i)=="14")?J(B).1l:i;3 c=J(B).1E[b].3w;4(c.1c>0){3 d=K("1h");3 e=$("#"+d+" a."+c).18("1b");3 f=$("#"+e).9("2m-4O");3 g=$("#"+e).9("2m-1n");3 h=$("#"+e).9("2h-3Q");4(f!=14){$("#"+a).2n("."+z.1t).2B(\'1j\',"2m:"+f)};4(g!=14){$("#"+a).2n("."+z.1t).9(\'2m-1n\',g)};4(h!=14){$("#"+a).2n("."+z.1t).9(\'2h-3Q\',h)};$("#"+a).2n("."+z.1t).9(\'2m-3R\',\'4P-3R\');$("#"+a).2n("."+z.1t).9(\'2h-3I\',\'4Q\')}}};3 21=5(){3 a=K("1h");3 b=$("#"+a+" a."+z.11);4(b.1c==1){3 c=$("#"+a+" a."+z.11).1q();3 d=$("#"+a+" a."+z.11).18("1b");4(d!=14){3 e=E[d].2b;J(B).1l=E[d].1i};4(q.1U&&q.1N!=15)2k()}19 4(b.1c>1){1D(3 i=0;i<b.1c;i++){3 d=$(b[i]).18("1b");3 f=E[d].1i;J(B).1E[f].11="11"}};3 g=J(B).1l;s.1V["1l"]=g};3 24=5(a){4($("#"+B).18("4R"+a)!=14){12 6};3 b=$("#"+B).3c("4S");4(b&&b[a]){12 6};12 15};3 3S=5(){3 b=K("1h");4(24(\'2R\')==6){3 c=E[$("#"+b+" a.11").18("1b")].1q;4($.3T(u)!==$.3T(c)&&u!==""){$("#"+B).1G("2R")}};4(24(\'1u\')==6){$("#"+B).1G("1u")};4(24(\'2Q\')==6){$(1p).1e("1u",5(a){$("#"+B).2x();$("#"+B)[0].2Q();21();$(1p).1J("1u")})}};3 32=5(a){3 b=K("2u");4(a==1)$("#"+b).9({3U:\'0 4T%\'});19 $("#"+b).9({3U:\'0 0\'})};3 3V=5(){1D(3 i 2c J(B)){4(1w(J(B)[i])!=\'5\'&&J(B)[i]!==14&&J(B)[i]!==1o){s.1A(i,J(B)[i],6)}}};3 3W=5(a,b){4(U(b)!=-1){J(B)[a]=b;3 c=K("1h");$("#"+c+" a."+z.11).1K(z.11);$("#"+U(b).1b).1F(z.11);3 d=U(J(B).1l).1I;1T(d)}};3 3X=5(i,a){4(a==\'d\'){1D(3 b 2c E){4(E[b].1i==i){4U E[b];1g}}};3 c=0;1D(3 b 2c E){E[b].1i=c;c++}};3 2G=5(){3 a=K("1h");3 b=K("1O");3 c=$("#"+b).1n();3 d=$("#"+b).1d();3 e=$(3Y).1d();3 f=$(3Y).2l();3 g=$("#"+a).1d();3 h={1M:q.1M,1m:(c.1m+d)+"1z",1s:"2o"};3 i=q.3q;3 j=15;3 k=z.2w;$("#"+a).1K(z.2w);$("#"+a).1K(z.2v);4((e+f)<35.4V(g+d+c.1m)){3 l=c.1m-g;4((c.1m-g)<0){l=10};h={1M:q.1M,1m:l+"1z",1s:"2o"};i="25";j=6;k=z.2v};12{3d:j,3Z:i,9:h,2C:k}};3 3e=5(){4(s.1R["41"]!=1o){2H(s.1R["41"])(s)}};3 3f=5(){3S();4(s.1R["42"]!=1o){2H(s.1R["42"])(s)}};1a.3L=5(){4((s.26("1k",6)==6)||(s.26("1E",6).1c==0))12;3 e=K("1h");4(1L!=""&&e!=1L){$("#"+1L).43("3g");$("#"+1L).9({1M:\'0\'})};4($("#"+e).9("1s")=="2o"){u=E[$("#"+e+" a.11").18("1b")].1q;3 f="";H=$("#"+e).1d();$("#"+e+" a").25();$(1p).1e("1W",5(a){3 b=a.3K;4(b==8){a.1Z();a.2i();f=(f.1c==0)?"":f.3F(0,f.1c-1)};2F(b){1f 39:1f 40:a.1Z();a.2i();33();1g;1f 37:1f 38:a.1Z();a.2i();34();1g;1f 27:1f 13:s.2e();21();1g;44:4(b>46){f+=4W.4X(b)};3 c=O(f);4(c!=-1){$("#"+e).9({1d:\'4Y\'});$("#"+e+" a").2f();$(c).25();3 d=2G();$("#"+e).9(d.9);$("#"+e).9({1s:\'2d\'})}19{$("#"+e+" a").25();$("#"+e).9({1d:H+\'1z\'})};1g};4(24("1W")==6){J(B).4Z()}});$(1p).1e("2S",5(a){4($("#"+B).18("45")!=14){J(B).45()}});$(1p).1e("1u",5(a){4(Y()==15){s.2e()}});3 g=2G();$("#"+e).9(g.9);4(g.3d==6){$("#"+e).9({1s:\'2d\'});$("#"+e).1F(g.2C);3e()}19{$("#"+e)[g.3Z]("3g",5(){$("#"+e).1F(g.2C);3e()})};4(e!=1L){1L=e}}};1a.2e=5(){3 b=K("1h");3 c=$("#"+K("1H")).1n().1m;3 d=2G();G=15;4(d.3d==6){$("#"+b).50({1d:0,1m:c},5(){$("#"+b).9({1d:H+\'1z\',1s:\'2o\'});3f()})}19{$("#"+b).43("3g",5(a){3f();$("#"+b).9({1M:\'0\'});$("#"+b).9({1d:H+\'1z\'})})};2k();$(1p).1J("1W");$(1p).1J("2S");$(1p).1J("1u")};1a.1l=5(i){4(1w(i)=="14"){12 s.26("1l")}19{s.1A("1l",i)}};1a.51=5(a){4(1w(a)=="14"||a==6){$("."+z.2a).52("1j")}19{$("."+z.2a).2B("1j","1d:3M;3N:3O;1n:36")}};1a.1A=5(a,b,c){4(a==14||b==14)47{48:"1A 53 54?"};s.1V[a]=b;4(c!=6){2F(a){1f"1l":3W(a,b);1g;1f"1k":s.1k(b,6);1g;1f"1v":J(B)[a]=b;x=($(r).18("1C")>0||$(r).18("1v")==6)?6:15;4(x){3 d=$("#"+B).1d();3 f=K("1h");$("#"+f).9("1d",d+"1z");3 g=K("1H");$("#"+g).2f();3 f=K("1h");$("#"+f).9({1s:\'2d\',1n:\'2Y\'});S()};1g;1f"1C":J(B)[a]=b;4(b==0){J(B).1v=15};x=($(r).18("1C")>0||$(r).18("1v")==6)?6:15;4(b==0){3 g=K("1H");$("#"+g).25();3 f=K("1h");$("#"+f).9({1s:\'2o\',1n:\'36\'});3 h="";4(J(B).1l>=0){3 i=U(J(B).1l);h=i.1I;V($("#"+i.1b))};1T(h)}19{3 g=K("1H");$("#"+g).2f();3 f=K("1h");$("#"+f).9({1s:\'2d\',1n:\'2Y\'})};1g;44:55{J(B)[a]=b}56(e){};1g}}};1a.26=5(a,b){4(a==14&&b==14){12 s.1V};4(a!=14&&b==14){12(s.1V[a]!=14)?s.1V[a]:1o};4(a!=14&&b!=14){12 J(B)[a]}};1a.2j=5(a){3 b=K("1O");4(a==6){$("#"+b).25()}19 4(a==15){$("#"+b).2f()}19{12 $("#"+b).9("1s")}};1a.57=5(a,b){3 c=a;3 d=c.1q;3 e=(c.2b==14||c.2b==1o)?d:c.2b;3 f=(c["1X"]==14||c["1X"]==1o)?\'\':c["1X"];3 i=(b==14||b==1o)?J(B).1E.1c:b;J(B).1E[i]=2r 58(d,e);4(f!=\'\')J(B).1E[i]["1X"]=f;3 g=U(i);4(g!=-1){3 h=N(J(B).1E[i],i,"","");$("#"+g.1b).1I(h)}19{3 h=N(J(B).1E[i],i,"","");3 j=K("1h");$("#"+j).59(h);S()}};1a.2D=5(i){J(B).2D(i);4((U(i))!=-1){$("#"+U(i).1b).2D();3X(i,\'d\')};4(J(B).1c==0){1T("")}19{3 a=U(J(B).1l).1I;1T(a)};s.1A("1l",J(B).1l)};1a.1k=5(a,b){J(B).1k=a;3 c=K("1O");4(a==6){$("#"+c).9("2E",z.1k);s.2e()}19 4(a==15){$("#"+c).9("2E",1)};4(b!=6){s.1A("1k",a)}};1a.3h=5(){12(J(B).3h==14)?1o:J(B).3h};1a.3i=5(){4(2p.1c==1){12 J(B).3i(2p[0])}19 4(2p.1c==2){12 J(B).3i(2p[0],2p[1])}19{47{48:"5a 1i 5b 5c!"}}};1a.49=5(a){12 J(B).49(a)};1a.1v=5(a){4(1w(a)=="14"){12 s.26("1v")}19{s.1A("1v",a)}};1a.1C=5(a){4(1w(a)=="14"){12 s.26("1C")}19{s.1A("1C",a)}};1a.5d=5(a,b){s.1R[a]=b};1a.5e=5(a){2H(s.1R[a])(s)};3 4a=5(){s.1A("3j",$.1S.3j);s.1A("3k",$.1S.3k)};3 4b=5(){T();3V();4a();4(q.2I!=\'\'){2H(q.2I)(s)}};4b()};$.1S={3j:2.37,3k:"5f 5g",3u:20,5h:5(a,b){12 $(a).1S(b).3c("28")}};$.3l.3n({1S:5(b){12 1a.2X(5(){3 a=2r 3m(1a,b);$(1a).3c(\'28\',a)})}});4(1w($.3l.18)==\'14\'){$.3l.18=5(w){12 $(1a).2B(w)}}})(5i);',62,329,'|||var|if|function|true|||css||||||||||||||||||||||||||||||||||||||||||||||||||||||selected|return||undefined|false|||prop|else|this|id|length|height|bind|case|break|postChildID|index|style|disabled|selectedIndex|top|position|null|document|text|class|display|ddTitleText|mouseup|multiple|typeof|span|div|px|set|mouseover|size|for|options|addClass|trigger|postTitleID|html|unbind|removeClass|bs|zIndex|useSprite|postID|click|mouseout|onActions|msDropDown|bv|showIcon|ddProp|keydown|title|sDiv|preventDefault||bA|oldIndex||bB|show|get||dd|postTitleTextID|ddOutOfVision|value|in|block|close|hide|parseInt|padding|stopPropagation|visible|bz|scrollTop|background|find|none|arguments|visibleRows|new|keyboardAction|currentKey|postArrowID|borderTop|noBorderTop|focus|dblclick|mousedown|mousemove|attr|border|remove|opacity|switch|bH|eval|onInit|insideWindow|postElementHolder|postAID|postOPTAID|ddTitle|arrow|ddChild|blur|change|keyup|option|opt|_|enabled|each|relative|width||after|bD|bx|by|Math|absolute||||bw|next|data|opp|bI|bJ|fast|form|item|version|author|fn|bt|extend|rowHeight|mainCSS|animStyle|Object|postInputhidden|actions|counter|children|className|img|src|align|absmiddle|href|javascript|void|toLowerCase|substr|font|first|bottom|bu|keyCode|open|0px|overflow|hidden|previous|left|repeat|bC|trim|backgroundPosition|bE|bF|bG|window|ani||onOpen|onClose|slideUp|default|onkeyup||throw|message|namedItem|bK|bL|120|9999|slideDown|_msddHolder|_msdd|_title|_titletext|_child|_msa|_msopta|postInputID|_msinput|_arrow|_inp|keypress|tabindex|msdrpdd|getElementById|val|nodeName|OPTGROUP|opta|weight|bold|italic|clear|both|label|1px|solid|c3c3c3|toggleClass|min|max|refresh|split|mouseenter|appendTo|image|no|2px|on|events|100|delete|floor|String|fromCharCode|auto|onkeydown|animate|debug|removeAttr|to|what|try|catch|add|Option|append|An|is|required|addMyEvent|fireEvent|Marghoob|Suleman|create|jQuery'.split('|'),0,{}))

/*!
 * artDialog 4.1.7
 * Date: 2013-03-03 08:04
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
 
;(function (window, undefined) {
//if (window.jQuery) return jQuery;

var $ = window.art = function (selector, context) {
    	return new $.fn.init(selector, context);
	},
    readyBound = false,
    readyList = [],
    DOMContentLoaded,
	isOpacity = 'opacity' in document.documentElement.style,
	quickExpr = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
	rclass = /[\n\t]/g,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
    rfxnum = /^([+-]=)?([\d+-.]+)(.*)$/;

if (window.$ === undefined) window.$ = $;
$.fn = $.prototype = {
	constructor: $,
	
    /**
	 * DOM 就绪
	 * @param	{Function}	回调函数
	 */
    ready: function (callback) {
        $.bindReady();

        if ($.isReady) {
            callback.call(document, $);
        } else if (readyList) {
            readyList.push(callback);
        };

        return this;
    },

    /**
	 * 判断样式类是否存在
	 * @param	{String}	名称
	 * @return	{Boolean}
	 */
    hasClass: function (name) {		
		var className = ' ' + name + ' ';
		if ((' ' + this[0].className + ' ').replace(rclass, ' ')
		.indexOf(className) > -1) return true;

		return false;
    },

    /**
	 * 添加样式类
	 * @param	{String}	名称
	 */
    addClass: function (name) {
        if (!this.hasClass(name)) this[0].className += ' ' + name;

        return this;
    },

    /**
	 * 移除样式类
	 * @param	{String}	名称
	 */
    removeClass: function (name) {
        var elem = this[0];

        if (!name) {
            elem.className = '';
        } else
		if (this.hasClass(name)) {
            elem.className = elem.className.replace(name, ' ');
        };

        return this;
    },

    /**
	 * 读写样式<br />
     * css(name) 访问第一个匹配元素的样式属性<br />
     * css(properties) 把一个"名/值对"对象设置为所有匹配元素的样式属性<br />
     * css(name, value) 在所有匹配的元素中，设置一个样式属性的值<br />
	 */
    css: function (name, value) {
        var i, elem = this[0], obj = arguments[0];

        if (typeof name === 'string') {
            if (value === undefined) {
                return $.css(elem, name);
            } else {
                name === 'opacity' ?
					$.opacity.set(elem, value) :
					elem.style[name] = value;
            };
        } else {
            for (i in obj) {
				i === 'opacity' ?
					$.opacity.set(elem, obj[i]) :
					elem.style[i] = obj[i];
			};
        };

        return this;
    },
	
	/** 显示元素 */
	show: function () {
		return this.css('display', 'block');
	},
	
	/** 隐藏元素 */
	hide: function () {
		return this.css('display', 'none');
	},

    /**
	 * 获取相对文档的坐标
	 * @return	{Object}	返回left、top的数值
	 */
    offset: function () {
        var elem = this[0],
            box = elem.getBoundingClientRect(),
            doc = elem.ownerDocument,
            body = doc.body,
            docElem = doc.documentElement,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            top = box.top + (self.pageYOffset || docElem.scrollTop) - clientTop,
            left = box.left + (self.pageXOffset || docElem.scrollLeft) - clientLeft;

        return {
            left: left,
            top: top
        };
    },
	
	/**
	 * 读写HTML - (不支持文本框)
	 * @param	{String}	内容
	 */
	html: function (content) {
		var elem = this[0];
		
		if (content === undefined) return elem.innerHTML;
		$.cleanData(elem.getElementsByTagName('*'));
		elem.innerHTML = content;
		
		return this;
	},
	
	/**
	 * 移除节点
	 */
	remove: function () {
		var elem = this[0];

		$.cleanData(elem.getElementsByTagName('*'));
		$.cleanData([elem]);
		elem.parentNode.removeChild(elem);
		
		return this;
	},

	/**
	 * 事件绑定
	 * @param	{String}	类型
	 * @param	{Function}	要绑定的函数
	 */
	bind: function (type, callback) {
		$.event.add(this[0], type, callback);
		return this;
	},

	/**
	 * 移除事件
	 * @param	{String}	类型
	 * @param	{Function}	要卸载的函数
	 */
	unbind: function(type, callback) {
		$.event.remove(this[0], type, callback);
		return this;
	}
	
};

$.fn.init = function (selector, context) {
	var match, elem;
	context = context || document;
	
	if (!selector) return this;
	
	if (selector.nodeType) {
		this[0] = selector;
		return this;
	};
	
	if (selector === 'body' && context.body) {
		this[0] = context.body;
		return this;
	};
	
	if (selector === 'head' || selector === 'html') {
		this[0] = context.getElementsByTagName(selector)[0];
		return this;
	};
		
	if (typeof selector === 'string') {
		match = quickExpr.exec(selector);

		if (match && match[2]) {
			elem = context.getElementById(match[2]);
			if (elem && elem.parentNode) this[0] = elem;
			return this;
		};
	};
	
	if (typeof selector === 'function') return $(document).ready(selector);
	
	this[0] = selector;
	
	return this;
};
$.fn.init.prototype = $.fn;

/** 空函数 */
$.noop = function () {};

/** 检测window */
$.isWindow = function (obj) {
	return obj && typeof obj === 'object' && 'setInterval' in obj;
};

/** 数组判定 */
$.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

/**
 * 搜索子元素
 * 注意：只支持nodeName或.className的形式，并且只返回第一个元素
 * @param	{String}
 */
$.fn.find = function (expr) {
	var value, elem = this[0],
		className = expr.split('.')[1];

	if (className) {
		if (document.getElementsByClassName) {
			value = elem.getElementsByClassName(className);
		} else {
			value = getElementsByClassName(className, elem);
		};
	} else {
		value = elem.getElementsByTagName(expr);
	};
	
	return $(value[0]);
};
function getElementsByClassName (className, node, tag) {
	node = node || document;
	tag = tag || '*';
	var i = 0,
		j = 0,
		classElements = [],
		els = node.getElementsByTagName(tag),
		elsLen = els.length,
		pattern = new RegExp("(^|\\s)" + className + "(\\s|$)");
		
	for (; i < elsLen; i ++) {
		if (pattern.test(els[i].className)) {
			classElements[j] = els[i];
			j ++;
		};
	};
	return classElements;
};

/**
 * 遍历
 * @param {Object}
 * @param {Function}
 */
$.each = function (obj, callback) {
    var name, i = 0,
        length = obj.length,
        isObj = length === undefined;

    if (isObj) {
        for (name in obj) {
            if (callback.call(obj[name], name, obj[name]) === false) break;
        };
    } else {
        for (var value = obj[0];
		i < length && callback.call(value, i, value) !== false;
		value = obj[++i]) {};
    };
	
	return obj;
};

/**
 * 读写缓存
 * @param		{HTMLElement}	元素
 * @param		{String}		缓存名称
 * @param		{Any}			数据
 * @return		{Any}			如果无参数data则返回缓存数据
 */
$.data = function (elem, name, data) {
	var cache = $.cache,
		id = uuid(elem);
	
	if (name === undefined) return cache[id];
	if (!cache[id]) cache[id] = {};
	if (data !== undefined) cache[id][name] = data;
	
	return cache[id][name];
};

/**
 * 删除缓存
 * @param		{HTMLElement}	元素
 * @param		{String}		缓存名称
 */
$.removeData = function (elem, name) {
	var empty = true,
		expando = $.expando,
		cache = $.cache,
		id = uuid(elem),
		thisCache = id && cache[id];

	if (!thisCache) return;
	if (name) {
		delete thisCache[name];
		for (var n in thisCache) empty = false;
		if (empty) delete $.cache[id];
	} else {
		delete cache[id];
		if (elem.removeAttribute) {
			elem.removeAttribute(expando);
		} else {
			elem[expando] = null;
		};
	};
};

$.uuid = 0;
$.cache = {};
$.expando = '@cache' + + new Date

// 标记元素唯一身份
function uuid (elem) {
	var expando = $.expando,
		id = elem === window ? 0 : elem[expando];
	if (id === undefined) elem[expando] = id = ++ $.uuid;
	return id;
};


/**
 * 事件机制
 * @namespace
 * @requires	[$.data, $.removeData]
 */
$.event = {
	
	/**
	 * 添加事件
	 * @param		{HTMLElement}	元素
	 * @param		{String}		事件类型
	 * @param		{Function}		要添加的函数
	 */
	add: function (elem, type, callback) {
		var cache, listeners,
			that = $.event,
			data = $.data(elem, '@events') || $.data(elem, '@events', {});
		
		cache = data[type] = data[type] || {};
		listeners = cache.listeners = cache.listeners || [];
		listeners.push(callback);
		
		if (!cache.handler) {
			cache.elem = elem;
			cache.handler = that.handler(cache);
			
			elem.addEventListener
			? elem.addEventListener(type, cache.handler, false)
			: elem.attachEvent('on' + type, cache.handler);
		};
	},
	
	/**
	 * 卸载事件
	 * @param		{HTMLElement}	元素
	 * @param		{String}		事件类型
	 * @param		{Function}		要卸载的函数
	 */
	remove: function (elem, type, callback) {
		var i, cache, listeners,
			that = $.event,
			empty = true,
			data = $.data(elem, '@events');
		
		if (!data) return;
		if (!type) {
			for (i in data) that.remove(elem, i);
			return;
		};
		
		cache = data[type];
		if (!cache) return;
		
		listeners = cache.listeners;
		if (callback) {
			for (i = 0; i < listeners.length; i ++) {
				listeners[i] === callback && listeners.splice(i--, 1);
			};
		} else {
			cache.listeners = [];
		};
		
		if (cache.listeners.length === 0) {
			elem.removeEventListener
			? elem.removeEventListener(type, cache.handler, false)
			: elem.detachEvent('on' + type, cache.handler);
			
			delete data[type];
			cache = $.data(elem, '@events');
			for (var n in cache) empty = false;
			if (empty) $.removeData(elem, '@events');
		};
	},
	
	/** @inner 事件句柄 */
	handler: function (cache) {
		return function (event) {
			event = $.event.fix(event || window.event);
			for (var i = 0, list = cache.listeners, fn; fn = list[i++];) {
				if (fn.call(cache.elem, event) === false) {
					event.preventDefault();
					event.stopPropagation();
				};
			};
		};
	},
	
	/** @inner Event对象兼容处理 */
	fix: function (event) {
		if (event.target) return event;
		
		var event2 = {
			target: event.srcElement || document,
			preventDefault: function () {event.returnValue = false},
			stopPropagation: function () {event.cancelBubble = true}
		};
		// IE6/7/8 在原生window.event对象写入数据会导致内存无法回收，应当采用拷贝
		for (var i in event) event2[i] = event[i];
		return event2;
	}
	
};

/**
 * 清理元素集的事件与缓存
 * @requires	[$.removeData, $.event]
 * @param		{HTMLCollection}	元素集
 */
$.cleanData = function (elems) {
	var i = 0, elem,
		len = elems.length,
		removeEvent = $.event.remove,
		removeData = $.removeData;
	
	for (; i < len; i ++) {
		elem = elems[i];
		removeEvent(elem);
		removeData(elem);
	};
};

// DOM就绪事件
$.isReady = false;
$.ready = function () {
    if (!$.isReady) {
        if (!document.body) return setTimeout($.ready, 13);
        $.isReady = true;

        if (readyList) {
            var fn, i = 0;
            while ((fn = readyList[i++])) {
                fn.call(document, $);
            };
            readyList = null;
        };
    };
};
$.bindReady = function () {
    if (readyBound) return;

    readyBound = true;

    if (document.readyState === 'complete') {
        return $.ready();
    };

    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
        window.addEventListener('load', $.ready, false);
    } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', DOMContentLoaded);
        window.attachEvent('onload', $.ready);
        var toplevel = false;
        try {
            toplevel = window.frameElement == null;
        } catch (e) {};

        if (document.documentElement.doScroll && toplevel) {
            doScrollCheck();
        };
    };
};

if (document.addEventListener) {
    DOMContentLoaded = function () {
        document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);
        $.ready();
    };
} else if (document.attachEvent) {
    DOMContentLoaded = function () {
        if (document.readyState === 'complete') {
            document.detachEvent('onreadystatechange', DOMContentLoaded);
            $.ready();
        };
    };
};

function doScrollCheck () {
    if ($.isReady) return;

    try {
        document.documentElement.doScroll('left');
    } catch (e) {
        setTimeout(doScrollCheck, 1);
        return;
    };
    $.ready();
};

// 获取css
$.css = 'defaultView' in document && 'getComputedStyle' in document.defaultView ?
	function (elem, name) {
		return document.defaultView.getComputedStyle(elem, false)[name];
} :
	function (elem, name) {
		var ret = name === 'opacity' ? $.opacity.get(elem) : elem.currentStyle[name];
		return ret || '';
};

// 跨浏览器处理opacity
$.opacity = {
	get: function (elem) {
		return isOpacity ?
			document.defaultView.getComputedStyle(elem, false).opacity :
			ropacity.test((elem.currentStyle
				? elem.currentStyle.filter
				: elem.style.filter) || '')
				? (parseFloat(RegExp.$1) / 100) + ''
				: 1;
	},
	set: function (elem, value) {
		if (isOpacity) return elem.style.opacity = value;
		var style = elem.style;
		style.zoom = 1;

		var opacity = 'alpha(opacity=' + value * 100 + ')',
			filter = style.filter || '';

		style.filter = ralpha.test(filter) ?
			filter.replace(ralpha, opacity) :
			style.filter + ' ' + opacity;
	}
};

/**
 * 获取滚动条位置 - [不支持写入]
 * $.fn.scrollLeft, $.fn.scrollTop
 * @example		获取文档垂直滚动条：$(document).scrollTop()
 * @return		{Number}	返回滚动条位置
 */
$.each(['Left', 'Top'], function (i, name) {
    var method = 'scroll' + name;

    $.fn[method] = function () {
        var elem = this[0], win;

		win = getWindow(elem);
		return win ?
			('pageXOffset' in win) ?
				win[i ? 'pageYOffset' : 'pageXOffset'] :
				win.document.documentElement[method] || win.document.body[method] :
			elem[method];
    };
});

function getWindow (elem) {
	return $.isWindow(elem) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
};

/**
 * 获取窗口或文档尺寸 - [只支持window与document读取]
 * @example 
   获取文档宽度：$(document).width()
   获取可视范围：$(window).width()
 * @return	{Number}
 */
$.each(['Height', 'Width'], function (i, name) {
    var type = name.toLowerCase();

    $.fn[type] = function (size) {
        var elem = this[0];
        if (!elem) {
            return size == null ? null : this;
        };

		return $.isWindow(elem) ?
			elem.document.documentElement['client' + name] || elem.document.body['client' + name] :
			(elem.nodeType === 9) ?
				Math.max(
					elem.documentElement['client' + name],
					elem.body['scroll' + name], elem.documentElement['scroll' + name],
					elem.body['offset' + name], elem.documentElement['offset' + name]
				) : null;
    };

});

/**
 * 简单ajax支持
 * @example
 * $.ajax({
 * 		url: url,
 * 		success: callback,
 * 		cache: cache
 * });
 */
$.ajax = function (config) {
	var ajax = window.XMLHttpRequest ?
			new XMLHttpRequest() :
			new ActiveXObject('Microsoft.XMLHTTP'),
		url = config.url;
	
	if (config.cache === false) {
		var ts = + new Date,
			ret = url.replace(/([?&])_=[^&]*/, "$1_=" + ts );
		url = ret + ((ret === url) ? (/\?/.test(url) ? "&" : "?") + "_=" + ts : "");
	};
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState === 4 && ajax.status === 200) {
			config.success && config.success(ajax.responseText);
			ajax.onreadystatechange = $.noop;
		};
	};
	ajax.open('GET', url, 1);
	ajax.send(null);
};

/** 动画引擎 - [不支持链式列队操作] */
$.fn.animate = function (prop, speed, easing, callback) {
	
	speed = speed || 400;
	if (typeof easing === 'function') callback = easing;
	easing = easing && $.easing[easing] ? easing : 'swing';
	
    var elem = this[0], overflow,
        fx, parts, start, end, unit,
		opt = {
			speed: speed,
			easing: easing,
			callback: function () {
				if (overflow != null) elem.style.overflow = '';
				callback && callback();
			}
		};
	
	opt.curAnim = {};
	$.each(prop, function (name, val) {
		opt.curAnim[name] = val;
	});
	
    $.each(prop, function (name, val) {
        fx = new $.fx(elem, opt, name);
        parts = rfxnum.exec(val);
        start = parseFloat(name === 'opacity'
			|| (elem.style && elem.style[name] != null) ?
			$.css(elem, name) :
			elem[name]);
        end = parseFloat(parts[2]);
        unit = parts[3];
		if (name === 'height' || name === 'width') {
			end = Math.max(0, end);
			overflow = [elem.style.overflow,
			elem.style.overflowX, elem.style.overflowY];
		};
		
        fx.custom(start, end, unit);
    });
	
	if (overflow != null) elem.style.overflow = 'hidden';

    return this;
};

$.timers = [];
$.fx = function (elem, options, prop) {
    this.elem = elem;
    this.options = options;
    this.prop = prop;
};

$.fx.prototype = {
    custom: function (from, to, unit) {
		var that = this;
        that.startTime = $.fx.now();
        that.start = from;
        that.end = to;
        that.unit = unit;
        that.now = that.start;
        that.state = that.pos = 0;

        function t() {
            return that.step();
        };
        t.elem = that.elem;
		t();
        $.timers.push(t);
        if (!$.timerId) $.timerId = setInterval($.fx.tick, 13);
    },
    step: function () {
        var that = this, t = $.fx.now(), done = true;
		
        if (t >= that.options.speed + that.startTime) {
            that.now = that.end;
            that.state = that.pos = 1;
            that.update();
			
			that.options.curAnim[that.prop] = true;
			for (var i in that.options.curAnim) {
				if (that.options.curAnim[i] !== true) {
					done = false;
				};
			};
			
			if (done) that.options.callback.call(that.elem);
			
            return false;
        } else {
            var n = t - that.startTime;
            that.state = n / that.options.speed;
            that.pos = $.easing[that.options.easing](that.state, n, 0, 1, that.options.speed);
            that.now = that.start + ((that.end - that.start) * that.pos);
            that.update();
            return true;
        };
    },
    update: function () {
		var that = this;
		if (that.prop === 'opacity') {
			$.opacity.set(that.elem, that.now);
		} else
		if (that.elem.style && that.elem.style[that.prop] != null) {
			that.elem.style[that.prop] = that.now + that.unit;
		} else {
			that.elem[that.prop] = that.now;
		};
    }
};

$.fx.now = function () {
    return + new Date;
};

$.easing = {
    linear: function (p, n, firstNum, diff) {
        return firstNum + diff * p;
    },
    swing: function (p, n, firstNum, diff) {
        return ((-Math.cos(p * Math.PI) / 2) + 0.5) * diff + firstNum;
    }
};

$.fx.tick = function () {
	var timers = $.timers;
    for (var i = 0; i < timers.length; i++) {
        !timers[i]() && timers.splice(i--, 1);
    };
    !timers.length && $.fx.stop();
};

$.fx.stop = function () {
    clearInterval($.timerId);
    $.timerId = null;
};

$.fn.stop = function () {
	var timers = $.timers;
    for (var i = timers.length - 1; i >= 0; i--) {
    	if (timers[i].elem === this[0]) timers.splice(i, 1);
	};
    return this;
};

//-------------end
return $}(window));




//------------------------------------------------
// 对话框模块
//------------------------------------------------
;(function ($, window, undefined) {

$.noop = $.noop || function () {}; // jQuery 1.3.2
var _box, _thisScript, _skin, _path,
	_count = 0,
	_$window = $(window),
	_$document = $(document),
	_$html = $('html'),
	_elem = document.documentElement,
	_isIE6 = window.VBArray && !window.XMLHttpRequest,
	_isMobile = 'createTouch' in document && !('onmousemove' in _elem)
		|| /(iPhone|iPad|iPod)/i.test(navigator.userAgent),
	_expando = 'artDialog' + + new Date;

var artDialog = function (config, ok, cancel) {
	config = config || {};
	
	if (typeof config === 'string' || config.nodeType === 1) {
		config = {content: config, fixed: !_isMobile};
	};
	
	var api,
		defaults = artDialog.defaults,
		elem = config.follow = this.nodeType === 1 && this || config.follow;
		
	// 合并默认配置
	for (var i in defaults) {
		if (config[i] === undefined) config[i] = defaults[i];		
	};
	
	// 兼容v4.1.0之前的参数，未来版本将删除此
	$.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},
	function(i,o){config[i]=config[i]!==undefined?config[i]:config[o]});
	
	// 返回跟随模式或重复定义的ID
	if (typeof elem === 'string') elem = $(elem)[0];
	config.id = elem && elem[_expando + 'follow'] || config.id || _expando + _count;
	api = artDialog.list[config.id];
	if (elem && api) return api.follow(elem).zIndex().focus();
	if (api) return api.zIndex().focus();
	
	// 目前主流移动设备对fixed支持不好
	if (_isMobile) config.fixed = false;
	
	// 按钮队列
	if (!$.isArray(config.button)) {
		config.button = config.button ? [config.button] : [];
	};
	if (ok !== undefined) config.ok = ok;
	if (cancel !== undefined) config.cancel = cancel;
	config.ok && config.button.push({
		name: config.okVal,
		callback: config.ok,
		focus: true
	});
	config.cancel && config.button.push({
		name: config.cancelVal,
		callback: config.cancel
	});
	
	// zIndex全局配置
	artDialog.defaults.zIndex = config.zIndex;
	
	_count ++;
	
	return artDialog.list[config.id] = _box ?
		_box._init(config) : new artDialog.fn._init(config);
};

artDialog.fn = artDialog.prototype = {

	version: '4.1.7',
	
	closed: true,
	
	_init: function (config) {
		var that = this, DOM,
			icon = config.icon,
			iconBg = icon && (_isIE6 ? {png: 'icons/' + icon + '.png'}
			: {backgroundImage: 'url(\'' + config.path + '/skins/icons/' + icon + '.png\')'});
		
        that.closed = false;
		that.config = config;
		that.DOM = DOM = that.DOM || that._getDOM();
		
		DOM.wrap.addClass(config.skin);
		DOM.close[config.cancel === false ? 'hide' : 'show']();
		DOM.icon[0].style.display = icon ? '' : 'none';
		DOM.iconBg.css(iconBg || {background: 'none'});
		DOM.se.css('cursor', config.resize ? 'se-resize' : 'auto');
		DOM.title.css('cursor', config.drag ? 'move' : 'auto');
		DOM.content.css('padding', config.padding);
		
		that[config.show ? 'show' : 'hide'](true)
		that.button(config.button)
		.title(config.title)
		.content(config.content, true)
		.size(config.width, config.height)
		.time(config.time);
		
		config.follow
		? that.follow(config.follow)
		: that.position(config.left, config.top);
		
		that.zIndex().focus();
		config.lock && that.lock();
		
		that._addEvent();
		that._ie6PngFix();
		_box = null;
		
		config.init && config.init.call(that, window);
		return that;
	},
	
	/**
	 * 设置内容
	 * @param	{String, HTMLElement}	内容 (可选)
	 * @return	{this, HTMLElement}		如果无参数则返回内容容器DOM对象
	 */
	content: function (msg) {
		var prev, next, parent, display,
			that = this,
			DOM = that.DOM,
			wrap = DOM.wrap[0],
			width = wrap.offsetWidth,
			height = wrap.offsetHeight,
			left = parseInt(wrap.style.left),
			top = parseInt(wrap.style.top),
			cssWidth = wrap.style.width,
			$content = DOM.content,
			content = $content[0];
		
		that._elemBack && that._elemBack();
		wrap.style.width = 'auto';
		
		if (msg === undefined) return content;
		if (typeof msg === 'string') {
			$content.html(msg);
		} else if (msg && msg.nodeType === 1) {
		
			// 让传入的元素在对话框关闭后可以返回到原来的地方
			display = msg.style.display;
			prev = msg.previousSibling;
			next = msg.nextSibling;
			parent = msg.parentNode;
			that._elemBack = function () {
				if (prev && prev.parentNode) {
					prev.parentNode.insertBefore(msg, prev.nextSibling);
				} else if (next && next.parentNode) {
					next.parentNode.insertBefore(msg, next);
				} else if (parent) {
					parent.appendChild(msg);
				};
				msg.style.display = display;
				that._elemBack = null;
			};
			
			$content.html('');
			content.appendChild(msg);
			msg.style.display = 'block';
			
		};
		
		// 新增内容后调整位置
		if (!arguments[1]) {
			if (that.config.follow) {
				that.follow(that.config.follow);
			} else {
				width = wrap.offsetWidth - width;
				height = wrap.offsetHeight - height;
				left = left - width / 2;
				top = top - height / 2;
				wrap.style.left = Math.max(left, 0) + 'px';
				wrap.style.top = Math.max(top, 0) + 'px';
			};
			if (cssWidth && cssWidth !== 'auto') {
				wrap.style.width = wrap.offsetWidth + 'px';
			};
			that._autoPositionType();
		};
		
		that._ie6SelectFix();
		that._runScript(content);
		
		return that;
	},
	
	/**
	 * 设置标题
	 * @param	{String, Boolean}	标题内容. 为false则隐藏标题栏
	 * @return	{this, HTMLElement}	如果无参数则返回内容器DOM对象
	 */
	title: function (text) {
		var DOM = this.DOM,
			wrap = DOM.wrap,
			title = DOM.title,
			className = 'aui_state_noTitle';
			
		if (text === undefined) return title[0];
		if (text === false) {
			title.hide().html('');
			wrap.addClass(className);
		} else {
			title.show().html(text || '');
			wrap.removeClass(className);
		};
		
		return this;
	},
	
	/**
	 * 位置(相对于可视区域)
	 * @param	{Number, String}
	 * @param	{Number, String}
	 */
	position: function (left, top) {
		var that = this,
			config = that.config,
			wrap = that.DOM.wrap[0],
			isFixed = _isIE6 ? false : config.fixed,
			ie6Fixed = _isIE6 && that.config.fixed,
			docLeft = _$document.scrollLeft(),
			docTop = _$document.scrollTop(),
			dl = isFixed ? 0 : docLeft,
			dt = isFixed ? 0 : docTop,
			ww = _$window.width(),
			wh = _$window.height(),
			ow = wrap.offsetWidth,
			oh = wrap.offsetHeight,
			style = wrap.style;
		
		if (left || left === 0) {
			that._left = left.toString().indexOf('%') !== -1 ? left : null;
			left = that._toNumber(left, ww - ow);
			
			if (typeof left === 'number') {
				left = ie6Fixed ? (left += docLeft) : left + dl;
				style.left = Math.max(left, dl) + 'px';
			} else if (typeof left === 'string') {
				style.left = left;
			};
		};
		
		if (top || top === 0) {
			that._top = top.toString().indexOf('%') !== -1 ? top : null;
			top = that._toNumber(top, wh - oh);
			
			if (typeof top === 'number') {
				top = ie6Fixed ? (top += docTop) : top + dt;
				style.top = Math.max(top, dt) + 'px';
			} else if (typeof top === 'string') {
				style.top = top;
			};
		};
		
		if (left !== undefined && top !== undefined) {
			that._follow = null;
			that._autoPositionType();
		};
		
		return that;
	},

	/**
	 *	尺寸
	 *	@param	{Number, String}	宽度
	 *	@param	{Number, String}	高度
	 */
	size: function (width, height) {
		var maxWidth, maxHeight, scaleWidth, scaleHeight,
			that = this,
			config = that.config,
			DOM = that.DOM,
			wrap = DOM.wrap,
			main = DOM.main,
			wrapStyle = wrap[0].style,
			style = main[0].style;
			
		if (width) {
			that._width = width.toString().indexOf('%') !== -1 ? width : null;
			maxWidth = _$window.width() - wrap[0].offsetWidth + main[0].offsetWidth;
			scaleWidth = that._toNumber(width, maxWidth);
			width = scaleWidth;
			
			if (typeof width === 'number') {
				wrapStyle.width = 'auto';
				style.width = Math.max(that.config.minWidth, width) + 'px';
				wrapStyle.width = wrap[0].offsetWidth + 'px'; // 防止未定义宽度的表格遇到浏览器右边边界伸缩
			} else if (typeof width === 'string') {
				style.width = width;
				width === 'auto' && wrap.css('width', 'auto');
			};
		};
		
		if (height) {
			that._height = height.toString().indexOf('%') !== -1 ? height : null;
			maxHeight = _$window.height() - wrap[0].offsetHeight + main[0].offsetHeight;
			scaleHeight = that._toNumber(height, maxHeight);
			height = scaleHeight;
			
			if (typeof height === 'number') {
				style.height = Math.max(that.config.minHeight, height) + 'px';
			} else if (typeof height === 'string') {
				style.height = height;
			};
		};
		
		that._ie6SelectFix();
		
		return that;
	},
	
	/**
	 * 跟随元素
	 * @param	{HTMLElement, String}
	 */
	follow: function (elem) {
		var $elem, that = this, config = that.config;
		
		if (typeof elem === 'string' || elem && elem.nodeType === 1) {
			$elem = $(elem);
			elem = $elem[0];
		};
		
		// 隐藏元素不可用
		if (!elem || !elem.offsetWidth && !elem.offsetHeight) {
			return that.position(that._left, that._top);
		};
		
		var expando = _expando + 'follow',
			winWidth = _$window.width(),
			winHeight = _$window.height(),
			docLeft =  _$document.scrollLeft(),
			docTop = _$document.scrollTop(),
			offset = $elem.offset(),
			width = elem.offsetWidth,
			height = elem.offsetHeight,
			isFixed = _isIE6 ? false : config.fixed,
			left = isFixed ? offset.left - docLeft : offset.left,
			top = isFixed ? offset.top - docTop : offset.top,
			wrap = that.DOM.wrap[0],
			style = wrap.style,
			wrapWidth = wrap.offsetWidth,
			wrapHeight = wrap.offsetHeight,
			setLeft = left - (wrapWidth - width) / 2,
			setTop = top + height,
			dl = isFixed ? 0 : docLeft,
			dt = isFixed ? 0 : docTop;
		
		setLeft = setLeft < dl ? left :
		(setLeft + wrapWidth > winWidth) && (left - wrapWidth > dl)
		? left - wrapWidth + width
		: setLeft;

		setTop = (setTop + wrapHeight > winHeight + dt)
		&& (top - wrapHeight > dt)
		? top - wrapHeight
		: setTop;
		
		style.left = setLeft + 'px';
		style.top = setTop + 'px';
		
		that._follow && that._follow.removeAttribute(expando);
		that._follow = elem;
		elem[expando] = config.id;
		that._autoPositionType();
		return that;
	},
	
	/**
	 * 自定义按钮
	 * @example
		button({
			name: 'login',
			callback: function () {},
			disabled: false,
			focus: true
		}, .., ..)
	 */
	button: function () {
		var that = this,
			ags = arguments,
			DOM = that.DOM,
			buttons = DOM.buttons,
			elem = buttons[0],
			strongButton = 'aui_state_highlight',
			listeners = that._listeners = that._listeners || {},
			list = $.isArray(ags[0]) ? ags[0] : [].slice.call(ags);
		
		if (ags[0] === undefined) return elem;
		$.each(list, function (i, val) {
			var name = val.name,
				isNewButton = !listeners[name],
				button = !isNewButton ?
					listeners[name].elem :
					document.createElement('button');
					
			if (!listeners[name]) listeners[name] = {};
			if (val.callback) listeners[name].callback = val.callback;
			if (val.className) button.className = val.className;
			if (val.focus) {
				that._focus && that._focus.removeClass(strongButton);
				that._focus = $(button).addClass(strongButton);
				that.focus();
			};
			
			// Internet Explorer 的默认类型是 "button"，
			// 而其他浏览器中（包括 W3C 规范）的默认值是 "submit"
			// @see http://www.w3school.com.cn/tags/att_button_type.asp
			button.setAttribute('type', 'button');
			
			button[_expando + 'callback'] = name;
			button.disabled = !!val.disabled;

			if (isNewButton) {
				button.innerHTML = name;
				listeners[name].elem = button;
				elem.appendChild(button);
			};
		});
		
		buttons[0].style.display = list.length ? '' : 'none';
		
		that._ie6SelectFix();
		return that;
	},
	
	/** 显示对话框 */
	show: function () {
		this.DOM.wrap.show();
		!arguments[0] && this._lockMaskWrap && this._lockMaskWrap.show();
		return this;
	},
	
	/** 隐藏对话框 */
	hide: function () {
		this.DOM.wrap.hide();
		!arguments[0] && this._lockMaskWrap && this._lockMaskWrap.hide();
		return this;
	},
	
	/** 关闭对话框 */
	close: function () {
		if (this.closed) return this;
		
		var that = this,
			DOM = that.DOM,
			wrap = DOM.wrap,
			list = artDialog.list,
			fn = that.config.close,
			follow = that.config.follow;
		
		that.time();
		if (typeof fn === 'function' && fn.call(that, window) === false) {
			return that;
		};
		
		that.unlock();
		
		// 置空内容
		that._elemBack && that._elemBack();
		wrap[0].className = wrap[0].style.cssText = '';
		DOM.title.html('');
		DOM.content.html('');
		DOM.buttons.html('');
		
		if (artDialog.focus === that) artDialog.focus = null;
		if (follow) follow.removeAttribute(_expando + 'follow');
		delete list[that.config.id];
		that._removeEvent();
		that.hide(true)._setAbsolute();
		
		// 清空除this.DOM之外临时对象，恢复到初始状态，以便使用单例模式
		for (var i in that) {
			if (that.hasOwnProperty(i) && i !== 'DOM') delete that[i];
		};
		
		// 移除HTMLElement或重用
		_box ? wrap.remove() : _box = that;
		
		return that;
	},
	
	/**
	 * 定时关闭
	 * @param	{Number}	单位为秒, 无参数则停止计时器
	 */
	time: function (second) {
		var that = this,
			cancel = that.config.cancelVal,
			timer = that._timer;
			
		timer && clearTimeout(timer);
		
		if (second) {
			that._timer = setTimeout(function(){
				that._click(cancel);
			}, 1000 * second);
		};
		
		return that;
	},
	
	/** 设置焦点 */
	focus: function () {
		try {
			if (this.config.focus) {
				var elem = this._focus && this._focus[0] || this.DOM.close[0];
				elem && elem.focus();
			}
		} catch (e) {}; // IE对不可见元素设置焦点会报错
		return this;
	},
	
	/** 置顶对话框 */
	zIndex: function () {
		var that = this,
			DOM = that.DOM,
			wrap = DOM.wrap,
			top = artDialog.focus,
			index = artDialog.defaults.zIndex ++;
		
		// 设置叠加高度
		wrap.css('zIndex', index);
		that._lockMask && that._lockMask.css('zIndex', index - 1);
		
		// 设置最高层的样式
		top && top.DOM.wrap.removeClass('aui_state_focus');
		artDialog.focus = that;
		wrap.addClass('aui_state_focus');
		
		return that;
	},
	
	/** 设置屏锁 */
	lock: function () {
		if (this._lock) return this;
		
		var that = this,
			index = artDialog.defaults.zIndex - 1,
			wrap = that.DOM.wrap,
			config = that.config,
			docWidth = _$document.width(),
			docHeight = _$document.height(),
			lockMaskWrap = that._lockMaskWrap || $(document.body.appendChild(document.createElement('div'))),
			lockMask = that._lockMask || $(lockMaskWrap[0].appendChild(document.createElement('div'))),
			domTxt = '(document).documentElement',
			sizeCss = _isMobile ? 'width:' + docWidth + 'px;height:' + docHeight
				+ 'px' : 'width:100%;height:100%',
			ie6Css = _isIE6 ?
				'position:absolute;left:expression(' + domTxt + '.scrollLeft);top:expression('
				+ domTxt + '.scrollTop);width:expression(' + domTxt
				+ '.clientWidth);height:expression(' + domTxt + '.clientHeight)'
			: '';
		
		that.zIndex();
		wrap.addClass('aui_state_lock');
		
		lockMaskWrap[0].style.cssText = sizeCss + ';position:fixed;z-index:'
			+ index + ';top:0;left:0;overflow:hidden;' + ie6Css;
		lockMask[0].style.cssText = 'height:100%;background:' + config.background
			+ ';filter:alpha(opacity=0);opacity:0';
		
		// 让IE6锁屏遮罩能够盖住下拉控件
		if (_isIE6) lockMask.html(
			'<iframe src="about:blank" style="width:100%;height:100%;position:absolute;' +
			'top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>');
			
		lockMask.stop();
		lockMask.bind('click', function () {
			//that._reset();
			that._click(that.config.cancelVal);
		}).bind('dblclick', function () {
			that._click(that.config.cancelVal);
		});
		
		if (config.duration === 0) {
			lockMask.css({opacity: config.opacity});
		} else {
			lockMask.animate({opacity: config.opacity}, config.duration);
		};
		
		that._lockMaskWrap = lockMaskWrap;
		that._lockMask = lockMask;
		
		that._lock = true;
		return that;
	},
	
	/** 解开屏锁 */
	unlock: function () {
		var that = this,
			lockMaskWrap = that._lockMaskWrap,
			lockMask = that._lockMask;
		
		if (!that._lock) return that;
		var style = lockMaskWrap[0].style;
		var un = function () {
			if (_isIE6) {
				style.removeExpression('width');
				style.removeExpression('height');
				style.removeExpression('left');
				style.removeExpression('top');
			};
			style.cssText = 'display:none';
			
			_box && lockMaskWrap.remove();
		};
		
		lockMask.stop().unbind();
		that.DOM.wrap.removeClass('aui_state_lock');
		if (!that.config.duration) {// 取消动画，快速关闭
			un();
		} else {
			lockMask.animate({opacity: 0}, that.config.duration, un);
		};
		
		that._lock = false;
		return that;
	},
	
	// 获取元素
	_getDOM: function () {	
		var wrap = document.createElement('div'),
			body = document.body;
		wrap.style.cssText = 'position:absolute;left:0;top:0';
		wrap.innerHTML = artDialog._templates;
		body.insertBefore(wrap, body.firstChild);
		
		var name, i = 0,
			DOM = {wrap: $(wrap)},
			els = wrap.getElementsByTagName('*'),
			elsLen = els.length;
			
		for (; i < elsLen; i ++) {
			name = els[i].className.split('aui_')[1];
			if (name) DOM[name] = $(els[i]);
		};
		
		return DOM;
	},
	
	// px与%单位转换成数值 (百分比单位按照最大值换算)
	// 其他的单位返回原值
	_toNumber: function (thisValue, maxValue) {
		if (!thisValue && thisValue !== 0 || typeof thisValue === 'number') {
			return thisValue;
		};
		
		var last = thisValue.length - 1;
		if (thisValue.lastIndexOf('px') === last) {
			thisValue = parseInt(thisValue);
		} else if (thisValue.lastIndexOf('%') === last) {
			thisValue = parseInt(maxValue * thisValue.split('%')[0] / 100);
		};
		
		return thisValue;
	},
	
	// 让IE6 CSS支持PNG背景
	_ie6PngFix: _isIE6 ? function () {
		var i = 0, elem, png, pngPath, runtimeStyle,
			path = artDialog.defaults.path + '/skins/',
			list = this.DOM.wrap[0].getElementsByTagName('*');
		
		for (; i < list.length; i ++) {
			elem = list[i];
			png = elem.currentStyle['png'];
			if (png) {
				pngPath = path + png;
				runtimeStyle = elem.runtimeStyle;
				runtimeStyle.backgroundImage = 'none';
				runtimeStyle.filter = "progid:DXImageTransform.Microsoft." +
					"AlphaImageLoader(src='" + pngPath + "',sizingMethod='crop')";
			};
		};
	} : $.noop,
	
	// 强制覆盖IE6下拉控件
	_ie6SelectFix: _isIE6 ? function () {
		var $wrap = this.DOM.wrap,
			wrap = $wrap[0],
			expando = _expando + 'iframeMask',
			iframe = $wrap[expando],
			width = wrap.offsetWidth,
			height = wrap.offsetHeight;

		width = width + 'px';
		height = height + 'px';
		if (iframe) {
			iframe.style.width = width;
			iframe.style.height = height;
		} else {
			iframe = wrap.appendChild(document.createElement('iframe'));
			$wrap[expando] = iframe;
			iframe.src = 'about:blank';
			iframe.style.cssText = 'position:absolute;z-index:-1;left:0;top:0;'
			+ 'filter:alpha(opacity=0);width:' + width + ';height:' + height;
		};
	} : $.noop,
	
	// 解析HTML片段中自定义类型脚本，其this指向artDialog内部
	// <script type="text/dialog">/* [code] */</script>
	_runScript: function (elem) {
		var fun, i = 0, n = 0,
			tags = elem.getElementsByTagName('script'),
			length = tags.length,
			script = [];
			
		for (; i < length; i ++) {
			if (tags[i].type === 'text/dialog') {
				script[n] = tags[i].innerHTML;
				n ++;
			};
		};
		
		if (script.length) {
			script = script.join('');
			fun = new Function(script);
			fun.call(this);
		};
	},
	
	// 自动切换定位类型
	_autoPositionType: function () {
		this[this.config.fixed ? '_setFixed' : '_setAbsolute']();/////////////
	},
	
	
	// 设置静止定位
	// IE6 Fixed @see: http://www.planeart.cn/?p=877
	_setFixed: (function () {
		_isIE6 && $(function () {
			var bg = 'backgroundAttachment';
			if (_$html.css(bg) !== 'fixed' && $('body').css(bg) !== 'fixed') {
				_$html.css({
					zoom: 1,// 避免偶尔出现body背景图片异常的情况
					backgroundImage: 'url(about:blank)',
					backgroundAttachment: 'fixed'
				});
			};
		});
		
		return function () {
			var $elem = this.DOM.wrap,
				style = $elem[0].style;
			
			if (_isIE6) {
				var left = parseInt($elem.css('left')),
					top = parseInt($elem.css('top')),
					sLeft = _$document.scrollLeft(),
					sTop = _$document.scrollTop(),
					txt = '(document.documentElement)';
				
				this._setAbsolute();
				style.setExpression('left', 'eval(' + txt + '.scrollLeft + '
					+ (left - sLeft) + ') + "px"');
				style.setExpression('top', 'eval(' + txt + '.scrollTop + '
					+ (top - sTop) + ') + "px"');
			} else {
				style.position = 'fixed';
			};
		};
	}()),
	
	// 设置绝对定位
	_setAbsolute: function () {
		var style = this.DOM.wrap[0].style;
			
		if (_isIE6) {
			style.removeExpression('left');
			style.removeExpression('top');
		};

		style.position = 'absolute';
	},
	
	// 按钮回调函数触发
	_click: function (name) {
		var that = this,
			fn = that._listeners[name] && that._listeners[name].callback;
		return typeof fn !== 'function' || fn.call(that, window) !== false ?
			that.close() : that;
	},
	
	// 重置位置与尺寸
	_reset: function (test) {
		var newSize,
			that = this,
			oldSize = that._winSize || _$window.width() * _$window.height(),
			elem = that._follow,
			width = that._width,
			height = that._height,
			left = that._left,
			top = that._top;
		
		if (test) {
			// IE6~7 window.onresize bug
			newSize = that._winSize =  _$window.width() * _$window.height();
			if (oldSize === newSize) return;
		};
		
		if (width || height) that.size(width, height);
		
		if (elem) {
			that.follow(elem);
		} else if (left || top) {
			that.position(left, top);
		};
	},
	
	// 事件代理
	_addEvent: function () {
		var resizeTimer,
			that = this,
			config = that.config,
			isIE = 'CollectGarbage' in window,
			DOM = that.DOM;
		
		// 窗口调节事件
		that._winResize = function () {
			resizeTimer && clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function () {
				that._reset(isIE);
			}, 40);
		};
		_$window.bind('resize', that._winResize);
		
		// 监听点击
		DOM.wrap
		.bind('click', function (event) {
			var target = event.target, callbackID;
			
			if (target.disabled) return false; // IE BUG
			
			if (target === DOM.close[0]) {
				that._click(config.cancelVal);
				return false;
			} else {
				callbackID = target[_expando + 'callback'];
				callbackID && that._click(callbackID);
			};
			
			that._ie6SelectFix();
		})
		.bind('mousedown', function () {
			that.zIndex();
		});
	},
	
	// 卸载事件代理
	_removeEvent: function () {
		var that = this,
			DOM = that.DOM;
		
		DOM.wrap.unbind();
		_$window.unbind('resize', that._winResize);
	}
	
};

artDialog.fn._init.prototype = artDialog.fn;
$.fn.dialog = $.fn.artDialog = function () {
	var config = arguments;
	this[this.live ? 'live' : 'bind']('click', function () {
		artDialog.apply(this, config);
		return false;
	});
	return this;
};



/** 最顶层的对话框API */
artDialog.focus = null;


/** 获取某对话框API */
artDialog.get = function (id) {
	return id === undefined
	? artDialog.list
	: artDialog.list[id];
};

artDialog.list = {};



// 全局快捷键
_$document.bind('keydown', function (event) {
	var target = event.target,
		nodeName = target.nodeName,
		rinput = /^INPUT|TEXTAREA$/,
		api = artDialog.focus,
		keyCode = event.keyCode;

	if (!api || !api.config.esc || rinput.test(nodeName)) return;
		
	keyCode === 27 && api._click(api.config.cancelVal);
});



// 获取artDialog路径
_path = window['_artDialog_path'] || (function (script, i, me) {
	for (i in script) {
		// 如果通过第三方脚本加载器加载本文件，请保证文件名含有"artDialog"字符
		if (script[i].src && script[i].src.indexOf('artDialog') !== -1) me = script[i];
	};
	
	_thisScript = me || script[script.length - 1];
	me = _thisScript.src.replace(/\\/g, '/');
	return me.lastIndexOf('/') < 0 ? '.' : me.substring(0, me.lastIndexOf('/'));
}(document.getElementsByTagName('script')));



// 无阻塞载入CSS (如"artDialog.js?skin=aero")
_skin = _thisScript.src.split('skin=')[1];
if (_skin) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = _path + '/skins/' + _skin + '.css?' + artDialog.fn.version;
	_thisScript.parentNode.insertBefore(link, _thisScript);
};



// 触发浏览器预先缓存背景图片
_$window.bind('load', function () {
	setTimeout(function () {
		if (_count) return;
		artDialog({left: '-9999em',time: 9,fixed: false,lock: false,focus: false});
	}, 150);
});



// 开启IE6 CSS背景图片缓存
try {
	document.execCommand('BackgroundImageCache', false, true);
} catch (e) {};




// 使用uglifyjs压缩能够预先处理"+"号合并字符串
// uglifyjs: http://marijnhaverbeke.nl/uglifyjs
artDialog._templates =
'<div class="aui_outer">'
+	'<table class="aui_border">'
+		'<tbody>'
+			'<tr>'
+				'<td class="aui_nw"></td>'
+				'<td class="aui_n"></td>'
+				'<td class="aui_ne"></td>'
+			'</tr>'
+			'<tr>'
+				'<td class="aui_w"></td>'
+				'<td class="aui_c">'
+					'<div class="aui_inner">'
+					'<table class="aui_dialog">'
+						'<tbody>'
+							'<tr>'
+								'<td colspan="2" class="aui_header">'
+									'<div class="aui_titleBar">'
+										'<div class="aui_title"></div>'
+										'<a class="aui_close" href="javascript:/*artDialog*/;">'
+											'\xd7'
+										'</a>'
+									'</div>'
+								'</td>'
+							'</tr>'
+							'<tr>'
+								'<td class="aui_icon">'
+									'<div class="aui_iconBg"></div>'
+								'</td>'
+								'<td class="aui_main">'
+									'<div class="aui_content"></div>'
+								'</td>'
+							'</tr>'
+							'<tr>'
+								'<td colspan="2" class="aui_footer">'
+									'<div class="aui_buttons"></div>'
+								'</td>'
+							'</tr>'
+						'</tbody>'
+					'</table>'
+					'</div>'
+				'</td>'
+				'<td class="aui_e"></td>'
+			'</tr>'
+			'<tr>'
+				'<td class="aui_sw"></td>'
+				'<td class="aui_s"></td>'
+				'<td class="aui_se"></td>'
+			'</tr>'
+		'</tbody>'
+	'</table>'
+'</div>';



/**
 * 默认配置
 */
artDialog.defaults = {
								// 消息内容
	content: '<div class="aui_loading"><span>loading..</span></div>',
	title: '\u6d88\u606f',		// 标题. 默认'消息'
	button: null,				// 自定义按钮
	ok: null,					// 确定按钮回调函数
	cancel: null,				// 取消按钮回调函数
	init: null,					// 对话框初始化后执行的函数
	close: null,				// 对话框关闭前执行的函数
	okVal: '\u786E\u5B9A',		// 确定按钮文本. 默认'确定'
	cancelVal: '\u53D6\u6D88',	// 取消按钮文本. 默认'取消'
	width: 'auto',				// 内容宽度
	height: 'auto',				// 内容高度
	minWidth: 96,				// 最小宽度限制
	minHeight: 32,				// 最小高度限制
	padding: '20px 25px',		// 内容与边界填充距离
	skin: '',					// 皮肤名(预留接口,尚未实现)
	icon: null,					// 消息图标名称
	time: null,					// 自动关闭时间
	esc: true,					// 是否支持Esc键关闭
	focus: true,				// 是否支持对话框按钮自动聚焦
	show: true,					// 初始化后是否显示对话框
	follow: null,				// 跟随某元素(即让对话框在元素附近弹出)
	path: _path,				// artDialog路径
	lock: false,				// 是否锁屏
	background: '#000',			// 遮罩颜色
	opacity: .7,				// 遮罩透明度
	duration: 300,				// 遮罩透明度渐变动画速度
	fixed: false,				// 是否静止定位
	left: '50%',				// X轴坐标
	top: '38.2%',				// Y轴坐标
	zIndex: 1987,				// 对话框叠加高度值(重要：此值不能超过浏览器最大限制)
	resize: true,				// 是否允许用户调节尺寸
	drag: true					// 是否允许用户拖动位置
	
};

window.artDialog = $.dialog = $.artDialog = artDialog;
}(this.art || this.jQuery && (this.art = jQuery), this));






//------------------------------------------------
// 对话框模块-拖拽支持（可选外置模块）
//------------------------------------------------
;(function ($) {

var _dragEvent, _use,
	_$window = $(window),
	_$document = $(document),
	_elem = document.documentElement,
	_isIE6 = !('minWidth' in _elem.style),
	_isLosecapture = 'onlosecapture' in _elem,
	_isSetCapture = 'setCapture' in _elem;

// 拖拽事件
artDialog.dragEvent = function () {
	var that = this,
		proxy = function (name) {
			var fn = that[name];
			that[name] = function () {
				return fn.apply(that, arguments);
			};
		};
		
	proxy('start');
	proxy('move');
	proxy('end');
};

artDialog.dragEvent.prototype = {

	// 开始拖拽
	onstart: $.noop,
	start: function (event) {
		_$document
		.bind('mousemove', this.move)
		.bind('mouseup', this.end);
			
		this._sClientX = event.clientX;
		this._sClientY = event.clientY;
		this.onstart(event.clientX, event.clientY);

		return false;
	},
	
	// 正在拖拽
	onmove: $.noop,
	move: function (event) {		
		this._mClientX = event.clientX;
		this._mClientY = event.clientY;
		this.onmove(
			event.clientX - this._sClientX,
			event.clientY - this._sClientY
		);
		
		return false;
	},
	
	// 结束拖拽
	onend: $.noop,
	end: function (event) {
		_$document
		.unbind('mousemove', this.move)
		.unbind('mouseup', this.end);
		
		this.onend(event.clientX, event.clientY);
		return false;
	}
	
};

_use = function (event) {
	var limit, startWidth, startHeight, startLeft, startTop, isResize,
		api = artDialog.focus,
		//config = api.config,
		DOM = api.DOM,
		wrap = DOM.wrap,
		title = DOM.title,
		main = DOM.main;

	// 清除文本选择
	var clsSelect = 'getSelection' in window ? function () {
		window.getSelection().removeAllRanges();
	} : function () {
		try {
			document.selection.empty();
		} catch (e) {};
	};
	
	// 对话框准备拖动
	_dragEvent.onstart = function (x, y) {
		if (isResize) {
			startWidth = main[0].offsetWidth;
			startHeight = main[0].offsetHeight;
		} else {
			startLeft = wrap[0].offsetLeft;
			startTop = wrap[0].offsetTop;
		};
		
		_$document.bind('dblclick', _dragEvent.end);
		!_isIE6 && _isLosecapture ?
			title.bind('losecapture', _dragEvent.end) :
			_$window.bind('blur', _dragEvent.end);
		_isSetCapture && title[0].setCapture();
		
		wrap.addClass('aui_state_drag');
		api.focus();
	};
	
	// 对话框拖动进行中
	_dragEvent.onmove = function (x, y) {
		if (isResize) {
			var wrapStyle = wrap[0].style,
				style = main[0].style,
				width = x + startWidth,
				height = y + startHeight;
			
			wrapStyle.width = 'auto';
			style.width = Math.max(0, width) + 'px';
			wrapStyle.width = wrap[0].offsetWidth + 'px';
			
			style.height = Math.max(0, height) + 'px';
			
		} else {
			var style = wrap[0].style,
				left = Math.max(limit.minX, Math.min(limit.maxX, x + startLeft)),
				top = Math.max(limit.minY, Math.min(limit.maxY, y + startTop));

			style.left = left  + 'px';
			style.top = top + 'px';
		};
			
		clsSelect();
		api._ie6SelectFix();
	};
	
	// 对话框拖动结束
	_dragEvent.onend = function (x, y) {
		_$document.unbind('dblclick', _dragEvent.end);
		!_isIE6 && _isLosecapture ?
			title.unbind('losecapture', _dragEvent.end) :
			_$window.unbind('blur', _dragEvent.end);
		_isSetCapture && title[0].releaseCapture();
		
		_isIE6 && !api.closed && api._autoPositionType();
		
		wrap.removeClass('aui_state_drag');
	};
	
	isResize = event.target === DOM.se[0] ? true : false;
	limit = (function () {
		var maxX, maxY,
			wrap = api.DOM.wrap[0],
			fixed = wrap.style.position === 'fixed',
			ow = wrap.offsetWidth,
			oh = wrap.offsetHeight,
			ww = _$window.width(),
			wh = _$window.height(),
			dl = fixed ? 0 : _$document.scrollLeft(),
			dt = fixed ? 0 : _$document.scrollTop(),
			
		// 坐标最大值限制
		maxX = ww - ow + dl;
		maxY = wh - oh + dt;
		
		return {
			minX: dl,
			minY: dt,
			maxX: maxX,
			maxY: maxY
		};
	})();
	
	_dragEvent.start(event);
};

// 代理 mousedown 事件触发对话框拖动
_$document.bind('mousedown', function (event) {
	var api = artDialog.focus;
	if (!api) return;

	var target = event.target,
		config = api.config,
		DOM = api.DOM;
	
	if (config.drag !== false && target === DOM.title[0]
	|| config.resize !== false && target === DOM.se[0]) {
		_dragEvent = _dragEvent || new artDialog.dragEvent();
		_use(event);
		return false;// 防止firefox与chrome滚屏
	};
});

})(this.art || this.jQuery && (this.art = jQuery));



/*!
 * artDialog iframeTools
 * Date: 2011-12-08 1:32
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
eval(function(B,D,A,G,E,F){function C(A){return A<62?String.fromCharCode(A+=A<26?65:A<52?71:-4):A<63?'_':A<64?'$':C(A>>6)+C(A&63)}while(A>0)E[C(G--)]=D[--A];return B.replace(/[\w\$]+/g,function(A){return E[A]==F[A]?A:E[A]})}('(6(E,C,D,A){c B,X,W,J="@_.DATA",K="@_.OPEN",H="@_.OPENER",I=C.k=C.k||"@_.WINNAME"+(Bd Bo).Be(),F=C.VBArray&&!C.XMLHttpRequest;E(6(){!C.Bu&&7.BY==="B0"&&Br("9 Error: 7.BY === \\"B0\\"")});c G=D.d=6(){c W=C,X=6(A){f{c W=C[A].7;W.BE}u(X){v!V}v C[A].9&&W.BE("frameset").length===U};v X("d")?W=C.d:X("BB")&&(W=C.BB),W}();D.BB=G,B=G.9,W=6(){v B.BW.w},D.m=6(C,B){c W=D.d,X=W[J]||{};W[J]=X;b(B!==A)X[C]=B;else v X[C];v X},D.BQ=6(W){c X=D.d[J];X&&X[W]&&1 X[W]},D.through=X=6(){c X=B.BR(i,BJ);v G!==C&&(D.B4[X.0.Z]=X),X},G!==C&&E(C).BN("unload",6(){c A=D.B4,W;BO(c X BS A)A[X]&&(W=A[X].0,W&&(W.duration=U),A[X].s(),1 A[X])}),D.p=6(B,O,BZ){O=O||{};c N,L,M,Bc,T,S,R,Q,BF,P=D.d,Ba="8:BD;n:-Bb;d:-Bb;Bp:o U;Bf:transparent",BI="r:g%;x:g%;Bp:o U";b(BZ===!V){c BH=(Bd Bo).Be(),BG=B.replace(/([?&])W=[^&]*/,"$1_="+BH);B=BG+(BG===B?(/\\?/.test(B)?"&":"?")+"W="+BH:"")}c G=6(){c B,C,W=L.2.B2(".aui_loading"),A=N.0;M.addClass("Bi"),W&&W.hide();f{Q=T.$,R=E(Q.7),BF=Q.7.Bg}u(X){T.q.5=BI,A.z?N.z(A.z):N.8(A.n,A.d),O.j&&O.j.l(N,Q,P),O.j=By;v}B=A.r==="Bt"?R.r()+(F?U:parseInt(E(BF).Bv("marginLeft"))):A.r,C=A.x==="Bt"?R.x():A.x,setTimeout(6(){T.q.5=BI},U),N.Bk(B,C),A.z?N.z(A.z):N.8(A.n,A.d),O.j&&O.j.l(N,Q,P),O.j=By},I={w:W(),j:6(){N=i,L=N.h,Bc=L.BM,M=L.2,T=N.BK=P.7.Bn("BK"),T.Bx=B,T.k="Open"+N.0.Z,T.q.5=Ba,T.BX("frameborder",U,U),T.BX("allowTransparency",!U),S=E(T),N.2().B3(T),Q=T.$;f{Q.k=T.k,D.m(T.k+K,N),D.m(T.k+H,C)}u(X){}S.BN("BC",G)},s:6(){S.Bv("4","o").unbind("BC",G);b(O.s&&O.s.l(i,T.$,P)===!V)v!V;M.removeClass("Bi"),S[U].Bx="about:blank",S.remove();f{D.BQ(T.k+K),D.BQ(T.k+H)}u(X){}}};Bq O.Y=="6"&&(I.Y=6(){v O.Y.l(N,T.$,P)}),Bq O.y=="6"&&(I.y=6(){v O.y.l(N,T.$,P)}),1 O.2;BO(c J BS O)I[J]===A&&(I[J]=O[J]);v X(I)},D.p.Bw=D.m(I+K),D.BT=D.m(I+H)||C,D.p.origin=D.BT,D.s=6(){c X=D.m(I+K);v X&&X.s(),!V},G!=C&&E(7).BN("mousedown",6(){c X=D.p.Bw;X&&X.w()}),D.BC=6(C,D,B){B=B||!V;c G=D||{},H={w:W(),j:6(A){c W=i,X=W.0;E.ajax({url:C,success:6(X){W.2(X),G.j&&G.j.l(W,A)},cache:B})}};1 D.2;BO(c F BS G)H[F]===A&&(H[F]=G[F]);v X(H)},D.Br=6(B,A){v X({Z:"Alert",w:W(),BL:"warning",t:!U,BA:!U,2:B,Y:!U,s:A})},D.confirm=6(C,A,B){v X({Z:"Confirm",w:W(),BL:"Bm",t:!U,BA:!U,3:U.V,2:C,Y:6(X){v A.l(i,X)},y:6(X){v B&&B.l(i,X)}})},D.prompt=6(D,B,C){C=C||"";c A;v X({Z:"Prompt",w:W(),BL:"Bm",t:!U,BA:!U,3:U.V,2:["<e q=\\"margin-bottom:5px;font-Bk:12px\\">",D,"</e>","<e>","<Bl B1=\\"",C,"\\" q=\\"r:18em;Bh:6px 4px\\" />","</e>"].join(""),j:6(){A=i.h.2.B2("Bl")[U],A.select(),A.BP()},Y:6(X){v B&&B.l(i,A.B1,X)},y:!U})},D.tips=6(B,A){v X({Z:"Tips",w:W(),title:!V,y:!V,t:!U,BA:!V}).2("<e q=\\"Bh: U 1em;\\">"+B+"</e>").time(A||V.B6)},E(6(){c A=D.dragEvent;b(!A)v;c B=E(C),X=E(7),W=F?"BD":"t",H=A.prototype,I=7.Bn("e"),G=I.q;G.5="4:o;8:"+W+";n:U;d:U;r:g%;x:g%;"+"cursor:move;filter:alpha(3=U);3:U;Bf:#FFF",7.Bg.B3(I),H.Bj=H.Bs,H.BV=H.Bz,H.Bs=6(){c E=D.BP.h,C=E.BM[U],A=E.2[U].BE("BK")[U];H.Bj.BR(i,BJ),G.4="block",G.w=D.BW.w+B5,W==="BD"&&(G.r=B.r()+"a",G.x=B.x()+"a",G.n=X.scrollLeft()+"a",G.d=X.scrollTop()+"a"),A&&C.offsetWidth*C.offsetHeight>307200&&(C.q.BU="hidden")},H.Bz=6(){c X=D.BP;H.BV.BR(i,BJ),G.4="o",X&&(X.h.BM[U].q.BU="visible")}})})(i.art||i.Bu,i,i.9)','P|R|T|U|V|W|0|1|_|$|ok|id|px|if|var|top|div|try|100|DOM|this|init|name|call|data|left|none|open|style|width|close|fixed|catch|return|zIndex|height|cancel|follow|config|delete|content|opacity|display|cssText|function|document|position|artDialog|ARTDIALOG|contentWindow|lock|parent|load|absolute|getElementsByTagName|S|Y|Z|a|arguments|iframe|icon|main|bind|for|focus|removeData|apply|in|opener|visibility|_end|defaults|setAttribute|compatMode|O|Q|9999em|X|new|getTime|background|body|padding|aui_state_full|_start|size|input|question|createElement|Date|border|typeof|alert|start|auto|jQuery|css|api|src|null|end|BackCompat|value|find|appendChild|list|3|5'.split('|'),109,122,{},{}))
