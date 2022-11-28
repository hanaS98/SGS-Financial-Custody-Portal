import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Employee,user,project, Boss } from "../employee/model/emp";

@Injectable({providedIn:"root"})
export class CustodyService{
    constructor(private http:HttpClient){}
    
    
    fetchCustody(){
    return this.http.get<{[key:string]:Employee}>('https://financialcustody-2fa62-default-rtdb.firebaseio.com/employeeCustody.json')
    .pipe(map((res)=>{
        const emp = [];
        for(const key in res){
            if(res.hasOwnProperty(key)){
                emp.push({...res[key],id:key})
            }
        }
        return emp;
    }))
    }
    fetchEmployee(){
        return this.http.get<{[key:string]:Employee}>('https://financialcustody-2fa62-default-rtdb.firebaseio.com/leaderCustody.json')
    .pipe(map((res)=>{
        const emp = [];
        for(const key in res){
            if(res.hasOwnProperty(key)){
                emp.push({...res[key],id:key})
            }
        }
        return emp;
    }))
    }

    checkHasCustody(){
    return this.http.get<{[key:string]:user}>('https://financialcustody-2fa62-default-rtdb.firebaseio.com/user.json')
    .pipe(map((res)=>{
        const emp = [];
        for(const key in res){
            if(res.hasOwnProperty(key)){
                emp.push({...res[key],id:key})}
        }
        return emp;
    }))
    }
    fetchProject(){
        return this.http.get<{[key:string]:project}>('https://financialcustody-2fa62-default-rtdb.firebaseio.com/project.json')
    .pipe(map((res)=>{
        const pro = [];
        for(const key in res){
            if(res.hasOwnProperty(key)){
                pro.push({...res[key],id:key})}
        }
        return pro;
    }))
    }

    fetchBosses(){
        return this.http.get<{[key:string]:Boss}>('https://financialcustody-2fa62-default-rtdb.firebaseio.com/boss.json')
    .pipe(map((res)=>{
        const boss = [];
        for(const key in res){
            if(res.hasOwnProperty(key)){
                boss.push({...res[key],id:key})}
        }
        return boss;
    }))
    }

    createGeneralInformation(data:{Project:string,purpose:string,idNum:string,phoneNum:string,state:string,date:string,custId:string}){
        data.state = 'New Request';
        let date = new Date();
        let day= date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        data.date = day+"/"+month+"/"+year;
    
        let generateId = 1+(Math.floor((Math.random()*9))+1).toString()+(Math.floor((Math.random()*9))+1).toString()
        +(Math.floor((Math.random()*9))+1).toString()+(Math.floor((Math.random()*9))+1).toString();
        data.custId = generateId;
        this.http.post('https://financialcustody-2fa62-default-rtdb.firebaseio.com/custodyGeneralInfo.json',data).subscribe();
    }
    
    createCustodyDescription(data:{arr:{}}){
        this.http.post('https://financialcustody-2fa62-default-rtdb.firebaseio.com/custodyDescription.json',data).subscribe();
    }

    createCustody(data:{pageNum:number,state:string}){
        data.state = 'New Request';
        data.pageNum=4;    
        this.http.post('https://financialcustody-2fa62-default-rtdb.firebaseio.com/custudyRequest.json',data).subscribe();
    }
}