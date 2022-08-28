import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website development</td>
              <td>
                <PriceHighlight variant="income">$ 12.000,00</PriceHighlight>
              </td>
              <td>Sell</td>
              <td>04/13/2022</td>
            </tr>
            <tr>
              <td width="50%">Rent</td>
              <td>
                <PriceHighlight variant="outcome">$ -2.000,00</PriceHighlight>
              </td>
              <td>Expense</td>
              <td>04/13/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
