import React from "react";

interface Column {
  header: string | JSX.Element;
  accessor: string;
  width?: string;
  navigate?: boolean;
  type?: string;
  cellClassName?: string | ((row: any) => string);
  cellRenderer?: (row: any) => JSX.Element;
  icon1?: string;
  icon2?: string;
  onIcon1Click?: () => void;
  onIcon2Click?: () => void;
}

interface TableProps {
  data: Array<Record<string, any>>;
  columns: Column[];
  tableName?: string;
  showViewAll?: boolean;
  showDropDown?: boolean;
  enablePagination?: boolean;
  rowsPerPage?: number;
  tableHeight?: string;
  tableWidth?: string;
  icons?: {
    i1?: string;
    i2?: string;
    i3?: string;
  };
  bg_i1?: string;
  bg_i2?: string;
  bg_i3?: string;
  onActionClick?: any;
  editToggleModel?: (id?: string) => void;
  handleDelete?: (id: string) => void;
  LogToggleModel?: (id: string, state?: string) => void;
  handleViewAction?: () => void;
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  tableWidth = "full",
  icons,
  tableHeight = "400px",

  // handleViewAction,
}) => {
  // const handleView=(()=>{
  //  if(handleViewAction){
  //   handleViewAction()
  //  }
  // })

  return (
    <div
      className={` w-full overflow-x-scroll custom-scrollbar my-5 scrollbar-hide`}
    >
      <div className="w-full rounded-[24px] overflow-hidden  p-6 mr-6 shadow-tableShadow">
        <div
          className={` overflow-x-auto  `}
          style={{ maxHeight: tableHeight, minWidth: tableWidth }}
        >
          <table className="min-w-full  text-left border-separate border-spacing-y-1">
            <thead className="sticky top-0 bg-primary-40 min-h-10">
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="px-3 py-3 font-normal text-lg font-Outfit text-white whitespace-nowrap text-center"
                    style={{ minWidth: col.width }}
                  >
<div className="absolute inset-0 bg-neutral-30 opacity-10 pointer-events-none z-0" />
                    <div className="flex justify-center items-center relative z-10">
                      {col.header}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-transparent ">
              {data?.length > 0 ? (
                data?.map((row, rowIndex) => {
                  return (
                    <tr
                      key={rowIndex}
                      className="rounded-lg border-secondary-60 border  bg-transparent transition-all min-h-10 "
                    >
                      {columns?.map((col, colIndex) => {
                        return (
                          <td
                            key={colIndex}
                            className={`pr-4 pl-3 py-4 text-lg text-white text-center ${
                              typeof col.cellClassName === "function"
                                ? col.cellClassName(row)
                                : col.cellClassName || ""
                            } `}
                            style={{ width: col.width }}
                          >
                            {col.cellRenderer ? (
                              col.cellRenderer(row) // Use custom cellRenderer if defined
                            ) : col.accessor === "status" ? (
                              <span
                                className={`${
                                  row?.status?.toUpperCase() === "ACTIVE"
                                    ? "bg-secondary-20 px-6 "
                                    : "bg-secondary-30 px-5 "
                                } p-2 rounded-full text-white   text-sm`}
                              >
                                {row[col.accessor]}
                              </span>
                            ) : (
                              row[col.accessor]
                            )}
                          </td>
                        );
                      })}

                      {/* {icons &&( <td>
                        <div className="flex gap-4 pl-2">
                          
                          <button
                            key="i2"
                            onClick={() => onEditClick(row.id)}
                            className={`rounded-full h-6 w-6 flex items-center justify-center  ${bg_i2}  `}
                          >
                            <img
                              src={icons?.i2}
                              alt="Edit"
                              className="h-4 w-4"
                            />
                          </button>
                          <button
                            key="i3"
                            onClick={() => onDeleteClick(row.id)}
                            className={`rounded-full h-6 w-6 flex items-center justify-center  ${bg_i3}  `}
                          >
                            <img
                              src={icons?.i3}
                              alt="Edit"
                              className="h-4 w-4"
                            />
                          </button>
                          <button
                            key="i1"
                            onClick={() => onTickClick(row?.id ,rowIndex)}
                            className={`rounded-full h-6 w-6 flex items-center justify-center  ${bg_i1}  `}
                          >
                            <img
                              src={icons?.i1}
                              alt="Edit"
                              className="h-4 w-4"
                            />
                          </button>
                          {showDropDown && (
                          <div className="relative">
                            <button
                              type="button"
                              className="flex gap-2 justify-center items-center py-2 pr-4 pl-2 border border-secondary-145 rounded-xl text-[16px]"
                              onClick={() => handleToggle(rowIndex)}
                            >
                              <span className="w-[186px]">{selectedOptions[rowIndex]}</span>
                              <img src={ICONS.invoicedropdown} alt="dropdown" />
                            </button>
                            {openDropdownIndex === rowIndex && (
                              <div className="absolute mt-2 w-full bg-white border border-secondary-145 rounded-xl shadow-lg z-10">
                                {options.map((option, index) => (
                                  <button
                                    key={index}
                                    className="block w-full text-left px-4 py-2 text-[16px] font-normal hover:bg-secondary-60 rounded-xl"
                                    onClick={() => handleOptionSelect(rowIndex, option)}
                                  >
                                    {option}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        </div>
                      </td>)} */}
                      <td></td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="text-center text-lg text-gray-500"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination Controls */}
      {/* {enablePagination && (
        <div
          className={`flex justify-center ${
            currentPage < totalPages ? "" : ""
          } md:justify-end items-center mt-4`}
        >
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="text-black mx-3 my-2 disabled:opacity-50 flex items-center"
          >
            <img src={ICONS.leftArrowBlack} alt="" className="ml-2 w-5 h-5" />
            Previous
          </button>

          {currentPage > 2 && <span className="mx-2">...</span>}

          {[currentPage - 1, currentPage, currentPage + 1].map(
            (page, index) => {
              if (page < 1 || page > totalPages) return null;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={`text-black w-10 h-10 ${
                    page === currentPage
                      ? "border-2 rounded-lg border-secondary-80"
                      : ""
                  }`}
                >
                  {page}
                </button>
              );
            }
          )}

          {currentPage < totalPages - 1 && <span className="mx-2">...</span>}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="text-black mx-3 my-2 disabled:opacity-50 flex items-center"
          >
            Next{" "}
            <img src={ICONS.rightArrowBlack} alt="" className="ml-2 w-5 h-5" />
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Table;
