import { PortableTextBlock } from "@portabletext/types";

export const truncateDescription = (
  description: PortableTextBlock[],
  length: number
): PortableTextBlock[] => {
  let remainingLength = length;
  const truncatedDescription: PortableTextBlock[] = [];

  for (const block of description) {
    if (remainingLength <= 0) {
      break;
    }

    if (block._type === "block" && block.children) {
      const newChildren = block.children.map((child) => {
        if (remainingLength <= 0) {
          return { ...child, text: "" };
        }

        let text = child.text;
        if (text.length > remainingLength) {
          text = text.slice(0, remainingLength) + "...";
          remainingLength = 0;
        } else {
          remainingLength -= text.length;
        }

        return { ...child, text };
      });

      truncatedDescription.push({ ...block, children: newChildren });
    } else {
      truncatedDescription.push(block);
    }
  }

  return truncatedDescription;
};
