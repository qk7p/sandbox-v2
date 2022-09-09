import "../styles/components/PageHeader.css";

export interface IPageHeader {
  pageTitle: string;
  pageDescription: string;
}

export function PageHeader(props: IPageHeader) {
  const { pageTitle, pageDescription } = props;
  return (
    <div className="pageHeader">
      <h1 className="pageTitle">{pageTitle}</h1>
      <hr className="horizontalDivider" />
      <p className="pageDescription">{pageDescription}</p>
    </div>
  );
}
