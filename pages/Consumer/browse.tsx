import { Player } from "@livepeer/react";
import { parseArweaveTxId, parseCid } from "livepeer/media";

import { useMemo } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function browse() {
  const [url, setUrl] = useState<string>('');
 
  // const [title, setTitle] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [playerRef, setPlayerRef] = useState();

  const idParsed = useMemo(() => parseCid(url) ?? parseArweaveTxId(url), [url]);

  return (
    <div>
      <div>
        <p>IPFS or Arweave URL</p>
        {/* <input
          type="text"
          placeholder="ipfs://... or ar://"
          value={url}
          className="mt-8 px-4 py-2 rounded-lg border-2 border-slate-100 focus:outline-none  w-[80%] bg-slate-100 lg:w-[40%]"
          onChange={(e) => {
            setUrl(e.target.value);
            setTitle(null);
            setUrl(null);
            setLoading(true);
            setTimeout(() => {
              setUrl(e.target.value);
              setLoading(false);
            }, 1000);
          }}
        /> */}
        <input
          type="text"
          placeholder="ipfs://... or ar://"
          onChange={(e) => setUrl(e.target.value)}
        />

        {url && !idParsed && <p>Provided value is not a valid identifier.</p>}

        {idParsed && (
          <Player
            title={idParsed.id}
            src={url}
            autoPlay
            muted
            autoUrlUpload={{ fallback: true, ipfsGateway: "https://w3s.link" }}
          />
        )}
      </div>
    </div>
  );
}
