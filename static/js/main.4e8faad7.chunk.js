(this["webpackJsonpreact-homepage"]=this["webpackJsonpreact-homepage"]||[]).push([[0],{43:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(15),s=n.n(a),i=(n(43),n(22)),o=n(31),j=n(32),u=n(29),l=n(0);var h=function(){return Object(l.jsx)(i.a,{style:{marginTop:"2rem"},children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(u.a,{md:"auto",children:Object(l.jsx)(o.a,{children:Object(l.jsx)(o.a.Image,{width:200,alt:"Kisub Kim",src:"./profile.jpeg"})})}),Object(l.jsxs)(u.a,{children:[Object(l.jsx)("h2",{children:"Kisub Kim"}),Object(l.jsx)("h4",{children:"Research Scientist at Singapore Management University"}),"I am a research scientist (postdoc) at"," ",Object(l.jsx)("a",{href:"https://www.smu.edu.sg",children:"Singapore Management University (SMU)"}),". My work is mainly related to Software Engineering, broadly source code analysis and, specifically, code search, bug localization, code review, and code representation under the supervision of"," ",Object(l.jsx)("a",{href:"http://www.mysmu.edu/faculty/davidlo/",children:"Prof. David Lo"}),". Before joining SMU, he was a research associate at the"," ",Object(l.jsx)("a",{href:"https://wwwen.uni.lu/",children:"University of Luxembourg"}),". He completed his Ph.D. at the"," ",Object(l.jsx)("a",{href:"https://wwwen.uni.lu/",children:"University of Luxembourg"})," under the supervision of"," ",Object(l.jsx)("a",{href:"https://bissyande.github.io/",children:"Prof. Dr. Tegawend\xe9 F. BISSYANDE"}),". My works were presented at major conferences such as International Conference on Software Engineering and published in top journals such as Empirical Software Engineering. I have served as a reviewer, program committee, and organization committee in various software engineering conferences and journals, such as IEEE Transactions on Software Engineering, Empirical Software Engineering, and IEEE/ACM International Conference on Program Comprehension."]})]})})},b=n(11),d=n(2),O=n(6),f=n(9),x=n.n(f),p=n(18),m=n(19),g=n(17),v=n(8),y=n(10),w=["type","id","pdf","site"];function k(e){return Object.entries(e).map((function(e){if("author"===e[0]){var t=e[1].map((function(e){return"".concat(e.family,", ").concat(e.given)})).join(" and ");return"  author={".concat(t,"}")}return e[1]&&!w.includes(e[0])?"  ".concat(e[0],"={").concat(e[1],"}"):null}))}var S=n(13);function E(e,t){return Object(l.jsxs)("a",{href:e,children:["[",t,"]"]})}function I(e){var t=function(e){switch(e.type){case"journal":return e.journal;case"conference":return e.booktitle;case"thesis":return e.school;case"book":return e.publisher}}(e),n=function(e){var t=e.author.map((function(e){return"".concat(e.given[0],". ").concat(e.family)}));return t[t.length-1]="and ".concat(t[t.length-1]),2===t.length?t.join(" "):t.join(", ")}(e);return"thesis"===e.type?'"'.concat(e.title,'", ').concat(e.school,", ").concat(e.year):"".concat(n,', "').concat(e.title,'", ').concat(t,", ").concat(e.year).concat(e.note?", ".concat(e.note):"")}function C(e){var t=Object(c.useState)(!1),n=Object(O.a)(t,2),r=n[0],a=n[1],s=function(e){switch(e.type){case"journal":return"@ARTICLE{".concat(e.id,",\n").concat(k(e).filter((function(e){return null!=e})).join(",\n"),"\n}");case"conference":return"@INPROCEEDINGS{".concat(e.id,",\n").concat(k(e).filter((function(e){return null!=e})).join(",\n"),"\n}");case"thesis":case"book":return""}}(e.paper);return Object(l.jsxs)(m.a,Object(d.a)(Object(d.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(l.jsx)(m.a.Header,{closeButton:!0,children:Object(l.jsx)(m.a.Title,{id:"contained-modal-title-vcenter",children:"Bibtex"})}),Object(l.jsx)(m.a.Body,{children:Object(l.jsx)("pre",{children:s})}),Object(l.jsxs)(m.a.Footer,{children:[Object(l.jsxs)(g.a,{active:r,onClick:function(){a(!0),setTimeout((function(){a(!1)}),3e3),navigator.clipboard.writeText(s)},children:[Object(l.jsx)(v.a,{icon:y.d})," ",r?"Copied":"Copy to clipboard"]}),Object(l.jsx)(g.a,{onClick:e.onHide,children:"Close"})]})]}))}function F(e){var t=Object(c.useState)(!1),n=Object(O.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),i=Object(O.a)(s,2),o=i[0],j=i[1],u=e.papers;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{children:u.map((function(e){return Object(l.jsxs)("li",{children:[I(e)," ",e.site&&E(e.site,"Repo."),e.pdf&&E("".concat(e.pdf),"PDF"),e.DOI&&E("https://doi.org/".concat(e.DOI),"DOI"),"thesis"!==e.type&&"book"!==e.type&&Object(l.jsx)("a",{href:"",onClick:function(t){t.preventDefault(),a(!0),j(e)},children:"[Bibtex]"})]},e.id)}))}),o&&Object(l.jsx)(C,{show:r,onHide:function(){return a(!1)},paper:o})]})}function T(e){return D.apply(this,arguments)}function D(){return(D=Object(b.a)(x.a.mark((function e(t){var n,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.text();case 5:return c=e.sent,e.next=8,Object(S.a)(c);case 8:return(r=e.sent).sort((function(e,t){return t.year-e.year})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t=Object(c.useState)(),n=Object(O.a)(t,2),r=n[0],a=n[1],s=e.paperType;return Object(c.useEffect)((function(){Object(b.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("./data/".concat(s,".yaml"));case 2:(t=e.sent).forEach((function(e){e.type=s})),a(t);case 5:case"end":return e.stop()}}),e)})))()}),[s]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{style:{textTransform:"capitalize"},children:s}),r?Object(l.jsx)(F,{papers:r}):Object(l.jsx)(p.a,{animation:"border"})]})}var B=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)(v.a,{icon:y.a})," Publications"]}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{paperType:"journal"}),Object(l.jsx)(P,{paperType:"conference"}),Object(l.jsx)(P,{paperType:"thesis"})]})]})};var A=function(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("./data/work.yaml").then(function(){var e=Object(b.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.next=5,Object(S.a)(n);case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)(v.a,{icon:y.b})," Work Experience"]}),Object(l.jsx)("ul",{children:n.map((function(e,t){return Object(l.jsxs)("li",{children:[e.title,","," ",e.url?Object(l.jsx)("a",{href:e.url,children:e.affiliation}):e.affiliation,", ",e.city,", ",e.country,", ",e.begin.month," ",e.begin.year," ~"," ",e.end?"".concat(e.end.month," ").concat(e.end.year):"Present"]},t)}))})]}):Object(l.jsx)(p.a,{animation:"border"})};var L=function(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("./data/education.yaml").then(function(){var e=Object(b.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.next=5,Object(S.a)(n);case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)(v.a,{icon:y.f})," Education"]}),n?Object(l.jsx)("ul",{children:n.map((function(e){return Object(l.jsxs)("li",{children:[e.degree,", ",e.department,","," ",e.schoolUrl?Object(l.jsx)("a",{href:e.schoolUrl,children:e.school}):e.school,", ",e.period,e.thesis&&Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{children:["Thesis: ",e.thesis]})}),e.supervisor&&Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{children:[e.supervisor.length<2?"Supervisor":"Supervisors",":"," ",e.supervisor.map((function(e){return e.homepage?Object(l.jsxs)("span",{children:[Object(l.jsx)("a",{href:e.homepage,children:e.name})," ",e.note&&"(".concat(e.note,")")]}):Object(l.jsxs)("span",{children:[e.name," ",e.note&&"(".concat(e.note,")")]})})).reduce((function(e,t){return[e,", ",t]}))]})}),e.collaborator&&Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{children:[e.collaborator.length<2?"Collaborator":"Collaborators",":"," ",e.collaborator.map((function(e){return e.homepage?Object(l.jsxs)("span",{children:[Object(l.jsx)("a",{href:e.homepage,children:e.name})," ",e.note&&"(".concat(e.note,")")]}):Object(l.jsxs)("span",{children:[e.name," ",e.note&&"(".concat(e.note,")")]})})).reduce((function(e,t){return[e,", ",t]}))]})})]})}))}):Object(l.jsx)(p.a,{animation:"border"})]})};var N=function(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("./data/teaching.yaml").then(function(){var e=Object(b.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.next=5,Object(S.a)(n);case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)(v.a,{icon:y.c})," Teaching"]}),Object(l.jsx)("ul",{children:n.map((function(e,t){return Object(l.jsx)("li",{children:"".concat(e.title,", ").concat(e.course,", ").concat(e.school,", ").concat(e.date)},t)}))})]}):Object(l.jsx)(p.a,{animation:"border"})};var K=function(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),s=Object(O.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){fetch("./data/service.yaml").then(function(){var e=Object(b.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.next=5,Object(S.a)(n);case 5:c=e.sent,r(c.service),o(c.subreview);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)(v.a,{icon:y.i})," Academic Activity"]}),Object(l.jsx)("ul",{children:n.map((function(e,t){return Object(l.jsx)("li",{children:"".concat(e.title,", ").concat(e.venue,", ").concat(e.date)},t)}))}),i&&Object(l.jsxs)("p",{style:{paddingLeft:"2rem"},children:["In addition, I was a sub-reviewer for these conferences:\xa0",i.join(", ")]})]}):Object(l.jsx)(p.a,{animation:"border"})},M=n(30);function U(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)(v.a,{icon:y.h})," Contact"]}),Object(l.jsxs)("h4",{children:["Work: kisubkim"," [at] ","smu.edu.sg"]}),Object(l.jsxs)("h4",{children:["Personal: falconlk00"," [at] ","gmail.com"]}),Object(l.jsxs)(g.a,{href:"https://github.com/FalconLK",variant:"outline-info",children:[Object(l.jsx)(v.a,{icon:M.a})," Github"]})," ",Object(l.jsxs)(g.a,{href:"https://www.linkedin.com/in/kisub-kim-81199a179/",variant:"outline-secondary",children:[Object(l.jsx)(v.a,{icon:M.b})," LinkedIn"]})," "]})}function R(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)(v.a,{icon:y.g})," Bibliographic Profiles"," "]}),Object(l.jsxs)(g.a,{href:"https://scholar.google.com/citations?user=Nr_IDzQAAAAJ&hl=en",variant:"outline-success",children:[Object(l.jsx)("i",{className:"ai ai-google-scholar"})," Google Scholar"]})," ",Object(l.jsxs)(g.a,{href:"https://dblp.org/pid/216/3065.html",variant:"outline-success",children:[Object(l.jsx)("i",{className:"ai ai-dblp"})," DBLP"]})," ",Object(l.jsxs)(g.a,{href:"https://orcid.org/0000-0002-4462-6916",variant:"outline-success",children:[Object(l.jsx)("i",{className:"ai ai-orcid"})," ORCID"]})]})}function z(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)(v.a,{icon:y.j})," Curriculum Vitae"]}),Object(l.jsxs)(g.a,{href:"https://drive.google.com/file/d/1cm4epi7laOQTRDJL4gd5kj8FS26NR9cy/view?usp=sharing",variant:"outline-success",children:[Object(l.jsx)(v.a,{icon:y.e})," View my CV"]})]})}var G=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(i.a,{children:[Object(l.jsx)("hr",{}),Object(l.jsx)(U,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(z,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(R,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(B,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(L,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(A,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(N,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(K,{}),Object(l.jsxs)("footer",{style:{marginTop:"5rem",marginBottom:"3rem"},children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{className:"text-center",children:["\xa9 2021 Kisub Kim. The\xa0",Object(l.jsx)("a",{href:"https://github.com/handk85/react-homepage",children:"source code of this homepage"}),"\xa0is available at Github by DK. Please feel free to extend it for your own homepage."]})]})]})]})};n(51),n(52);s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.4e8faad7.chunk.js.map