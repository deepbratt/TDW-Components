import React from "react";
import FilterAccordion from "./index";

export default {
  title: "Accordion",
};

export const Primary = () => (
  <FilterAccordion title="Something">
    <input type="text" />
  </FilterAccordion>
);