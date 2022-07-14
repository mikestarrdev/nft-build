import React, { useEffect, useState } from "react";

function MyCollection() {
  const [myNFTs, setMyNFTs] = useState({});

  useEffect(() => {
    // const CID = "bafybeict7v5n3r3yuxnxmbn33am76m3dttm4qzjrzlbskafrldc4ts2lym";
    const APIKEY = "hidden";
    let date = new Date();

    fetch(`https://api.nft.storage/?before=${date.toISOString()}&limit=1`, {
      headers: {
        Authorization: `Bearer ${APIKEY}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log("data", data));
  }, []);
  return <div></div>;
}

export default MyCollection;
