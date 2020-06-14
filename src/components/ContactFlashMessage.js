import React from "react";
import FlashMessage from "react-flash-message";

const CMessage = () =>(
    <FlashMessage duration={5000}>
        <h6 className="text-success">Your message has been successfully sent. I will contact you soon.</h6>
    </FlashMessage>
)
export default CMessage;