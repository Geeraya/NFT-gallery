export const NFTCard = ({ nft }) => {
  const {
    title,
    id: { tokenId },
    contract: { address },
    media: [{ gateway }],
    description,
  } = nft
  return (
    <div className="border border-pale-purple rounded-xl p-2 m-2 bg-black">
      <h1 className="text-thistle-brown font-semibold underline text-center text-lg">
        {title}
      </h1>
      <img
        className="max-w-[150px] rounded-xl border border-pale-purple my-1 mx-auto"
        src={gateway}
      ></img>
      <div className="border border-pale-purple rounded-md m-1 p-1 bg-black">
        <div className="flex justify-between">
          <h1 className="text-thistle-brown">Address: </h1>
          <h1 className="text-pale-purple underline italic">{`${address.substr(
            0,
            5
          )}...${address.substr(address.length - 4)}`}</h1>
        </div>
        <div className="flex justify-between">
          <p className="text-thistle-brown">Description:</p>
          <div className="w-1/3"></div>
          <p className="text-pale-purple italic text-right">
            {description?.substr(0, 150)}...
          </p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-thistle-brown">View on Etherscan:</h1>
          <a
            className="text-pale-purple"
            target={"_blank"}
            href={`https://etherscan.io/token/${address}`}
          >{`${address.substr(0, 5)}...${address.substr(
            address.length - 4
          )}`}</a>
        </div>
      </div>
    </div>
  )
}
