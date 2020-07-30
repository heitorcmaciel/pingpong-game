'use strict';

angular.module('app.debug', [])

//debug para usar ao inves do classico console.log, para evitar que depois o
//browser fique cheio de mensagens esquecidas.
//basta usar debug.log ao inves de console.log.
//na parametrizacao do sistema tem uma variavel que controla isso: AppState.debug_mode : bool

///debug.log
///debug.warn
///debug.error
.factory('debug', function(AppState) {
    return {
        log : function(msg, msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10) {
            if(AppState.debug_mode) {

                if(msg1 === undefined) msg1 = "";
                if(msg2 === undefined) msg2 = "";
                if(msg3 === undefined) msg3 = "";
                if(msg4 === undefined) msg4 = "";
                if(msg5 === undefined) msg5 = "";
                if(msg6 === undefined) msg6 = "";
                if(msg7 === undefined) msg7 = "";
                if(msg8 === undefined) msg8 = "";
                if(msg9 === undefined) msg9 = "";
                if(msg10 === undefined) msg10 = "";

                console.log('DEBUG: ', msg, msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10);
            }
        },
        warn : function(msg, msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10) {
            if(AppState.debug_mode) {

                if(msg1 === undefined) msg1 = "";
                if(msg2 === undefined) msg2 = "";
                if(msg3 === undefined) msg3 = "";
                if(msg4 === undefined) msg4 = "";
                if(msg5 === undefined) msg5 = "";
                if(msg6 === undefined) msg6 = "";
                if(msg7 === undefined) msg7 = "";
                if(msg8 === undefined) msg8 = "";
                if(msg9 === undefined) msg9 = "";
                if(msg10 === undefined) msg10 = "";

                console.warn('DEBUG: ', msg, msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10);
            }
        },
        error: function(msg, msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10) {
            if(AppState.debug_mode) {

                if(msg1 === undefined) msg1 = "";
                if(msg2 === undefined) msg2 = "";
                if(msg3 === undefined) msg3 = "";
                if(msg4 === undefined) msg4 = "";
                if(msg5 === undefined) msg5 = "";
                if(msg6 === undefined) msg6 = "";
                if(msg7 === undefined) msg7 = "";
                if(msg8 === undefined) msg8 = "";
                if(msg9 === undefined) msg9 = "";
                if(msg10 === undefined) msg10 = "";

                console.error('DEBUG: ', msg, msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10);
            }
        }
    }
})