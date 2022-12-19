import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Employee,user,project, Boss } from "../employee/model/emp";

@Injectable({providedIn:"root"})
export class CustodyService{
    constructor(private http:HttpClient){}
    
    
    fetchCustody(){
        return this.http.get<{[key:string]:Employee}>('http://172.16.11.44:810/hrportalapi/api/hr/portal/FinancialCustodies')
    .pipe(map((res)=>{
        const emp = [];
        for(const key in res){
            if(res.hasOwnProperty(key)){
                emp.push({...res[key],id:key})
            }
        }
        return emp;
    }))
        
        /*
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
    */
    }

    fetchNewCustody(){
        return this.http.get<{[key:string]:Employee}>('http://172.16.11.44:810/hrportalapi/api/hr/portal/FinancialCustodies?requestStatus=new')
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

fetchProcessingCustody(){
    return this.http.get<{[key:string]:Employee}>('http://172.16.11.44:810/hrportalapi/api/hr/portal/FinancialCustodies?requestStatus=processing')
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

fetchUncompleteCustody(){
    return this.http.get<{[key:string]:Employee}>('http://172.16.11.44:810/hrportalapi/api/hr/portal/FinancialCustodies?requestStatus=canceled')
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

fetchExpiredCustody(){
    return this.http.get<{[key:string]:Employee}>('http://172.16.11.44:810/hrportalapi/api/hr/portal/FinancialCustodies?requestStatus=expired')
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

fetchAcceptedCustody(){
    return this.http.get<{[key:string]:Employee}>('http://172.16.11.44:810/hrportalapi/api/hr/portal/FinancialCustodies?requestStatus=accepted')
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

fetchRejectedCustody(){
    return this.http.get<{[key:string]:Employee}>('http://172.16.11.44:810/hrportalapi/api/hr/portal/FinancialCustodies?requestStatus=rejected')
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
        return this.http.get<{[key:string]:project}>('http://172.16.11.44:810/HrPortalApi/api/Hr/portal/geologicalprojects')
    .pipe(map((res)=>{
        const pro = [];
        for(const key in res){
            if(res.hasOwnProperty(key)){
                pro.push({...res[key],id:key})}
        }
        return pro;
    }))
    }

    fetchBosses(userid:number){
        return this.http.get<Boss>('http://172.16.11.44:810/HrPortalApi/api/Hr/portal/EmployeeManager/'+userid)
    
    }

    createGeneralInformation(data:{requestDate: string,employeeId: number,employeeName: string,employeeDepartmentName: string,purpose: string,projectCode: number,projectName: string,projectManagerId: number,projectManagerName:string,requestStatus: number,extensionNumber: string,mobileNumber: string,deletableRequest: boolean,financialCustodyTracks: {},custodyItems: {},originalDirectManagerId: number,originalDirectManagerName: string,originalDirectManagerPosition: string,projectApproval: boolean,id:string}){
        let date = new Date();
        let day= date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        data.requestDate =year+"/"+month+"/"+day;
       
        let generateId = (Math.floor((Math.random()*9))+1).toString()+(Math.floor((Math.random()*9))+1).toString();
        data.id=generateId;
        
        this.http.post('http://172.16.11.44:810/hrportalapi/api/hr/portal/FinancialCustodies',data,{headers:new HttpHeaders ({"Access-Control-Allow-Origin" :'*'}), withCredentials: true, }).subscribe();
        /*
        data:{Project:string,purpose:string,idNum:string,phoneNum:string,state:string,date:string,custId:string}
        data.state = 'New Request';
        let date = new Date();
        let day= date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        data.date = day+"/"+month+"/"+year; 
        
        data.custId = generateId;
        this.http.post('http://172.16.11.44:810/hrportalapi/api/hr/portal/FinancialCustodies',data).subscribe();
    */
        
    }
    
    createCustodyDescription(data:{custodyItems: {}}){
        this.http.post('https://financialcustody-2fa62-default-rtdb.firebaseio.com/custodyDescription.json',data).subscribe();
    }

    createCustody(data:{pageNum:number,state:string}){
        data.state = 'New Request';
        data.pageNum=4;    
        this.http.post('https://financialcustody-2fa62-default-rtdb.firebaseio.com/custudyRequest.json',data).subscribe();
    }
}