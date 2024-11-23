export default function Track({ number }: { number: number }) {
    function getTrack(): JSX.Element[] {
        const track = [];

        for (let i = number; i >= 0; i--) {
            track.push(<div className="asset-track-hex">{i}</div>);
        }

        return track;
    }

    return <div className="asset-track">{getTrack()}</div>;
}
