import { useState, useEffect } from "react";
import { useAppContext } from "@/context";
import css from "./jamInChinese.module.scss";

export default function JamInChinese() {
  // const { expanded } = useAppContext();

  // if (expanded) return null;
  return (
    <p className={css.jam} title="JAM">
      果酱
    </p>
  );
}
