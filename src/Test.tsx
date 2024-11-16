// import { createPopup } from "airpop"
import createPopup from "./popup/stores/popup.store"
import Temp from "./Temp"
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption, Description, Field, Label } from "@headlessui/react"
import { useState } from "react"

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export default function Test() {

  const open = createPopup(<Temp />)
  const [selectedPerson, setSelectedPerson] = useState<{ id: number; name: string }>(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return <div>
    <button onClick={open} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">openTemp</button>

    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam veritatis vero, aperiam quas placeat facere esse nihil quidem explicabo accusamus!
    <div className="bg-gray-300 ">
    <Field>
      <Label>Assignee:</Label>
      <Description>This person will have full access to this project.</Description>
      <Combobox value={selectedPerson} onChange={() => setSelectedPerson} onClose={() => setQuery('')}>
        {/* <ComboboxInput displayValue={(person) => person?.name} onChange={(event) => setQuery(event.target.value)} /> */}
        <ComboboxOptions anchor="bottom" className="border empty:invisible">
          {filteredPeople.map((person) => (
            <ComboboxOption key={person.id} value={person} className="data-[focus]:bg-blue-100">
              {person.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </Field>
    </div>

  </div>
}


