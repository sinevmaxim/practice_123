export class RentApplicationDto {
    id;
    employmentVerificationLetter;
    paystubs;
    bankStatements;
    federalTaxReturn;
    photoId;
    referenceLetter;
    additionalDocuments;

    constructor(model) {
        this.id = model._id;
        this.employmentVerificationLetter = model.employmentVerificationLetter;
        this.paystubs = model.paystubs;
        this.bankStatements = model.bankStatements;
        this.federalTaxReturn = model.federalTaxReturn;
        this.photoId = model.photoId;
        this.referenceLetter = model.referenceLetter;
        this.additionalDocuments = model.additionalDocuments;
    }
}
