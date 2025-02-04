import{a as ee}from"./chunk-MS2ZGRDE.js";import{d as B,e as L,f as W,g as j,h as q,i as U,j as G,k as Y,l as J,m as K,n as Q,o as X,p as Z,s as $}from"./chunk-TJGDV3PH.js";import{Ab as b,Bb as w,Cb as M,Fb as v,Ga as F,Gb as k,Ia as E,Ka as s,Kb as R,La as V,Ua as T,Za as f,a as N,eb as d,fb as P,gc as I,hb as r,hc as A,ib as o,ic as H,jb as h,kc as z,la as p,ma as g,mb as O,nb as u,ob as D,vb as x,wb as c,xb as S,yb as C}from"./chunk-34MFIUHM.js";var _=a=>({active:a}),te=a=>({disabled:a}),ne=a=>({show:a}),re=a=>({"d-block":a}),oe=(a,i)=>({InValid:a,Valid:i}),se=a=>({"btn-invalid":a}),ae=(a,i)=>({active:a,inactive:i}),le=a=>({activePage:a});function ce(a,i){a&1&&h(0,"img",68)}function de(a,i){a&1&&h(0,"img",69)}function me(a,i){if(a&1){let n=O();r(0,"li",72),u("click",function(t){let m=p(n).$implicit;return D(2).selectOption(m.value),g(t.stopPropagation())}),c(1),o()}if(a&2){let n=i.$implicit,e=D(2);P("selected",n.value===e.selectedOption),s(),C(" ",n.label," ")}}function pe(a,i){if(a&1&&(r(0,"ul",70),f(1,me,2,3,"li",71),o()),a&2){let n=D();s(),d("ngForOf",n.sortOptions)}}function ge(a,i){a&1&&h(0,"img",84)}function ue(a,i){a&1&&h(0,"img",85)}function ve(a,i){if(a&1){let n=O();r(0,"tr")(1,"td",73),c(2),o(),r(3,"td",27),c(4),o(),r(5,"td",73),f(6,ge,1,0,"img",74)(7,ue,1,0,"ng-template",null,4,R),o(),r(9,"td",27),c(10),o(),r(11,"td",27),c(12),o(),r(13,"td",27),c(14),o(),r(15,"td",27)(16,"div",75)(17,"button",76)(18,"span"),c(19),o(),h(20,"img",77),o(),r(21,"ul",78)(22,"li")(23,"button",79),u("click",function(){let t=p(n).$implicit,m=D();return g(m.changeStatus(t,!t.status))}),c(24),o()()()()(),r(25,"td",27)(26,"div",80)(27,"button",81),h(28,"img",82),o(),r(29,"ul",78)(30,"li")(31,"button",79),u("click",function(){let t=p(n).$implicit,m=D();return g(m.editDriver(t))}),h(32,"img",83),c(33," Edit "),o()()()()()()}if(a&2){let n=i.$implicit,e=x(8);s(2),S(n.id),s(2),S(n.name),s(2),d("ngIf",n.posessHeavyVehicleLicence)("ngIfElse",e),s(4),C("\u20B9",n.perDayRate,""),s(2),C("\u20B9",n.overtimeRate,""),s(2),S(n.mobileNumber),s(3),d("ngClass",k(15,ae,n.status,!n.status)),s(2),S(n.status?"Active":"Inactive"),s(),d("src",n.status?"../../../assets/arrow-active.svg":"../../../assets/arrow-inactive.svg",F),s(3),P("active",!n.status)("inactive",n.status),s(),C(" ",n.status?"Inactive":"Active"," ")}}function he(a,i){if(a&1){let n=O();r(0,"li",38)(1,"button",39),u("click",function(t){let m=p(n).$implicit;return D().goToPage(m),g(t.preventDefault())}),c(2),o()()}if(a&2){let n=i.$implicit,e=D();d("ngClass",v(2,le,n===e.pageNum)),s(2),C(" ",n," ")}}function _e(a,i){a&1&&(r(0,"div",86),c(1," Name is required. "),o())}function fe(a,i){a&1&&(r(0,"div",86),c(1," Mobile Number is required. "),o())}function Ce(a,i){a&1&&(r(0,"div",86),c(1," Per Day Rate is required. "),o())}function be(a,i){a&1&&(r(0,"div",86),c(1," Overtime Rate is required. "),o())}var ie=class a{constructor(i,n){this.adminService=i;this.resourceService=n}searchTerm="";sortColumn="";drivers=[];pageSize=10;pageNum=1;sortField="ID";sortOrder="Asc";HMV=!1;totalDrivers=0;totalPages=0;min=1;max=5;switch=!1;showDropdown=!1;selectedOption=null;sortOptions=[{value:"",label:"Sort by"},{value:"ID",label:"ID"},{value:"Name",label:"Name"},{value:"PerDayRate",label:"Per Day Rate"},{value:"OvertimeRate",label:"Overtime Rate"},{value:"HVL",label:"HVL"},{value:"Status",label:"Status"}];get pages(){let i=this.min;return this.totalPages<=5?Array(this.totalPages).fill(0).map((n,e)=>e+1):Array(5).fill(0).map((n,e)=>e+i)}showModal=!1;editMode=!0;selectedDriver={};driverID=0;onDocumentClick(i){let n=i.target;this.showDropdown&&!n.closest(".custom-select")&&(this.showDropdown=!1)}addDriverStart(){this.editMode=!1,this.selectedDriver={name:"",mobileNumber:"",perDayRate:0,overtimeRate:0,posessHeavyVehicleLicence:!1,status:!0},this.openModal()}openModal(){this.showModal=!0}closeModal(){this.showModal=!1}toggleDropdown(){this.showDropdown=!this.showDropdown}selectOption(i){this.sort(i),this.showDropdown=!1}addDriver(i){i.valid&&(this.selectedDriver=i.value,this.adminService.AddDriver(this.selectedDriver).subscribe(n=>{n.status===0?this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.HMV,this.searchTerm):alert(n.exceptionMessage)},n=>{let e=n.error.map(t=>t.errorMessage).join(`
`);alert(e)}),i.reset(),this.closeModal())}updateDriver(i){i.valid&&(i.value.id=this.selectedDriver.id,this.selectedDriver=i.value,this.adminService.UpdateDriver(this.selectedDriver).subscribe(n=>{n.status===0?this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.HMV,this.searchTerm):alert(n.exceptionMessage)},n=>{let e=n.error.map(t=>t.errorMessage).join(`
`);alert(e)}),i.reset(),this.closeModal())}editDriver(i){this.selectedDriver=N({},i),this.editMode=!0,this.openModal()}ngOnInit(){this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.HMV,this.searchTerm),this.resourceService.GetTotalDrivers(this.searchTerm).subscribe({next:i=>{i.status===0?(this.totalDrivers=i.data,this.totalPages=Math.ceil(this.totalDrivers/this.pageSize),this.min=1,this.totalPages>5?this.max=5:this.max=this.totalPages):alert(i.exceptionMessage)},error:i=>{alert(i.error.exceptionMessage)}})}sort(i){this.selectedOption=i,this.sortColumn=i,this.sortField===i?this.sortOrder==="Asc"?this.sortOrder="Desc":this.sortOrder="Asc":this.sortOrder="Asc",this.CallDB(this.pageSize,this.pageNum,i,this.sortOrder,this.HMV,this.searchTerm),this.sortField=i}search(i){this.searchTerm=i,this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.HMV,this.searchTerm),this.resourceService.GetTotalDrivers(this.searchTerm).subscribe({next:n=>{n.status===0?(this.totalDrivers=n.data,this.totalPages=Math.ceil(this.totalDrivers/this.pageSize)):console.error("Failed to fetch drivers:",n)},error:n=>{console.error("An error occurred:",n)}})}previousPage(){this.pageNum--,this.min--,this.max--,this.pageNum<1&&(this.pageNum=1,this.min=1),this.min<1&&(this.min=1,this.max=this.min+4),this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.HMV,this.searchTerm)}nextPage(){this.pageNum++,this.max++,this.min++,this.pageNum>this.totalPages&&(this.pageNum=this.totalPages),this.max>this.totalPages&&(this.max=this.totalPages,this.min=this.max-4),this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.HMV,this.searchTerm)}goToPage(i){let n=i-this.pageNum;this.pageNum=i,this.min=this.min+n,this.max=this.max+n,this.pageNum<1?this.pageNum=1:this.pageNum>this.totalPages&&(this.pageNum=this.totalPages),this.min<1&&(this.min=1),this.max>this.totalPages&&(this.max=this.totalPages),this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.HMV,this.searchTerm)}PageSizeChange(i){this.pageSize=i,this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.HMV,this.searchTerm)}changeStatus(i,n){i.status!==n&&this.adminService.FlipDriverStatus(i.id).subscribe({next:e=>{e.status===0?this.CallDB(this.pageSize,this.pageNum,this.sortField,this.sortOrder,this.HMV,this.searchTerm):alert(e.exceptionMessage)},error:e=>{alert(e.error.exceptionMessage)}})}CallDB(i,n,e,t,m,l){this.resourceService.GetDrivers(i,n,e,t,m,l).subscribe({next:y=>{y.status===0?this.drivers=y.data:alert(y.exceptionMessage)},error:y=>{console.log("DB Call",y),alert(y.message)}})}static \u0275fac=function(n){return new(n||a)(V(ee),V($))};static \u0275cmp=T({type:a,selectors:[["app-drivers"]],hostBindings:function(n,e){n&1&&u("click",function(m){return e.onDocumentClick(m)},!1,E)},decls:125,vars:84,consts:[["addDriverButton",""],["customSelect",""],["modal",""],["driverForm","ngForm"],["cross",""],[1,"MainContainer","d-flex","flex-column"],[1,"containerD","mt-4"],[1,"row","d-flex","justify-content-between"],[1,"frame23","col-md-5"],[1,"input-with-icon"],["type","text","placeholder","Search drivers...",1,"form-control",3,"ngModelChange","ngModel"],["src","assets/search.svg","alt","Search",1,"search-icon"],[1,"col-md-7","d-flex","justify-content-end","align-items-end"],[1,"add-driver-button",3,"click"],["src","assets/add.svg","alt","Add Icon","width","15","height","15"],[1,"frame24","col-md-3"],[1,"custom-select",3,"click"],[1,"selected-option"],["src","assets/up-arrow.svg","alt","Up Arrow","class","arrow",4,"ngIf"],["src","assets/down-arrow.svg","alt","Down Arrow","class","arrow",4,"ngIf"],["class","options-list",4,"ngIf"],[1,"table","table-striped","mt-3"],[1,"col-1",3,"click"],[1,"arrows"],["src","assets/up-arrow.svg","alt","Up",3,"ngClass"],["src","assets/down-arrow.svg","alt","Down",3,"ngClass"],[1,"col-2",3,"click"],[1,"col-2"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-md-6"],[1,"form-select-2",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],[1,"col-md-6","d-flex","justify-content-end"],[1,"frame25","col-md-6","d-flex","justify-content-center"],[1,"pagination"],[1,"page-item",3,"ngClass"],["type","button",1,"page-link",3,"click"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"modal-backdrop",3,"click","ngClass"],["tabindex","-1","role","dialog",1,"modal",3,"ngClass"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header","justify-content-between"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","error-message",4,"ngIf"],["for","mobileNumber"],["type","text","id","mobileNumber","name","mobileNumber","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","perDayRate"],["type","number","id","perDayRate","name","perDayRate","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","overtimeRate"],["type","number","id","overtimeRate","name","overtimeRate","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-group","form-check"],["type","checkbox","id","posessHeavyVehicleLicence","name","posessHeavyVehicleLicence",1,"form-check-input",3,"ngModelChange","ngModel"],["for","posessHeavyVehicleLicence",1,"form-check-label"],["type","checkbox","id","status","name","status",1,"form-check-input",3,"ngModelChange","ngModel"],["for","status",1,"form-check-label"],[1,"modal-footer",3,"ngClass"],[1,"btn","btn-primary",3,"ngClass"],["src","assets/up-arrow.svg","alt","Up Arrow",1,"arrow"],["src","assets/down-arrow.svg","alt","Down Arrow",1,"arrow"],[1,"options-list"],[3,"selected","click",4,"ngFor","ngForOf"],[3,"click"],[1,"col-1"],["src","assets/checkbox-tick.svg","alt","Checked",4,"ngIf","ngIfElse"],[1,"[ngClass]='{","active:","driver.status,","inactive:","!driver.status","}'"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn",3,"ngClass"],["alt","Status",1,"arrow",3,"src"],[1,"dropdown-menu"],["type","button",1,"dropdown-item",3,"click"],[1,"dropdown","dropstart"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["src","assets/more-01.svg","alt","More"],["src","assets/edit.svg","alt","Edit"],["src","assets/checkbox-tick.svg","alt","Checked"],["src","assets/checkbox-cross.svg","alt","Not Checked"],[1,"error-message"]],template:function(n,e){if(n&1){let t=O();r(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div",9)(5,"input",10),M("ngModelChange",function(l){return p(t),w(e.searchTerm,l)||(e.searchTerm=l),g(l)}),u("ngModelChange",function(){return p(t),g(e.search(e.searchTerm))}),o(),h(6,"img",11),o()(),r(7,"div",12)(8,"button",13,0),u("click",function(){return p(t),g(e.addDriverStart())}),h(10,"img",14),c(11," Add Driver "),o(),r(12,"div",15)(13,"div",16,1),u("click",function(){return p(t),g(e.toggleDropdown())}),r(15,"div",17),c(16),f(17,ce,1,0,"img",18)(18,de,1,0,"img",19),o(),f(19,pe,2,1,"ul",20),o()()()()(),r(20,"table",21)(21,"thead")(22,"th",22),u("click",function(){return p(t),g(e.sort("ID"))}),c(23," ID "),r(24,"div",23),h(25,"img",24)(26,"img",25),o()(),r(27,"th",26),u("click",function(){return p(t),g(e.sort("Name"))}),c(28," Name "),r(29,"div",23),h(30,"img",24)(31,"img",25),o()(),r(32,"th",22),u("click",function(){return p(t),g(e.sort("PosessHeavyVehicleLicence"))}),c(33," HVL "),r(34,"div",23),h(35,"img",24)(36,"img",25),o()(),r(37,"th",26),u("click",function(){return p(t),g(e.sort("PerDayRate"))}),c(38," Per Day Rate "),r(39,"div",23),h(40,"img",24)(41,"img",25),o()(),r(42,"th",26),u("click",function(){return p(t),g(e.sort("OvertimeRate"))}),c(43," Overtime Rate "),r(44,"div",23),h(45,"img",24)(46,"img",25),o()(),r(47,"th",27),c(48," MobileNumber "),r(49,"div",23),h(50,"img",24)(51,"img",25),o()(),r(52,"th",26),u("click",function(){return p(t),g(e.sort("Status"))}),c(53," Status "),r(54,"div",23),h(55,"img",24)(56,"img",25),o()()(),r(57,"tbody"),f(58,ve,34,18,"tr",28),o()(),r(59,"div",29)(60,"div",30),c(61," Showing "),r(62,"select",31),M("ngModelChange",function(l){return p(t),w(e.pageSize,l)||(e.pageSize=l),g(l)}),u("ngModelChange",function(){return p(t),g(e.PageSizeChange(e.pageSize))}),r(63,"option",32),c(64,"10"),o(),r(65,"option",33),c(66,"25"),o(),r(67,"option",34),c(68,"50"),o()(),c(69),o(),r(70,"div",35)(71,"div",36)(72,"ul",37)(73,"li",38)(74,"button",39),u("click",function(l){return p(t),e.previousPage(),g(l.preventDefault())}),c(75," Previous "),o()(),f(76,he,3,4,"li",40),r(77,"li",38)(78,"button",39),u("click",function(l){return p(t),e.nextPage(),g(l.preventDefault())}),c(79," Next "),o()()()()()()(),r(80,"div",41),u("click",function(){return p(t),g(e.closeModal())}),o(),r(81,"div",42,2)(83,"div",43)(84,"div",44)(85,"div",45)(86,"h5",46),c(87),o(),r(88,"button",47),u("click",function(){return p(t),g(e.closeModal())}),r(89,"span",48),c(90,"\xD7"),o()()(),r(91,"div",49)(92,"form",50,3),u("ngSubmit",function(){p(t);let l=x(93);return g(e.editMode?e.updateDriver(l):e.addDriver(l))}),r(94,"div",51)(95,"label",52),c(96,"Name"),o(),r(97,"input",53),M("ngModelChange",function(l){return p(t),w(e.selectedDriver.name,l)||(e.selectedDriver.name=l),g(l)}),o(),f(98,_e,2,0,"div",54),o(),r(99,"div",51)(100,"label",55),c(101,"Mobile Number"),o(),r(102,"input",56),M("ngModelChange",function(l){return p(t),w(e.selectedDriver.mobileNumber,l)||(e.selectedDriver.mobileNumber=l),g(l)}),o(),f(103,fe,2,0,"div",54),o(),r(104,"div",51)(105,"label",57),c(106,"Per Day Rate"),o(),r(107,"input",58),M("ngModelChange",function(l){return p(t),w(e.selectedDriver.perDayRate,l)||(e.selectedDriver.perDayRate=l),g(l)}),o(),f(108,Ce,2,0,"div",54),o(),r(109,"div",51)(110,"label",59),c(111,"Overtime Rate"),o(),r(112,"input",60),M("ngModelChange",function(l){return p(t),w(e.selectedDriver.overtimeRate,l)||(e.selectedDriver.overtimeRate=l),g(l)}),o(),f(113,be,2,0,"div",54),o(),r(114,"div",61)(115,"input",62),M("ngModelChange",function(l){return p(t),w(e.selectedDriver.posessHeavyVehicleLicence,l)||(e.selectedDriver.posessHeavyVehicleLicence=l),g(l)}),o(),r(116,"label",63),c(117,"Heavy Vehicle Licence"),o()(),r(118,"div",61)(119,"input",64),M("ngModelChange",function(l){return p(t),w(e.selectedDriver.status,l)||(e.selectedDriver.status=l),g(l)}),o(),r(120,"label",65),c(121,"Active"),o()(),r(122,"div",66)(123,"button",67),c(124),o()()()()()()()}if(n&2){let t=x(93);s(5),b("ngModel",e.searchTerm),s(11),C(" ",e.selectedOption||"Sort by"," "),s(),d("ngIf",e.sortOrder==="Asc"),s(),d("ngIf",e.sortOrder==="Desc"),s(),d("ngIf",e.showDropdown),s(6),d("ngClass",v(43,_,e.sortField==="ID"&&e.sortOrder==="Asc")),s(),d("ngClass",v(45,_,e.sortField==="ID"&&e.sortOrder==="Desc")),s(4),d("ngClass",v(47,_,e.sortField==="Name"&&e.sortOrder==="Asc")),s(),d("ngClass",v(49,_,e.sortField==="Name"&&e.sortOrder==="Desc")),s(4),d("ngClass",v(51,_,e.sortField==="PosessHeavyVehicleLicence"&&e.sortOrder==="Asc")),s(),d("ngClass",v(53,_,e.sortField==="PosessHeavyVehicleLicence"&&e.sortOrder==="Desc")),s(4),d("ngClass",v(55,_,e.sortField==="PerDayRate"&&e.sortOrder==="Asc")),s(),d("ngClass",v(57,_,e.sortField==="PerDayRate"&&e.sortOrder==="Desc")),s(4),d("ngClass",v(59,_,e.sortField==="OvertimeRate"&&e.sortOrder==="Asc")),s(),d("ngClass",v(61,_,e.sortField==="OvertimeRate"&&e.sortOrder==="Desc")),s(3),P("invisible",e.sortField!=="MobileNumber"),s(),d("ngClass",v(63,_,e.sortField==="Status"&&e.sortOrder==="Asc")),s(),d("ngClass",v(65,_,e.sortField==="Status"&&e.sortOrder==="Desc")),s(4),d("ngClass",v(67,_,e.sortField==="Status"&&e.sortOrder==="Asc")),s(),d("ngClass",v(69,_,e.sortField==="Status"&&e.sortOrder==="Desc")),s(2),d("ngForOf",e.drivers),s(4),b("ngModel",e.pageSize),s(7),C(" of ",e.totalDrivers," "),s(4),d("ngClass",v(71,te,e.pageNum===1)),s(3),d("ngForOf",e.pages),s(),d("ngClass",v(73,te,e.pageNum===e.totalPages)),s(3),d("ngClass",v(75,ne,e.showModal)),s(),d("ngClass",v(77,re,e.showModal)),s(6),C(" ",e.editMode?"Edit Driver":"Add Driver"," "),s(10),b("ngModel",e.selectedDriver.name),s(),d("ngIf",(t.controls.name==null?null:t.controls.name.invalid)&&((t.controls.name==null?null:t.controls.name.dirty)||(t.controls.name==null?null:t.controls.name.touched))),s(4),b("ngModel",e.selectedDriver.mobileNumber),s(),d("ngIf",(t.controls.mobileNumber==null?null:t.controls.mobileNumber.invalid)&&((t.controls.mobileNumber==null?null:t.controls.mobileNumber.dirty)||(t.controls.mobileNumber==null?null:t.controls.mobileNumber.touched))),s(4),b("ngModel",e.selectedDriver.perDayRate),s(),d("ngIf",(t.controls.perDayRate==null?null:t.controls.perDayRate.invalid)&&((t.controls.perDayRate==null?null:t.controls.perDayRate.dirty)||(t.controls.perDayRate==null?null:t.controls.perDayRate.touched))),s(4),b("ngModel",e.selectedDriver.overtimeRate),s(),d("ngIf",(t.controls.overtimeRate==null?null:t.controls.overtimeRate.invalid)&&((t.controls.overtimeRate==null?null:t.controls.overtimeRate.dirty)||(t.controls.overtimeRate==null?null:t.controls.overtimeRate.touched))),s(2),b("ngModel",e.selectedDriver.posessHeavyVehicleLicence),s(4),b("ngModel",e.selectedDriver.status),s(3),d("ngClass",k(79,oe,!t.valid,t.valid)),s(),d("ngClass",v(82,se,t.invalid)),s(),C(" ",e.editMode?"Update":"Add"," ")}},dependencies:[Z,G,K,Q,L,Y,B,J,W,j,X,U,q,z,I,A,H],styles:['.MainContainer[_ngcontent-%COMP%]{width:100%;margin-left:.5rem}.containerD[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{width:100%}.input-with-icon[_ngcontent-%COMP%]{position:relative}.input-with-icon[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);width:20px;height:20px;pointer-events:none}.input-with-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-right:30px}.input-with-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{box-shadow:0 0 5px 2px #00800033;border-color:green}.custom-select[_ngcontent-%COMP%]{position:relative;width:100%;-webkit-user-select:none;user-select:none}.custom-select[_ngcontent-%COMP%]:focus-within{box-shadow:0 0 5px 2px #00800033;border-color:green;outline:none;z-index:10}.selected-option[_ngcontent-%COMP%]{padding:8px 12px;border:1px solid #cccccc;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:space-between}.selected-option[_ngcontent-%COMP%]:focus{box-shadow:0 0 5px 2px #00800033;border-color:green;outline:none}.down-arrow[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:10px;pointer-events:none}.options-list[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;width:100%;border:1px solid #ccc;border-radius:4px;list-style:none;padding:0;margin:0;background-color:#fff;z-index:10}.options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 12px;cursor:pointer}.options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#0000001a}.options-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#e0f0e8;color:green}.table[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%]{position:relative}.arrows[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;vertical-align:middle}.arrows[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:12px;height:12px;opacity:.3;cursor:pointer}.arrows[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%]{opacity:1}.arrows.invisible[_ngcontent-%COMP%]{visibility:hidden}.arrow[_ngcontent-%COMP%]{margin-top:-3px}.form-select[_ngcontent-%COMP%]{margin:-5px}.active[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;border-radius:4px;background:#0dff0029;width:5.5vw;color:#1e761e;font-feature-settings:"liga" off,"clig" off;border-color:#1e761e;font-family:Public Sans;font-size:13px;font-style:normal;font-weight:600;line-height:14px}.inactive[_ngcontent-%COMP%]{display:flex;padding:5px 10px;align-items:center;gap:10px;border-radius:4px;background:#ff590029;width:5.5vw;color:#a0411e;font-feature-settings:"liga" off,"clig" off;border-color:#a0411e;font-family:Public Sans;font-size:13px;font-style:normal;font-weight:600;line-height:14px}.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{border:none;background-color:transparent;color:green}.pagination[_ngcontent-%COMP%]   .page-item.activePage[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{background-color:#e0f0e8;border-color:#e0f0e8;color:green}.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:focus{box-shadow:none;outline:none}.form-select-2[_ngcontent-%COMP%]{width:3vw}.btn[_ngcontent-%COMP%]{display:flex;padding:5px 10px;align-items:center;justify-content:space-between;gap:10px;border-radius:4px;width:6.5vw}.dropdown-menu[_ngcontent-%COMP%]{align-items:center;border-radius:4px;padding:0;min-width:auto}.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:left}.arrow[_ngcontent-%COMP%]{margin-left:-5px;flex-shrink:0}.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0;border:none;background:none}.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:middle}.dropdown-item[_ngcontent-%COMP%]{display:flex;align-items:center;width:6.5vw}.dropdown-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:8px;vertical-align:middle}.add-driver-button[_ngcontent-%COMP%]{background-color:#e0f0e8;color:green;border:none;padding:8px 16px;border-radius:5px;display:flex;align-items:center;justify-content:center;margin-right:15px;height:100%}.add-driver-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px}.modal-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;z-index:1040;display:none}.modal-backdrop.show[_ngcontent-%COMP%]{display:block}.modal[_ngcontent-%COMP%]{z-index:1050}.modal.d-block[_ngcontent-%COMP%]{pointer-events:none}.modal.d-block[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{pointer-events:auto}.modal-content[_ngcontent-%COMP%]{border-radius:16px;background:#d9d9d9;box-shadow:0 0 18.6px #0000004d}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:green;border-color:green;margin:0 5px}.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none}.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover{background-color:#006400}.modal-footer[_ngcontent-%COMP%]   .btn-invalid[_ngcontent-%COMP%]{background-color:#ff4d4d;color:#fff;border-color:#ff4d4d}.modal-footer[_ngcontent-%COMP%]   .btn-invalid[_ngcontent-%COMP%]:hover{background-color:#c00}.error-message[_ngcontent-%COMP%]{color:#c00}.close[_ngcontent-%COMP%]{border:0;color:#000;background:#d9d9d9;font-size:2rem}']})};export{ie as DriversComponent};
