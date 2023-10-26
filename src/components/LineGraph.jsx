// import React from 'react';
// import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';

// const LineGraph = ({ data }) => {
//   return (
//     <VictoryChart>
//       <VictoryLine data={data} x="year" y="userGain" style={{ data: { stroke: "red" } }} />
//       <VictoryLine data={data} x="year" y="userLoss" style={{ data: { stroke: "green" } }} />
//       <VictoryAxis tickValues={[2016, 2017, 2018, 2019, 2020, 2021]} />
//     </VictoryChart>
//   );
// };

// export default LineGraph;



import { VictoryLine, VictoryChart, VictoryTheme, VictoryTooltip } from 'victory';

const LineGraph = () => {
    const UserData = [
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLoss: 300,
        },
        {
          id: 2,
          year: 2017,
          userGain: 45000,
          userLoss: 390,
        },
        {
          id: 3,
          year: 2019,
          userGain: 15000,
          userLoss: 500,
        },
        {
          id: 4,
          year: 2020,
          userGain: 30000,
          userLoss: 700,
        },
        {
          id: 5,
          year: 2021,
          userGain: 5000,
          userLoss: 1300,
        },
      ];
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        data={UserData}
        x="year"
        y="userGain"
        labels={({ datum }) => `Year: ${datum.year}  Gain: ${datum.userGain}`}
        labelComponent={
          <VictoryTooltip
            style={{ fontSize: 7 }}
            cornerRadius={2}
            flyoutStyle={{ stroke: 'none', fill: '#f0f0f0' }}
          />
        }
      />
    </VictoryChart>
  );
};

export default LineGraph;

