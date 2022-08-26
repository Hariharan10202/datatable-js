console.log("starts....");

const getTodoItems = async () => {
  try {
    const res = await axios.get(
      `https://stage-api.freightify.in/v1/prices?mode=FCL&originPort=INNSA&destinationPort=DEHAM&departureDate=2022-08-30&containers=1X40GPX25000XKGs&containers=1X20GPX10000XKGs`,
      {
        headers: {
          Authorization:
            "Bearer " +
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5NTVhMTI1NWNmZWNiMjNlMTkyN2QwYzUwODJjMGYxODRmMjcyZjZjNzk3OGQ5NjdkZmU0YjRjNDU2OWY1YzQwNDFiYjFiNDYxM2IxOWYyIn0.eyJhdWQiOiIxMjUiLCJqdGkiOiI4OTU1YTEyNTVjZmVjYjIzZTE5MjdkMGM1MDgyYzBmMTg0ZjI3MmY2Yzc5NzhkOTY3ZGZlNGI0YzQ1NjlmNWM0MDQxYmIxYjQ2MTNiMTlmMiIsImlhdCI6MTY2MTQwNTk2OSwibmJmIjoxNjYxNDA1OTY5LCJleHAiOjE2NjQwMzQyNTcsInN1YiI6IjRiZGMzYmUwLWFjOWUtMTFlOC04ZDNiLWFiZWY0MDlmNTg1MyIsInNjb3BlcyI6W10sInBlcm1pc3Npb25zIjp7Ik1ZX1JBVEVTIjoiMTExMSIsIkxPQ0FUSU9OUyI6IjExMTEiLCJJTlNUQU5UX1JBVEVTIjoiMTExMSIsIklOU1RBTlRfUkFURVNfRkNMIjoiMTExMSIsIklOU1RBTlRfUkFURVNfTENMIjoiMTExMSIsIklOU1RBTlRfUkFURVNfQUlSIjoiMTExMSIsIlNISVBNRU5UUyI6IjExMTEiLCJSQVRFUyI6IjExMTEifSwiZW1haWwiOiJmd2RhZG1uMDFAZ21haWwuY29tIiwidHJpYWxFeHBpcnkiOiIyMDIzLTAzLTI2IDEwOjM2OjIzIiwiZG9tYWluIjoiZndkYS5zdGFnaW5nc2hpcC5mcmVpZ2h0YnJvLmNvbSIsInZlbmRvcklkIjoxMDgsImFwaUtleSI6Im5oamNnVGh2N0E2UnpyRTU0MWtPeDlMZnM2NkdSaGJHNWR3c09uaFEiLCJ1c2VyUm9sZSI6IkFETUlOIiwidXNlclJvbGVUeXBlIjoiRk9SV0FSREVSIiwic3VidmVuZG9ySWQiOjAsImVudmlyb25tZW50IjoiU2FuZGJveCIsInVzZXJDb21wYW55IjoiYWYwMzYxNDAtYWM2MC0xMWU4LWFkODUtYmJhZjQ2YTdhMTdmIn0.axbrVQORdpYil67Ww3VAJJnmdHIos9pQkVUVLBRbQ0lOgKPdfl_pgP1w2Kk5nBiMjqHx2jAuXclcSZkwAdSrJzceBQgAnVyEc6KuJ1rAm9P_6RdEHnUvboaUEdAjpF7GYiXF3kQfrjaQqrXc_5lvozw4BK-ZncrZ668AB1nm3lfZRPcv08t_3XZ7jCLlUt6Nv1aYKUWelCDoxEqM-v7G8KUNHuGQPWEI_gU8VoldePaSkFJKwMQNbuYbIO97lV7nLE-iCa9Ut7kg0JvsILhFPXumimAnzDfL4Di1NOy9gdVYCGNwe-w1co8PehJpq4trkOr9_OTgJGSyASOsdSZaOIa9UKX003lo0_oXuNxDKkg7fl0v2NhGJALi1j137woiGXJkfwOdsnnEjv9994i65AYexDUPV7VCN2u_DG2j3_BMC5S19ZWWZeawmTZfT2C7oHjigmJq-enfMH0Hx2XlJsFJxnm46mZ_DKOpzJndLIFg16VhfeJ2N6R6UZYf-7VDeKx0x8SkvnHb76TFoLYMOvEdIBh51llEMrVwHDy2M9pNPcqjJmtluduhIrAoSDdReqFr6q6jVujuco81FNDXTO9XFZCkdmbfYTTqs48R9kyxaK2u9X8KHR2JUB8r4-4771YcJyntQtaR1e9UtXVZp0eCODH6nJ9-LKKuMWdJf6c",
          "x-api-key": "nhjcgThv7A6RzrE541kOx9Lfs66GRhbG5dwsOnhQ",
        },
      }
    );

    // Destructuring starts

    console.log(res.data.offers);

    if (res.data.offers) {
      const rateData = res.data.offers;
      console.log(rateData);

      let newRatesArray = [];

      console.log("Destructuring starts...");
      console.time("time taken");

      rateData.forEach((rate, index) => {
        const { carrierName } = rate.productOffer;
        const { referenceId: id } = rate.productOffer.offerType;
        const { serviceType } = rate.productPrice;
        const { transitTimeInDays } = rate.productPrice;

        let sailingDate = "-";

        if (rate.productPrice.routeSchedule.length !== 0) {
          const length = rate.productPrice.routeSchedule.length - 1;
          console.log(length);
          if (rate.productPrice.routeSchedule[length].sailingDate) {
            sailingDate = rate.productPrice.routeSchedule[length]?.sailingDate;
            // console.log(sailingDate);
          }
        }

        const { commodity } = rate.productPrice;
        const { totalUSDAmount } = rate.productPrice;

        let chargeArray = [];
        let container20GP = 0;
        let container40GP = 0;
        let container40HC = 0;

        rate.productPrice.charges.forEach((charge) => {
          switch (charge.containerType) {
            case "20GP":
              container20GP += Number(charge.amount);
              chargeArray.push(charge);
              break;
            case "40GP":
              container40GP += Number(charge.amount);
              chargeArray.push(charge);
              break;
            case "40HC":
              container40HC += Number(charge.amount);
              chargeArray.push(charge);
              break;
            default:
              break;
          }
        });

        let newRatesObj = {};

        newRatesObj.id = id || "-";
        newRatesObj.carrierName = carrierName;
        newRatesObj.serviceType = serviceType;
        newRatesObj.transitTimeInDays =
          transitTimeInDays === "" ? "-" : transitTimeInDays;
        newRatesObj.commodity = commodity.split(" ")[0];
        newRatesObj.sailingDate = sailingDate;
        newRatesObj.totalUSDAmount = totalUSDAmount;
        newRatesObj.charges = chargeArray;
        newRatesObj.container20GP = container20GP;
        newRatesObj.container40GP = container40GP;
        newRatesObj.container40HC = container40HC;

        // console.log(newRatesObj);

        newRatesArray.push(newRatesObj);
      });
      console.timeEnd("time taken");
      console.log(newRatesArray);
      console.log("Ends...");

      const tableBody = document.querySelector(".tableBody");

      tableBody.innerHTML = "";

      newRatesArray.forEach((rate, index) => {
        // console.log(rate);
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");

        // const classNames = ["liner", "sailingDate","transitDays","freeDays","cargoType","equipment1","equipment2"]

        td1.classList = "liner";
        td2.classList = "sailingDate";
        td3.classList = "transitDays";
        td4.classList = "freeDays";
        td5.classList = "cargoType";
        td6.classList = "equipment1";
        td7.classList = "equipment2";
        td8.classList = "totalUSD";

        console.log(tr);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);

        td1.textContent = rate.carrierName;
        td2.textContent = rate.sailingDate;
        td3.textContent = rate.transitTimeInDays;
        td4.textContent = "-";
        td5.textContent = rate.commodity;
        td6.textContent = rate.container40GP;
        td7.textContent = rate.container40GP;
        td8.textContent = rate.totalUSDAmount;

        // return `<tr key=${index}>
        //   <td>${rate.carrierName}</td>
        //   <td>${rate.sailingDate}</td>
        //   <td>${rate.transitTimeInDays}</td>
        //   <td>${"-"}</td>
        //   <td>${rate.commodity}</td>
        //   <td>${rate.container20GP}</td>
        //   <td>${rate.container40GP}</td>
        //   <td>${rate.totalUSDAmount}</td>
        // </tr>`;

        tableBody.appendChild(tr);
      });

      console.log("Destructuring ends...");

      // Destructuring ends
    }
  } catch (error) {
    console.log(error);
  }
};

getTodoItems();
