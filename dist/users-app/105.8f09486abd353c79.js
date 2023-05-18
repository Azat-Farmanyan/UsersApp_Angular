"use strict";(self.webpackChunkusersApp=self.webpackChunkusersApp||[]).push([[105],{1105:(y,l,a)=>{a.r(l),a.d(l,{UsersPageModule:()=>U});var c=a(6895),i=a(6773),e=a(8256),d=a(9576),u=a(1833);let g=(()=>{class t{constructor(n){this.router=n,this.onDelete=new e.vpe,this.user={avatar:"",email:"undefined",first_name:"undefined",id:0,last_name:"undefined"}}ngOnInit(){}onClickAbout(){this.router.navigate(["user-page"],{queryParams:{id:this.user.id}})}onClickDelete(){this.onDelete.emit()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(i.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-card"]],inputs:{user:"user"},outputs:{onDelete:"onDelete"},decls:15,vars:6,consts:[[1,"user-card"],[1,"user-card-body"],[1,"card-img",3,"src","alt"],[1,"card-text-block"],[1,"text"],[1,"btns-block"],["btnTitle","About",3,"onClickBtn"],["btnTitle","Delete",3,"onClickBtn"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"p",4),e._uU(5),e.qZA(),e.TgZ(6,"p",4),e._uU(7),e.qZA(),e.TgZ(8,"p",4),e._uU(9),e.qZA(),e.TgZ(10,"p",4),e._uU(11),e.qZA(),e.TgZ(12,"div",5)(13,"app-btn",6),e.NdJ("onClickBtn",function(){return s.onClickAbout()}),e.qZA(),e.TgZ(14,"app-btn",7),e.NdJ("onClickBtn",function(){return s.onClickDelete()}),e.qZA()()()()()),2&n&&(e.xp6(2),e.Q6J("src",s.user.avatar?s.user.avatar:"../../../../assets/images/default-avatar.jpg",e.LSH)("alt",s.user.first_name),e.xp6(3),e.hij("ID: ",s.user.id,""),e.xp6(2),e.hij("First Name: ",s.user.first_name,""),e.xp6(2),e.hij("Last Name: ",s.user.last_name,""),e.xp6(2),e.hij("Email: ",s.user.email,""))},dependencies:[u.H],styles:[".user-card[_ngcontent-%COMP%]{max-width:300px;width:100%;border-radius:10px;overflow:hidden;transition:all .5s ease}.user-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 7px #68c7e466}.user-card[_ngcontent-%COMP%]   .user-card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column}.user-card[_ngcontent-%COMP%]   .user-card-body[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{max-width:300px;width:100%;min-height:300px;height:100%;object-fit:cover}.user-card[_ngcontent-%COMP%]   .user-card-body[_ngcontent-%COMP%]   .card-text-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;background-color:var(--blue-light);padding:20px}.user-card[_ngcontent-%COMP%]   .user-card-body[_ngcontent-%COMP%]   .card-text-block[_ngcontent-%COMP%]   .btns-block[_ngcontent-%COMP%]{margin-top:5px;display:flex;gap:10px;justify-content:space-around;flex-wrap:wrap}"]}),t})();var _=a(9991);function m(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-confirm-delete-modal",6),e.NdJ("onCancel",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.closeDeleteModal())})("onDelete",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.deleteUser())}),e.qZA()}}function f(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-user-card",13),e.NdJ("onDelete",function(){const O=e.CHM(n).$implicit,T=e.oxw(3);return e.KtG(T.showDeleteModal(+O.id))}),e.qZA()}2&t&&e.Q6J("user",r.$implicit)}function C(t,r){if(1&t&&(e.TgZ(0,"div",11),e.YNc(1,f,1,1,"app-user-card",12),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.usersService.users)}}function h(t,r){1&t&&(e.TgZ(0,"p",14),e._uU(1,"There are no users"),e.qZA())}const p=function(t){return{active:t}};function b(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"div"),e.YNc(1,C,2,1,"div",7),e.YNc(2,h,2,0,"ng-template",null,8,e.W1O),e.TgZ(4,"div",9)(5,"button",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.changePage(1))}),e._uU(6,"1"),e.qZA(),e.TgZ(7,"button",10),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.changePage(2))}),e._uU(8,"2"),e.qZA()()()}if(2&t){const n=e.MAs(3),s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.usersService.users.length)("ngIfElse",n),e.xp6(4),e.Q6J("ngClass",e.VKq(4,p,1===s.pageNumber)),e.xp6(2),e.Q6J("ngClass",e.VKq(6,p,2===s.pageNumber))}}function v(t,r){1&t&&(e.TgZ(0,"p",14),e._uU(1,"Loading..."),e.qZA())}const P=[{path:"",component:(()=>{class t{constructor(n){this.usersService=n,this.loading=!1,this.deletedUserId=0,this.pageNumber=1,this.openDeleteModal=!1}ngOnInit(){this.fetchUsers()}fetchUsers(){this.loading=!0,this.usersSubs=this.usersService.getUsers(this.usersService.activePage).subscribe(n=>{this.usersService.users=n.data,this.loading=!1})}deleteUser(){this.deleteUserSubs=this.usersService.deleteUser(this.deletedUserId).subscribe(()=>{this.usersService.users=this.usersService.users.filter(n=>+n.id!==this.deletedUserId),this.closeDeleteModal()})}showDeleteModal(n){this.openDeleteModal=!0,this.deletedUserId=n}closeDeleteModal(){this.openDeleteModal=!1}changePage(n){this.usersService.activePage=n,this.pageNumber=this.usersService.activePage,this.fetchUsers()}ngOnDestroy(){this.deleteUserSubs&&this.deleteUserSubs.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-users-page"]],decls:7,vars:3,consts:[[1,"users-page-block"],[1,"wrapper","users-page-body"],[3,"onCancel","onDelete",4,"ngIf"],[1,"big-title"],[4,"ngIf"],["style","text-align: center;","class","text",4,"ngIf"],[3,"onCancel","onDelete"],["class","cards",4,"ngIf","ngIfElse"],["noUsers",""],[1,"page-nav"],[1,"text","page-nav-btn",3,"ngClass","click"],[1,"cards"],[3,"user","onDelete",4,"ngFor","ngForOf"],[3,"user","onDelete"],[1,"text",2,"text-align","center"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,m,1,0,"app-confirm-delete-modal",2),e.TgZ(3,"h1",3),e._uU(4,"Users"),e.qZA(),e.YNc(5,b,9,8,"div",4),e.YNc(6,v,2,0,"p",5),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngIf",s.openDeleteModal),e.xp6(3),e.Q6J("ngIf",!s.loading),e.xp6(1),e.Q6J("ngIf",s.loading))},dependencies:[c.mk,c.sg,c.O5,g,_.u],styles:[".users-page-block[_ngcontent-%COMP%]   .users-page-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:50px}.users-page-block[_ngcontent-%COMP%]   .users-page-body[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:30px;justify-content:space-around}.users-page-block[_ngcontent-%COMP%]   .users-page-body[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%]{width:100px;margin:50px auto 0;display:flex;gap:10px}.users-page-block[_ngcontent-%COMP%]   .users-page-body[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%]   .page-nav-btn[_ngcontent-%COMP%]{cursor:pointer;width:30px;height:30px;background:#fff;border:.5px solid var(--blue);border-radius:50%;color:var(--blue);transition:all .5s ease}.users-page-block[_ngcontent-%COMP%]   .users-page-body[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%]   .page-nav-btn[_ngcontent-%COMP%]:hover{color:#fff;background:var(--blue)}.users-page-block[_ngcontent-%COMP%]   .users-page-body[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:var(--blue);border-radius:50%;color:#fff}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Bz.forChild(P),i.Bz]}),t})();var M=a(4466);let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,x,M.m]}),t})()}}]);