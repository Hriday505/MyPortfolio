import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

export default function BackendProgress(){


  const Skills = [

        {id:1,name:'Bengali',capability:"100"},
       
        {id:2,name:'English',capability:"95"},

        {id:3,name:'Hindi',capability:"85"},
    
  ]    

return (

    <>
        <Field className="max-w-sm md:w-100 w-70 h-60  relative md:right-0 right-6 mt-8 md:mt-0   bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06),rgba(255,255,255,0.02))] ml-12 p-8 rounded-2xl">
        {Skills.map((item)=> (
         <FieldLabel htmlFor="progress-upload" key={item.id}>
           <div className="flex flex-col w-full">
              <div className="flex p-2">
                  <span className="text-[1.2rem] text-white">
                    {item.name}  
                    </span>
                   <span className="ml-auto text-[1.2rem] text-white">{`${item.capability}%`}</span>
                </div>
              <Progress   value={item.capability} id="progress-upload" />
            </div>
          </FieldLabel>    
        ))}
    
    </Field>

    
    </>


      )

}