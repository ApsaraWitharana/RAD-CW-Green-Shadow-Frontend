export class Field {
     fieldCode: string;
     fieldName: string;
     fieldLocation: string;
     extentSize: number;
     fieldImage1:string |null;
     fieldImage2: string | null;


    constructor(fieldCode: string, fieldName: string, fieldLocation: string, extentSize: number, fieldImage1: string | null, fieldImage2: string | null) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.extentSize = extentSize;
        this.fieldImage1 = fieldImage1;
        this.fieldImage2 = fieldImage2;
    }
}


