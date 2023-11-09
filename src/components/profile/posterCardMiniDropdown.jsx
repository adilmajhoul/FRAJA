import { Dropdown } from "flowbite-react";
import PosterCardMoreButton from "../posterCard/posterCardMoreButton";

export default function PosterCardMiniDropdown() {
  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => (
        <div>
          <PosterCardMoreButton />
        </div>
      )}
    >
      {/* ------------------ */}
      <Dropdown.Item>
        <Dropdown
          label=""
          dismissOnClick={false}
          renderTrigger={() => (
            <div>
              <Dropdown.Item>add to collection > </Dropdown.Item>
            </div>
          )}
          placement="right"
        >
          <Dropdown.Item>collection 1</Dropdown.Item>
          <Dropdown.Item>collection 2</Dropdown.Item>
          <Dropdown.Item>collection 3</Dropdown.Item>
        </Dropdown>
      </Dropdown.Item>
      {/* ------------------- */}
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
