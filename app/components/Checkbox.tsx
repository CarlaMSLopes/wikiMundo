import React from "react";
interface CheckboxProps {labelName:string;}
const Checkbox:React.FC<CheckboxProps>= ({labelName}) => {
  return (
    <div className='flex gap-3'>
      <input type="checkbox" className="accent-zinc-900"/>
      <label className="text-zinc-900 font-Irish_Grover">{labelName}</label>
    </div>
  );
};

export default Checkbox;
