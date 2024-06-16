import { Progress, Typography } from "antd";

function formatProgressValue(progress: number) {
  return () => `${progress}`;
}

function BaseStats(props: any) {
  return (
    <div className="flex flex-col">
      {props?.props.stats.map((item: any) => (
        <div className="flex flex-row grid-rows-2 gap-2">
          <Typography className="w-32">{item.stat.name}</Typography>
          <Progress
            format={formatProgressValue(item.base_stat)}
            percent={item.base_stat}
            status="normal"
          />
        </div>
      ))}
    </div>
  );
}

export default BaseStats;
