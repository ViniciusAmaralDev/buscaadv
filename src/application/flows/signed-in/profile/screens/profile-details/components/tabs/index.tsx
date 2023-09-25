import React, { useMemo, useState } from "react";
import { Container, HorizontalContainer, Tab } from "./styles";

export interface ITab {
  name: string;
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: ITab[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const tabLabels = useMemo(() => {
    return tabs.map(({ name, label }) => ({ name, label }));
  }, [tabs]);

  const [formattedTabs, setFormattedTabs] = useState(
    tabLabels.map((tab, index) => ({ ...tab, isActive: index === 0 }))
  );

  const activeTab = useMemo(() => {
    return formattedTabs.find((tab) => tab.isActive).name;
  }, [formattedTabs]);

  const changeTab = (label: string) => {
    setFormattedTabs((tabs) =>
      tabs.map((tab) => ({ ...tab, isActive: tab.label === label }))
    );
  };

  return (
    <Container>
      <HorizontalContainer>
        {formattedTabs.map(({ label, isActive }, index) => (
          <Tab key={index} onPress={() => changeTab(label)} isActive={isActive}>
            {label}
          </Tab>
        ))}
      </HorizontalContainer>

      {tabs.find((tab) => tab.name === activeTab).children}
    </Container>
  );
};
