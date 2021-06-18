import PageTemplate from '../../components/common/PageTemplate';
import ExpensiveWedding from '../../components/weddings/expensive';
import ExpensiveTemplate from '../../components/weddings/expensive/common/ExpensiveTemplate';
import Company from '../../components/weddings/expensive/Company';
import Convention from '../../components/weddings/expensive/Convention';
import Event from '../../components/weddings/expensive/Event';
import ExpenseButton from '../../components/weddings/expensive/ExpenseButton';
import Hanbok from '../../components/weddings/expensive/Hanbok';
import Meal from '../../components/weddings/expensive/Meal';
import Present from '../../components/weddings/expensive/Present';
import Reserve from '../../components/weddings/expensive/Reserve';

function ExpensiveWeddingPage() {
  return (
    <PageTemplate>
      <ExpensiveTemplate>
        <ExpensiveWedding />
        <Convention />
        <Company />
        <Hanbok />
        <Event />
        <Meal />
        <Present />
        <Reserve />
        <ExpenseButton />
      </ExpensiveTemplate>
    </PageTemplate>
  );
}

export default ExpensiveWeddingPage;
