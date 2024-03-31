import React from "react";
import ResponseBox from "./components/ResponseBox/ResponseBox";
import NavBarUser from "./components/NavBar/NavBarUser";
import FeatureTab from "./components/FeatureTab/FeatureTab"

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Answer() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["notes"]));
  const [selectedDisplay, setSelectedDisplay] = React.useState("Language");

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  React.useEffect(() => {
    if (selectedKeys.has("notes")) {
      setSelectedDisplay("Language");
    } else {
      setSelectedDisplay(selectedValue);
    }
  }, [selectedKeys, selectedValue]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        minHeight: "100vh",
      }}
    >
      <NavBarUser />
      <h1
        style={{
          fontSize: "3em",
          fontWeight: "bold",
          paddingTop: "30px",
        }}
      >
        Notes
      </h1>
      <div style={{ paddingLeft: "900px"}}>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
              {selectedDisplay}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Language"
            variant="shadow"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <DropdownItem key="notes">Language</DropdownItem>
            <DropdownItem key="English">English</DropdownItem>
            <DropdownItem key="French">French</DropdownItem>
            <DropdownItem key="German">German</DropdownItem>
            <DropdownItem key="Spanish">Spanish</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div style={{ minWidth: "1000px", paddingTop: "20px", paddingBottom: "50px" }}>
        <ResponseBox language={selectedValue} />
      </div>
      
      <FeatureTab />
    </div>
  );
}
