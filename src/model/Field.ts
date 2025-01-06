export class Field {
     fieldCode: string;
     fieldName: string;
     fieldLocation: string;
     extentSize: number;
     fieldImage1:string;
     fieldImage2: string;


    constructor(fieldCode: string, fieldName: string, fieldLocation: string, extentSize: number, fieldImage1: string, fieldImage2: string) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.extentSize = extentSize;
        this.fieldImage1 = fieldImage1;
        this.fieldImage2 = fieldImage2;
    }
}


