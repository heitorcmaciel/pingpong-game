'use strict';

angular.module('app.websql', [])

    .factory('WebSqlService', function(debug, $q) {
        return {
            db_name : "meanBiz",
            db_version : "1.0",
            db : {},
            indice : 1,
            dummy_data : [],
            init : function() {
                this.db = openDatabase(this.db_name, this.db_version, 'meanBiz database', 2 * 1024 * 1024);
                this.db.transaction(function (tx) {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS dummy_table (id unique, dummy_field');                                        
                });
            },            
            persistDummyData : function(dummy_params) {
                this.db.transaction(function (tx) {

                    this.indice = 1;
                    var sql = "";

                    sql = "SELECT id FROM dummy_table ORDER BY id DESC LIMIT 1";

                    tx.executeSql(sql, [], function(tx, results) {
                        var len = results.rows.length;
                        if (len > 0){
                            this.indice = (results.rows.item(0).id+1);
                        }
                        sql = "INSERT INTO dummy_table (id, dummy_field) VALUES ("+this.indice + ", '" + dummy_params.trim() +"');";
                        tx.executeSql(sql);
                    });

                });
            },
            getDummyData : function(success, failure) {
                this.db.transaction(function (tx) {

                    var sql = "SELECT dummy_field FROM dummy_table";
                    this.dummy_data = [];
                    tx.executeSql(sql, [], function(tx, results) {
                        try
                        {
                            for(var i = 0; i<results.rows.length;i++) {
                                this.dummy_data.push(results.rows.item(i).dummy_data);
                            }
                            return success(this.dummy_data);
                        }
                        catch (e) {
                            return success(e.message);
                        }


                    }, failure)
                })
            },
            cleanData : function() {
                this.db.transaction(function(tx) {
                    tx.executeSql('DELETE FROM dummy_field');                    
                })
            },
            dropData : function() {
                this.db.transaction(function(tx) {
                    tx.executeSql('DROP TABLE dummy_table');                    
                })
            }
        }
    })

