using { puru.db.master  } from '../db/datamodel';
service myservice @(path:'MyService'){

    function hello(name: String) returns String;
    @readonly
    entity ReadEmployeeSrv as projection on master.employees;
 
}