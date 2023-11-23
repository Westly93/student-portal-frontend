import React from "react";

const Dashboard = () => {
  return (
    <div className="overflow-x-auto max-w-4xl mx-auto mt-5">
      <div className="flex justify-between py-3">
        <h1 className="text-2xl font-semibold py-2">Bank transfers</h1>
        <button className="btn btn-outline btn-success btn-sm">
          Upload Proof of paynment
        </button>
      </div>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Date</th>
            <th>Source Bank</th>
            <th>Destination Bank</th>
            <th>Reference</th>
            <th>Amount</th>
            <th>Date Submitted</th>
            <th>Status</th>
            <th>Proof</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>2022-03-28</th>
            <td>Zb Bank</td>
            <td>CBZ Bank</td>
            <td>testing</td>
            <td>1.00</td>
            <td>12/16/2020</td>
            <td>pending</td>
            <td>
              <button className="btn btn-outline btn-error btn-xs">
                download
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold text-left">Your Programs</h1>
      </div>
    </div>
  );
};

export default Dashboard;
