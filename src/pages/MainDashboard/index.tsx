import { useState } from "react";
import axios from "axios";
import { Card, Typography, Modal, Tabs } from "antd";
import type { TabsProps } from "antd";
import listPokemon from "./pokemon";
import About from "./about";
import BaseStats from "./baseStats";
import Moves from "./moves";

function MainDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataPokemon, setDataPokemon] = useState<{
    bgPokemon: string;
    textPokemon: string;
    imgPokemon: string;
  }>({
    bgPokemon: "",
    textPokemon: "",
    imgPokemon: "",
  });
  const [pokemon, setPokemon] = useState<{}>({});

  const showModal = (data: any) => {
    setDataPokemon({
      bgPokemon: data.bgHex,
      textPokemon: data.colorText,
      imgPokemon: data.imgUrl,
    });
    axios.get(data.url).then((res) => {
      setPokemon(res.data);
      setIsModalOpen(true);
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "About",
      children: <About props={pokemon} />,
    },
    {
      key: "2",
      label: "Base State",
      children: <BaseStats props={pokemon} />,
    },
    {
      key: "3",
      label: "Evolution",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Moves",
      children: <Moves props={pokemon} />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="mx-9 w-full">
        <Typography className="ml-5 text-4xl font-bold mb-5">Pokedex</Typography>
        <div className="flex flex-wrap justify-center">
          {listPokemon.map((item: any) => (
            <Card
              className={`${item.color} m-2`}
              style={{ width: 300 }}
              onClick={() => showModal(item)}
            >
              <div className="flex flex-row justify-between">
                <div>
                  <Typography className="text-white font-bold text-xl">
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </Typography>
                  {item.power?.map((data: any) => (
                    <p
                      className={`text-white text-base font-[500] rounded-full flex items-center justify-center ${item.colorText} mt-1`}
                    >
                      {data}
                    </p>
                  ))}
                </div>
                <div className="flex h-full">
                  <img
                    src={item.imgUrl}
                    alt="item.name"
                    style={{ maxHeight: "150px", maxWidth: "150px" }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Modal
        open={isModalOpen}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        closable={true}
        onCancel={() => setIsModalOpen(false)}
        styles={{
          content: { backgroundColor: `${dataPokemon?.bgPokemon}` },
        }}
      >
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-col">
                <Typography className="text-xl font-bold text-white mb-2">
                  {pokemon?.name}
                </Typography>
                <div className="flex flex-row">
                  {pokemon?.types?.map((data: any) => (
                    <p
                      className={`text-white text-base font-[500] rounded-full items-center justify-center ${dataPokemon.textPokemon} flex mr-2 px-2`}
                    >
                      {data.type.name}
                    </p>
                  ))}
                </div>
              </div>
              <Typography className="text-base font-bold text-white">
                #{pokemon?.order}
              </Typography>
            </div>
            <div className="flex w-full justify-center">
              <img
                src={dataPokemon.imgPokemon}
                alt="test"
                className="z-10"
                style={{ maxHeight: "300px", maxWidth: "300px" }}
              />
            </div>
            <div className="bg-white rounded-lg p-4 -mt-9 pt-9">
              <Tabs defaultActiveKey="1" items={items} centered />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MainDashboard;
