export interface IButton {
  label: string;
  textColor?: string;
  backgroundColor?: string;
  onPress?: () => Promise<void> | void;
}

export interface AlertOptions {
  title?: string;
  message?: string;
  leftButton?: IButton;
  rightButton?: IButton;
}

export interface IAlertContext {
  showAlert: (options: AlertOptions) => void;
}
