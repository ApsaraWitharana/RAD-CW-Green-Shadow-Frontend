export class Equipment{
     equipmentCode :string
     equipmentName:string
     equipmentType :string
     status:string
     fieldCode:string
     staffCode:string

    constructor(equipmentCode: string, equipmentName: string, equipmentType: string, status: string, fieldCode: string, staffCode: string) {
        this.equipmentCode = equipmentCode;
        this.equipmentName = equipmentName;
        this.equipmentType = equipmentType;
        this.status = status;
        this.fieldCode = fieldCode;
        this.staffCode = staffCode;
    }
}