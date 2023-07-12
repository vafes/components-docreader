import { ReactElement } from "react";

export enum NoteType {
  lab = "lab",
  tip = "tip",
  note = "note",
  info = "info",
  danger = "danger",
  hotfixes = "hotfixes",
}

const Note = ({
  type,
  title,
  children,
}: {
  type?: NoteType;
  title?: string;
  children?: ReactElement;
}): ReactElement => {
  type = type ? type : NoteType.note;
  const icons: { [note in NoteType]: string } = {
    lab: "vial",
    tip: "lightbulb",
    hotfixes: "wrench",
    info: "info-circle",
    note: "exclamation-circle",
    danger: "exclamation-triangle",
  };
  return (
    <div
      className={`admonition admonition-${type} admonition-${
        title ? "column" : "row"
      }`}
    >
      <div className="admonition-heading">
        <div className="admonition-icon">icon</div>
        <h5>{title}</h5>
      </div>
      <div className="admonition-content">
        <p className="paragraph">{children}</p>
      </div>
    </div>
  );
};

export default Note;
