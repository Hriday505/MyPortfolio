const errorKeywords = [
  "error",
  "traceback",
  "exception",
  "syntaxerror",
  "typeerror",
  "referenceerror"
];   


 const codeKeyWords = ['const','let','function','import','return','{','}','=>','[',']','export']

 export default function  CheckInputType(inputText:string){

 const toLower = inputText.toLocaleLowerCase()
 const HasError = errorKeywords.some((keyword)=> toLower.includes(keyword))
 const HasCode = codeKeyWords.some((keyword)=> toLower.includes(keyword))


   if(HasError && HasCode){

    return "mixed"

   }else if (HasCode){


    return "code"


   }else if(HasError ){


    return  "error"
    

   }else {


    return "unknown"


   }
 

}  










