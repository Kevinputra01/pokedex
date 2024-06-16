import { Typography } from "antd";

function Moves(props: any) {
  return (
    <div className="flex flex-wrap">
      {props?.props?.moves?.map((data: any) => (
        <Typography
          className={`text-black text-base font-normal rounded-full items-center justify-center bg-gray-200 flex mr-2 px-2 mb-2`}
        >
          {data.move.name}  
        </Typography>
      ))}
    </div>
  );
}

export default Moves;
