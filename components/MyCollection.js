import React, { useEffect, useState } from "react";

function MyCollection() {
  const [myNFTs, setMyNFTs] = useState({});

  useEffect(() => {
    const APIKEY =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU2RTkzRjQyQzRlOTIyY0U0OUUzZjFmNTFFMDJGMjYxRDI2YzlBOTciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjE4MzQ3NTc2OCwibmFtZSI6Ik5GVCBHcmFtIn0.WB2gYhFuebg_G91dRvfrziXGXhFJEk5mWZhMPDZ49YE";
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
