export class Employee{
    
    custodyId:string;
    custodyDate:string;
    projectName:string;
    purpose:string;
    visibility:boolean;
    arr:{};
    cost:string;
    extentionNum:string;
    phoneNum:string;
    state:string;
    attachment:File;
    pageNum:Number;
    id?:string;
}
export class user{    
    userCustody:boolean;
    userId:string;
    id?:string;
}
export class project{
    projectName:string;
    projectLeader:string;
    id?:string;
}
export class Boss{
    bossName:string;
    position:string;
    userId:string;
    id?:string;
}
export class Leader{
    custodyId:string;
    custodyDate:string;
    projectName:string;
    purpose:string;
    visibility:boolean;
    arr:{};
    cost:string;
    extentionNum:string;
    phoneNum:string;
    state:string;
    attachment:string;
    id?:string;
}