"use client";

import React from "react";
import Image from "next/image";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PROPS {
  selectedTemplate?: TEMPLATE;
}

function FormSection({ selectedTemplate }: PROPS) {
  const handleInputChange = (event: any) => {};

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* TODO: Check this error for src type */}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6">
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
