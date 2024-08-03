import React from "react";



type = {
    children:React.ReactNode;

}
const Button  = ({children}:React.ReactNode) => {
    return (
        <button className={'px-4 py-1 rounded-xl bg-lime-500'}>
            {children}
        </button>
    );
};
export default Button