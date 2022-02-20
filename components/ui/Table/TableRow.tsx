type JobApp = {
  key: string;
  id: string;
  logo: string;
  jobPosition: string;
  lastUpdated: string;
  company: string;
  dateSaved: string;
  status: string;
};

const TableRow = (props: JobApp) => {
  return (
    <tr id={props.id}>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={props.logo} alt="" />
          </div>

          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">
              {props.jobPosition}
            </div>
            <div className="text-xs leading-5 text-gray-500">
              {props.lastUpdated}
            </div>
          </div>
        </div>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        {props.company}
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {props.dateSaved}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
          {props.status}
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
