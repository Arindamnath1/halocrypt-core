(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{326:(e,t,i)=>{"use strict";i.r(t);var a=i(386);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const s={id:"Username",current_level:"Level",ig_user_id:"Insta",is_admin:"Player Type"};class n extends a.ZP{constructor(...e){super(...e),r(this,"__sendSuccess",()=>(this.state.value||"").trim()&&this.props.onUpdate(this.state.value)),r(this,"state",{value:this.props.value||""}),r(this,"onInput",e=>this.setState({value:e.target.value}))}render(e,t){const i=e.detailName,r=s[i]||i;return(0,a.az)(a.HY,{children:[(0,a.az)("div",{class:"mask"}),(0,a.az)("div",{class:"app-popup profile-info-updater",children:[(0,a.az)("div",{class:"heading-text clr",style:{marginTop:"5px",marginBottom:"10px"},children:["Edit ",r]}),e.progress&&(0,a.az)("div",{children:e.progress}),(0,a.az)("form",{action:"javascript:",onSubmit:this.__sendSuccess,children:[(0,a.az)("input",{type:"email"===i?i:"text",value:t.value,class:"paper-input",style:{width:"80%"},onInput:this.onInput,placeholder:r}),(0,a.az)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,a.az)("span",{class:"action-button hoverable update-action",onClick:this.__sendSuccess,children:"Update"}),(0,a.az)("span",{onClick:e.close,class:"action-button hoverable update-action",children:"Cancel"})]})]})]})]})}}var l=i(804),d=i(77),o=i(649),c=i(67),h=i(659),u=i(264);function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Profile:()=>_,default:()=>y});const g=l.h.getStore(),f={},v="heading-text hoverable landing-action-button";class _ extends a.wA{constructor(...e){super(...e),p(this,"state",{isEditing:!1,fieldEdited:null,__receivedData:this.props.data}),p(this,"headerText","Profile"),p(this,"helpText","You can edit your email, instagram and school fields by clicking them"),p(this,"editableFieldsValidatorFunctions",{ig_user_id:u.oS,email:u.sQ,school:u.oS}),p(this,"requestEditUserDetail",e=>{!this.state.isEditing&&this._isAllowedToEditProfile()&&this.setState({isEditing:!0,fieldEdited:e})}),p(this,"syncProfileInfoWithServer",e=>{if(this.state.workProgress)return;const t=this.state.fieldEdited,i=this.editableFieldsValidatorFunctions[t](e);i.valid?(this.setState({workProgress:"Syncing new data with the server..."}),(0,o.V)(d.EA.edit,{user:this.state.__receivedData.id,field:t,new_value:(e||"").trim()}).then(this.__onResponse)):this.setState({error:i.error,workProgress:null})}),p(this,"__onResponse",e=>{if(!g.isLoggedIn)return;const t=e.error||e.data.error;if(t)return this.setState({error:t,workProgress:null});const i=e.data.user_data;this.setState({workProgress:null,isEditing:null,fieldEdited:null,__receivedData:i}),i.id===g.userData.id&&l.h.set("userData",i)}),p(this,"_getRequestEditUserDetail",e=>()=>this.requestEditUserDetail(e)),p(this,"closePrompt",()=>this.setState({isEditing:!1,fieldEdited:null})),p(this,"resetError",()=>this.setState({error:null}))}_getKeys(e){return["name","id","current_level","is_admin","school"].concat((0,h.Z)(e&&e.secure_data||f))}_getActionPanel(){const e=this.state.__receivedData,t=g.isLoggedIn&&g.userData.id;return(0,a.az)("div",{class:"action-buttons-profile",children:(0,a.az)(m,{data:e,currID:t})})}_isAllowedToEditProfile(){const e=g.userData?g.userData.id:null;return this.state.__receivedData.id===e}render(e,t){const i=t.__receivedData,r=i.secure_data||f;return(0,a.az)("div",{children:[t.isEditing&&(0,a.az)(a.HY,{children:[t.error&&(0,a.az)(c.OK,{errorHead:"Can't edit",close:this.resetError,reason:t.error}),(0,a.az)(n,{progress:this.state.workProgress,close:this.closePrompt,detailName:t.fieldEdited,onUpdate:this.syncProfileInfoWithServer,value:t.__receivedData[t.fieldEdited]||t.__receivedData.secure_data[t.fieldEdited]})]}),(0,a.az)("div",{class:"heading-text bfont",children:this.headerText}),(0,a.az)("div",{style:{fontSize:"0.96rem"},children:this._isAllowedToEditProfile()&&this.helpText}),(0,a.az)("div",{class:"prof-data-box",children:this._getKeys(i).map(e=>(0,a.az)(b,{editableFieldsValidatorFunctions:this.editableFieldsValidatorFunctions,x:e,getRequestEditUserDetail:this._getRequestEditUserDetail,data:i,sec:r}))}),this._getActionPanel()]})}}function m(e){const t=e.data,i=e.currID;return(0,a.az)(a.HY,{children:[P(t,i)&&(0,a.az)(a.A,{href:"/__admin__",class:v,children:"Admin Panel"}),t.id===i&&[!t.has_verified_email&&(0,a.az)(a.A,{href:"/verify-email",class:v,children:"Verify Email"}),(0,a.az)(a.A,{href:"/logout",class:v,children:"Logout"})]]})}function b(e){const{x:t,getRequestEditUserDetail:i,data:r,sec:n,editableFieldsValidatorFunctions:l}=e;return(0,a.az)("div",{onClick:t in l?i(t):null,class:"prof-container"+(t in l?" hoverable":""),children:[(0,a.az)("div",{class:"heading-text prof-field",children:s[t]||t}),(0,a.az)("div",{class:"prof-field",children:w(r,n,t)})]})}async function z(){const e=new URLSearchParams(a.F0.getQs).get("id");let t;return g.isLoggedIn&&e===g.userData.id?t=g.userData:(t=await(0,o.A)(`${d.EA.getUserDetails}?id=${e}`),t=t.data),t?()=>(0,a.az)(_,{data:t}):()=>(0,a.az)(c.OK,{errorHead:"Profile Error",reasons:["User does not exist"],close:()=>(0,a.uX)("/")})}function w(e,t,i){let a=i in e?e[i]:t[i];return"is_admin"===i&&(a=!0===a?"Team Halocrypt":"Player"),"boolean"==typeof a&&(a=""+a),null!=a&&""!==a||(a="N/A"),a}function P(e,t){return e.is_admin&&e.id===t}const E={id:"Loading..",current_level:"Infinity",has_verified_email:null,name:"??"},y=()=>new URLSearchParams(a.F0.getQs).get("id")?(0,a.az)(a.gr,{componentPromise:z,fallbackComponent:()=>(0,a.az)(_,{data:E})}):g.isLoggedIn?(0,a.uX)("/profile?id="+g.userData.id):(0,a.uX)("/login")},67:(e,t,i)=>{"use strict";i.d(t,{OK:()=>r,Pt:()=>s,GI:()=>n,r8:()=>l});var a=i(386);function r(e){return(0,a.az)(n,{...Object.assign({},e,{title:"Something Ain't Right"})})}const s=/([^\w]|_)/g;class n extends a.ZP{constructor(...e){var t,i,a;super(...e),t=this,i="__id",a=Math.random(),i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a}componentDidMount(){const e=document.getElementById(""+this.__id);e&&e.focus()}render(e){return(0,a.az)("div",{class:"app-popup",children:[(0,a.az)("div",{class:"heading-text clr app-popup-title",children:e.title}),(0,a.az)("div",{children:e.errorHead}),(0,a.az)("div",{class:"err-reasons",children:(0,a.az)("div",{children:(e.reasons||[]).map(e=>(0,a.az)("div",{children:[" - ",e]}))})}),(0,a.az)("button",{id:this.__id,class:"app-popup-close",onClick:e.close,children:"OK"})]})}}function l(){return(0,a.az)("div",{class:"social-link-container",children:[(0,a.az)("a",{target:"_blank",href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,a.az)("a",{target:"_blank",href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})}},264:(e,t,i)=>{"use strict";i.d(t,{Vy:()=>r,sQ:()=>n,oS:()=>l,If:()=>d,Bj:()=>o,RX:()=>c,u2:()=>h,R0:()=>u});var a=i(67);const r={valid:!0},s={valid:!1};function n(e){return e?r:{error:"Value required"}}const l=()=>r;function d(e){return(t=+(t=e))==t?r:s;var t}function o(e){return e.length<5?{error:u.pwLength}:r}function c(e){const t=e.length;return t<3||t>30?{error:u.userLength}:e!==e.replace(a.Pt,"")?{error:u.invalidCharacters}:r}function h(e){const t=e.length;return!t||t>30?{error:u.nameLength}:r}const u={userLength:"Username should be between 3 and 30 characters",invalidCharacters:"Username and name can not contain special characters",invalidEmail:"Invalid email",nameLength:"Name should be less than 30 characters and cannot be blank",pwLength:"Password should be longer than 5 characters",pwNomatch:"Passwords do not match"}}}]);