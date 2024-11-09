import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySymbol',
  standalone: true  
})
export class CurrencySymbolPipe implements PipeTransform {
  transform(currency: string, amount: number): string {
    const formattedAmount = amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    if (currency === 'BRL') {
      return `R$ ${formattedAmount}`;
    }
    
    return `${currency} ${formattedAmount}`;
  }
}
