import type { Metadata } from "next";
import RamblingsPage from "./client-page";

export const metadata: Metadata = {
  title: "随便瞎说 / He K",
  description: "何 K 的随笔、照片与一些没有结论的所见所想。",
};

export default function Page() {
  return <RamblingsPage />;
}
