import{a as $}from"./chunk-P32VPINF.js";import{d as B,e as K,f as R,g as q,h as L,i as j,j as G,k as H,l as U,m as Y,n as J,o as Q,p as X,s as Z}from"./chunk-ZD6IZDDJ.js";import{Ab as v,Bb as y,Cb as M,Fb as u,Ga as E,Gb as D,Ia as F,Ka as o,La as O,Ua as N,Za as f,a as T,eb as d,fb as x,gc as I,hb as i,hc as W,ib as n,ic as A,jb as C,kc as z,la as m,ma as g,mb as P,nb as h,ob as b,vb as k,wb as s,xb as w,yb as V}from"./chunk-34MFIUHM.js";var _=c=>({active:c}),ee=c=>({disabled:c}),ne=c=>({show:c}),oe=c=>({"d-block":c}),re=c=>({"btn-invalid":c}),le=(c,r)=>({active:c,inactive:r}),se=c=>({activePage:c});function ae(c,r){c&1&&C(0,"img",78)}function ce(c,r){c&1&&C(0,"img",79)}function de(c,r){if(c&1){let l=P();i(0,"li",82),h("click",function(t){let p=m(l).$implicit;return b(2).selectOption(p.value),g(t.stopPropagation())}),s(1),n()}if(c&2){let l=r.$implicit,e=b(2);x("selected",l.value===e.selectedOption),o(),V(" ",l.label," ")}}function pe(c,r){if(c&1&&(i(0,"ul",80),f(1,de,2,3,"li",81),n()),c&2){let l=b();o(),d("ngForOf",l.sortOptions)}}function me(c,r){if(c&1){let l=P();i(0,"tr")(1,"td",83),s(2),n(),i(3,"td",27),s(4),n(),i(5,"td",83),s(6),n(),i(7,"td",27),s(8),n(),i(9,"td",27),s(10),n(),i(11,"td",83),s(12),n(),i(13,"td",83),s(14),n(),i(15,"td",83),s(16),n(),i(17,"td",83),s(18),n(),i(19,"td",27)(20,"div",84)(21,"button",85)(22,"span"),s(23),n(),C(24,"img",86),n(),i(25,"ul",87)(26,"li")(27,"button",88),h("click",function(){let t=m(l).$implicit,p=b();return g(p.changeStatus(t,!t.status))}),s(28),n()()()()(),i(29,"td",27)(30,"div",89)(31,"button",90),C(32,"img",91),n(),i(33,"ul",87)(34,"li")(35,"button",88),h("click",function(){let t=m(l).$implicit,p=b();return g(p.editVehicle(t))}),C(36,"img",92),s(37," Edit "),n()()()()()()}if(c&2){let l=r.$implicit;o(2),w(l.id),o(2),w(l.name),o(2),w(l.makeModel),o(2),w(l.registrationNumber),o(2),V("\u20B9",l.perKMCost,""),o(2),w(l.vehicleType),o(2),w(l.purpose),o(2),w(l.passengerCapacity),o(2),w(l.weightCapacity),o(3),d("ngClass",D(17,le,l.status,!l.status)),o(2),w(l.status?"Active":"Inactive"),o(),d("src",l.status?"../../../assets/arrow-active.svg":"../../../assets/arrow-inactive.svg",E),o(3),x("active",!l.status)("inactive",l.status),o(),V(" ",l.status?"Inactive":"Active"," ")}}function ge(c,r){if(c&1){let l=P();i(0,"li",37)(1,"button",38),h("click",function(t){let p=m(l).$implicit;return b().goToPage(p),g(t.preventDefault())}),s(2),n()()}if(c&2){let l=r.$implicit,e=b();d("ngClass",u(2,se,l===e.pageNum)),o(2),V(" ",l," ")}}function ue(c,r){c&1&&(i(0,"div",93),s(1," Name is required. "),n())}function he(c,r){c&1&&(i(0,"div",93),s(1," Make Model is required. "),n())}function _e(c,r){c&1&&(i(0,"div",93),s(1," Registration Number is required. "),n())}function Ce(c,r){c&1&&(i(0,"div",93),s(1," Per KM Cost is required. "),n())}function fe(c,r){c&1&&(i(0,"div",93),s(1," Passenger Capacity is required. "),n())}function ve(c,r){c&1&&(i(0,"div",93),s(1," Weight Capacity is required. "),n())}function ye(c,r){c&1&&(i(0,"div",93),s(1," Vehicle Type is required. "),n())}function Me(c,r){c&1&&(i(0,"div",93),s(1," Purpose is required. "),n())}var te=class c{constructor(r,l){this.adminService=r;this.resourceService=l}searchTerm="";sortColumn="";vehicles=[];pageSize=10;pageNum=1;sortField="ID";sortOrder="Asc";type="L";purpose="A";totalVehicles=0;totalPages=0;min=1;max=5;switch=!1;showDropdown=!1;selectedOption=null;sortOptions=[{value:"",label:"Sort by"},{value:"ID",label:"ID"},{value:"Name",label:"Name"},{value:"MakeModel",label:"Make Model"},{value:"RegistrationNumber",label:"Registration Number"},{value:"PerKMCost",label:"Per KM Cost"},{value:"VehicleType",label:"Vehicle Type"},{value:"Purpose",label:"Purpose"},{value:"PassengerCapacity",label:"Passenger Capacity"},{value:"WeightCapacity",label:"Weight Capacity"}];get pages(){let r=this.min;return this.totalPages<=5?Array(this.totalPages).fill(0).map((l,e)=>e+1):Array(5).fill(0).map((l,e)=>e+r)}showModal=!1;editMode=!0;selectedVehicle={};vehicleID=0;onDocumentClick(r){let l=r.target;this.showDropdown&&!l.closest(".custom-select")&&(this.showDropdown=!1)}addVehicleStart(){this.editMode=!1,this.selectedVehicle={name:"",makeModel:"",registrationNumber:"",perKMCost:0,passengerCapacity:0,weightCapacity:0,vehicleType:"",purpose:"",status:!0},console.log(this.selectedVehicle),this.openModal()}openModal(){this.showModal=!0}closeModal(){this.showModal=!1}toggleDropdown(){this.showDropdown=!this.showDropdown}selectOption(r){this.sort(r),this.showDropdown=!1}addVehicle(r){r.valid&&(this.selectedVehicle=r.value,this.adminService.AddVehicle(this.selectedVehicle).subscribe(l=>{l.status===0?this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.type,this.purpose,this.searchTerm):alert(l.exceptionMessage)},l=>{let e=l.error.map(t=>t.errorMessage).join(`
`);alert(e)}),r.reset(),this.closeModal())}updateVehicle(r){r.valid&&(r.value.id=this.selectedVehicle.id,console.log(r.value),this.selectedVehicle=r.value,this.adminService.UpdateVehicle(this.selectedVehicle).subscribe(l=>{l.status===0?this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.type,this.purpose,this.searchTerm):alert(l.exceptionMessage)},l=>{let e=l.error.map(t=>t.errorMessage).join(`
`);alert(e)}),r.reset(),this.closeModal())}editVehicle(r){this.selectedVehicle=T({},r),this.editMode=!0,this.openModal()}ngOnInit(){this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.type,this.purpose,this.searchTerm),this.resourceService.GetTotalVehicles(this.searchTerm).subscribe({next:r=>{r.status===0?(this.totalVehicles=r.data,this.totalPages=Math.ceil(this.totalVehicles/this.pageSize),this.min=1,this.totalPages>5?this.max=5:this.max=this.totalPages):alert(r.exceptionMessage)},error:r=>{}})}sort(r){this.selectedOption=r,this.sortColumn=r,this.sortField===r?this.sortOrder==="Asc"?this.sortOrder="Desc":this.sortOrder="Asc":this.sortOrder="Asc",this.CallDB(this.pageSize,this.pageNum,r,this.sortOrder,this.type,this.purpose,this.searchTerm),this.sortField=r}search(r){this.searchTerm=r,this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.type,this.purpose,this.searchTerm),this.resourceService.GetTotalVehicles(this.searchTerm).subscribe({next:l=>{l.status===0?(this.totalVehicles=l.data,this.totalPages=Math.ceil(this.totalVehicles/this.pageSize)):console.error("Failed to fetch vehicles:",l)},error:l=>{console.error("An error occurred:",l)}})}previousPage(){this.pageNum--,this.min--,this.max--,this.pageNum<1&&(this.pageNum=1,this.min=1),this.min<1&&(this.min=1,this.max=this.min+4),this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.type,this.purpose,this.searchTerm)}nextPage(){this.pageNum++,this.max++,this.min++,this.pageNum>this.totalPages&&(this.pageNum=this.totalPages),this.max>this.totalPages&&(this.max=this.totalPages,this.min=this.max-4),this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.type,this.purpose,this.searchTerm)}goToPage(r){let l=r-this.pageNum;this.pageNum=r,this.min=this.min+l,this.max=this.max+l,this.pageNum<1?this.pageNum=1:this.pageNum>this.totalPages&&(this.pageNum=this.totalPages),this.min<1&&(this.min=1),this.max>this.totalPages&&(this.max=this.totalPages),this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.type,this.purpose,this.searchTerm)}PageSizeChange(r){this.pageSize=r,this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.type,this.purpose,this.searchTerm)}changeStatus(r,l){r.status!==l&&this.adminService.FlipVehicleStatus(r.id).subscribe({next:e=>{e.status===0?this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.type,this.purpose,this.searchTerm):alert(e.exceptionMessage)},error:e=>{alert(e.error.exceptionMessage)}})}CallDB(r,l,e,t,p,a,ie){this.resourceService.GetVehicles(r,l,e,t,p,a,ie).subscribe({next:S=>{S.status===0?this.vehicles=S.data:alert(S.exceptionMessage)},error:S=>{console.log("DB Call",S),alert(S.message)}})}onPurposeChange(r){r==="P"&&(this.selectedVehicle.weightCapacity=0),r==="G"&&(this.selectedVehicle.passengerCapacity=0)}static \u0275fac=function(l){return new(l||c)(O($),O(Z))};static \u0275cmp=N({type:c,selectors:[["app-vehicles"]],hostBindings:function(l,e){l&1&&h("click",function(p){return e.onDocumentClick(p)},!1,F)},decls:170,vars:106,consts:[["addVehicleButton",""],["customSelect",""],["modal",""],["vehicleForm","ngForm"],[1,"MainContainer"],[1,"containerD","d-flex","justify-content-between","mt-4"],[1,"row"],[1,"frame23","col-md-5"],[1,"input-with-icon"],["type","text","placeholder","Search vehicles...",1,"form-control",3,"ngModelChange","ngModel"],["src","../../../assets/search.svg","alt","Search",1,"search-icon"],[1,"col-md-7","d-flex","justify-content-end"],[1,"add-vehicle-button",3,"click"],["src","../../../assets/add.svg","alt","Add Icon","width","15","height","15"],[1,"frame24","col-md-3"],[1,"custom-select",3,"click"],[1,"selected-option"],["src","../../../assets/up-arrow.svg","alt","Up Arrow","class","arrow",4,"ngIf"],["src","../../../assets/down-arrow.svg","alt","Down Arrow","class","arrow",4,"ngIf"],["class","options-list",4,"ngIf"],[1,"table","table-striped","mt-3"],[1,"col-1",3,"click"],[1,"arrows"],["src","../../../assets/up-arrow.svg","alt","Up",3,"ngClass"],["src","../../../assets/down-arrow.svg","alt","Down",3,"ngClass"],[1,"col-2",3,"click"],[1,"col-3",3,"click"],[1,"col-2"],[4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"form-select-2",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],[1,"col-md-6","d-flex","justify-content-end"],[1,"frame25","col-md-6","d-flex","justify-content-center"],[1,"pagination"],[1,"page-item",3,"ngClass"],["type","button",1,"page-link",3,"click"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"modal-backdrop",3,"click","ngClass"],["tabindex","-1","role","dialog",1,"modal",3,"ngClass"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header","justify-content-between"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","text-danger",4,"ngIf"],["for","makeModel"],["type","text","id","makeModel","name","makeModel","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","registrationNumber"],["type","text","id","registrationNumber","name","registrationNumber","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","perKMCost"],["type","number","id","perKMCost","name","perKMCost","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","passengerCapacity"],["type","number","id","passengerCapacity","name","passengerCapacity","required","",1,"form-control",3,"ngModelChange","disabled","ngModel"],["for","weightCapacity"],["type","number","id","weightCapacity","name","weightCapacity","required","",1,"form-control",3,"ngModelChange","disabled","ngModel"],["for","vehicleType"],["id","vehicleType","name","vehicleType","required","",1,"form-control",3,"ngModelChange","ngModel"],["value","","disabled","","selected",""],["value","H"],["value","L"],["for","purpose"],["id","purpose","name","purpose","required","",1,"form-control",3,"ngModelChange","ngModel"],["value","P"],["value","G"],[1,"form-group","form-check"],["type","checkbox","id","status","name","status",1,"form-check-input",3,"ngModelChange","ngModel"],["for","status",1,"form-check-label"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"ngClass","disabled"],["src","../../../assets/up-arrow.svg","alt","Up Arrow",1,"arrow"],["src","../../../assets/down-arrow.svg","alt","Down Arrow",1,"arrow"],[1,"options-list"],[3,"selected","click",4,"ngFor","ngForOf"],[3,"click"],[1,"col-1"],[1,"[ngClass]='{","active:","driver.status,","inactive:","!driver.status","}'"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn",3,"ngClass"],["alt","Status",1,"arrow",3,"src"],[1,"dropdown-menu"],["type","button",1,"dropdown-item",3,"click"],[1,"dropdown","dropstart"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["src","../../../assets/more-01.svg","alt","More"],["src","../../../assets/edit.svg","alt","Edit"],[1,"text-danger"]],template:function(l,e){if(l&1){let t=P();i(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7)(4,"div",8)(5,"input",9),M("ngModelChange",function(a){return m(t),y(e.searchTerm,a)||(e.searchTerm=a),g(a)}),h("ngModelChange",function(){return m(t),g(e.search(e.searchTerm))}),n(),C(6,"img",10),n()(),i(7,"div",11)(8,"button",12,0),h("click",function(){return m(t),g(e.addVehicleStart())}),C(10,"img",13),s(11," Add Vehicle "),n(),i(12,"div",14)(13,"div",15,1),h("click",function(){return m(t),g(e.toggleDropdown())}),i(15,"div",16),s(16),f(17,ae,1,0,"img",17)(18,ce,1,0,"img",18),n(),f(19,pe,2,1,"ul",19),n()()()()(),i(20,"table",20)(21,"thead")(22,"tr")(23,"th",21),h("click",function(){return m(t),g(e.sort("ID"))}),s(24," ID "),i(25,"div",22),C(26,"img",23)(27,"img",24),n()(),i(28,"th",25),h("click",function(){return m(t),g(e.sort("Name"))}),s(29," Name "),i(30,"div",22),C(31,"img",23)(32,"img",24),n()(),i(33,"th",25),h("click",function(){return m(t),g(e.sort("MakeModel"))}),s(34," Model "),i(35,"div",22),C(36,"img",23)(37,"img",24),n()(),i(38,"th",26),h("click",function(){return m(t),g(e.sort("RegistrationNumber"))}),s(39," Registration No. "),i(40,"div",22),C(41,"img",23)(42,"img",24),n()(),i(43,"th",25),h("click",function(){return m(t),g(e.sort("PerKMCost"))}),s(44," KM Cost "),i(45,"div",22),C(46,"img",23)(47,"img",24),n()(),i(48,"th",25),h("click",function(){return m(t),g(e.sort("VehicleType"))}),s(49," Type "),i(50,"div",22),C(51,"img",23)(52,"img",24),n()(),i(53,"th",25),h("click",function(){return m(t),g(e.sort("Purpose"))}),s(54," Purpose "),i(55,"div",22),C(56,"img",23)(57,"img",24),n()(),i(58,"th",25),h("click",function(){return m(t),g(e.sort("PassengerCapacity"))}),s(59," P Capacity "),i(60,"div",22),C(61,"img",23)(62,"img",24),n()(),i(63,"th",25),h("click",function(){return m(t),g(e.sort("WeightCapacity"))}),s(64," W Capacity "),i(65,"div",22),C(66,"img",23)(67,"img",24),n()(),i(68,"th",25),h("click",function(){return m(t),g(e.sort("Status"))}),s(69," Status "),i(70,"div",22),C(71,"img",23)(72,"img",24),n()(),C(73,"th",27),n()(),i(74,"tbody"),f(75,me,38,20,"tr",28),n()(),i(76,"div",6)(77,"div",29),s(78," Showing "),i(79,"select",30),M("ngModelChange",function(a){return m(t),y(e.pageSize,a)||(e.pageSize=a),g(a)}),h("ngModelChange",function(){return m(t),g(e.PageSizeChange(e.pageSize))}),i(80,"option",31),s(81,"10"),n(),i(82,"option",32),s(83,"25"),n(),i(84,"option",33),s(85,"50"),n()(),s(86),n(),i(87,"div",34)(88,"div",35)(89,"ul",36)(90,"li",37)(91,"button",38),h("click",function(a){return m(t),e.previousPage(),g(a.preventDefault())}),s(92," Previous "),n()(),f(93,ge,3,4,"li",39),i(94,"li",37)(95,"button",38),h("click",function(a){return m(t),e.nextPage(),g(a.preventDefault())}),s(96," Next "),n()()()()()()(),i(97,"div",40),h("click",function(){return m(t),g(e.closeModal())}),n(),i(98,"div",41,2)(100,"div",42)(101,"div",43)(102,"div",44)(103,"h5",45),s(104),n(),i(105,"button",46),h("click",function(){return m(t),g(e.closeModal())}),i(106,"span",47),s(107,"\xD7"),n()()(),i(108,"div",48)(109,"form",49,3),h("ngSubmit",function(){m(t);let a=k(110);return g(e.editMode?e.updateVehicle(a):e.addVehicle(a))}),i(111,"div",50)(112,"label",51),s(113,"Name"),n(),i(114,"input",52),M("ngModelChange",function(a){return m(t),y(e.selectedVehicle.name,a)||(e.selectedVehicle.name=a),g(a)}),n(),f(115,ue,2,0,"div",53),n(),i(116,"div",50)(117,"label",54),s(118,"Make Model"),n(),i(119,"input",55),M("ngModelChange",function(a){return m(t),y(e.selectedVehicle.makeModel,a)||(e.selectedVehicle.makeModel=a),g(a)}),n(),f(120,he,2,0,"div",53),n(),i(121,"div",50)(122,"label",56),s(123,"Registration Number"),n(),i(124,"input",57),M("ngModelChange",function(a){return m(t),y(e.selectedVehicle.registrationNumber,a)||(e.selectedVehicle.registrationNumber=a),g(a)}),n(),f(125,_e,2,0,"div",53),n(),i(126,"div",50)(127,"label",58),s(128,"Per KM Cost"),n(),i(129,"input",59),M("ngModelChange",function(a){return m(t),y(e.selectedVehicle.perKMCost,a)||(e.selectedVehicle.perKMCost=a),g(a)}),n(),f(130,Ce,2,0,"div",53),n(),i(131,"div",50)(132,"label",60),s(133,"Passenger Capacity"),n(),i(134,"input",61),M("ngModelChange",function(a){return m(t),y(e.selectedVehicle.passengerCapacity,a)||(e.selectedVehicle.passengerCapacity=a),g(a)}),n(),f(135,fe,2,0,"div",53),n(),i(136,"div",50)(137,"label",62),s(138,"Weight Capacity"),n(),i(139,"input",63),M("ngModelChange",function(a){return m(t),y(e.selectedVehicle.weightCapacity,a)||(e.selectedVehicle.weightCapacity=a),g(a)}),n(),f(140,ve,2,0,"div",53),n(),i(141,"div",50)(142,"label",64),s(143,"Vehicle Type"),n(),i(144,"select",65),M("ngModelChange",function(a){return m(t),y(e.selectedVehicle.vehicleType,a)||(e.selectedVehicle.vehicleType=a),g(a)}),i(145,"option",66),s(146,"Select Vehicle Type"),n(),i(147,"option",67),s(148,"H (Heavy Vehicle)"),n(),i(149,"option",68),s(150,"L (Light Vehicle)"),n()(),f(151,ye,2,0,"div",53),n(),i(152,"div",50)(153,"label",69),s(154,"Purpose"),n(),i(155,"select",70),M("ngModelChange",function(a){return m(t),y(e.selectedVehicle.purpose,a)||(e.selectedVehicle.purpose=a),g(a)}),h("ngModelChange",function(a){return m(t),g(e.onPurposeChange(a))}),i(156,"option",66),s(157,"Select Purpose"),n(),i(158,"option",71),s(159,"P (Passenger)"),n(),i(160,"option",72),s(161,"G (Goods)"),n()(),f(162,Me,2,0,"div",53),n(),i(163,"div",73)(164,"input",74),M("ngModelChange",function(a){return m(t),y(e.selectedVehicle.status,a)||(e.selectedVehicle.status=a),g(a)}),n(),i(165,"label",75),s(166,"Active"),n()(),i(167,"div",76)(168,"button",77),s(169),n()()()()()()()}if(l&2){let t=k(110);o(5),v("ngModel",e.searchTerm),o(11),V(" ",e.selectedOption||"Sort by"," "),o(),d("ngIf",e.sortOrder==="Asc"),o(),d("ngIf",e.sortOrder==="Desc"),o(),d("ngIf",e.showDropdown),o(7),d("ngClass",u(56,_,e.sortField==="ID"&&e.sortOrder==="Asc")),o(),d("ngClass",u(58,_,e.sortField==="ID"&&e.sortOrder==="Desc")),o(4),d("ngClass",u(60,_,e.sortField==="Name"&&e.sortOrder==="Asc")),o(),d("ngClass",u(62,_,e.sortField==="Name"&&e.sortOrder==="Desc")),o(4),d("ngClass",u(64,_,e.sortField==="MakeModel"&&e.sortOrder==="Asc")),o(),d("ngClass",u(66,_,e.sortField==="MakeModel"&&e.sortOrder==="Desc")),o(4),d("ngClass",u(68,_,e.sortField==="RegistrationNumber"&&e.sortOrder==="Asc")),o(),d("ngClass",u(70,_,e.sortField==="RegistrationNumber"&&e.sortOrder==="Desc")),o(4),d("ngClass",u(72,_,e.sortField==="PerKMCost"&&e.sortOrder==="Asc")),o(),d("ngClass",u(74,_,e.sortField==="PerKMCost"&&e.sortOrder==="Desc")),o(4),d("ngClass",u(76,_,e.sortField==="VehicleType"&&e.sortOrder==="Asc")),o(),d("ngClass",u(78,_,e.sortField==="VehicleType"&&e.sortOrder==="Desc")),o(4),d("ngClass",u(80,_,e.sortField==="Purpose"&&e.sortOrder==="Asc")),o(),d("ngClass",u(82,_,e.sortField==="Purpose"&&e.sortOrder==="Desc")),o(4),d("ngClass",u(84,_,e.sortField==="PassengerCapacity"&&e.sortOrder==="Asc")),o(),d("ngClass",u(86,_,e.sortField==="PassengerCapacity"&&e.sortOrder==="Desc")),o(4),d("ngClass",u(88,_,e.sortField==="WeightCapacity"&&e.sortOrder==="Asc")),o(),d("ngClass",u(90,_,e.sortField==="WeightCapacity"&&e.sortOrder==="Desc")),o(4),d("ngClass",u(92,_,e.sortField==="Status"&&e.sortOrder==="Asc")),o(),d("ngClass",u(94,_,e.sortField==="Status"&&e.sortOrder==="Desc")),o(3),d("ngForOf",e.vehicles),o(4),v("ngModel",e.pageSize),o(7),V(" of ",e.totalVehicles," "),o(4),d("ngClass",u(96,ee,e.pageNum===1)),o(3),d("ngForOf",e.pages),o(),d("ngClass",u(98,ee,e.pageNum===e.totalPages)),o(3),d("ngClass",u(100,ne,e.showModal)),o(),d("ngClass",u(102,oe,e.showModal)),o(6),V(" ",e.editMode?"Edit Vehicle":"Add Vehicle"," "),o(10),v("ngModel",e.selectedVehicle.name),o(),d("ngIf",(t.controls.name==null?null:t.controls.name.invalid)&&((t.controls.name==null?null:t.controls.name.dirty)||(t.controls.name==null?null:t.controls.name.touched))),o(4),v("ngModel",e.selectedVehicle.makeModel),o(),d("ngIf",(t.controls.makeModel==null?null:t.controls.makeModel.invalid)&&((t.controls.makeModel==null?null:t.controls.makeModel.dirty)||(t.controls.makeModel==null?null:t.controls.makeModel.touched))),o(4),v("ngModel",e.selectedVehicle.registrationNumber),o(),d("ngIf",(t.controls.registrationNumber==null?null:t.controls.registrationNumber.invalid)&&((t.controls.registrationNumber==null?null:t.controls.registrationNumber.dirty)||(t.controls.registrationNumber==null?null:t.controls.registrationNumber.touched))),o(4),v("ngModel",e.selectedVehicle.perKMCost),o(),d("ngIf",(t.controls.perKMCost==null?null:t.controls.perKMCost.invalid)&&((t.controls.perKMCost==null?null:t.controls.perKMCost.dirty)||(t.controls.perKMCost==null?null:t.controls.perKMCost.touched))),o(4),d("disabled",e.selectedVehicle.purpose==="G"),v("ngModel",e.selectedVehicle.passengerCapacity),o(),d("ngIf",(t.controls.passengerCapacity==null?null:t.controls.passengerCapacity.invalid)&&((t.controls.passengerCapacity==null?null:t.controls.passengerCapacity.dirty)||(t.controls.passengerCapacity==null?null:t.controls.passengerCapacity.touched))),o(4),d("disabled",e.selectedVehicle.purpose==="P"),v("ngModel",e.selectedVehicle.weightCapacity),o(),d("ngIf",(t.controls.weightCapacity==null?null:t.controls.weightCapacity.invalid)&&((t.controls.weightCapacity==null?null:t.controls.weightCapacity.dirty)||(t.controls.weightCapacity==null?null:t.controls.weightCapacity.touched))),o(4),v("ngModel",e.selectedVehicle.vehicleType),o(7),d("ngIf",(t.controls.vehicleType==null?null:t.controls.vehicleType.invalid)&&((t.controls.vehicleType==null?null:t.controls.vehicleType.dirty)||(t.controls.vehicleType==null?null:t.controls.vehicleType.touched))),o(4),v("ngModel",e.selectedVehicle.purpose),o(7),d("ngIf",(t.controls.purpose==null?null:t.controls.purpose.invalid)&&((t.controls.purpose==null?null:t.controls.purpose.dirty)||(t.controls.purpose==null?null:t.controls.purpose.touched))),o(2),v("ngModel",e.selectedVehicle.status),o(4),d("ngClass",u(104,re,t.invalid))("disabled",t.invalid),o(),V(" ",e.editMode?"Update":"Add"," ")}},dependencies:[X,G,Y,J,K,H,B,U,R,q,Q,j,L,z,I,W,A],styles:['.MainContainer[_ngcontent-%COMP%]{width:100%;margin-left:.5rem}.containerD[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{width:100%}.input-with-icon[_ngcontent-%COMP%]{position:relative}.input-with-icon[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);width:20px;height:20px;pointer-events:none}.input-with-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-right:30px}.input-with-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{box-shadow:0 0 5px 2px #00800033;border-color:green}.custom-select[_ngcontent-%COMP%]{position:relative;width:100%;-webkit-user-select:none;user-select:none}.custom-select[_ngcontent-%COMP%]:focus-within{box-shadow:0 0 5px 2px #00800033;border-color:green;outline:none;z-index:10}.selected-option[_ngcontent-%COMP%]{padding:8px 12px;border:1px solid #cccccc;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:space-between}.selected-option[_ngcontent-%COMP%]:focus{box-shadow:0 0 5px 2px #00800033;border-color:green;outline:none}.down-arrow[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:10px;pointer-events:none}.options-list[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;width:100%;border:1px solid #ccc;border-radius:4px;list-style:none;padding:0;margin:0;background-color:#fff;z-index:10}.options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 12px;cursor:pointer}.options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#0000001a}.options-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#e0f0e8;color:green}.table[_ngcontent-%COMP%]{table-layout:fixed;width:100%}th[_ngcontent-%COMP%]{position:relative}.arrows[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;vertical-align:middle}.arrows[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:12px;height:12px;opacity:.3;cursor:pointer}.arrows[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%]{opacity:1}.arrows.invisible[_ngcontent-%COMP%]{visibility:hidden}.arrow[_ngcontent-%COMP%]{margin-top:-3px}.form-select[_ngcontent-%COMP%]{margin:-5px}.active[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;border-radius:4px;background:#0dff0029;width:5.5vw;color:#1e761e;font-feature-settings:"liga" off,"clig" off;border-color:#1e761e;font-family:Public Sans;font-size:13px;font-style:normal;font-weight:600;line-height:14px}.inactive[_ngcontent-%COMP%]{display:flex;padding:5px 10px;align-items:center;gap:10px;border-radius:4px;background:#ff590029;width:5.5vw;color:#a0411e;font-feature-settings:"liga" off,"clig" off;border-color:#a0411e;font-family:Public Sans;font-size:13px;font-style:normal;font-weight:600;line-height:14px}.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{border:none;background-color:transparent;color:green}.pagination[_ngcontent-%COMP%]   .page-item.activePage[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{background-color:#e0f0e8;border-color:#e0f0e8;color:green}.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:focus{box-shadow:none;outline:none}.form-select-2[_ngcontent-%COMP%]{width:3vw}.btn[_ngcontent-%COMP%]{display:flex;padding:5px 10px;align-items:center;justify-content:space-between;gap:10px;border-radius:4px;width:6.5vw}.dropdown-menu[_ngcontent-%COMP%]{align-items:center;border-radius:4px;padding:0;min-width:auto}.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:left}.arrow[_ngcontent-%COMP%]{margin-left:-5px;flex-shrink:0}.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0;border:none;background:none}.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:middle}.dropdown-item[_ngcontent-%COMP%]{display:flex;align-items:center;width:6.5vw}.dropdown-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:8px;vertical-align:middle}.add-vehicle-button[_ngcontent-%COMP%]{background-color:#e0f0e8;color:green;border:none;padding:8px 16px;border-radius:5px;display:flex;align-items:center;justify-content:center;margin-right:15px}.add-vehicle-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px}.modal-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;z-index:1040;display:none}.modal-backdrop.show[_ngcontent-%COMP%]{display:block}.modal[_ngcontent-%COMP%]{z-index:1050}.modal.d-block[_ngcontent-%COMP%]{pointer-events:none}.modal.d-block[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{pointer-events:auto}.modal-content[_ngcontent-%COMP%]{border-radius:16px;background:#d9d9d9;box-shadow:0 0 18.6px #0000004d}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:green;border-color:green;margin:0 5px}.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none}.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover{background-color:#006400}.modal-footer[_ngcontent-%COMP%]   .btn-invalid[_ngcontent-%COMP%]{background-color:#ff4d4d;color:#fff;border-color:#ff4d4d}.modal-footer[_ngcontent-%COMP%]   .btn-invalid[_ngcontent-%COMP%]:hover{background-color:#c00}.error-message[_ngcontent-%COMP%]{color:#c00}.close[_ngcontent-%COMP%]{border:0;color:#000;background:#d9d9d9;font-size:2rem}']})};export{te as VehiclesComponent};
