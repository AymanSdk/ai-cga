import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplateListSection";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const seletedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {/* Form Section  */}
      <FormSection selectedTemplate={seletedTemplate} />
      {/* Output setion */}
      <div className="col-span-2">
        <OutputSection />
      </div>
    </div>
  );
}

export default CreateNewContent;
