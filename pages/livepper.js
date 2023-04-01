import { Player, useCreateStream } from "@livepeer/react";

import { useMemo, useState } from "react";

export default function Home() {
  const [streamName, setStreamName] = useState("");
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null);

  const isLoading = useMemo(() => status === "loading", [status]);

  return (
    <div>
      <input
        type="text"
        placeholder="Stream name"
        onChange={(e) => setStreamName(e.target.value)}
      />

      {stream?.playbackId && (
        <Player
          title={stream?.name}
          playbackId={stream?.playbackId}
          autoPlay
          muted
        />
      )}

      {stream && (
        <>
          <p className=" text-fuchsia-600 text-lg mt-2">
            Stream key: {stream.streamKey}
          </p>
          <p className=" text-fuchsia-600 text-lg mt-2">
            Stream Name: {stream.name}
          </p>
          <p className=" text-fuchsia-600 text-lg mt-2">
            Playback ID: {stream.playbackId}
          </p>
        </>
      )}

      <div>
        {!stream && (
          <button
            onClick={() => {
              createStream?.();
            }}
            disabled={isLoading || !createStream}
          >
            Create Stream
          </button>
        )}
      </div>
    </div>
  );
}
