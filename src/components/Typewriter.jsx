import { useState, useEffect } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Typewriter({ texts = [], delayInMs = 150 }) {
    const [displayText, setDisplayText] = useState("");
    const [direction, setDirection] = useState("f");
    const [currIdx, setCurrIdx] = useState(0);

    async function loopWithDelay() {
        if (!texts.length) return;
        const currText = texts[currIdx].split("");

        if (direction === "f") {
            for (let i = 0; i < currText.length; i++) {
                setDisplayText(currText.slice(0, i + 1).join(""));
                await delay(delayInMs);
            }
            await delay(1500);
            setDirection("r");
        } else {
            for (let i = currText.length - 1; i >= 0; i--) {
                setDisplayText(currText.slice(0, i).join(""));
                await delay(delayInMs);
            }
            setCurrIdx(currIdx < texts.length - 1 ? currIdx + 1 : 0);
            setDirection("f");
        }
    }

    useEffect(() => {
        loopWithDelay();
    }, [texts, direction]);

    return (
        <span>
            {displayText}
            <span className="blink">_</span>
        </span>
    );
}