export default function TopHex({ hue }) {
    return (
        <svg
            width="62"
            height="72"
            viewBox="0 0 62 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="top-hex">
            <path
                d="M11.5 44.5L23 51.25V64.7504L11.5 71.5L0 64.7504L5.8046e-07 51.25L11.5 44.5Z"
                style={{ fill: `hsl(${hue}, 20%, 70%)` }}
            />
            <path
                d="M50.5 22.5L62 29.25V42.7504L50.5 49.5L39 42.7504V29.25L50.5 22.5Z"
                style={{ fill: `hsl(${hue}, 20%, 55%)` }}
            />
            <path
                d="M37 45L48.5 51.75V65.2504L37 72L25.5 65.2504V51.75L37 45Z"
                style={{ fill: `hsl(${hue}, 20%, 55%)` }}
            />
            <path
                d="M24.5 22.5L36 29.25V42.7504L24.5 49.5L13 42.7504V29.25L24.5 22.5Z"
                style={{ fill: `hsl(${hue}, 20%, 70%)` }}
            />
            <path
                d="M11.5 0.5L23 7.25004V20.7504L11.5 27.5L0 20.7504L5.8046e-07 7.25004L11.5 0.5Z"
                style={{ fill: `hsl(${hue}, 20%, 85%)` }}
            />
            <path
                d="M37.5 0.5L49 7.25004V20.7504L37.5 27.5L26 20.7504V7.25004L37.5 0.5Z"
                style={{ fill: `hsl(${hue}, 20%, 85%)` }}
            />
        </svg>
    );
}
