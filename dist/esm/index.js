var e;!function(e){e.Week="WEEK",e.Day="DAY"}(e||(e={}));var n=function(){function e(){}return e.build=function(e,n){return Array(e).fill({blocks:Array(n).fill({})})},e}(),t=function(){function e(e){this.params=e}return e.prototype.getHoursOfDay=function(){return 24},e.prototype.getDaysOfWeek=function(){return 7},e}(),r=function(){function e(){}return e.render=function(n,t){e.build(t);var r=e.createElement("ss-container");t.map((function(e){e.element&&(r.appendChild(e.element),e.blocks.map((function(n){e.element&&n.element&&e.element.appendChild(n.element)})))})),n.appendChild(r)},e.build=function(n){n.forEach((function(n,t){n.element=e.createElement("ss-column"),n.element.innerHTML="teste: ".concat(t),n.blocks.forEach((function(n){n.element=e.createElement("ss-block")}))}))},e.createElement=function(e){var n=document.createElement("div");return e&&(n.className=e),n},e}(),o=function(){function e(){}return e.prototype.create=function(e,r){this.paramsManager=new t(r),this.grid=n.build(this.paramsManager.getDaysOfWeek(),this.paramsManager.getHoursOfDay()),this.element=e},e.prototype.render=function(){this.element&&this.grid&&r.render(this.element,this.grid)},e.prototype.refresh=function(){throw new Error("Method not implemented.")},e}(),i=function(n){var t=new o;t.create(n,{view:e.Week}),t.render(),console.log("INIT")};export{i as initSchedule};
//# sourceMappingURL=index.js.map