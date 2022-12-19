import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { faSquarePlus, faAngleLeft,faTrash, faTrashCan , faCheck} from '@fortawesome/free-solid-svg-icons'
import { project } from '../employee/model/emp';
import { CustodyService } from '../Service/custody.service';
import { AuthService } from '../Service/AuthService.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit, OnChanges {
  faSquarePlus=faSquarePlus;
  faAngleLeft=faAngleLeft;
  faTrash=faTrash;
  faTrashCan=faTrashCan;
  faCheck=faCheck;

  projectName: any;
  purpose: any;
  extensionNumber: any;
  mobileNumber: any;
  desc: any;
  cost: any;
  attachment: any;

  reactiveForm:FormGroup;
  genralInfoForm:FormGroup;
  custodyDescription:FormGroup;
  custodyAttatchment:FormGroup;

  projectList:project[]=[];
  currentstate:number =1;
  projectLeaderName:string='';
  directManagerName:string;
  directManagerPosition:string;
  isSelected = 'لا يوجد مشروع';
  
  userId:number;
  userName:string;
  departmentName:string;
  projectManagerId:number;
  directManagerId:number;

tttt:{};

  emptyGeneralFieldChacker:boolean =false;

  constructor(private http:HttpClient, private custodyService:CustodyService, private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.fetchProject();
    this.fetchBossInformation();

    this.authService.login().subscribe((ele)=>{
      this.userName = ele.fullName;
      this.userId = ele.userId;
    })
   
    this.genralInfoForm = new FormGroup(
      {
        projectName: new FormControl(null,Validators.required),
      purpose: new FormControl(null),
      extensionNumber: new FormControl(null,[Validators.required,Validators.pattern('[0-9]{4}')]),
      mobileNumber: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('05+[0-9]{8}')])
      }
    )
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
  }
  ngOnChanges(){
    console.log("this the number of page counter " + this.currentstate);
  }
  fetchProject(){
    this.custodyService.fetchProject().subscribe((emp)=>{
    this.projectList =emp;
    
    })
       
  }
  fetchBossInformation(){
    this.authService.login().subscribe((ele)=>{    
      this.custodyService.fetchBosses(ele.userId).subscribe((boss)=>{
        
        this.directManagerName = boss.name;
        this.directManagerPosition = boss.managmentPosition;
        this.directManagerId = boss.employeeId;
        this.departmentName = boss.departmentName;
        
        });
    })
    
      
  }
  onSelected(projectvalue:string){
    this.custodyService.fetchProject().subscribe((project)=>{
      let clickedvalue = project.find((val)=>{return val.name === projectvalue });
      this.projectLeaderName = clickedvalue.managerName;
      this.projectManagerId = clickedvalue.managerId;
    })
  }
  /*
  canExit(){
    if(this.Project||this.purpose||this.idNum||this.phoneNum||this.desc||this.cost||this.attachment){
      return confirm('You have unsaved changes. Do you really want to discard these changes?')
    }else{
      return true;
    }
  }
  */
 
  onGeneralCreate(data:{requestDate: string,employeeId: number,employeeName: string,employeeDepartmentName: string,purpose: string,projectCode: number,projectName: string,projectManagerId: number,projectManagerName:string,requestStatus: number,extensionNumber: string,mobileNumber: string,deletableRequest: boolean,financialCustodyTracks: {},custodyItems: {},originalDirectManagerId: number,originalDirectManagerName: string,originalDirectManagerPosition: string,projectApproval: boolean,id:string}){
    //requestDate: string,employeeId: number,employeeName: string,employeeDepartmentName: string,purpose: string,projectCode: number,projectName: string,projectManagerId: number,projectManagerName:string,requestStatus: number,extensionNumber: string,mobileNumber: string,deletableRequest: boolean,directManagerId: number,directManagerName: string,directManagerPosition: string,originalDirectManagerId: number,originalDirectManagerName: string,originalDirectManagerPosition: string,id?:string
    if(this.emptyGeneralFieldChacker === true){
      
      data.employeeId = this.userId;
      data.employeeName = this.userName;
      data.employeeDepartmentName = this.departmentName;
      data.projectManagerId =this.projectManagerId;
      data.projectManagerName = this.projectLeaderName;
      data.projectCode = 1;
      data.requestStatus=2;
      data.deletableRequest =false;
      data.originalDirectManagerId=this.directManagerId;
      data.originalDirectManagerName=this.directManagerName;
      data.originalDirectManagerPosition=this.directManagerPosition;
      data.financialCustodyTracks = this.financialCustodyTracks;
      data.custodyItems=this.custodyItems;
      console.log(data);
      this.custodyService.createGeneralInformation(data);
      this.tttt = data;
    }
    
  }

  

  onCustodyDescriptionCreate(data:{custodyItems:{}}){
    if(this.att.length === 0){
      data.custodyItems = "empty";
    }else{
      data.custodyItems = this.att;
    }
    //this.custodyService.createCustodyDescription(data);
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
  
  att=[
    
  ]
  custodyItems=[
    {
      "id": 19,
      "purpose": "test1",
      "amount": 1230.00,
      "financialCustodyId": 10
  },
  {
      "id": 20,
      "purpose": "test2",
      "amount": 2230.00,
      "financialCustodyId": 10
  }
  ]
  financialCustodyTracks=[
    {
      "id": 23,
                "date": "2022-06-22T22:26:16.8",
                "employeeId": 1113,
                "employeeName": "عمرو غازي جميل بخاري",
                "position": "مدير المشروع",
                "originalEmployeeId": 1113,
                "originalEmployeeName": "عمرو غازي جميل بخاري",
                "originalEmployeePosition": "مدير المشروع",
                "approved": true,
                "responseByEmployeeId": 1113,
                "responseByEmployeeName": "عمرو غازي جميل بخاري",
                "responseByEmployeePosition": "مدير ادارة الخدمات الالكترونية",
                "responseDate": "2022-06-22T22:28:07.6933333",
                "responseNote": "test",
                "employeeType": 1,
                "note": null,
                "financialCustodyId": 10,
                "nextManager": null,
                "nextManagerPosition": null,
                "nextOriginalManager": null,
                "nextOriginalManagerPosition": null
    }
  ]
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
        if(this.projectName == undefined){
          document.getElementById('phoneSmall').style.display="block";
        }if(this.extensionNumber == undefined){
          document.getElementById('extentionSmall').style.display="block";
        }if(this.mobileNumber == undefined){
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
    
   
}
