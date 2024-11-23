export default function BottomHex({ hue }) {
    return (
        <svg
            width="62"
            height="72"
            viewBox="0 0 62 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bottom-hex">
            <path
                d="M50.5 27.5L39 20.75V7.2496L50.5 0.500002L62 7.24961L62 20.75L50.5 27.5Z"
                style={{ fill: `hsl(${hue}, 20%, 70%)` }}
            />
            <path
                d="M11.5 49.5L0 42.75L1.18024e-06 29.2496L11.5 22.5L23 29.2496L23 42.75L11.5 49.5Z"
                style={{ fill: `hsl(${hue}, 20%, 55%)` }}
            />
            <path
                d="M25 27L13.5 20.25L13.5 6.7496L25 0L36.5 6.7496V20.25L25 27Z"
                style={{ fill: `hsl(${hue}, 20%, 55%)` }}
            />
            <path
                d="M37.5 49.5L26 42.75L26 29.2496L37.5 22.5L49 29.2496V42.75L37.5 49.5Z"
                style={{ fill: `hsl(${hue}, 20%, 70%)` }}
            />
            <path
                d="M50.5 71.5L39 64.75L39 51.2496L50.5 44.5L62 51.2496L62 64.75L50.5 71.5Z"
                style={{ fill: `hsl(${hue}, 20%, 85%)` }}
            />
            <path
                d="M24.5 71.5L13 64.75L13 51.2496L24.5 44.5L36 51.2496L36 64.75L24.5 71.5Z"
                style={{ fill: `hsl(${hue}, 20%, 85%)` }}
            />
        </svg>
    );
}
