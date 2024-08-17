const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [{ text: "how to add button in JSX with shadcn\n" }],
    },
    {
      role: "model",
      parts: [
        {
          text: '```jsx\nimport { Button } from "shadcn-ui";\n\nfunction MyComponent() {\n  return (\n    <div>\n      {/* Basic Button */}\n      <Button>Click Me</Button>\n\n      {/* Button with custom variant */}\n      <Button variant="outline">Outline Button</Button>\n\n      {/* Button with custom size */}\n      <Button size="lg">Large Button</Button>\n\n      {/* Button with custom color */}\n      <Button color="red">Red Button</Button>\n\n      {/* Button with disabled state */}\n      <Button disabled>Disabled Button</Button>\n    </div>\n  );\n}\n\nexport default MyComponent;\n```\n\n**Explanation:**\n\n1. **Import:** Import the `Button` component from the "shadcn-ui" package.\n2. **Basic Button:** Create a basic `Button` element with the text "Click Me".\n3. **Custom Variant:** Use the `variant` prop to change the button\'s style to "outline".\n4. **Custom Size:** Use the `size` prop to set the button\'s size to "lg" (large).\n5. **Custom Color:** Use the `color` prop to set the button\'s color to "red".\n6. **Disabled State:** Use the `disabled` prop to disable the button.\n\n**Additional Options:**\n\n* **Icon:** Use the `icon` prop to add an icon to the button (requires importing an icon component from "shadcn-ui" or another icon library).\n* **Loading:** Use the `isLoading` prop to show a loading indicator.\n* **Click Handler:** Use the `onClick` prop to define a function that will be executed when the button is clicked.\n* **Accessibility:** Add appropriate ARIA attributes for accessibility (e.g., `aria-label` for screen readers).\n\n**Note:**\n\n* Make sure you have installed the "shadcn-ui" package using npm or yarn.\n* Refer to the official Shadcn documentation for a complete list of available props and customization options: [https://shadcn.com/docs/ui/button](https://shadcn.com/docs/ui/button)\n',
        },
      ],
    },
  ],
});
