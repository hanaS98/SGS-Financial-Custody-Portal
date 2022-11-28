import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { faSquarePlus, faAngleLeft,faTrash, faTrashCan , faCheck, faRupiahSign} from '@fortawesome/free-solid-svg-icons'
import { Employee, project } from '../employee/model/emp';
import { CustodyService } from '../Service/custody.service';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusComponent implements OnInit {
  faSquarePlus=faSquarePlus;
  faAngleLeft=faAngleLeft;
  faTrash=faTrash;
  faTrashCan=faTrashCan;
  faCheck=faCheck;

  Project: any;
  purpose: any;
  idNum: any;
  phoneNum: any;
  desc: any;
  cost: any;
  attachment: any;

  reactiveForm:FormGroup;
  genralInfoForm:FormGroup;
  custodyDescription:FormGroup;
  custodyAttatchment:FormGroup;

  allEmployee:Employee[]=[];
  projectList:project[]=[];
  currentstate:number ;
  projectLeaderName:string='';
  bossName:string;
  bossPositiong:string;
  isSelected = 'لا يوجد مشروع';

  costudyId:string;
  pageNum:Number;

  emptyGeneralFieldChacker:boolean =false;

  constructor(private http:HttpClient, private custodyService:CustodyService, private router:Router) { }
  
  ngOnInit(): void {
    //this.costudyDate = history.state.data.custodyDate;
    this.costudyId = history.state.data.custodyId;
    this.currentstate = history.state.data.pageNum;
    
    //this.purpose = history.state.data.purpose;
    //this.currentCustodyId = history.state.data.empId;
/*
    this.updateForm = new FormGroup({
      Project: new FormControl(null,Validators.required),
      purpose: new FormControl(null,Validators.required),
      idNum: new FormControl(null,[Validators.required,Validators.pattern('[0-9]{4}')]),
      phoneNum: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('05+[0-9]{8}')]),
      desc: new FormControl(null,Validators.required),
      cost: new FormControl(null,Validators.required),
      attachment: new FormControl(null),
    });
    */
    this.findTargetEmployee();
    this.fetchProject();
    this.fetchBossInformation();
    this.fetchPageInfo(this.currentstate);
   console.log(this.attachment);
    this.genralInfoForm = new FormGroup(
      {
        Project: new FormControl(null,Validators.required),
      purpose: new FormControl(null),
      idNum: new FormControl(null,[Validators.required,Validators.pattern('[0-9]{4}')]),
      phoneNum: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('05+[0-9]{8}')])
      }
    )
    /*
    this.custodyDescription = new FormGroup(
      {
        desc: new FormControl(null),
        cost: new FormControl(null)
      }
    )
    this.custodyAttatchment = new FormGroup({
      attachment: new FormControl(null),
    })

    this.reactiveForm = new FormGroup({
      
    });
    */
  }

  fetchPageInfo(pageNum:Number){
    
    if(pageNum === 1){
      this.custodyService.fetchCustody().subscribe((emp)=>{
        let searchedCustody = emp.find((emp)=>{return emp.custodyId === this.costudyId });
        //console.log(searchedCustody);
        }) 
    }
    if(pageNum === 2){
      console.log("number2");
    }
    if(pageNum === 3){
      console.log("number3");
    }
    if(pageNum === 4){
      console.log("number4");
    }
  }
  
  canExit(){
    if(this.Project||this.purpose||this.idNum||this.phoneNum||this.desc||this.cost||this.attachment){
      return true;
    }else{
      return true;
    }
  }
  att=[
    {desc:"test1",cost:"100"},
    {desc:"test2",cost:"200"},
    {desc:"test3",cost:"100"}
  ]
  /*
  AddNewAttachment(){
    this.att.push({desc:this.desc,cost:this.cost});
    console.log(this.att);
    this.cost='';
    this.desc='';
  }
  DeleteItem(id:number){
    let idString = id.toString();
    document.getElementById(idString).remove();
    
    }
    onUpdate(data:{custodyId:string,custodyDate:string,projectName:string,purpose:string,visibility:boolean,arr:{},cost:string,extentionNum:string,phoneNum:string,state:string,attachment:File}){
      data.state = 'New Request';
      data.arr = this.att;
      data.visibility =false;
      this.updateEmployee(this.currentCustodyId,data);
      console.log(data);
    }
    updateEmployee(id:string,value:Employee){
      this.http.put('https://angular-f03c3-default-rtdb.firebaseio.com//employeeCustody/'+id+'.json',value)
      .subscribe()
    }
    */

  fetchProject(){
    this.custodyService.fetchProject().subscribe((emp)=>{
    this.projectList =emp;
    })      
  }
  fetchBossInformation(){
    let userId = '1684';
    this.custodyService.fetchBosses().subscribe((boss)=>{
      let bossInfo = boss.find((val)=>{return val.userId === userId });
      console.log(bossInfo);
      this.bossName = bossInfo.bossName ;
      this.bossPositiong = bossInfo.position;
    })
  }
  onSelected(projectvalue:string){
    this.custodyService.fetchProject().subscribe((project)=>{
      let clickedvalue = project.find((val)=>{return val.projectName === projectvalue });
      this.projectLeaderName = clickedvalue.projectLeader;
    })
  }

  onGeneralCreate(data:{Project:string,purpose:string,idNum:string,phoneNum:string,state:string,date:string,custId:string,pageNum:number}){
    if(this.emptyGeneralFieldChacker === true){
      data.pageNum =1;
      this.custodyService.fetchCustody().subscribe((emp)=>{
        let searchedCustody = emp.find((emp)=>{return emp.custodyId === this.costudyId });
        if(this.Project !== searchedCustody.projectName 
          || this.purpose !== searchedCustody.purpose 
          ||this.phoneNum !== searchedCustody.phoneNum 
          ||this.idNum !== searchedCustody.extentionNum){
            console.log("edited info");
          }
        
        })
      
      //this.custodyService.createGeneralInformation(data);
    }
  }

  
/*
  onCustodyDescriptionCreate(data:{arr:{},pageNum:number}){
    if(this.att.length === 0){
      data.arr = "empty";
    }else{
      data.arr = this.att;
    }
    data.pageNum = 2;
    this.custodyService.createCustodyDescription(data);
  }

  onCustodyAttachementCreate(data:{attachment:File, pageNum:number,complete:boolean}){
    if(this.attachment ==  undefined){
      data.complete = false;
    }else{
      data.complete = true;
    }
    data.pageNum = 3;
    this.http.post('https://financialcustody-2fa62-default-rtdb.firebaseio.com/attachement.json',data).subscribe();
  }

  onCustodyCreate(data:{pageNum:number,state:string}){
    this.custodyService.createCustody(data);
  }
  
  */
  AddNewAttachment(){
    this.att.push({desc:this.desc,cost:this.cost});
    console.log(this.att);
    this.cost='';
    this.desc='';
  }
  
  DeleteItem(id:number){
    let idString = id.toString();
    document.getElementById(idString).remove();
    
    }
  
   getstate(){  
    if(this.currentstate<1) {
      this.currentstate =1;
    }
    if(this.currentstate>4){
      this.currentstate=4;
    }
    return this.currentstate;
   }
   counterVal =1;
    next(){
      
      if(this.currentstate == 1){
        if(this.Project == undefined){
          document.getElementById('phoneSmall').style.display="block";
        }if(this.idNum == undefined){
          document.getElementById('extentionSmall').style.display="block";
        }if(this.phoneNum == undefined){
          document.getElementById('projectSmall').style.display="block";
        }
        else{
          this.emptyGeneralFieldChacker =true;
          this.currentstate = this.currentstate+1;
        }
      }
      else if(this.currentstate == 2){
          this.currentstate = this.currentstate+1;        
      }
      else if(this.currentstate == 3){
          this.currentstate = this.currentstate+1;
        
      }
      
      if(this.currentstate == 4){
        //document.getElementById('prevbtn').style.display="none";
        document.getElementById('nextbtn').style.display="none";
        document.getElementById('subbtn').style.display="block";   
      }
      
    }
    prev(){
      this.currentstate = this.currentstate-1;
      if(this.currentstate===1){
        document.getElementById('prevbtn').style.cursor=" default";
      }
      if(this.currentstate!==4){
        document.getElementById('nextbtn').style.display="block";
        document.getElementById('subbtn').style.display="none";    
      }
      
    }

    sucessfullMSG(){
      document.querySelector(".my-alert-btn").classList.add('show');
      setTimeout(()=>{document.querySelector(".my-alert-btn").classList.remove('show')},1000);
      setTimeout(()=>{this.router.navigate(['/employee'])},1010);
      ;
    }
    private fetchEmployee(){   
      this.custodyService.fetchCustody().subscribe((emp)=>{
        this.allEmployee =emp;
      }
      )    
    }
    findTargetEmployee(){
      this.custodyService.fetchCustody().subscribe((emp)=>{
        let searchedCustody = emp.find((emp)=>{return emp.custodyId === this.costudyId });
        if(searchedCustody.pageNum === 1){
          this.Project = searchedCustody.projectName;
          this.purpose = searchedCustody.purpose;
          this.phoneNum = searchedCustody.phoneNum;
          this.idNum = searchedCustody.extentionNum;
          
        }
        
        }) 
    }
}
