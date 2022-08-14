import { useState } from "react"
import { NFTCard } from "./NftCard"

const Home = () => {
  const [wallet, setWallet] = useState("")
  const [collectionCA, setCollectionCA] = useState("")
  const [NFTs, setNFTs] = useState(null)

  async function fetchNFTs() {
    let nfts
    const apiKey = "4cEamWso7jXz2Vohg-6W26n3TUYOUUZD"
    const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTs`
    var requestOptions = {
      method: "GET",
    }
    if (!collectionCA) {
      const fetchURL = `${baseURL}/?owner=${wallet}`
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json())
    } else if (!wallet) {
      const fetchURL = `${baseURL}ForCollection?contractAddress=${collectionCA}&withMetadata=true`
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json())
    } else {
      const fetchURL = `${baseURL}/?owner=${wallet}&contractAddresses%5B%5D=${collectionCA}`
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json())
    }
    if (nfts) {
      setNFTs(!nfts.nfts ? nfts.ownedNfts : nfts.nfts)
      console.log(NFTs)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-900">
      <div className="flex flex-col w-2/5 p-2 m-2 border rounded-xl border-pale-purple bg-black">
        <h1 className="text-center italic text-pale-purple">Filters:</h1>
        <input
          onChange={(e) => setWallet(e.target.value)}
          value={wallet}
          type={"text"}
          placeholder={"Add your wallet address"}
          className="m-1 p-0.5 border rounded-md bg-white border-pale-purple text-prussian-blue"
        ></input>
        <input
          onChange={(e) => setCollectionCA(e.target.value)}
          value={collectionCA}
          type={"text"}
          placeholder={"Collection address"}
          className="m-1 p-0.5 border rounded-md bg-white border-pale-purple text-prussian-blue"
        ></input>
        <button
          onClick={() => {
            fetchNFTs()
          }}
          className="bg-thistle-brown italic border border-pale-purple rounded-md my-1 mx-auto px-2 text-prussian-blue"
        >
          Load NFT's
        </button>
      </div>
      <div className="mt-2 grid grid-cols-4">
        {NFTs &&
          NFTs.map((nft) => {
            return <NFTCard nft={nft} />
          })}
      </div>
    </div>
  )
}

export default Home
