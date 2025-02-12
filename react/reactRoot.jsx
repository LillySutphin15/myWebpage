import { createRoot } from 'react-dom/client';
import ColorPicker from "/reactComponent/ColorPicker";



// Render your React component instead
const root = createRoot(document.querySelector('main'));
root.render(<h2>Hello from react</h2>);
root.render(<ColorPicker />)