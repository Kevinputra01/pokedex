import bulbasaurImg from "../../assets/image/bulbasaur.png"
import ivysaurImg from "../../assets/image/ivysaur.png"
import venusaurImg from "../../assets/image/venusaur.png"
import charmanderImg from "../../assets/image/charmander.png"
import charmeleonImg from "../../assets/image/charmeleon.png"
import charizardImg from "../../assets/image/charizard.png"
import squirtleImg from "../../assets/image/squirtle.png"
import wartortleImg from "../../assets/image/wartortle.png"
import blastoiseImg from "../../assets/image/blastoise.png"
import caterpieImg from "../../assets/image/caterpie.png"
import metapodImg from "../../assets/image/metapod.png"
import butterfreeImg from "../../assets/image/butterfree.png"
import weedleImg from "../../assets/image/weedle.png"
import kakunaImg from "../../assets/image/kakuna.png"
import beedrillImg from "../../assets/image/beedrill.png"
import pidgeyImg from "../../assets/image/pidgey.png"
import pidgeottoImg from "../../assets/image/pidgeotto.png"
import pidgeotImg from "../../assets/image/pidgeot.png"
import rattataImg from "../../assets/image/rattata.png"
import raticateImg from "../../assets/image/raticate.png"

const listPokemon = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    color: "bg-green-500",
    bgHex: "rgb(22 163 74)",
    colorText: "bg-green-400",
    imgUrl: bulbasaurImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    color: "bg-green-500",
    bgHex: "rgb(22 163 74)",
    colorText: "bg-green-400",
    imgUrl: ivysaurImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    color: "bg-green-500",
    bgHex: "rgb(22 163 74)",
    colorText: "bg-green-400",
    imgUrl: venusaurImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
    color: "bg-red-500",
    bgHex: "rgb(239 68 68)",
    colorText: "bg-red-400",
    imgUrl: charmanderImg,
    power: ["power 1"],
  },
  {
    name: "charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/",
    color: "bg-red-500",
    bgHex: "rgb(239 68 68)",
    colorText: "bg-red-400",
    imgUrl: charmeleonImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon/6/",
    color: "bg-red-500",
    bgHex: "rgb(239 68 68)",
    colorText: "bg-red-400",
    imgUrl: charizardImg,
    power: ["power 1", "power 2", "power 3"],
  },
  {
    name: "squirtle",
    url: "https://pokeapi.co/api/v2/pokemon/7/",
    color: "bg-blue-500",
    bgHex: "rgb(59 130 246)",
    colorText: "bg-blue-400",
    imgUrl: squirtleImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "wartortle",
    url: "https://pokeapi.co/api/v2/pokemon/8/",
    color: "bg-blue-500",
    bgHex: "rgb(59 130 246)",
    colorText: "bg-blue-400",
    imgUrl: wartortleImg,
    power: ["power 1"],
  },
  {
    name: "blastoise",
    url: "https://pokeapi.co/api/v2/pokemon/9/",
    color: "bg-blue-500",
    bgHex: "rgb(59 130 246)",
    colorText: "bg-blue-400",
    imgUrl: blastoiseImg,
    power: ["power 1"],
  },
  {
    name: "caterpie",
    url: "https://pokeapi.co/api/v2/pokemon/10/",
    color: "bg-orange-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-orange-400",
    imgUrl: caterpieImg,
    power: ["power 1"],
  },
  {
    name: "metapod",
    url: "https://pokeapi.co/api/v2/pokemon/11/",
    color: "bg-orange-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-orange-400",
    imgUrl: metapodImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "butterfree",
    url: "https://pokeapi.co/api/v2/pokemon/12/",
    color: "bg-orange-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-orange-400",
    imgUrl: butterfreeImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "weedle",
    url: "https://pokeapi.co/api/v2/pokemon/13/",
    color: "bg-orange-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-orange-400",
    imgUrl: weedleImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "kakuna",
    url: "https://pokeapi.co/api/v2/pokemon/14/",
    color: "bg-orange-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-orange-400",
    imgUrl: kakunaImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "beedrill",
    url: "https://pokeapi.co/api/v2/pokemon/15/",
    color: "bg-orange-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-orange-400",
    imgUrl: beedrillImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "pidgey",
    url: "https://pokeapi.co/api/v2/pokemon/16/",
    color: "bg-zinc-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-zinc-400",
    imgUrl: pidgeyImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "pidgeotto",
    url: "https://pokeapi.co/api/v2/pokemon/17/",
    color: "bg-zinc-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-zinc-400",
    imgUrl: pidgeottoImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "pidgeot",
    url: "https://pokeapi.co/api/v2/pokemon/18/",
    color: "bg-zinc-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-zinc-400",
    imgUrl: pidgeotImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "rattata",
    url: "https://pokeapi.co/api/v2/pokemon/19/",
    color: "bg-zinc-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-zinc-400",
    imgUrl: rattataImg,
    power: ["power 1", "power 2"],
  },
  {
    name: "raticate",
    url: "https://pokeapi.co/api/v2/pokemon/20/",
    color: "bg-zinc-500",
    bgHex: "rgb(113 113 122)",
    colorText: "bg-zinc-400",
    imgUrl: raticateImg,
    power: ["power 1", "power 2"],
  },
];

export default listPokemon;