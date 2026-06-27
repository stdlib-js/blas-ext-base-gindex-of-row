"use strict";var y=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var O=y(function(A,k){
var z=require('@stdlib/ndarray-base-assert-is-row-major/dist'),B=require('@stdlib/array-base-ones/dist');function G(a,e,u,o,i,m,q,t,s){var f,h,p,c,w,x,b,r,n,l,g,v,R;if(h=u.data,p=q.data,c=u.accessors[0],w=q.accessors[0],z([o,i])){for(r=e,n=a,R=0;R<n;R++){for(l=m+R*o,g=s,v=0;v<r&&c(h,l)===w(p,g);v++)l+=i,g+=t;if(v===r)return R}return-1}for(r=a,n=e,x=o,b=i-r*o,f=B(a),l=m,g=s,R=0;R<n;R++){for(v=0;v<r;v++)c(h,l)!==w(p,g)&&(f[v]=0),l+=x;l+=b,g+=t}for(v=0;v<r&&f[v]!==1;v++);return v===r?-1:v}k.exports=G
});var j=y(function(rr,E){
var H=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/array-base-arraylike2object/dist'),I=require('@stdlib/array-base-ones/dist'),J=O();function K(a,e,u,o,i,m,q,t,s){var f,h,p,c,w,x,b,r,n,l,g;if(a<=0||e<=0)return-1;if(l=S(u),g=S(q),l.accessorProtocol||g.accessorProtocol)return J(a,e,l,o,i,m,g,t,s);if(H([o,i])){for(c=e,w=a,n=0;n<w;n++){for(x=m+n*o,b=s,r=0;r<c&&u[x]===q[b];r++)x+=i,b+=t;if(r===c)return n}return-1}for(c=a,w=e,h=o,p=i-c*o,f=I(a),x=m,b=s,n=0;n<w;n++){for(r=0;r<c;r++)u[x]!==q[b]&&(f[r]=0),x+=h;x+=p,b+=t}for(r=0;r<c&&f[r]!==1;r++);return r===c?-1:r}E.exports=K
});var V=y(function(ar,P){
var Q=require('@stdlib/blas-base-assert-is-layout/dist'),U=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),W=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),Y=require('@stdlib/strided-base-stride2offset/dist'),Z=require('@stdlib/math-base-special-fast-max/dist'),F=require('@stdlib/error-tools-fmtprodmsg/dist'),_=j();function $(a,e,u,o,i,m,q){var t,s,f;if(!Q(a))throw new TypeError(F('2W3Fx',a));if(U(a)?f=u:f=e,i<Z(1,f))throw new RangeError(F('2W3IR',f,i));return W(a)?(t=1,s=i):(t=i,s=1),_(e,u,o,t,s,0,m,q,Y(u,q))}P.exports=$
});var C=y(function(er,d){
var L=j();function D(a,e,u,o,i,m,q,t,s){return L(a,e,u,o,i,m,q,t,s)}d.exports=D
});var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=V(),N=C();M(T,"ndarray",N);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
