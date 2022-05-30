import React, { useMemo } from "react";
import { useTable } from "react-table";
import styled from "styled-components";
const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      background: white;
      :last-child {
        border-right: 0;
      }
    }

    th {
      background: blue;
      border-bottom: 1px solid blue;

      color: black;
      fontweight: bold;
    }
  }
`;

const Table = () => {
  const data = useMemo(
    () => [
      {
        col0: "1",
        col1: "Mathematics",
        col2: "50",
        col3: "12",
        col4: "-3",
      },
      {
        col0: "2",
        col1: "Logical Ability",
        col2: "40",
        col3: "6",
        col4: "-1.5",
      },
      {
        col0: "3",
        col1: "Computer",
        col2: "10",
        col3: "8",
        col4: "-2",
      },
      {
        col0: "4",
        col1: "English",
        col2: "20",
        col3: "4",
        col4: "-1",
      },

      {
        col0: "",
        col1: "Total Questions",
        col2: "120",
        col3: "Max Marks",
        col4: "1000",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "NUMBER",
        accessor: "col0", // accessor is the "key" in the data
      },
      {
        Header: "SUBJECT",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "NUMBER OF QUESTION",
        accessor: "col2",
      },

      {
        Header: "MARKS EVERY RIGHT ANSWER",
        accessor: "col3",
      },

      {
        Header: "MARKS EVERY WRONG ANSWER",
        accessor: "col4",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <div
        style={{
          marginLeft: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Styles>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Styles>
      </div>
    </>
  );
};
export default Table;
