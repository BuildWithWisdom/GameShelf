import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Form, useNavigate, useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
export default function Filter() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sd, setSd] = useState(undefined);
  const [ed, setEd] = useState(undefined);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

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
  function updateSearch(value) {
    const p = new URLSearchParams(searchParams);
    p.set("search", value);
    p.set("page", "1");
    navigate("?" + p.toString());
  }
  const [searchText, setSearchText] = useState("");
  return (
    <div className="border border-gray-200 rounded-md p-6 mb-10 shadow-sm">
      <h2 className="font-sans pb-4 font-bold">Filters</h2>
      <Form
        method="get"
        action="/"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(searchText);
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
                updateSearch(searchText);
              }}
              placeholder="Search by title, developers, or publishers"
            />
          </div>
          <div className="flex max-[464px]:flex-col justify-between max-w-200 items-center gap-4">
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
      </Form>
    </div>
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

export function Rating() {
  return (
    <div className="grid w-full max-w-100 items-center gap-3">
      <Label htmlFor="email">metacritic rating</Label>
      <Select>
        <SelectTrigger className="w-full cursor-pointer">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
