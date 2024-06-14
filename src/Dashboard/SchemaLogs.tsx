import plan1 from "../assets/plan1.png";

const SchemaLogs = () => {
    const testData = [1, 2];
    return (
        <div className="w-full h-max flex flex-col gap-8 text-[rgba(255,255,255,0.8)] mb-16">
            <div className="w-full h-max flex flex-col bg-[#041f2c] border border-gray-600 rounded">
                <div className="w-full h-16 phone:h-max phone:py-4 flex phone:flex-col phone:gap-4 phone:items-start items-center justify-between px-4 font-semibold text-lg border-b border-b-gray-600">
                    <p>All The Schemas</p>
                </div>
                <div className="w-max h-max flex flex-col rounded">
                    <div className="w-[100%] h-20 flex justify-between">
                        <div className="w-max h-max flex items-center gap-1 font-semibold text-sm py-2 px-4">
                            <p>Show</p>
                            <select
                                name=""
                                id=""
                                className="w-16 rounded h-10 outline-none bg-none text-black"
                            >
                                <option value="10">10</option>
                                <option value="10">20</option>
                                <option value="10">30</option>
                            </select>
                            <p>Entries</p>
                        </div>
                        <div className="w-max h-max flex items-center gap-1 font-semibold text-sm py-2 px-4">
                            <p>Search</p>
                            <input
                                type="search"
                                className="w-32 h-7 text-xs pl-2 rounded outline-none bg-inherit border border-gray-600"
                            />
                        </div>
                    </div>
                    <div className="w-full h-12 bg-[#1a455c] flex items-center rounded rounded-b-none px-2 border border-gray-600 text-xs font-bold">
                        <div className="w-32 h-max">ICON</div>
                        <div className="w-36 h-max">SCHEMA</div>
                        <div className="w-32 h-max">ROI</div>
                        <div className="w-36 h-max">PROFIT</div>
                        <div className="w-44 h-max">PERIOD REMAINING</div>
                        <div className="w-44 h-max">CAPITAL BALANCE</div>
                        <div className="w-40 h-max">TIMELINE</div>
                    </div>
                    <div className="w-full h-max flex flex-col rounded-b border-b border-x border-x-gray-600 border-b-gray-600">
                        {testData.length < 1 ? (
                            <div className="w-full h-20 flex items-center justify-center">
                                <p>No Schema Yet</p>
                            </div>
                        ) : (
                            testData.map((index) => (
                                <>
                                    <div
                                        className="w-full h-20 bg-[#003049] hover:bg-[#1c3247] flex items-center rounded-b text-sm text-white font-bold px-2 "
                                        key={index}
                                    >
                                        <div className="w-32 h-max flex gap-4">
                                            <img
                                                src={plan1}
                                                alt=""
                                                className="w-10"
                                            />
                                        </div>
                                        <div className="w-36 h-max">
                                            Starter Plan
                                        </div>
                                        <div className="w-32 h-max">
                                            <p className="w-max h-max px-4 py-[2px] bg-[#e73667] rounded-full text-xs">
                                                Daily $429
                                            </p>
                                        </div>
                                        <div className="w-36 h-max text-[rgb(42,157,143)]">
                                            $429
                                        </div>
                                        <div className="w-44 h-max">7 Days</div>
                                        <div className="w-44 h-max">
                                            {" "}
                                            <p className="w-max h-max px-3 py-[2px] bg-[#ffc300] text-black rounded-full text-xs">
                                                $10000
                                            </p>
                                        </div>
                                        <div className="w-40 h-max">7 Days</div>
                                    </div>
                                </>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchemaLogs;
