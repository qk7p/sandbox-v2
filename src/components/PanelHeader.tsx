import * as React from "react";
import '../styles/components/PanelHeader.css'

export interface IPanelHeaderProps {
  header: string;
}

export function PanelHeader(props: IPanelHeaderProps) {
  const { header } = props;
  return <div className="panelHeader">
    <p>{header}</p>
    <hr className="horizontalDivider" />
  </div>;
}
