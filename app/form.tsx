"use client";

import React from "react";
import { normalize } from "./utils";
import { useCellphoneList } from "./cellphone-list-context";

export function Form(
  props: React.PropsWithChildren<React.HTMLProps<HTMLFormElement>>
) {
  const { setCellphoneList, setPrefix } = useCellphoneList();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> =
    React.useCallback(
      function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        setCellphoneList(normalize(formData.get("cellphone-list")));

        const prefix = formData.get("prefix");
        if (typeof prefix === "string") {
          setPrefix(prefix);
        }
      },
      [setCellphoneList, setPrefix]
    );

  return <form onSubmit={handleSubmit} {...props} />;
}
