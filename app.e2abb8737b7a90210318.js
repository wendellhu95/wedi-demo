(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";function o(e){return e.$$identifier}n.r(t);var r=function(e,t){void 0===t&&(t=!1),this.ctor=e,this.lazyInstantiation=t};function i(e){return!!e.useClass}function a(e){return!!e.useValue}function l(e){return!!e.useFactory}function c(e){return!!e.dispose}var u,s=function(){function e(e){void 0===e&&(e=[]),this.items=new Map,this.disposed=!1;for(var t=0,n=e;t<n.length;t++){var o=n[t];if(o instanceof Array){var i=o[0],a=o[1];this.add(i,a)}else this.add(o,new r(o))}}return e.prototype.add=function(e,t){this.ensureCollectionNotDisposed(),this.items.set(e,t)},e.prototype.has=function(e){return this.ensureCollectionNotDisposed(),this.items.has(e)},e.prototype.get=function(e){return this.ensureCollectionNotDisposed(),this.items.get(e)},e.prototype.dispose=function(){this.disposed=!0,this.items.forEach((function(e){c(e)&&e.dispose()}))},e.prototype.ensureCollectionNotDisposed=function(){if(this.disposed)throw new Error("[WeDI] Dependency collection is not accessible after it disposes!")},e}(),d=new Map;function f(e){return e.$$WEDI_DEPENDENCIES||[]}function p(e,t,n,o){var r={id:t,index:n,optional:o};e.$$WEDI_TARGET===e?e.$$WEDI_DEPENDENCIES.push(r):(e.$$WEDI_DEPENDENCIES=[r],e.$$WEDI_TARGET=e)}function h(e){return o(e)?e.toString():e.name}function g(e,t){return new Error("[WeDI] dependency identifier can only be decorated on a constructor parameter. Check "+t+" decorated on "+e+".")}function v(e){if(d.has(e))return console.warn("[DI] duplicated identifier name "+e+"."),d.get(e);var t=function(n,o,r){if(3!==arguments.length)throw g(n.name,e);p(n,t,r,!1)};return t.toString=function(){return e},t.$$identifier=!0,d.set(e,t),t}function m(e){return function(t,n,o){if(3!==arguments.length)throw g(t.name,e.toString());p(t,e,o,!0)}}function b(e){return function(t,n,o){if(3!==arguments.length)throw g(t.name,e.constructor.name);p(t,e,o,!1)}}!function(){if("undefined"!=typeof requestIdleCallback&&"undefined"!=typeof cancelIdleCallback)u=function(e,t){var n=requestIdleCallback(e,"number"==typeof t?{timeout:t}:void 0),o=!1;return function(){o||(o=!0,clearTimeout(n))}};else{var e=Object.freeze({didTimeout:!0,timeRemaining:function(){return 15}});u=function(t){var n=setTimeout((function(){return t(e)})),o=!1;return function(){o||(o=!0,clearTimeout(n))}}}}();var y=function(){function e(e){var t=this;this.didRun=!1,this.executor=function(){try{t.value=e()}catch(e){t.error=e}finally{t.didRun=!0}},this.disposeCallback=u((function(){return t.executor()}))}return e.prototype.dispose=function(){this.disposeCallback()},e.prototype.getValue=function(){if(this.didRun||(this.dispose(),this.executor()),this.error)throw this.error;return this.value},e}(),x=[];function w(e,t,n){void 0===n&&(n=!1);var o=x.findIndex((function(t){return t[0].toString()===e.toString()||t[0]===e}));-1!==o?(x[o]=[e,{useClass:t,lazyInstantiation:n}],console.warn("[WeDI] Duplicated registration of "+e.toString()+".")):x.push([e,{useClass:t,lazyInstantiation:n}])}var O,_=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,r++)o[r]=i[a];return o},D=0,E=function(){function e(e,t){t||x.forEach((function(t){e.has(t[0])||e.add(t[0],t[1])}));this.collection=e,this.parent=t}return e.prototype.dispose=function(){this.collection.dispose()},e.prototype.createChild=function(t){return void 0===t&&(t=new s),new e(t,this)},e.prototype.get=function(e){var t=this.__getDependencyOrIdentifierPair(e);return void 0===t?null:t instanceof r||l(t)?null:this.getOrInit(e)},e.prototype.getOrInit=function(e){var t=this.__getDependencyOrIdentifierPair(e);return void 0===t?null:t instanceof r?this.createAndCacheInstance(e,t):a(t)?t.useValue:l(t)?this.invokeDependencyFactory(e,t):i(t)?this.createAndCacheInstance(e,new r(t.useClass,!!t.lazyInstantiation)):t},e.prototype.createInstance=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=e instanceof r?e.ctor:e,i=f(o).sort((function(e,t){return e.index-t.index})),a=[],l=_(t),c=0,u=i;c<u.length;c++){var s=u[c],d=this.getOrInit(s.id);if(null===d&&!s.optional)throw new Error('[WeDI] "'+o.name+'" relies on a not provided dependency "'+h(s.id)+'".');a.push(d)}var p=i.length>0?i[0].index:l.length;if(l.length!==p){console.warn("[DI] expected "+p+" non-injected parameters but "+l.length+" parameters are provided.");var g=p-l.length;l=g>0?_(l,new Array(g).fill(void 0)):l.slice(0,p)}return new(o.bind.apply(o,_([void 0],l,a)))},e.prototype.__getDependencyOrIdentifierPair=function(e){return this.collection.get(e)||(this.parent?this.parent.__getDependencyOrIdentifierPair(e):void 0)},e.prototype.__putDependencyBack=function(e,t){if(this.collection.get(e))this.collection.add(e,t);else{if(!this.parent)throw new Error("[WeDI] cannot find a place to to the new created "+h(e)+".");this.parent.__putDependencyBack(e,t)}},e.prototype.createAndCacheInstance=function(e,t){var n=this;D+=1,this.assertRecursionNotTrappedInACircle(e);var o,r=t.ctor;if(t.lazyInstantiation){var i=new y((function(){return n.doCreateInstance(e,r)}));o=new Proxy(Object.create(null),{get:function(e,t){if(t in e)return e[t];var n=i.getValue(),o=n[t];return"function"!=typeof o?o:(o=o.bind(n),e[t]=o,o)},set:function(e,t,n){return i.getValue()[t]=n,!0}})}else o=this.doCreateInstance(e,r);return D-=1,o},e.prototype.doCreateInstance=function(e,t){var n=this.createInstance(t);return this.__putDependencyBack(e,n),n},e.prototype.assertRecursionNotTrappedInACircle=function(e){if(D>10)throw D=0,new Error('[WeDI] "_createInstance" exceeds the limitation of recursion. There might be a circular dependency."')},e.prototype.invokeDependencyFactory=function(e,t){var n,o=this,r=(null===(n=t.deps)||void 0===n?void 0:n.map((function(e){return o.getOrInit(e)})))||[],i=t.useFactory.call(null,r);return this.collection.add(e,i),i},e}(),S=n(0),C=n.n(S),I=(O=function(e,t){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),k=Object(S.createContext)({injector:null});k.displayName="InjectionContext";var j=k.Consumer,T=k.Provider,N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return I(t,e),t.prototype.renderChild=function(e){var t=this.props,n=t.collection,o=t.children,r=e.injector,i=r?r.createChild(n):new E(n);return C.a.createElement(T,{value:{injector:i}},o)},t.prototype.render=function(){var e=this;return C.a.createElement(j,null,(function(t){return e.renderChild(t)}))},t}(S.Component),P=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();function $(e){return function(t){function n(){return Object(S.createElement)(t,this.props)}var o=function(t){function o(n,o){var r=t.call(this,n,o)||this;return r.$$collection=new s(e),r}return P(o,t),o.prototype.componentWillUnmount=function(){var e;null===(e=this.$$collection)||void 0===e||e.dispose()},o.prototype.render=function(){return C.a.createElement(N,{collection:this.$$collection},n.call(this))},o}(S.Component);return o.displayName="ProviderWrapper."+t.name,o}}function z(e,t){return void 0===t&&(t=!1),function(n,o,r){return{get:function(){!function(e){if(!e.context||!e.context.injector)throw Error('You should make "InjectorContext" as '+e.constructor.name+"'s default context type. If you want to use multiple context, please check this page on React documentation. https://github.com/ant-design/ant-design")}(this);var n=this.context.injector,o=n&&n.getOrInit(e);if(!t&&!o)throw Error('[WeDI] Cannot get an instance of "'+h(e)+'".');return o||null},set:function(t){throw Error('[WeDI] You can never set value to a dependency. Check "'+o+'" of "'+h(e)+'".')}}}}function A(e){var t=Object(S.useRef)(new s(e));return Object(S.useEffect)((function(){return function(){var e;return null===(e=t.current)||void 0===e?void 0:e.dispose()}}),[]),t.current}function M(e){var t=Object(S.useContext)(k).injector;return t&&t.getOrInit(e)||null}function W(e,t){var n=Object(S.useState)(t||null),o=n[0],r=n[1];return Object(S.useEffect)((function(){var t=e.subscribe((function(e){return r(e)}));return function(){return t.unsubscribe()}}),[]),o}function L(e){var t=Object(S.useState)(0)[1];Object(S.useEffect)((function(){var n=e.subscribe((function(){return t((function(e){return e+1}))}));return function(){return n.unsubscribe()}}),[])}n.d(t,"DependencyCollection",(function(){return s})),n.d(t,"createIdentifier",(function(){return v})),n.d(t,"Need",(function(){return b})),n.d(t,"Optional",(function(){return m})),n.d(t,"Injector",(function(){return E})),n.d(t,"registerSingleton",(function(){return w})),n.d(t,"isIdentifier",(function(){return o})),n.d(t,"InitPromise",(function(){return r})),n.d(t,"isClassItem",(function(){return i})),n.d(t,"isValueItem",(function(){return a})),n.d(t,"isFactoryItem",(function(){return l})),n.d(t,"isDisposable",(function(){return c})),n.d(t,"Provide",(function(){return $})),n.d(t,"Inject",(function(){return z})),n.d(t,"InjectionContext",(function(){return k})),n.d(t,"Provider",(function(){return N})),n.d(t,"useCollection",(function(){return A})),n.d(t,"useDependency",(function(){return M})),n.d(t,"useDependencyValue",(function(){return W})),n.d(t,"useUpdateBinder",(function(){return L}))},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};Object.defineProperty(t,"__esModule",{value:!0});var i,a=n(4),l=n(1),c=n(7);!function(e){e[e.ALL_TODOS=0]="ALL_TODOS",e[e.ACTIVE_TODOS=1]="ACTIVE_TODOS",e[e.COMPLETED_TODOS=2]="COMPLETED_TODOS"}(i=t.SHOWING||(t.SHOWING={}));var u=function(){function e(e){var t=this;this.routerService=e,this.nowShowing=i.ALL_TODOS,this.updated$=new a.Subject,this.routerService.router$.subscribe((function(e){t.nowShowing="/active"===e?i.ACTIVE_TODOS:"/completed"===e?i.COMPLETED_TODOS:i.ALL_TODOS,t.updated$.next()}))}return e.prototype.setEditing=function(e){this.editing=e,this.update()},e.prototype.update=function(){this.updated$.next()},e=o([r(0,l.Need(c.RouterService))],e)}();t.StateService=u},function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),l=n(1),c=n(2),u=n(8);function s(){var e,t,n="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(n+="-"),n+=(12===e?4:16===e?3&t|8:t).toString(16);return n}var d=function(){function e(e,t){this.stateService=e,this.storeService=t,this.updated$=new a.Subject,this.todos=this.storeService.store("TODO")}return Object.defineProperty(e.prototype,"shownTodos",{get:function(){var e=this;return this.todos.filter((function(t){switch(e.stateService.nowShowing){case c.SHOWING.ACTIVE_TODOS:return!t.completed;case c.SHOWING.COMPLETED_TODOS:return t.completed;default:return!0}}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"todoCount",{get:function(){return this.todos.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeTodoCount",{get:function(){return this.todos.reduce((function(e,t){return t.completed?e:e+1}),0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"completedCount",{get:function(){return this.todos.length-this.activeTodoCount},enumerable:!0,configurable:!0}),e.prototype.inform=function(){this.storeService.store("TODO",this.todos),this.updated$.next()},e.prototype.addTodo=function(e){this.todos=this.todos.concat({id:s(),title:e,completed:!1}),this.inform()},e.prototype.toggleAll=function(e){this.todos=this.todos.map((function(t){return o(o({},t),{completed:e})})),this.inform()},e.prototype.toggle=function(e){this.todos=this.todos.map((function(t){return t!==e?t:o(o({},t),{completed:!t.completed})})),this.inform()},e.prototype.destroy=function(e){this.todos=this.todos.filter((function(t){return t!==e})),this.inform()},e.prototype.save=function(e,t){this.todos=this.todos.map((function(n){return n!==e?n:o(o({},n),{title:t})})),this.inform()},e.prototype.clearCompleted=function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.inform()},e=r([i(0,l.Need(c.StateService)),i(1,u.IStoreService)],e)}();t.TodoService=d},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=function(){var e=this;this.router$=new o.Subject,window.addEventListener("hashchange",(function(t){var n=t.newURL.split("#")[1]||"/";e.router$.next(n)}))};t.RouterService=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t.IStoreService=o.createIdentifier("store")},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(0)),i=o(n(11)),a=n(1),l=o(n(15)),c=n(8),u=n(27);a.registerSingleton(c.IStoreService,u.LocalStoreService),i.default.render(r.default.createElement(l.default,null),document.getElementsByClassName("todoapp")[0])},,,,,,function(e,t,n){"use strict";(function(e){var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(0)),a=n(17),l=n(1);n(19);var c=r(n(24)),u=n(7),s=n(2),d=n(3),f=r(n(26));function p(){var e=l.useCollection([d.TodoService,s.StateService,u.RouterService]);return i.default.createElement(l.Provider,{collection:e},i.default.createElement(h,null))}function h(){var e=l.useDependency(s.StateService),t=l.useDependency(d.TodoService),n=i.useRef(null);l.useUpdateBinder(e.updated$.asObservable()),l.useUpdateBinder(t.updated$.asObservable());var o=t.shownTodos.map((function(e){return i.default.createElement(f.default,{key:e.id,todo:e})})),r=t.todoCount?i.default.createElement("section",null,i.default.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(e){return t.toggleAll(e.target.checked)},checked:0===t.activeTodoCount}),i.default.createElement("label",{htmlFor:"toggle-all"},"Mark all as completed"),i.default.createElement("ul",{className:"todo-list"},o)):null,a=t.todoCount?i.default.createElement(c.default,null):null;return i.default.createElement("div",null,i.default.createElement("header",{className:"header"},i.default.createElement("h1",null,"todos"),i.default.createElement("input",{type:"text",ref:n,className:"new-todo",placeholder:"What needs to be done?",onKeyDown:function(e){var o;if(13===e.keyCode){e.preventDefault();var r=null===(o=n.current)||void 0===o?void 0:o.value;r&&(t.addTodo(r),n.current.value="")}},autoFocus:!0})),r,a)}t.default=a.hot(e)((function(){return i.default.createElement(p,null)}))}).call(this,n(16)(e))},,,,function(e,t,n){var o=n(20);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(21)(!1)).push([e.i,"html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n}\n\n:focus {\n  outline: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n  text-align: center;\n  border: none; /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n}\n\n.toggle-all + label {\n  width: 60px;\n  height: 34px;\n  font-size: 0;\n  position: absolute;\n  top: 14px;\n  left: -13px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.toggle-all + label:before {\n  content: '❯';\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked + label:before {\n  color: #737373;\n}\n\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n  border-bottom: none;\n}\n\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n\n.todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 12px 16px;\n  margin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n  display: none;\n}\n\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none; /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.todo-list li .toggle {\n  opacity: 0;\n}\n\n.todo-list li .toggle + label {\n  /*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n  background-repeat: no-repeat;\n  background-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 60px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n}\n\n.todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n  content: '×';\n}\n\n.todo-list li:hover .destroy {\n  display: block;\n}\n\n.todo-list li .edit {\n  display: none;\n}\n\n.todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n\n.footer {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,\n    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,\n    0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n  float: left;\n  text-align: left;\n}\n\n.todo-count strong {\n  font-weight: 300;\n}\n\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.filters li {\n  display: inline;\n}\n\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.clear-completed:hover {\n  text-decoration: underline;\n}\n\n.info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n\n.info p {\n  line-height: 1;\n}\n\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.info a:hover {\n  text-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .toggle-all,\n  .todo-list li .toggle {\n    background: none;\n  }\n\n  .todo-list li .toggle {\n    height: 40px;\n  }\n}\n\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}\n",""])},,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(6)),i=o(n(0)),a=n(1),l=n(2),c=n(3),u=n(25);t.default=function(){var e=a.useDependency(c.TodoService),t=a.useDependency(l.StateService);return i.default.createElement("footer",{className:"footer"},i.default.createElement("span",{className:"todo-count"},i.default.createElement("strong",null,e.activeTodoCount)," ",u.pluralize(e.activeTodoCount,"item")," left"),i.default.createElement("ul",{className:"filters"},i.default.createElement("li",null,i.default.createElement("a",{href:"#/",className:r.default({selected:t.nowShowing===l.SHOWING.ALL_TODOS})},"All"))," ",i.default.createElement("li",null,i.default.createElement("a",{href:"#/active",className:r.default({selected:t.nowShowing===l.SHOWING.ACTIVE_TODOS})},"Active"))," ",i.default.createElement("li",null,i.default.createElement("a",{href:"#/completed",className:r.default({selected:t.nowShowing===l.SHOWING.COMPLETED_TODOS})},"Completed"))),e.completedCount>0?i.default.createElement("button",{className:"clear-completed",onClick:function(){return e.clearCompleted()}},"Clear completed"):null)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pluralize=function(e,t){return 1===e?t:t+"s"}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(6)),a=r(n(0)),l=n(1),c=n(2),u=n(3);t.default=function(e){var t,n=e.todo,o=a.useState(n.title),r=o[0],s=o[1],d=a.useRef(null),f=l.useDependency(u.TodoService),p=l.useDependency(c.StateService),h=function(e){var t,o,i,a=r.trim();null===(t=p)||void 0===t||t.setEditing(""),a?(s(a),null===(o=f)||void 0===o||o.save(n,a)):null===(i=f)||void 0===i||i.destroy(n)};return a.default.createElement("li",{className:i.default({completed:n.completed,editing:(null===(t=p)||void 0===t?void 0:t.editing)===n.id})},a.default.createElement("div",{className:"view"},a.default.createElement("input",{type:"checkbox",className:"toggle",checked:n.completed,onChange:function(){var e;return null===(e=f)||void 0===e?void 0:e.toggle(n)}}),a.default.createElement("label",{onDoubleClick:function(){return function(){var e;s(n.title),null===(e=p)||void 0===e||e.setEditing(n.id),setTimeout((function(){var e;return(null===(e=d)||void 0===e?void 0:e.current).focus()}),16)}()}},n.title),a.default.createElement("button",{className:"destroy",onClick:function(){var e;return null===(e=f)||void 0===e?void 0:e.destroy(n)}})),a.default.createElement("input",{ref:d,className:"edit",value:r,onBlur:function(e){return h()},onChange:function(e){return s(e.target.value)},onKeyDown:function(e){return function(e){27===e.keyCode?s(n.title):13===e.keyCode&&h()}(e)}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.store=function(e,t){if(t)return localStorage.setItem(e,JSON.stringify(t));var n=localStorage.getItem(e);return n&&JSON.parse(n)||[]},e}();t.LocalStoreService=o}],[[9,1,2]]]);