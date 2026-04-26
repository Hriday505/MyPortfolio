import Link from "next/link";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { items } from "@/data/blogs";

import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const icons = [
  <IconClipboardCopy key="clipboard" className="h-4 w-4 text-neutral-500" />,
  <IconFileBroken key="file-broken" className="h-4 w-4 text-neutral-500" />,
  <IconSignature key="signature" className="h-4 w-4 text-neutral-500" />,
  <IconTableColumn key="table-column" className="h-4 w-4 text-neutral-500" />,
  <IconArrowWaveRightUp key="arrow-wave" className="h-4 w-4 text-neutral-500" />,
];

export default function BentoGridDemo({ isdark = true }) {
  return (
    <BentoGrid className="mx-auto max-w-4xl md:mt-[2rem] lg:mt-0">
      {items.map((item, i) => (
        <Link key={item.slug} href={`/blogs/${item.slug}`} className="block h-full">
          <BentoGridItem
            isdark={isdark}
            title={item.title}
            description={item.description}
            header={item.image}
            icon={icons[i]}
          />
        </Link>
      ))}
    </BentoGrid>
  );
}



