import className from "classnames";
import { useState } from "react";
import "./ComparisonTable.css";
import { Checkmark } from "/src/Components/Checkmark";

export function ComparisonTable() {
  const [showComparisonTable, setShowComparisonTable] = useState(false);
  const Check = () => (
    <Checkmark color="#3AC1C1" style={{ height: "24px" }}></Checkmark>
  );

  return (
    <>
      <button
        className="ComparisonTable__ToggleButton"
        onClick={() => setShowComparisonTable(!showComparisonTable)}
      >
        Sammenlign bedriftsabonnementer
      </button>
      <h2
        className={className("ComparisonTable__Heading", {
          "ComparisonTable__Heading--Shown": showComparisonTable,
        })}
      >
        Sammenlign de ulike bedriftsabonnementene her
      </h2>
      <table
        className={className("ComparisonTable__Table", {
          "ComparisonTable__Table--Shown": showComparisonTable,
        })}
      >
        <tbody>
          <tr>
            <td></td>
            <td>Social-pakken</td>
            <td>Strategy-pakken</td>
            <td>Impact-pakken</td>
          </tr>
          <tr>
            <th>Innholdsproduksjon til sosiale medier</th>
            <td>
              <Check />
            </td>
            <td>
              <Check />
            </td>
            <td>
              <Check />
            </td>
          </tr>
          <tr>
            <th>Foto, grafikk og enkel videoproduksjon</th>
            <td>
              <Check />
            </td>
            <td>
              <Check />
            </td>
            <td>
              <Check />
            </td>
          </tr>

          <tr>
            <th>Ingen bindingstid</th>
            <td>
              <Check />
            </td>
            <td>
              <Check />
            </td>
            <td>
              <Check />
            </td>
          </tr>
          <tr>
            <th>Antall dager med innholdsproduksjon</th>
            <td>1 dag med innholdsproduksjon</td>
            <td>2 dager med innholdsproduksjon</td>
            <td>2-3 dager med innholdsproduksjon</td>
          </tr>
          <tr>
            <th>Antall fotografier</th>
            <td>15-25 stk. fotografier</td>
            <td>25-40 stk. fotografier</td>
            <td>35-50 stk. fotografier</td>
          </tr>
          <tr>
            <th>Antall grafiske bilder</th>
            <td>5-10 stk. grafiske bilder</td>
            <td>8-15 stk. grafiske bilder</td>
            <td>10-20 stk. grafiske bilder</td>
          </tr>
          <tr>
            <th>Antall stories</th>
            <td>5 stories</td>
            <td>12 stories</td>
            <td> stories</td>
          </tr>
          <tr>
            <th>Antall video/reels</th>
            <td>1 video/reels</td>
            <td>2 video/reels</td>
            <td>3 video/reels</td>
          </tr>
          <tr>
            <th>Planlegging og publisering i deres kanaler</th>
            <td></td>
            <td>
              <Check />
            </td>
            <td>
              <Check />
            </td>
          </tr>
          <tr>
            <th>Antall innlegg i feed</th>
            <td></td>
            <td>16 innlegg</td>
            <td>25 innlegg</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
