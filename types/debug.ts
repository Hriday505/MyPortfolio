export type DebugRequest = {

    debugInput : string 

}


export type InputType =  "error" |"code" |  "mixed" | "unknown"


export type DebugResponse = {
    
 detectedType: InputType,
 success:boolean,
 issueSummary:string,
 stepByStepFix:string[],
 correctedCode?:string,
 extraNotes?:string

}