export class Monitoring{
     logCode : string;
     logDate : string;
     logDetails: string;
     observedImage: string;
     cropCode : string;


    constructor(logCode: string, logDate: string, logDetails: string, observedImage: string, cropCode: string) {
        this.logCode = logCode;
        this.logDate = logDate;
        this.logDetails = logDetails;
        this.observedImage = observedImage;
        this.cropCode = cropCode;
    }
}