import Templates from "@/app/(data)/Templates";
import React from "react";

export interface TEMPLATE {
    name: string;
    description: string;
    icon: string;
    category: string;
    slug: string;
    aiPrompt: string;
    form:? FORM[];
}

function TemplateListSection() {
  return <div> {Templates.map((item, index) => (

  ) )} </div>;
}

export default TemplateListSection;
