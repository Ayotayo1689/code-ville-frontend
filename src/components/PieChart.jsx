import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#FFCC82', '#5EFF5E', '#7777FF'];

const data = [
  { Year: '2016', userGain: 80000, userLoss: 300 },
  { Year: '2017', userGain: 45000, userLoss: 390 },
  { Year: '2019', userGain: 15000, userLoss: 500 },
];



const PieChartWithTooltip = () => {
  return (
    <PieChart width={300} height={250}>
     
      <Pie
       data={data}
       cx="50%"
       cy="50%"
       startAngle={0}
       endAngle={360}
       innerRadius={70}
       outerRadius={100}
       fill="#8884d8"
      //  paddingAngle={4}
       dataKey="userGain"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {/* <Tooltip content={renderTooltipContent} style={{border:"none"}}/> */}
    </PieChart>
  );
};

export default PieChartWithTooltip;
