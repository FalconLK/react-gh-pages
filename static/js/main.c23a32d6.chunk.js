(this["webpackJsonpreact-homepage"]=this["webpackJsonpreact-homepage"]||[]).push([[0],{43:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(15),s=n.n(a),i=(n(43),n(22)),o=n(31),j=n(32),u=n(29),h=n(0);var l=function(){return Object(h.jsx)(i.a,{style:{marginTop:"2rem"},children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(u.a,{md:"auto",children:Object(h.jsx)(o.a,{children:Object(h.jsx)(o.a.Image,{width:200,alt:"Kisub Kim",src:"./profile.jpeg"})})}),Object(h.jsxs)(u.a,{children:[Object(h.jsx)("h2",{children:"Kisub Kim"}),Object(h.jsx)("h4",{children:"Research Scientist, Singapore Management University"}),"Dr. Kisub Kim is a research scientist (postdoc) at"," ",Object(h.jsx)("a",{href:"https://www.smu.edu.sg",children:"Singapore Management University (SMU)"}),". He is mainly working on software engineering, specifically application of artificial intelligence under the supervision of"," ",Object(h.jsx)("a",{href:"http://www.mysmu.edu/faculty/davidlo/",children:"Prof. David Lo"}),". Before joining SMU, he was a research associate at the"," ",Object(h.jsx)("a",{href:"https://wwwen.uni.lu/",children:"University of Luxembourg"}),". He completed his Ph.D. at the"," ",Object(h.jsx)("a",{href:"https://wwwen.uni.lu/",children:"University of Luxembourg"})," under the supervision of"," ",Object(h.jsx)("a",{href:"https://bissyande.github.io/",children:"Prof. Dr. Tegawend\xe9 F. BISSYANDE"}),","," ",Object(h.jsx)("a",{href:"https://www.darkrsw.net/",children:"Prof. Dr. Dongsun Kim"}),","," ",Object(h.jsx)("a",{href:"https://jacquesklein2302.github.io/",children:"Prof. Dr. Jacques Klein"}),", and"," ",Object(h.jsx)("a",{href:"https://wwwfr.uni.lu/snt/people/yves_le_traon",children:"Prof. Dr. Yves Le Traon"}),". He has worked for"," ",Object(h.jsx)("a",{href:"https://www.khmc.or.kr/",children:"Kyung Hee University Hospital"})," ","as a developer. He received his M.Eng. at "," ",Object(h.jsx)("a",{href:"http://www.chungbuk.ac.kr",children:"Chungbuk National University"})," ","under the supervision of"," ",Object(h.jsx)("a",{href:"https://scholar.google.com.hk/citations?user=U7Tc7gEAAAAJ&hl=en",children:"Prof. Dr. Woosung Jung"}),". He received B.Eng. in"," ",Object(h.jsx)("a",{href:"http://ce.jejunu.ac.kr",children:"Computer Engineering Department"})," ","at ",Object(h.jsx)("a",{href:"http://jejunu.ac.kr",children:"Chungbuk National University"})," under the supervision of"," ",Object(h.jsx)("a",{href:"http://cybertec.jejunu.ac.kr/profile.html",children:"Prof. Dr. Younghun Seo"}),". His main research domain include code search, bug localization, and code representation."]})]})})},b=n(11),d=n(2),O=n(6),f=n(9),x=n.n(f),p=n(18),m=n(19),g=n(17),v=n(8),y=n(10),w=["type","id","pdf","site"];function k(e){return Object.entries(e).map((function(e){if("author"===e[0]){var t=e[1].map((function(e){return"".concat(e.family,", ").concat(e.given)})).join(" and ");return"  author={".concat(t,"}")}return e[1]&&!w.includes(e[0])?"  ".concat(e[0],"={").concat(e[1],"}"):null}))}var D=n(13);function S(e,t){return Object(h.jsxs)("a",{href:e,children:["[",t,"]"]})}function T(e){var t=function(e){switch(e.type){case"journal":return e.journal;case"conference":return e.booktitle;case"thesis":return e.school;case"book":return e.publisher}}(e),n=function(e){var t=e.author.map((function(e){return"".concat(e.given[0],". ").concat(e.family)}));return t[t.length-1]="and ".concat(t[t.length-1]),2===t.length?t.join(" "):t.join(", ")}(e);return"thesis"===e.type?'"'.concat(e.title,'", ').concat(e.school,", ").concat(e.year):"".concat(n,', "').concat(e.title,'", ').concat(t,", ").concat(e.year).concat(e.note?", ".concat(e.note):"")}function C(e){var t=Object(c.useState)(!1),n=Object(O.a)(t,2),r=n[0],a=n[1],s=function(e){switch(e.type){case"journal":return"@ARTICLE{".concat(e.id,",\n").concat(k(e).filter((function(e){return null!=e})).join(",\n"),"\n}");case"conference":return"@INPROCEEDINGS{".concat(e.id,",\n").concat(k(e).filter((function(e){return null!=e})).join(",\n"),"\n}");case"thesis":case"book":return""}}(e.paper);return Object(h.jsxs)(m.a,Object(d.a)(Object(d.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(h.jsx)(m.a.Header,{closeButton:!0,children:Object(h.jsx)(m.a.Title,{id:"contained-modal-title-vcenter",children:"Bibtex"})}),Object(h.jsx)(m.a.Body,{children:Object(h.jsx)("pre",{children:s})}),Object(h.jsxs)(m.a.Footer,{children:[Object(h.jsxs)(g.a,{active:r,onClick:function(){a(!0),setTimeout((function(){a(!1)}),3e3),navigator.clipboard.writeText(s)},children:[Object(h.jsx)(v.a,{icon:y.d})," ",r?"Copied":"Copy to clipboard"]}),Object(h.jsx)(g.a,{onClick:e.onHide,children:"Close"})]})]}))}function E(e){var t=Object(c.useState)(!1),n=Object(O.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),i=Object(O.a)(s,2),o=i[0],j=i[1],u=e.papers;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{children:u.map((function(e){return Object(h.jsxs)("li",{children:[T(e)," ",e.site&&S(e.site,"Repo."),e.pdf&&S("".concat(e.pdf),"PDF"),e.DOI&&S("https://doi.org/".concat(e.DOI),"DOI"),"thesis"!==e.type&&"book"!==e.type&&Object(h.jsx)("a",{href:"",onClick:function(t){t.preventDefault(),a(!0),j(e)},children:"[Bibtex]"})]},e.id)}))}),o&&Object(h.jsx)(C,{show:r,onHide:function(){return a(!1)},paper:o})]})}function F(e){return P.apply(this,arguments)}function P(){return(P=Object(b.a)(x.a.mark((function e(t){var n,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.text();case 5:return c=e.sent,e.next=8,Object(D.a)(c);case 8:return(r=e.sent).sort((function(e,t){return t.year-e.year})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){var t=Object(c.useState)(),n=Object(O.a)(t,2),r=n[0],a=n[1],s=e.paperType;return Object(c.useEffect)((function(){Object(b.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("./data/".concat(s,".yaml"));case 2:(t=e.sent).forEach((function(e){e.type=s})),a(t);case 5:case"end":return e.stop()}}),e)})))()}),[s]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h4",{style:{textTransform:"capitalize"},children:s}),r?Object(h.jsx)(E,{papers:r}):Object(h.jsx)(p.a,{animation:"border"})]})}var K=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)(v.a,{icon:y.a})," Publications"]}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(I,{paperType:"journal"}),Object(h.jsx)(I,{paperType:"conference"}),Object(h.jsx)(I,{paperType:"thesis"})]})]})};var A=function(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("./data/work.yaml").then(function(){var e=Object(b.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.next=5,Object(D.a)(n);case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)(v.a,{icon:y.b})," Work Experience"]}),Object(h.jsx)("ul",{children:n.map((function(e,t){return Object(h.jsxs)("li",{children:[e.title,","," ",e.url?Object(h.jsx)("a",{href:e.url,children:e.affiliation}):e.affiliation,", ",e.city,", ",e.country,", ",e.begin.month," ",e.begin.year," ~"," ",e.end?"".concat(e.end.month," ").concat(e.end.year):"Present"]},t)}))})]}):Object(h.jsx)(p.a,{animation:"border"})};var U=function(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("./data/education.yaml").then(function(){var e=Object(b.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.next=5,Object(D.a)(n);case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)(v.a,{icon:y.f})," Education"]}),n?Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsxs)("li",{children:[e.degree,", ",e.department,","," ",e.schoolUrl?Object(h.jsx)("a",{href:e.schoolUrl,children:e.school}):e.school,", ",e.period,e.thesis&&Object(h.jsx)("ul",{children:Object(h.jsxs)("li",{children:["Thesis: ",e.thesis]})}),e.supervisor&&Object(h.jsx)("ul",{children:Object(h.jsxs)("li",{children:[e.supervisor.length<2?"Supervisor":"Supervisors",":"," ",e.supervisor.map((function(e){return e.homepage?Object(h.jsxs)("span",{children:[Object(h.jsx)("a",{href:e.homepage,children:e.name})," ",e.note&&"(".concat(e.note,")")]}):Object(h.jsxs)("span",{children:[e.name," ",e.note&&"(".concat(e.note,")")]})})).reduce((function(e,t){return[e,", ",t]}))]})}),e.collaborator&&Object(h.jsx)("ul",{children:Object(h.jsxs)("li",{children:[e.collaborator.length<2?"Collaborator":"Collaborators",":"," ",e.collaborator.map((function(e){return e.homepage?Object(h.jsxs)("span",{children:[Object(h.jsx)("a",{href:e.homepage,children:e.name})," ",e.note&&"(".concat(e.note,")")]}):Object(h.jsxs)("span",{children:[e.name," ",e.note&&"(".concat(e.note,")")]})})).reduce((function(e,t){return[e,", ",t]}))]})})]})}))}):Object(h.jsx)(p.a,{animation:"border"})]})};var B=function(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("./data/teaching.yaml").then(function(){var e=Object(b.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.next=5,Object(D.a)(n);case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)(v.a,{icon:y.c})," Teaching"]}),Object(h.jsx)("ul",{children:n.map((function(e,t){return Object(h.jsx)("li",{children:"".concat(e.title,", ").concat(e.course,", ").concat(e.school,", ").concat(e.date)},t)}))})]}):Object(h.jsx)(p.a,{animation:"border"})};var H=function(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),s=Object(O.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){fetch("./data/service.yaml").then(function(){var e=Object(b.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.next=5,Object(D.a)(n);case 5:c=e.sent,r(c.service),o(c.subreview);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)(v.a,{icon:y.i})," Academic Activity"]}),Object(h.jsx)("ul",{children:n.map((function(e,t){return Object(h.jsx)("li",{children:"".concat(e.title,", ").concat(e.venue,", ").concat(e.date)},t)}))}),i&&Object(h.jsxs)("p",{style:{paddingLeft:"2rem"},children:["In addition, I was a sub-reviewer for these conferences:\xa0",i.join(", ")]})]}):Object(h.jsx)(p.a,{animation:"border"})},N=n(30);function L(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)(v.a,{icon:y.h})," Contact"]}),Object(h.jsxs)("h4",{children:["Work: kisubkim"," [at] ","smu.edu.sg"]}),Object(h.jsxs)("h4",{children:["Personal: falconlk00"," [at] ","gmail.com"]}),Object(h.jsxs)(g.a,{href:"https://github.com/FalconLK",variant:"outline-info",children:[Object(h.jsx)(v.a,{icon:N.a})," Github"]})," ",Object(h.jsxs)(g.a,{href:"https://www.linkedin.com/in/kim-kisub-81199a179",variant:"outline-secondary",children:[Object(h.jsx)(v.a,{icon:N.b})," LinkedIn"]})," "]})}function J(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)(v.a,{icon:y.g})," Bibliographic Profiles"," "]}),Object(h.jsxs)(g.a,{href:"https://scholar.google.com/citations?user=Nr_IDzQAAAAJ&hl=en",variant:"outline-success",children:[Object(h.jsx)("i",{className:"ai ai-google-scholar"})," Google Scholar"]})," ",Object(h.jsxs)(g.a,{href:"https://dblp.org/pid/216/3065.html",variant:"outline-success",children:[Object(h.jsx)("i",{className:"ai ai-dblp"})," DBLP"]})," ",Object(h.jsxs)(g.a,{href:"https://orcid.org/0000-0002-4462-6916",variant:"outline-success",children:[Object(h.jsx)("i",{className:"ai ai-orcid"})," ORCID"]})]})}function R(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)(v.a,{icon:y.j})," Curriculum Vitae"]}),Object(h.jsxs)(g.a,{href:"https://drive.google.com/file/d/1cm4epi7laOQTRDJL4gd5kj8FS26NR9cy/view?usp=sharing",variant:"outline-success",children:[Object(h.jsx)(v.a,{icon:y.e})," View my CV"]})]})}var M=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l,{}),Object(h.jsxs)(i.a,{children:[Object(h.jsx)("hr",{}),Object(h.jsx)(L,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(R,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(J,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(K,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(U,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(A,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(B,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(H,{}),Object(h.jsxs)("footer",{style:{marginTop:"5rem",marginBottom:"3rem"},children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{className:"text-center",children:["\xa9 2021 Kisub Kim. The\xa0",Object(h.jsx)("a",{href:"https://github.com/handk85/react-homepage",children:"source code of this homepage"}),"\xa0is available at Github by DK. Please feel free to extend it for your own homepage."]})]})]})]})};n(51),n(52);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c23a32d6.chunk.js.map