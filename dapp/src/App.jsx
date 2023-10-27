import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./index.css";
import {
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import myTokenAbi from "./utils/abi.json";

function App() {
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: "0x295A40a5f6437de41be7b8D0Ad16048eaEB7d6Ed",
        abi: myTokenAbi,
        functionName: "getTotalStock",
      },
      {
        address: "0x295A40a5f6437de41be7b8D0Ad16048eaEB7d6Ed",
        abi: myTokenAbi,
        functionName: "getTotalEmployees",
      },
    ],
  });

  // console.log(data);

  const { config } = usePrepareContractWrite({
    address: "0x295A40a5f6437de41be7b8D0Ad16048eaEB7d6Ed",
    abi: myTokenAbi,
    functionName: "increaseTotalEmployees",
  });

  const { config: config2 } = usePrepareContractWrite({
    address: "0x295A40a5f6437de41be7b8D0Ad16048eaEB7d6Ed",
    abi: myTokenAbi,
    functionName: "increaseTotalStock",
  });
  const { config: config3 } = usePrepareContractWrite({
    address: "0x295A40a5f6437de41be7b8D0Ad16048eaEB7d6Ed",
    abi: myTokenAbi,
    functionName: "reduceTotalEmployees",
  });
  const { config: config4 } = usePrepareContractWrite({
    address: "0x295A40a5f6437de41be7b8D0Ad16048eaEB7d6Ed",
    abi: myTokenAbi,
    functionName: "decreaseTotalStock",
  });

  const {
    data: writeData,
    isLoading: writeLoading,
    isSuccess,
    write,
  } = useContractWrite(config);
  const {
    data: writeData2,
    isLoading: writeLoading2,
    isSuccess: isSuccess2,
    write: write2,
  } = useContractWrite(config2);
  const {
    data: writeData3,
    isLoading: writeLoading3,
    isSuccess: isSuccess3,
    write: write3,
  } = useContractWrite(config3);
  const {
    data: writeData4,
    isLoading: writeLoading4,
    isSuccess: isSuccess4,
    write: write4,
  } = useContractWrite(config4);

  const {
    data: waitData,
    isError: waitError,
    isLoading: waitLoading,
    isSuccess: waitSuccess,
  } = useWaitForTransaction({
    hash: writeData?.hash,
    onSuccess(data) {
      console.log(data);
    },

    onError(error) {
      console.log(error);
    },
  });
  const {
    data: waitData2,
    isError: waitError2,
    isLoading: waitLoading2,
    isSuccess: waitSuccess2,
  } = useWaitForTransaction({
    hash: writeData2?.hash,
    onSuccess(data) {
      console.log(data);
    },

    onError(error) {
      console.log(error);
    },
  });
  const {
    data: waitData3,
    isError: waitError3,
    isLoading: waitLoading3,
    isSuccess: waitSuccess3,
  } = useWaitForTransaction({
    hash: writeData3?.hash,
    onSuccess(data) {
      console.log(data);
    },

    onError(error) {
      console.log(error);
    },
  });
  const {
    data: waitData4,
    isError: waitError4,
    isLoading: waitLoading4,
    isSuccess: waitSuccess4,
  } = useWaitForTransaction({
    hash: writeData4?.hash,
    onSuccess(data) {
      console.log(data);
    },

    onError(error) {
      console.log(error);
    },
  });

  const handleIncreaseEmployee = async (e) => {
    e.preventDefault();
    write?.();
    isSuccess();
    waitSuccess();
  };

  const handleIncreaseStock = async (e) => {
    e.preventDefault();
    write2?.();
    isSuccess2();
    waitSuccess2();
  };

  const handleReduceEmployee = async (e) => {
    e.preventDefault();
    write3?.();
    isSuccess3();
    waitSuccess3();
  };
  const handleReduceStock = async (e) => {
    e.preventDefault();
    write4?.();
    isSuccess4();
    waitSuccess4();
  };

  return (
    <div className="flex h-screen w-full flex-col bg-[#f5f5f5] px-4 py-4">
      <div className="flex justify-end">
        <ConnectButton />
      </div>
      <div className="mb-[60px] mt-24 self-center">
        <h1 className="mb-4 w-full text-center text-xl font-bold text-red-600">
          Total stock:{" "}
          <span className="text-lg text-[#333]">
            {String(data?.[0].result) ?? "not found"}
          </span>
        </h1>
        <div className="flex gap-x-4">
          <button
            className="rounded-[10px] bg-[#c4c4c4] px-5 py-3 text-black transition-all duration-500 hover:bg-red-600 hover:text-white"
            onClick={handleIncreaseStock}
          >
            Increase Stock
          </button>
          <button
            className="rounded-[10px] bg-[#c4c4c4] px-5 py-3 text-black transition-all duration-500 hover:bg-red-600 hover:text-white"
            onClick={handleReduceStock}
          >
            Decrease Stock
          </button>
        </div>
      </div>
      <div className="self-center">
        <h1 className="mb-4 w-full text-center text-xl font-bold text-red-600">
          Total employees:{" "}
          <span className="text-lg text-[#333]">
            {String(data?.[1].result) ?? "not found"}
          </span>
        </h1>
        <div className="flex gap-x-4">
          <button
            className="rounded-[10px] bg-[#c4c4c4] px-5 py-3 text-black transition-all duration-500 hover:bg-red-600 hover:text-white"
            onClick={handleIncreaseEmployee}
          >
            Increase Employee
          </button>
          <button
            className="rounded-[10px] bg-[#c4c4c4] px-5 py-3 text-black transition-all duration-500 hover:bg-red-600 hover:text-white"
            onClick={handleReduceEmployee}
          >
            Decrease Employee
          </button>
        </div>
      </div>

      {/* <div>Token: {data || "nil"}</div> */}
    </div>
  );
}

export default App;
