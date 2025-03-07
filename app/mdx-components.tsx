import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components
    a: ({ href, children, ...props }) => {
      if (href?.startsWith("http")) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        )
      }
      return href ? (
        <Link href={href} {...props}>
          {children}
        </Link>
      ) : null
    },
    img: (props) => (
      <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...(props as ImageProps)} alt={props.alt || ""} />
    ),
    // Merge with passed components
    ...components,
  }
}

