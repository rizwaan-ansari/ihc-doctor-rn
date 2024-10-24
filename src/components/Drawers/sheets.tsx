import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import WithdrawRequestDrawer from './WalletDrawers/WithdrawRequestDrawer';

 
registerSheet('withdraw-request-drawer', WithdrawRequestDrawer);
 
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'withdraw-request-drawer': SheetDefinition;
  }
}
 
export {};