(function(global){
		var jq = function(){
					return new jq.init.val()
		};

		jq.extend=function(a){
			if(typeof a==="object"){
				for(var i in a){
						jq[i]=a[i];
				}
			}
		}
		jq.each=function( obj, callback ) {
			if(!callback){
				return obj;
			}
		var length, i = 0;
		if ( Object.prototype.toString.call(obj).slice(8,-1)==="Array" ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	}


		jq.init = jq.prototype ={
			constructor:jq,
			extend:function(a){
				//$.init.extend()挂在原形上的
				if(this===jq.init){
					if(typeof a==="object"){
						for(var i in a){
							jq.prototype[i]=a[i]
						}
					}
				}else{
					//$().extend()挂在实例上的会修改
					if(typeof a==="object"){
						for(var i in a){
							var init = jq.init.val = function(){
									this[i]=a[i];
							}
							init.prototype=jq.init;
						}
					}
					return jq();
				}
			},
			each:function ( callback ) {
				return jq.each(this, callback);
			}
		}
		var init = jq.init.val = function(){

		}

		init.prototype=jq.init;
		exports.$=exports.jQuery=jq;
	})();