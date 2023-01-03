import React from "react";
import "./style.css";

function BillingDetails({ custId }) {
  return (
    <div>
      <table id={"billing-table"} style={{ width: "100%", fontSize: "10pt" }}>
        <tr>
          <th colSpan={2}>Reading Type</th>
          <th className="imp-exp" colSpan={2}>
            IMPORT
          </th>
          <th className="imp-exp" colSpan={2}>
            EXPORT
          </th>
        </tr>
        <tr>
          <th>Description</th>
          <th style={{ width: "60px" }}>Units</th>
          <th className="curr-heading">Current</th>
          <th className="prev-heading">Previous</th>
          <th className="curr-heading">Current</th>
          <th className="prev-heading">Previous</th>
        </tr>
        <tr>
          <td>Billing Date</td>
          <td></td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Billing Days</td>
          <td>days</td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Reading Date</td>
          <td></td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Reading Status</td>
          <td></td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Reading Method</td>
          <td></td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Readings</td>
          <td>kWh</td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Meter Ratio</td>
          <td></td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>CT Ratio</td>
          <td></td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Meter Multiplier</td>
          <td></td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Readings Calculated</td>
          <td>kWh</td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Consumption</td>
          <td>kWh</td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Consumption Change</td>
          <td>%</td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Tariff Type</td>
          <td></td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Tariff Rate</td>
          <td>$ / kWh</td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Billed Amount</td>
          <td>$</td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
        <tr>
          <td>Average Bill/day</td>
          <td>$ / day</td>
          <td className="curr"></td>
          <td className="prev"></td>
          <td className="curr"></td>
          <td className="prev"></td>
        </tr>
      </table>
    </div>
  );
}

export default BillingDetails;
