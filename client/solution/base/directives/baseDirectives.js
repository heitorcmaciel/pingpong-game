'use strict';

angular.module('app.directives', [])
    .directive('fooBarMenu', function() {
        return  {
            restrict : 'AE',
            replace : 'true',
            template : "<nav class=\"foo\"><ul><li><a href=\"#\" class=\"bar\"</ul></nav>"
        }

        return
    })    


