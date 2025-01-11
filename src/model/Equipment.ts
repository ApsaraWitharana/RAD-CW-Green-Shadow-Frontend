export class Equipment{
     equipmentId :string
     equipmentName:string
     type :string
     status:string
     fieldCode:string
     staffId:string

    constructor(equipmentId: string, equipmentName: string, type: string, status: string, fieldCode: string, staffId: string) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.type = type;
        this.status = status;
        this.fieldCode = fieldCode;
        this.staffId = staffId;
    }
}