import {
  AudiLogo,
  BMWLogo,
  FordLogo,
  LamborghiniLogo,
  MercedesLogo,
} from "../assets/export";
import { TbCarSuv } from "react-icons/tb";

export const carcategories = [
  {
    title: "Sports",
    image: `{<TbCarSuv />}`,
  },
  {
    title: "SUV",
    image: BMWLogo,
  },
  {
    title: "MPV",
    image: MercedesLogo,
  },
  {
    title: "Sedan",
    image: FordLogo,
  },
  {
    title: "Coupe",
    image: LamborghiniLogo,
  },
  {
    title: "Hatchback",
    image: AudiLogo,
  },
];
