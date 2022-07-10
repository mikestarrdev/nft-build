function Navbar({ connect, account, disconnect }) {
  console.log("account:", account);
  return (
    <nav className="flex justify-center bg-sky-300 text-lg">
      <ul className="flex flex-row items-center align-center">
        <li className="m-3">Home</li>
        {/* <li className="m-3">My Page</li> */}
        <li className="m-3">Create NFT</li>
        <li className="m-3">
          {account.current == undefined ||
          account.current === null ||
          account.current === "" ? (
            <button
              onClick={connect}
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-2xl m-0.5"
            >
              Connect
            </button>
          ) : (
            <button
              onClick={disconnect}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl m-3 justify-center"
            >
              {/* Disconnect*/}
              <span className="font-normal text-xs">
                {account.current.substr(0, 11)}....
              </span>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
