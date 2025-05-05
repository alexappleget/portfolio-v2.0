import type { Metadata } from "next";
import { siteMetadata } from "../data/siteMetadata";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};
