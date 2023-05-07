function TasksTable() {
    return (
        <>
            <div className="flex justify-center items-center mx-auto w-[700px] overflow-x-auto mt-2 rounded-md">
                <table className="w-full text-sm text-left text-white ">
                    <thead className="text-sm uppercase table-head-img border-yellow-400 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tasks
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Times
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-[#b3b2b1] ">
                            <th scope="row" className="px-6 py-4 whitespace-nowrap text-black font-medium">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4 text-black font-semibold">Silver</td>
                        </tr>
                        <tr className="border-b bg-[#b3b2b1] ">
                            <th scope="row" className="px-6 py-4  whitespace-nowrap text-black font-medium ">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4 text-black font-semibold">White</td>
                        </tr>
                        <tr className="bg-[#b3b2b1]">
                            <th scope="row" className="px-6 py-4 whitespace-nowrap font-medium text-black">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4 text-black font-semibold">Black</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TasksTable;
