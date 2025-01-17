export class Vehicle{
    vehicleCode : string;
    licensePlateNumber:number;
    vehicleCategory:string;
    fuelType:string;
    status:string;
    staffId:string;
    remarks:string;

    constructor(vehicleCode: string, licensePlateNumber: number, vehicleCategory: string, fuelType: string, status: string, staffId: string, remarks: string) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.staffId = staffId;
        this.remarks = remarks;
    }
}