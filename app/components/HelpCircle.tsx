// Acceptance criteria:

import { Paragraph } from "./Typography";

// • Should have a 1000ms delay
// • Should animate over 500ms
// • Should have 32px of spacing from the
//   bottom-right corner
export function HelpCircle() {
    return (
        <button className="bg-blue-600 w-[50px] h-[50px] rounded-full fixed bottom-7 right-7 slide-up">
            <Paragraph className="text-white">?</Paragraph>
            <span className="sr-only">Access help center</span>
        </button>
    )
}