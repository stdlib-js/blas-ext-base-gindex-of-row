"use strict";var y=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(o){throw (a=0, o)}};};var j=y(function(X,O){
var B=require('@stdlib/ndarray-base-assert-is-row-major/dist'),C=require('@stdlib/array-base-ones/dist');function G(e,a,o,u,i,x,q,t,f){var s,g,p,c,R,m,w,r,n,l,b,v,h;if(g=o.data,p=q.data,c=o.accessors[0],R=q.accessors[0],B([u,i])){for(r=a,n=e,h=0;h<n;h++){for(l=x+h*u,b=f,v=0;v<r&&c(g,l)===R(p,b);v++)l+=i,b+=t;if(v===r)return h}return-1}for(r=e,n=a,m=u,w=i-r*u,s=C(e),l=x,b=f,h=0;h<n;h++){for(v=0;v<r;v++)c(g,l)!==R(p,b)&&(s[v]=0),l+=m;l+=w,b+=t}for(v=0;v<r&&s[v]!==1;v++);return v===r?-1:v}O.exports=G
});var k=y(function(A,d){
var H=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/array-base-arraylike2object/dist'),I=require('@stdlib/array-base-ones/dist'),J=j();function K(e,a,o,u,i,x,q,t,f){var s,g,p,c,R,m,w,r,n,l,b;if(e<=0||a<=0)return-1;if(l=S(o),b=S(q),l.accessorProtocol||b.accessorProtocol)return J(e,a,l,u,i,x,b,t,f);if(H([u,i])){for(c=a,R=e,n=0;n<R;n++){for(m=x+n*u,w=f,r=0;r<c&&o[m]===q[w];r++)m+=i,w+=t;if(r===c)return n}return-1}for(c=e,R=a,g=u,p=i-c*u,s=I(e),m=x,w=f,n=0;n<R;n++){for(r=0;r<c;r++)o[m]!==q[w]&&(s[r]=0),m+=g;m+=p,w+=t}for(r=0;r<c&&s[r]!==1;r++);return r===c?-1:r}d.exports=K
});var P=y(function(rr,F){
var Q=require('@stdlib/blas-base-layout-resolve-str/dist'),U=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),W=require('@stdlib/strided-base-stride2offset/dist'),Y=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=k();function _(e,a,o,u,i,x,q){var t,f,s,g;if(g=Q(e),g===null)throw new TypeError(E('2W3Fx',e));if(U(g)?(s=o,t=i,f=1):(s=a,t=1,f=i),i<Y(1,s))throw new RangeError(E('2W3IR',s,i));return Z(a,o,u,t,f,0,x,q,W(o,q))}F.exports=_
});var T=y(function(ar,V){
var $=k();function L(e,a,o,u,i,x,q,t,f){return $(e,a,o,u,i,x,q,t,f)}V.exports=L
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=P(),M=T();D(z,"ndarray",M);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
