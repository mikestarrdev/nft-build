function Navbar({ connect, account, disconnect }) {
  console.log("account:", account);
  return (
    <nav className="flex justify-center bg-sky-300 text-lg">
      <ul className="flex flex-row items-center align-center">
        <li className="m-3">Home</li>
        <li className="m-3">My Page</li>
        <li className="m-3">Create NFT</li>
        <li className="m-3">
          {account.current == undefined ||
          account.current === null ||
          account.current === "" ? (
            <button
              onClick={connect}
              className=" basis-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-3"
            >
              Connect Wallet
            </button>
          ) : (
            <button
              onClick={disconnect}
              className="basis-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-3"
            >
              Disconnect{" "}
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
