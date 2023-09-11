import App from "./src/application";
import { registerRootComponent } from "expo";
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
registerRootComponent(App);
