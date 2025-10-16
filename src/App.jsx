export default function App() {
  return (
    <body>
      <div className="app-content">
        To convert your HTML footer code into JSX syntax, you will need to make a few adjustments, such as using `className` instead of `class`, and ensuring that the correct syntax for inline styles is followed. Here's how your footer would look in JSX:

<footer className="sticky-footer bg-white">
    <div className="container my-auto">
        <div className="copyright text-center my-auto">
            <span>
                Copyright © 2008-2025 <a target="_blank" href="http://mkr.org.ua"> ООО "МКР" (http://mkr.org.ua)</a>. <b>Версія</b> 2.6.10
            </span>
        </div>
    </div>
</footer>
### Key Changes Made:
1. Changed `class` to `className`.
2. No changes were needed for the inline style since there are no inline styles in your original code. 

This JSX can be used in a React component directly.
    </div>
    </body>
  );
}