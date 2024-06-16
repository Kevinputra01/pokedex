import { Typography } from "antd";

function About(props: any) {
  return (
    <div className="flex flex-row ml-5">
      <div className="mr-5">
        <Typography className="text-gray-400 mb-1">Species</Typography>
        <Typography className="text-gray-400 mb-1">Height</Typography>
        <Typography className="text-gray-400 mb-1">Weight</Typography>
        <Typography className="text-gray-400 mb-1">Abilities</Typography>
      </div>
      <div>
        <Typography className="text-black mb-1">{props?.props?.species.name}</Typography>
        <Typography className="text-black mb-1">{props?.props?.height}</Typography>
        <Typography className="text-black mb-1">{props?.props?.weight}</Typography>
        <Typography className="text-black mb-1">{props?.props?.abilities.map((item: any) => item.ability.name).join(", ")}</Typography>
      </div>
    </div>
  );
}

export default About;
