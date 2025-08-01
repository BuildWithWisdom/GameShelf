import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Form, useNavigate, useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
export default function Filter({games, count}) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sd, setSd] = useState(undefined);
  const [ed, setEd] = useState(undefined);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [searchText, setSearchText] = useState("");
const [checkedPlatforms, setCheckedPlatforms] = useState([])
const [checkedGenres, setCheckedGenres] = useState([])

  // Handles the date range selection and updates the URL.
  const handleRange = () => {
    if (!sd || !ed) return;
    const params = new URLSearchParams(searchParams);
    const search = params.get("search");
    params.set(
      "dates",
      `${sd.toISOString().slice(0, 10)},${ed.toISOString().slice(0, 10)}`,
    );
    params.set("page", "1");
    if (search) params.set("search", search);
    navigate(`?${params.toString()}`);
  };
  useEffect(handleRange, [sd, ed]);

  // Updates the URL with the search query.
  function updateSearch(value) {
    const p = new URLSearchParams(searchParams);
    p.set("search", value);
    p.set("page", "1");
    navigate("?" + p.toString());
  }
  function updatePlatform() {
    const params = new URLSearchParams(searchParams)
    const platforms = checkedPlatforms.join(",")
    const search = params.get("search");
    const dates = params.get("dates")
    params.set("page", "1");
    // params.set("platforms", platforms)
    if (search) params.set("search", search);
    if (dates) params.set("dates", dates);
    if(platforms) params.set("platforms", platforms)
      else {
          params.delete("platforms");
      }
    navigate(`?${params.toString()}`);
  }
  useEffect(updatePlatform, [checkedPlatforms])

  function updateGenres() {
    const params = new URLSearchParams(searchParams)
    const platforms = checkedPlatforms.join(",")
    const genres = checkedGenres.join(",")
    const search = params.get("search");
    const dates = params.get("dates")
    params.set("page", "1");
    // params.set("platforms", platforms)
    if (search) params.set("search", search);
    if (dates) params.set("dates", dates);
    if(platforms) params.set("platforms", platforms)
    else {
          params.delete("platforms");
      }
    if(genres) params.set("genres", genres)
    else {
          params.delete("genres");
    }
    navigate(`?${params.toString()}`);
  }
  useEffect(updateGenres, [checkedGenres])
  return (
    <>
    <div className="border border-gray-200 rounded-md p-6 mb-10 shadow-sm">
      <h2 className="font-sans pb-4 font-bold 2xl:text-lg">Filters</h2>
      <Form
        method="get"
        action="/"
        onSubmit={(e) => {
          e.preventDefault();
          updateSearch(searchText);
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="grid w-full max-w-200 items-center gap-3">
            <Label htmlFor="search">Search games</Label>
            <Input
              className="w-full"
              type="text"
              id="search"
              name="search"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search by title"
            />
          </div>
          <div className="flex max-[464px]:flex-col justify-between max-w-200 items-center gap-4">
            {/* Release date filter components */}
            <ReleaseDate
              labelText="Start"
              date={sd}
              setDate={setSd}
              open={openStart}
              setOpen={setOpenStart}
            />
            <ReleaseDate
              labelText="End"
              date={ed}
              setDate={setEd}
              open={openEnd}
              setOpen={setOpenEnd}
            />
          </div>
        </div>

        <div>
          <Advanced 
          checkedPlatforms={checkedPlatforms}
          setCheckedPlatforms={setCheckedPlatforms}
          checkedGenres={checkedGenres}
          setCheckedGenres={setCheckedGenres}
          games={games}/>
        </div>
      </Form>

    </div>
      <h4 className="pb-4 text-sm text-gray-400">{count} games found</h4>
      </>
  );
}

export function ReleaseDate({ labelText, date, open, setOpen, setDate }) {
  //   const acceptedDate = date.toString().
  return (
    <div className="grid w-full max-w-100 items-center gap-3">
      <Label htmlFor="date" className="px-1">
        {labelText}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal cursor-pointer"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(d) => {
              setDate(d);
              setOpen(false); // close popover
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function Advanced({games, checkedPlatforms, setCheckedPlatforms, checkedGenres, setCheckedGenres}) {
  const platforms = [
  { id: 4,  slug: 'pc',           name: 'PC' },
  { id: 18, slug: 'playstation4', name: 'PlayStation 4' },
  { id: 1,  slug: 'xbox-one',     name: 'Xbox One' },
  { id: 7,  slug: 'nintendo-switch', name: 'Nintendo Switch' },
  { id: 3,  slug: 'ios',          name: 'iOS' },
  { id: 21, slug: 'android',      name: 'Android' },
  { id: 8,  slug: 'playstation3', name: 'PlayStation 3' },
  { id: 14, slug: 'xbox360',      name: 'Xbox 360' },
  { id: 6,  slug: 'linux',        name: 'Linux' },
  { id: 9,  slug: 'psp',          name: 'PlayStation Portable' },
  { id: 13, slug: 'ps-vita',      name: 'PlayStation Vita' },
  { id: 19, slug: 'wii-u',        name: 'Wii U' },
  { id: 5,  slug: 'macos',        name: 'macOS' },
  { id: 11, slug: 'wii',          name: 'Wii' },
  { id: 15, slug: 'nintendo-3ds', name: 'Nintendo 3DS' },
  { id: 16, slug: 'nintendo-ds',  name: 'Nintendo DS' },
  { id: 10, slug: 'gamecube',     name: 'GameCube' },
  { id: 12, slug: 'xbox',         name: 'Xbox' },
  { id: 20, slug: 'dreamcast',    name: 'Dreamcast' },
  { id: 22, slug: 'game-boy-advance', name: 'Game Boy Advance' },
  { id: 24, slug: 'playstation2', name: 'PlayStation 2' },
  { id: 25, slug: 'playstation',  name: 'PlayStation' },
  { id: 26, slug: 'game-boy-color', name: 'Game Boy Color' },
  { id: 27, slug: 'game-boy',     name: 'Game Boy' },
  { id: 28, slug: 'sega-saturn',  name: 'SEGA Saturn' },
  { id: 29, slug: 'sega-genesis', name: 'SEGA Genesis' },
  { id: 30, slug: 'sega-cd',      name: 'SEGA CD' },
  { id: 31, slug: 'sega-32x',     name: 'SEGA 32X' },
  { id: 32, slug: 'sega-master-system', name: 'SEGA Master System' },
  { id: 33, slug: 'commodore-amiga', name: 'Commodore Amiga' },
  { id: 34, slug: 'atari-st',     name: 'Atari ST' },
  { id: 35, slug: 'atari-lynx',   name: 'Atari Lynx' },
  { id: 36, slug: 'atari-jaguar', name: 'Atari Jaguar' },
  { id: 37, slug: 'atari-7800',   name: 'Atari 7800' },
  { id: 38, slug: 'atari-5200',   name: 'Atari 5200' },
  { id: 39, slug: 'atari-2600',   name: 'Atari 2600' },
  { id: 40, slug: 'neo-geo',      name: 'Neo Geo' },
  { id: 41, slug: 'turbo-grafx-16', name: 'TurboGrafx-16' },
  { id: 42, slug: 'game-gear',    name: 'Game Gear' },
  { id: 43, slug: 'sega-pico',    name: 'SEGA Pico' },
  { id: 44, slug: '3do',          name: '3DO' },
  { id: 45, slug: 'jaguar-cd',    name: 'Jaguar CD' },
  { id: 46, slug: 'philips-cd-i', name: 'Philips CD-i' },
  { id: 47, slug: 'gizmondo',     name: 'Gizmondo' },
  { id: 48, slug: 'n-gage',       name: 'N-Gage' },
  { id: 49, slug: 'ngage',        name: 'N-Gage (duplicate)' },
  { id: 50, slug: 'web',          name: 'Web Browser' }
];
const genres = [
  { id: 4,  slug: "action",           name: "Action" },
  { id: 51, slug: "indie",            name: "Indie" },
  { id: 3,  slug: "adventure",        name: "Adventure" },
  { id: 5,  slug: "rpg",              name: "Role-playing (RPG)" },
  { id: 10, slug: "strategy",         name: "Strategy" },
  { id: 2,  slug: "shooter",          name: "Shooter" },
  { id: 40, slug: "casual",           name: "Casual" },
  { id: 14, slug: "simulation",       name: "Simulation" },
  { id: 7,  slug: "puzzle",           name: "Puzzle" },
  { id: 11, slug: "arcade",           name: "Arcade" },
  { id: 83, slug: "platformer",       name: "Platform" },
  { id: 1,  slug: "racing",           name: "Racing" },
  { id: 59, slug: "massively-multiplayer", name: "Massively Multiplayer" },
  { id: 15, slug: "sports",           name: "Sports" },
  { id: 19, slug: "fighting",         name: "Fighting" },
  { id: 6,  slug: "family",           name: "Family" },
  { id: 30, slug: "educational",      name: "Educational" },
  { id: 34, slug: "card",             name: "Card" }
];

  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Advanced Filters</AccordionTrigger>
    <AccordionContent>
      <div>
        <h4 className="text-sm pb-2">Platforms</h4>
        <div className="flex items-center gap-3 flex-wrap">
          {platforms.map(platform => {
            return <div key={platform.id} className="flex items-center gap-2">
            <Checkbox 
            id={platform.name} 
            checked={checkedPlatforms.includes(platform.id)}
            onCheckedChange={() => {
              setCheckedPlatforms(prev => {
                if(prev.includes(platform.id)) {
                  return prev.filter(p => p !== platform.id)
                }
                else {return [...prev, platform.id]}
              })
            }}
            />
            <label className="text-[13px]" htmlFor={platform.name}>{platform.name}</label>
          </div>
          })}
        </div>
      </div>

      <div className="pt-5">
        <h4 className="text-sm pb-2">Genres</h4>
        <div className="flex items-center gap-3 flex-wrap">
          {genres.map(genre => {
            return <div key={genre.id} className="flex items-center gap-2">
            <Checkbox 
            id={genre.name} 
            checked={checkedGenres.includes(genre.id)}
            onCheckedChange={() => {
              setCheckedGenres(prev => {
                if(prev.includes(genre.id)) {
                  return prev.filter(g => g !== genre.id)
                }
                else {return [...prev, genre.id]}
              })
            }}
            />
            <label className="text-[13px]" htmlFor={genre.name}>{genre.name}</label>
          </div>
          })}
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
  );
}
