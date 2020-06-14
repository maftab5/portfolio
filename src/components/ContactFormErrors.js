import React from "react";

//using function component and destructred props
const ContactFormsErrors = ({formsErrors}) =>(
    <div className="formErrors">
        {Object.keys(formsErrors).map((fieldName,i)=>{
            if(formsErrors[fieldName].length > 0){
                return (
                    <p key={i} style={{color:'red',fontWeight:'bold'}}>{formsErrors[fieldName]}</p>
                )
            }else{
                return '';
            }
        })}
    </div>
)

export  default ContactFormsErrors
