export interface IModalDialogProps {
    Cancel?(): void;
    Ok?(): void;
    element: JSX.Element;
    title: string;
    okayLabel?: string;
    cancelLabel?: string;
    hideOk?: boolean;
    showDialog?: boolean;
  }