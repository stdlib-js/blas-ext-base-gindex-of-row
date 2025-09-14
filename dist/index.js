"use strict";var y=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var O=y(function(A,k){
var z=require('@stdlib/ndarray-base-assert-is-row-major/dist'),B=require('@stdlib/array-base-ones/dist');function G(a,e,n,u,i,m,q,t,s){var f,h,p,c,w,x,b,r,v,l,g,o,R;if(h=n.data,p=q.data,c=n.accessors[0],w=q.accessors[0],z([u,i])){for(r=e,v=a,R=0;R<v;R++){for(l=m+R*u,g=s,o=0;o<r&&c(h,l)===w(p,g);o++)l+=i,g+=t;if(o===r)return R}return-1}for(r=a,v=e,x=u,b=i-r*u,f=B(a),l=m,g=s,R=0;R<v;R++){for(o=0;o<r;o++)c(h,l)!==w(p,g)&&(f[o]=0),l+=x;l+=b,g+=t}for(o=0;o<r&&f[o]!==1;o++);return o===r?-1:o}k.exports=G
});var j=y(function(rr,E){
var H=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/array-base-arraylike2object/dist'),I=require('@stdlib/array-base-ones/dist'),J=O();function K(a,e,n,u,i,m,q,t,s){var f,h,p,c,w,x,b,r,v,l,g;if(a<=0||e<=0)return-1;if(l=S(n),g=S(q),l.accessorProtocol||g.accessorProtocol)return J(a,e,l,u,i,m,g,t,s);if(H([u,i])){for(c=e,w=a,v=0;v<w;v++){for(x=m+v*u,b=s,r=0;r<c&&n[x]===q[b];r++)x+=i,b+=t;if(r===c)return v}return-1}for(c=a,w=e,h=u,p=i-c*u,f=I(a),x=m,b=s,v=0;v<w;v++){for(r=0;r<c;r++)n[x]!==q[b]&&(f[r]=0),x+=h;x+=p,b+=t}for(r=0;r<c&&f[r]!==1;r++);return r===c?-1:r}E.exports=K
});var V=y(function(ar,P){
var Q=require('@stdlib/blas-base-assert-is-layout/dist'),U=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),W=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),Y=require('@stdlib/strided-base-stride2offset/dist'),Z=require('@stdlib/math-base-special-fast-max/dist'),F=require('@stdlib/error-tools-fmtprodmsg/dist'),_=j();function $(a,e,n,u,i,m,q){var t,s,f;if(!Q(a))throw new TypeError(F('nullFx',a));if(U(a)?f=n:f=e,i<Z(1,f))throw new RangeError(F('nullIR',f,i));return W(a)?(t=1,s=i):(t=i,s=1),_(e,n,u,t,s,0,m,q,Y(n,q))}P.exports=$
});var C=y(function(er,d){
var L=j();function D(a,e,n,u,i,m,q,t,s){return L(a,e,n,u,i,m,q,t,s)}d.exports=D
});var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=V(),N=C();M(T,"ndarray",N);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
