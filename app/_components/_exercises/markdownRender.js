import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Roboto } from "next/font/google";
import remarkGfm from "remark-gfm";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function MarkdownRender({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} style={dracula}>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className}>{children}</code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
