import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const FormContext = createContext();

function FormProvider({ children }) {
    const [isOpen, setOpen] = useState(false);
  
    return (
      <FormContext.Provider value={{ isOpen, setOpen }}>
        {children}
      </FormContext.Provider>
    );
}

export default FormProvider

FormProvider.propTypes = {
   children: PropTypes.node.isRequired
}
