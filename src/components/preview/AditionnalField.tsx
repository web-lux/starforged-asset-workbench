export default function AdditionalField({ id, text }: { id: number; text: string }) {
    return (
        <span
            className="asset-additional-field"
            key={id}>
            {text}
        </span>
    );
}
