const BeatPlayer = () => {
  // Your specific BeatStars Store URL
  const storeUrl = "https://player.beatstars.com/?storeId=120083";

  return (
    <div className="player-wrapper" style={{ width: '100%', height: '800px', overflow: 'hidden' }}>
      <iframe
        src={storeUrl}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Kingsfordbeats Player"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BeatPlayer;