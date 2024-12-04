export default function NumericalTrack({ number }: { number: number }) {
    function getTrack(): JSX.Element[] {
        const track = [];

        for (let i = number; i >= 0; i--) {
            track.push(
                <div
                    className="asset-track-hex"
                    key={i}>
                    {i}
                </div>
            );
        }

        return track;
    }

    return <div className="numerical-track">{getTrack()}</div>;
}
