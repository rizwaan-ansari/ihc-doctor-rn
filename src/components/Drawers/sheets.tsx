import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import WithdrawRequestDrawer from './WalletDrawers/WithdrawRequestDrawer';
import WithdrawRequestSeccessDrawer from './WalletDrawers/WithdrawRequestSeccessDrawer';

 
registerSheet('withdraw-request-drawer', WithdrawRequestDrawer);
registerSheet('withdraw-request-success-drawer', WithdrawRequestSeccessDrawer);
 
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'withdraw-request-drawer': SheetDefinition;
    'withdraw-request-success-drawer': SheetDefinition;
  }
}
 
export {};