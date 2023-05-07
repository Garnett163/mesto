(()=>{"use strict";var t={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__input-error_active"},e=document.querySelector("#inputNameEditProfile"),n=document.querySelector("#inputDescriptionEditProfile"),r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".profile__avatar-button"),u=document.querySelector(".popup_type_edit"),c=document.querySelector(".popup_type_add"),a=document.querySelector(".popup_type_avatar");function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function f(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var y=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r._config.inputErrorClass),n.textContent=e,n.classList.add(r._config.errorClass)})),f(this,"_hideInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._config.inputErrorClass),e.classList.remove(r._config.errorClass),e.textContent=""})),f(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),f(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),f(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._config.inactiveButtonClass),r._buttonElement.setAttribute("disabled","disabled")):(r._buttonElement.classList.remove(r._config.inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),f(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonState()}))}))})),f(this,"enableValidation",(function(){r._inputList.forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),r._setEventListeners()}))})),this._config=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(e.inputSelector)),this._buttonElement=this._formElement.querySelector(e.submitButtonSelector)}var e,n;return e=t,(n=[{key:"clearInputsErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add("popup__submit-button_disabled"),this._buttonElement.setAttribute("disabled","disabled")}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var m=function(){function t(e,n,r){var o=r.templateSelector,i=r.handleCardClick,u=r.handleDeleteConfirm,c=r.handleLikeClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._owner=e.owner,this._likes=e.likes,this.id=e._id,this._userId=n,this._templateSelector=o,this._handleCardClick=i,this._handleDeleteConfirm=u,this._handleLikeClick=c,this._card=void 0}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"createCard",value:function(){return this._card=this._getTemplate(),this._image=this._card.querySelector(".elements__image"),this._image.src=this._link,this._image.alt=this._name,this._title=this._card.querySelector(".elements__title"),this._title.textContent=this._name,this._deleteButton=this._card.querySelector(".elements__delete-button"),this._likeButton=this._card.querySelector(".elements__like-button"),this._userId!==this._owner._id&&(this._deleteButton.style.display="none"),this._likeCounter=this._card.querySelector(".elements__likes-counter"),this.checkIsLiked()&&this._likeButton.classList.add("elements__like-button_active"),this._setLikeCounter(this._likes),this._setEventListeners(),this._card}},{key:"_setLikeCounter",value:function(t){this._likes=t,this._likeCounter.textContent="".concat(this._likes.length)}},{key:"checkIsLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._userId}))}},{key:"addLike",value:function(t){this._likeButton.classList.add("elements__like-button_active"),this._setLikeCounter(t)}},{key:"removeLike",value:function(t){this._likeButton.classList.remove("elements__like-button_active"),this._setLikeCounter(t)}},{key:"removeDOMCard",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var t=this;this._deleteButton.addEventListener("click",(function(){t._handleDeleteConfirm()})),this._likeButton.addEventListener("click",(function(){t._handleLikeClick()})),this._image.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var _=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"setItem",value:function(t){this._container.prepend(t)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_open")&&t.close(),e.target.classList.contains("popup__close-button")&&t.close()}))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imageTitle=e._popup.querySelector(".popup__image-title"),e._imageItem=e._popup.querySelector(".popup__image"),e}return e=u,(n=[{key:"open",value:function(t,e){O(C(u.prototype),"open",this).call(this),this._imageTitle.textContent=t,this._imageItem.src=e,this._imageItem.alt=t}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return R(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmitForm=e,n._formElement=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),R(n),n._buttonElement=n._formElement.querySelector(".popup__submit-button"),n._buttonInitialText=n._buttonElement.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;q(B(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t._getInputValues())}))}},{key:"close",value:function(){q(B(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"showLoading",value:function(t){this._buttonElement.textContent=t?"Сохранение...":this._buttonInitialText}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(r);if(o){var n=F(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmitForm=e,n._formElement=n._popup.querySelector(".popup__form"),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;U(F(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t._card)}))}},{key:"open",value:function(t){U(F(u.prototype),"open",this).call(this),this._card=t}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}var H=function(){function t(e){var n=e.userNameSelector,r=e.userInfoSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameSelector=n,this._userInfoSelector=r,this._userAvatarSelector=o,this._userName=document.querySelector(this._userNameSelector),this._userInfo=document.querySelector(this._userInfoSelector),this._userAvatar=document.querySelector(this._userAvatarSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userData={},this._userData.name=this._userName.textContent,this._userData.about=this._userInfo.textContent,this._userData}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userInfo.textContent=t.about,this._userAvatar.src=t.avatar}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}var G=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_sendFetchRequest",value:function(t,e){return fetch("".concat(this._baseUrl).concat(t),e).then((function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))}))}},{key:"getUserInfo",value:function(){return this._sendFetchRequest("users/me",{headers:this._headers})}},{key:"editUserInfo",value:function(t){return this._sendFetchRequest("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})})}},{key:"getInitialCards",value:function(){return this._sendFetchRequest("cards",{headers:this._headers})}},{key:"addNewCard",value:function(t){return this._sendFetchRequest("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})})}},{key:"changeAvatar",value:function(t){return this._sendFetchRequest("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})})}},{key:"deleteCard",value:function(t){return this._sendFetchRequest("cards/".concat(t),{method:"DELETE",headers:this._headers})}},{key:"likeCard",value:function(t){return this._sendFetchRequest("cards/".concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"dislikeCard",value:function(t){return this._sendFetchRequest("cards/".concat(t,"/likes"),{method:"DELETE",headers:this._headers})}}])&&$(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Q=new y(t,c);Q.enableValidation();var W=new y(t,u);W.enableValidation(),new y(t,a).enableValidation();var X,Y=new G({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65/",headers:{authorization:"2d21610b-41f6-470d-8829-f4586478ebfc","Content-Type":"application/json"}}),Z=new H({userNameSelector:".profile__title",userInfoSelector:".profile__subtitle",userAvatarSelector:".profile__avatar"});Promise.all([Y.getUserInfo(),Y.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X=o._id,Z.setUserInfo(o),Z.setUserInfo(o),et.renderItems(i)})).catch((function(t){console.log("Error: ".concat(t))}));var tt=new A(".popup_type_edit",(function(t){tt.showLoading(!0),Y.editUserInfo(t).then((function(t){Z.setUserInfo(t),tt.close()})).catch((function(t){console.log("Error: ".concat(t))})).finally((function(){tt.showLoading(!1)}))}));tt.setEventListeners(),r.addEventListener("click",(function(){var t=Z.getUserInfo();e.value=t.name,n.value=t.about,W.clearInputsErrors(),tt.open()}));var et=new _({renderer:function(t){var e=rt(t);et.setItem(e)}},".elements__list"),nt=new L(".popup_type_image");function rt(t){var e=new m(t,X,{templateSelector:"#element__template-card",handleCardClick:function(t,e){nt.open(t,e)},handleDeleteConfirm:function(){ot.open(e)},handleLikeClick:function(){e.checkIsLiked()?Y.dislikeCard(e.id).then((function(t){e.removeLike(t.likes)})).catch((function(t){console.log("Error: ".concat(t))})):Y.likeCard(e.id).then((function(t){e.addLike(t.likes)})).catch((function(t){console.log("Error: ".concat(t))}))}});return e.createCard()}nt.setEventListeners();var ot=new V(".popup_type_confirm",(function(t){Y.deleteCard(t.id).then((function(){t.removeDOMCard(),ot.close()})).catch((function(t){console.log("Error: ".concat(t))}))}));ot.setEventListeners();var it=new A(".popup_type_add",(function(t){it.showLoading(!0),Y.addNewCard(t).then((function(t){et.setItem(rt(t)),Q.disableSubmitButton(),it.close()})).catch((function(t){console.log("Error: ".concat(t))})).finally((function(){it.showLoading(!1)}))}));it.setEventListeners(),o.addEventListener("click",(function(){it.open()}));var ut=new A(".popup_type_avatar",(function(t){ut.showLoading(!0),Y.changeAvatar(t).then((function(t){Z.setUserInfo(t),ut.close()})).catch((function(t){console.log("Error: ".concat(t))})).finally((function(){ut.showLoading(!0)}))}));ut.setEventListeners(),i.addEventListener("click",(function(){ut.open()}))})();
//# sourceMappingURL=main.js.map