import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  return (
    <div>
      {/* Form Section  */}
      <FormSection />
      {/* Output setion */}
      <OutputSection />
    </div>
  );
}

export default CreateNewContent;
