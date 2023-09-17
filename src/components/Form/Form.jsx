import { fetchExchange } from 'service/exchangeAPI';

export const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { currency } = e.target.elements;
    const [amount, from, , to] = currency.value.split(' ');
    fetchExchange({ amount, from, to });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="currency" placeholder="15 USD in UAH" />
      <button type="submit">Exchange</button>
    </form>
  );
};
