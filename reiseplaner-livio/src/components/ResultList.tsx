import { useState } from "react";

type Props = {
  items: string[];
  destination: string;
};

export function ResultList({ items, destination }: Props) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  function toggleItem(item: string) {
    setCheckedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  }

  const sortedItems = [
    ...items.filter(item => checkedItems.includes(item)),
    ...items.filter(item => !checkedItems.includes(item)),
  ];

  return (
    <div>
      <h2>Deine Packliste für {destination}</h2>
      <p style={{color: "#808080"}}>{checkedItems.length} von {items.length} Artikel</p>
      <ul className="packing-list">
        {sortedItems.map((item, index) => {
          const isChecked = checkedItems.includes(item);

          return (
            <li key={index}>
              <label className={`packing-item ${isChecked ? "checked" : ""}`}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(item)}
                />
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}