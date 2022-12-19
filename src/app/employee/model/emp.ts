export class Employee{
    /*
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
    */

    requestDate: string;
    employeeId: number;
    employeeName: string;
    employeeDepartmentName: string;
    purpose: string;
    projectCode: number;
    projectName: string;
    projectManagerId: number;
    projectManagerName:string;
    requestStatus: number;
    extensionNumber: string;
    mobileNumber: string;
    deletableRequest: boolean;
    financialCustodyTracks: [];
    custodyItems: []
    directManagerId: number;
    directManagerName: string;
    directManagerPosition: string;
    originalDirectManagerId: number
    originalDirectManagerName: string;
    originalDirectManagerPosition: string;
    projectApproval: boolean;                    
    id?:string;
}
export class user{    
    userCustody:boolean;
    userId:string;
    id?:string;
}
export class project{
    id: number;
    code: string;
    name: string;
    description: string;
    year:number;
    managerId: number;
    managerName: string;
    closed: boolean;
    isIncomeProject: boolean;
}
export class Boss{
    id: number;
    url: string;
    employeeId: number;
    name: string;
    englishName: string;
    birthDate: string;
    departmentId: number;
    departmentName: string;
    nationality: string;
    hireDate: string;
    jobsSystem: string;
    managmentPosition: string;
    mobileNumber: string;
    jobTitle: string;
    governmentNumber: string;
    identityType: string;
    email: string;
    workShiftsSystemId: number;
    workShiftsSystemName: string;
    employeeStatusText: string;
    employeeAttendanceProof: string;
    internalTicketClass: string;
    externalTicketClass: string;
    rank: string;
    grade: string;
    subArea: string;
    subAreaCode: string;
    /*
    bossName:string;
    position:string;
    userId:string;
    id?:string;
    */
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